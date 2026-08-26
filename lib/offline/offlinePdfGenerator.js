import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import db from "./db";
import {
  hexToRgb,
  getFontFamilyDefinitions,
  computeColumnLayout,
  DEFAULT_COLUMNS,
} from "@/lib/pdfTheme";

const isQualitativeAbnormal = (valStr, refRangeStr = "") => {
  if (!valStr || typeof valStr !== "string") return false;
  const valLower = valStr.trim().toLowerCase();
  const refLower = (refRangeStr || "").trim().toLowerCase();

  // If matches ref exactly, it's normal
  if (refLower && valLower === refLower) return false;

  // Abnormal keywords
  if (valLower.includes("reactive") && !valLower.includes("non")) return true;
  if (valLower.includes("positive") && !valLower.includes("non")) return true;
  if (valLower.includes("present") && !valLower.includes("absent")) return true;
  if (valLower.includes("detected") && !valLower.includes("not")) return true;
  if (
    [
      "abnormal",
      "trace",
      "seen",
      "+",
      "++",
      "+++",
      "++++",
      "1+",
      "2+",
      "3+",
      "4+",
      "cloudy",
      "turbid",
      "hazy",
    ].some((k) => valLower === k || (k.startsWith("+") && valLower.includes(k)))
  ) {
    return true;
  }

  // Normal keywords
  if (
    valLower.includes("negative") ||
    valLower.includes("non-reactive") ||
    valLower.includes("non reactive") ||
    valLower.includes("nonreactive") ||
    valLower.includes("absent") ||
    valLower.includes("not detected") ||
    valLower === "nil" ||
    valLower === "normal" ||
    valLower === "clear"
  ) {
    return false;
  }

  // If normal range expects negative/absent/nil and value is different
  if (refLower.includes("negative") && valLower.includes("positive")) return true;
  if (
    (refLower.includes("non-reactive") || refLower.includes("non reactive")) &&
    valLower.includes("reactive") &&
    !valLower.includes("non")
  )
    return true;
  if ((refLower.includes("absent") || refLower.includes("nil")) && valLower.includes("present"))
    return true;

  return false;
};

const isOutOfRange = (valStr, min, max, refRangeStr = "") => {
  if (!valStr) return false;
  const valRaw = String(valStr).trim();
  const num = parseFloat(valRaw);
  if (!isNaN(num) && /^-?\d+(\.\d+)?$/.test(valRaw) && (min !== null || max !== null)) {
    if (min !== null && min !== undefined && num < min) return true;
    if (max !== null && max !== undefined && num > max) return true;
    return false;
  }
  return isQualitativeAbnormal(valRaw, refRangeStr);
};

const getReferenceRange = (param, reg) => {
  const isBaby = reg.ageUnit !== "Year" || reg.age < 12;
  if (isBaby) {
    return {
      rangeStr: param.normalRangeBaby || param.normalRangeDefault || "",
      min: param.minValBaby,
      max: param.maxValBaby,
    };
  }
  if (reg.gender === "Female") {
    return {
      rangeStr: param.normalRangeFemale || param.normalRangeDefault || "",
      min: param.minValFemale,
      max: param.maxValFemale,
    };
  }
  return {
    rangeStr: param.normalRangeMale || param.normalRangeDefault || "",
    min: param.minValMale,
    max: param.maxValMale,
  };
};

const formatDate = (dateStr) => {
  if (!dateStr) return "-";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "-";
  return d.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

/**
 * Splits text into paragraphs and word tokens supporting **bold** markdown
 */
const parseMarkdownTokens = (text) => {
  const cleanText = String(text || "")
    .replace(/[μµ]/g, "u")
    .replace(/–/g, "-")
    .replace(/—/g, "-")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'");

  const rawLines = cleanText.split("\n");
  const paragraphs = [];

  for (const rawLine of rawLines) {
    const lineTokens = [];
    const regex = /(\*\*.*?\*\*)|([^\*]+|\*)/g;
    let match;
    while ((match = regex.exec(rawLine)) !== null) {
      const chunk = match[0];
      if (chunk.startsWith("**") && chunk.endsWith("**") && chunk.length >= 4) {
        const boldContent = chunk.slice(2, -2);
        const words = boldContent.split(/(\s+)/);
        words.forEach((w) => {
          if (w) lineTokens.push({ text: w, isBold: true, isSpace: /^\s+$/.test(w) });
        });
      } else {
        const words = chunk.split(/(\s+)/);
        words.forEach((w) => {
          if (w) lineTokens.push({ text: w, isBold: false, isSpace: /^\s+$/.test(w) });
        });
      }
    }
    paragraphs.push(lineTokens);
  }
  return paragraphs;
};

/**
 * Word-wraps markdown paragraphs into lines fitting within maxWidth
 */
const layoutMarkdownLines = (paragraphs, maxWidth, fontSize, font, fontBold) => {
  const formattedLines = [];

  for (const tokens of paragraphs) {
    if (tokens.length === 0) {
      formattedLines.push([]);
      continue;
    }

    let currentLine = [];
    let currentLineWidth = 0;

    for (const token of tokens) {
      const activeFont = token.isBold ? fontBold : font;
      const tokenWidth = activeFont.widthOfTextAtSize(token.text, fontSize);

      if (currentLineWidth + tokenWidth > maxWidth && currentLine.length > 0 && !token.isSpace) {
        formattedLines.push(currentLine);
        currentLine = [];
        currentLineWidth = 0;
      }

      if (currentLine.length === 0 && token.isSpace) {
        continue;
      }

      currentLine.push({
        text: token.text,
        isBold: token.isBold,
        width: tokenWidth,
      });
      currentLineWidth += tokenWidth;
    }

    if (currentLine.length > 0) {
      formattedLines.push(currentLine);
    }
  }

  return formattedLines;
};

/**
 * Splits plain text into multiple lines fitting within maxWidth.
 */
const wrapPlainTextLines = (text, maxWidth, activeFont, fontSize) => {
  if (!text) return [];
  const clean = String(text || "")
    .replace(/[μµ]/g, "u")
    .replace(/–/g, "-")
    .replace(/—/g, "-")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'");

  const words = clean.split(/\s+/);
  const lines = [];
  let currentLine = "";

  for (const word of words) {
    if (!word) continue;
    const testLine = currentLine ? `${currentLine} ${word}` : word;
    const testWidth = activeFont.widthOfTextAtSize(testLine, fontSize);
    if (testWidth <= maxWidth) {
      currentLine = testLine;
    } else {
      if (currentLine) {
        lines.push(currentLine);
        if (activeFont.widthOfTextAtSize(word, fontSize) <= maxWidth) {
          currentLine = word;
        } else {
          let partial = "";
          for (const ch of word) {
            if (activeFont.widthOfTextAtSize(partial + ch, fontSize) <= maxWidth) {
              partial += ch;
            } else {
              if (partial) lines.push(partial);
              partial = ch;
            }
          }
          currentLine = partial;
        }
      } else {
        let partial = "";
        for (const ch of word) {
          if (activeFont.widthOfTextAtSize(partial + ch, fontSize) <= maxWidth) {
            partial += ch;
          } else {
            if (partial) lines.push(partial);
            partial = ch;
          }
        }
        currentLine = partial;
      }
    }
  }
  if (currentLine) {
    lines.push(currentLine);
  }
  return lines.length > 0 ? lines : [clean];
};

/**
 * Generates an exact, pixel-perfect Pathology Test Report PDF client-side from IndexedDB
 * @param {string|number} registrationId 
 * @param {object} options { withFrame, testIds }
 * @returns {Promise<Uint8Array>} PDF Bytes
 */
export async function generateReportPdfOffline(registrationId, options = {}) {
  // 1. Fetch registration from IndexedDB
  let reg = await db.registrations.get(registrationId);
  if (!reg) {
    const allRegs = await db.registrations.toArray();
    reg = allRegs.find(
      (r) =>
        r.id === registrationId ||
        r.regNo === String(registrationId) ||
        r.labId === String(registrationId)
    );
  }

  if (!reg) {
    throw new Error("Registration record not found in IndexedDB.");
  }

  // 2. Fetch reference data from IndexedDB
  const [cachedPdfs, doctors, allTests, allTestParams, allParams, patientResults] =
    await Promise.all([
      db.workspacePdf.toArray(),
      db.doctors.toArray(),
      db.tests.toArray(),
      db.testParameters.toArray(),
      db.parameters.toArray(),
      db.patientResults.where({ registrationId: reg.id }).toArray().catch(() => []),
    ]);

  const workspacePdf = cachedPdfs?.[0] || {};
  const refDoc = doctors.find((d) => d.id === reg.refById) || reg.refBy || { name: "Self" };
  reg.refBy = refDoc;

  // Build parameters map
  const paramDict = new Map();
  allParams.forEach((p) => paramDict.set(p.id, p));

  // Build hydrated test structure
  const hydratedTests = [];
  const rawRegTests = Array.isArray(reg.tests) ? reg.tests : [];

  for (const rt of rawRegTests) {
    const tId = rt.testId || rt.test?.id || rt.id;
    const foundTest = allTests.find((t) => t.id === tId) || rt.test || rt;
    const testParams = allTestParams
      .filter((tp) => tp.testId === tId && tp.isDeleted !== true)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      .map((tp) => {
        const pObj = paramDict.get(tp.parameterId) || tp.parameter || {};
        return {
          ...tp,
          name: pObj.name || tp.name,
          unit: tp.unit || pObj.unit,
          minValMale: pObj.minValMale,
          maxValMale: pObj.maxValMale,
          normalRangeMale: pObj.normalRangeMale,
          minValFemale: pObj.minValFemale,
          maxValFemale: pObj.maxValFemale,
          normalRangeFemale: pObj.normalRangeFemale,
          minValBaby: pObj.minValBaby,
          maxValBaby: pObj.maxValBaby,
          normalRangeBaby: pObj.normalRangeBaby,
          normalRangeDefault: pObj.normalRangeDefault,
        };
      });

    hydratedTests.push({
      ...rt,
      test: {
        ...foundTest,
        parameters: testParams.length > 0 ? testParams : (foundTest.parameters || []),
      },
    });
  }

  reg.tests = hydratedTests;

  // Hydrate results map
  const resultsMap = {};
  const flagsMap = {};
  const interpretationsMap = {};

  const existingResults = Array.isArray(reg.results) && reg.results.length > 0 ? reg.results : patientResults;
  existingResults.forEach((r) => {
    resultsMap[r.testParameterId] = r.value;
    flagsMap[r.testParameterId] = r.flag;
    interpretationsMap[r.testParameterId] = r.interpretation;
  });

  // Filter testIds if provided
  if (options.testIds && options.testIds.length > 0) {
    const allowed = new Set(options.testIds.map((id) => Number(id)));
    reg.tests = reg.tests.filter(
      (t) => allowed.has(t.testId) || allowed.has(t.test?.id) || allowed.has(t.id)
    );
  }

  // 3. Workspace PDF Theme Configuration
  const withFrame = options.withFrame ?? (workspacePdf.useFrameDefault ?? true);
  const framePdfUrl = workspacePdf.framePdfUrl;
  const framePdfBytes = workspacePdf.framePdfBytes;

  const headerMargin = workspacePdf.headerMargin ?? 140;
  const footerMargin = workspacePdf.footerMargin ?? 100;
  const leftMargin = workspacePdf.leftMargin ?? 45;
  const rightMargin = workspacePdf.rightMargin ?? 45;

  const primaryColor = hexToRgb(workspacePdf.primaryColor || "#0f766e", { r: 0.06, g: 0.46, b: 0.43 });
  const headerBgColor = hexToRgb(workspacePdf.headerBgColor || "#e2e8f0", { r: 0.88, g: 0.91, b: 0.94 });
  const headerTextColor = hexToRgb(workspacePdf.headerTextColor || "#1e293b", { r: 0.12, g: 0.16, b: 0.23 });
  const textColor = hexToRgb(workspacePdf.textColor || "#0f172a", { r: 0.09, g: 0.12, b: 0.18 });
  const mutedTextColor = hexToRgb(workspacePdf.textColor || "#0f172a", { r: 0.35, g: 0.4, b: 0.45 });
  const patientCardBgColor = hexToRgb(workspacePdf.patientCardBgColor || "#f8fafc", { r: 0.97, g: 0.98, b: 0.99 });
  const patientCardBorderColor = hexToRgb(workspacePdf.patientCardBorderColor || "#e2e8f0", { r: 0.85, g: 0.88, b: 0.92 });
  const tableRowBorderColor = hexToRgb(workspacePdf.tableRowBorderColor || "#e2e8f0", { r: 0.88, g: 0.91, b: 0.94 });
  const departmentTextColor = hexToRgb(workspacePdf.departmentTextColor || "#ffffff", { r: 1, g: 1, b: 1 });

  const fontFamily = workspacePdf.fontFamily || "Helvetica";
  const headerFontSize = workspacePdf.headerFontSize ?? 9.0;
  const parameterFontSize = workspacePdf.parameterFontSize ?? 8.5;
  const patientInfoFontSize = workspacePdf.patientInfoFontSize ?? 9.0;
  const departmentFontSize = workspacePdf.departmentFontSize ?? 9.5;
  const remarkFontSize = workspacePdf.remarkFontSize ?? 8.5;

  const columnOrderRaw = workspacePdf.columnOrder || JSON.stringify(DEFAULT_COLUMNS);
  const authorizedSignatoryName1 = workspacePdf.authorizedSignatoryName1 || "";
  const authorizedSignatoryDegree1 = workspacePdf.authorizedSignatoryDegree1 || "";
  const authorizedSignatoryName2 = workspacePdf.authorizedSignatoryName2 || "";
  const authorizedSignatoryDegree2 = workspacePdf.authorizedSignatoryDegree2 || "";

  const showSignatures = workspacePdf.showSignatures ?? true;
  const showQrCode = workspacePdf.showQrCode ?? true;
  const showDepartmentBanner = workspacePdf.showDepartmentBanner ?? true;
  const showPatientBox = workspacePdf.showPatientBox ?? true;

  // 4. Initialize PDF Document
  const pdfDoc = await PDFDocument.create();
  const fontDefs = getFontFamilyDefinitions(fontFamily);
  const font = await pdfDoc.embedFont(fontDefs.regular);
  const fontBold = await pdfDoc.embedFont(fontDefs.bold);
  const fontOblique = await pdfDoc.embedFont(fontDefs.oblique);

  // Embed frame template if available
  let framePdfDoc = null;
  if (withFrame) {
    if (framePdfBytes && framePdfBytes.length > 0) {
      try {
        framePdfDoc = await PDFDocument.load(framePdfBytes);
      } catch (e) {
        console.warn("[offlinePdf] Failed to parse local framePdfBytes:", e);
      }
    } else if (framePdfUrl && typeof fetch !== "undefined") {
      try {
        const frameRes = await fetch(framePdfUrl);
        if (frameRes.ok) {
          const b = await frameRes.arrayBuffer();
          framePdfDoc = await PDFDocument.load(b);
        }
      } catch (e) {
        console.warn("[offlinePdf] Failed to fetch framePdfUrl:", e);
      }
    }
  }

  const pageWidth = 595.27; // A4 Width
  const pageHeight = 842.89; // A4 Height
  const contentWidth = pageWidth - leftMargin - rightMargin;

  let currentPage = null;
  let pageCount = 0;

  const addNewPage = async () => {
    pageCount++;
    if (framePdfDoc && framePdfDoc.getPageCount() > 0) {
      const [copiedPage] = await pdfDoc.copyPages(framePdfDoc, [0]);
      currentPage = pdfDoc.addPage(copiedPage);
    } else {
      currentPage = pdfDoc.addPage([pageWidth, pageHeight]);
      if (!withFrame) {
        drawDefaultHeaderFooter(currentPage);
      }
    }
    return currentPage;
  };

  const drawDefaultHeaderFooter = (page) => {
    page.drawText("Report generated by PathLab System (Offline Mode). All rights reserved.", {
      x: leftMargin,
      y: 40,
      size: 8,
      font: font,
      color: rgb(0.4, 0.45, 0.5),
    });
    page.drawLine({
      start: { x: leftMargin, y: 55 },
      end: { x: pageWidth - rightMargin, y: 55 },
      thickness: 0.5,
      color: rgb(0.8, 0.8, 0.8),
    });
  };

  const drawText = (page, text, x, y, size = 9, isBold = false, color = textColor, customFont = null) => {
    let cleanText = String(text || "")
      .replace(/[μµ]/g, "u")
      .replace(/–/g, "-")
      .replace(/—/g, "-")
      .replace(/[“”]/g, '"')
      .replace(/[‘’]/g, "'");
    const chosenFont = customFont || (isBold ? fontBold : font);
    page.drawText(cleanText, {
      x,
      y,
      size,
      font: chosenFont,
      color,
    });
  };

  const columnsLayout = computeColumnLayout(columnOrderRaw, leftMargin, contentWidth);

  // Helper to draw Patient Demographics Box
  const drawPatientDemographics = (page) => {
    if (!showPatientBox) {
      return pageHeight - headerMargin - 15;
    }

    const topY = pageHeight - headerMargin - 15;
    const boxHeight = 72;

    page.drawRectangle({
      x: leftMargin,
      y: topY - boxHeight,
      width: contentWidth,
      height: boxHeight,
      borderColor: patientCardBorderColor,
      borderWidth: 1,
      color: patientCardBgColor,
    });

    const col1X = leftMargin + 12;
    const col2X = leftMargin + contentWidth / 2 + 8;
    const labelW = 75;
    const reportedDate = reg.reportedAt || (reg.status === "Completed" ? reg.updatedAt : null);

    // Left Column
    drawText(page, `Patient Name:`, col1X, topY - 15, patientInfoFontSize, true, textColor);
    drawText(page, `${reg.title || ""} ${reg.name || reg.patientName || ""}`, col1X + labelW, topY - 15, patientInfoFontSize, false, textColor);

    drawText(page, `Age / Gender:`, col1X, topY - 30, patientInfoFontSize, true, textColor);
    drawText(
      page,
      `${reg.age ? (reg.age % 1 === 0 ? reg.age : Number(reg.age).toFixed(1)) : "-"} ${reg.ageUnit || "Yrs"} / ${reg.gender || "-"}`,
      col1X + labelW,
      topY - 30,
      patientInfoFontSize,
      false,
      textColor
    );

    drawText(page, `Ref. Doctor:`, col1X, topY - 45, patientInfoFontSize, true, textColor);
    drawText(page, `${reg.refBy?.name || "Self"}`, col1X + labelW, topY - 45, patientInfoFontSize, false, textColor);

    // Right Column
    drawText(page, `Reg. No:`, col2X, topY - 15, patientInfoFontSize, true, textColor);
    drawText(page, `${reg.regNo || reg.id || "—"}`, col2X + labelW, topY - 15, patientInfoFontSize, false, textColor);

    drawText(page, `Registered On:`, col2X, topY - 30, patientInfoFontSize, true, textColor);
    drawText(page, `${formatDate(reg.date || reg.createdAt)}`, col2X + labelW, topY - 30, patientInfoFontSize, false, textColor);

    drawText(page, `Reported On:`, col2X, topY - 45, patientInfoFontSize, true, textColor);
    drawText(page, `${reportedDate ? formatDate(reportedDate) : "—"}`, col2X + labelW, topY - 45, patientInfoFontSize, false, textColor);

    drawText(page, `Report Status:`, col2X, topY - 60, patientInfoFontSize, true, textColor);
    drawText(
      page,
      `${reg.status || "Completed"}`,
      col2X + labelW,
      topY - 60,
      patientInfoFontSize,
      true,
      reg.status === "Completed" ? rgb(0.06, 0.46, 0.23) : rgb(0.72, 0.44, 0.05)
    );

    return topY - boxHeight - 12;
  };

  // Helper to draw Department Header Banner
  const drawDepartmentHeader = (page, y, departmentName, isContinued = false) => {
    if (!showDepartmentBanner) {
      return y;
    }

    const barHeight = 20;
    page.drawRectangle({
      x: leftMargin,
      y: y - barHeight,
      width: contentWidth,
      height: barHeight,
      color: primaryColor,
    });

    const titleText = isContinued
      ? `DEPARTMENT: ${String(departmentName || "GENERAL PATHOLOGY").toUpperCase()} (Continued)`
      : `DEPARTMENT: ${String(departmentName || "GENERAL PATHOLOGY").toUpperCase()}`;

    drawText(page, titleText, leftMargin + 10, y - 14, departmentFontSize, true, departmentTextColor);
    return y - barHeight - 8;
  };

  // Helper to draw Table Header
  const drawTableHeader = (page, y) => {
    const thHeight = 20;
    page.drawRectangle({
      x: leftMargin,
      y: y - thHeight,
      width: contentWidth,
      height: thHeight,
      color: headerBgColor,
    });

    for (const col of columnsLayout) {
      let textX = col.x + 4;
      const textWidth = fontBold.widthOfTextAtSize(col.label, headerFontSize);
      if (col.align === "center") {
        textX = col.x + (col.width - textWidth) / 2;
      } else if (col.align === "right") {
        textX = col.x + col.width - textWidth - 4;
      }
      drawText(page, col.label, Math.max(col.x + 2, textX), y - 14, headerFontSize, true, headerTextColor);
    }

    page.drawLine({
      start: { x: leftMargin, y: y - thHeight - 1 },
      end: { x: pageWidth - rightMargin, y: y - thHeight - 1 },
      thickness: 0.8,
      color: tableRowBorderColor,
    });

    return y - thHeight - 4;
  };

  // Group tests by department
  const departmentGroups = [];
  const deptMap = new Map();

  if (reg.tests && reg.tests.length > 0) {
    for (const regTest of reg.tests) {
      const dept = regTest.test?.department;
      const deptId = dept?.id || "general";
      const deptName = dept?.name || "General Pathology";

      if (!deptMap.has(deptId)) {
        const group = {
          id: deptId,
          name: deptName,
          tests: [],
        };
        deptMap.set(deptId, group);
        departmentGroups.push(group);
      }
      deptMap.get(deptId).tests.push(regTest);
    }
  }

  // Department Priority
  const getDepartmentPriority = (name) => {
    const norm = String(name || "").toUpperCase().trim();
    if (norm.includes("HAEMATOLOGY") || norm.includes("HEMATOLOGY")) return 1;
    if (norm.includes("BIOCHEMISTRY")) return 2;
    return 3;
  };

  departmentGroups.sort((a, b) => {
    const prioA = getDepartmentPriority(a.name);
    const prioB = getDepartmentPriority(b.name);
    if (prioA !== prioB) return prioA - prioB;
    return (a.name || "").localeCompare(b.name || "");
  });

  const isCbcTest = (testName, testCode) => {
    const name = String(testName || "").toUpperCase().trim();
    const code = String(testCode || "").toUpperCase().trim();
    if (code === "CBC" || code.startsWith("CBC")) return true;
    if (name.includes("CBC")) return true;
    if (name.includes("COMPLETE BLOOD COUNT")) return true;
    if (name.includes("COMPLETE BLOOD PICTURE")) return true;
    if (name.includes("COMPLETE HEMOGRAM") || name.includes("COMPLETE HAEMOGRAM")) return true;
    if (name.includes("HAEMOGRAM") || name.includes("HEMOGRAM")) return true;
    return false;
  };

  departmentGroups.forEach((group) => {
    group.tests.sort((a, b) => {
      const aIsCbc = isCbcTest(a.test?.name, a.test?.code);
      const bIsCbc = isCbcTest(b.test?.name, b.test?.code);
      if (aIsCbc && !bIsCbc) return -1;
      if (!aIsCbc && bIsCbc) return 1;
      return 0;
    });
  });

  let tableActiveY = pageHeight - headerMargin - 15;

  if (departmentGroups.length === 0) {
    await addNewPage();
    tableActiveY = drawPatientDemographics(currentPage);
  }

  for (let dIdx = 0; dIdx < departmentGroups.length; dIdx++) {
    const deptGroup = departmentGroups[dIdx];
    await addNewPage();
    let currentY = drawPatientDemographics(currentPage);
    currentY = drawDepartmentHeader(currentPage, currentY, deptGroup.name, false);
    tableActiveY = drawTableHeader(currentPage, currentY);

    for (const regTest of deptGroup.tests) {
      const test = regTest.test;
      const params = test.parameters || [];

      if (tableActiveY < footerMargin + 50) {
        await addNewPage();
        let pageTopY = drawPatientDemographics(currentPage);
        pageTopY = drawDepartmentHeader(currentPage, pageTopY, deptGroup.name, true);
        tableActiveY = drawTableHeader(currentPage, pageTopY);
      }

      currentPage.drawRectangle({
        x: leftMargin,
        y: tableActiveY - 20,
        width: contentWidth,
        height: 18,
        color: rgb(0.96, 0.97, 0.98),
      });
      drawText(currentPage, `${test.name}`, leftMargin + 10, tableActiveY - 13, parameterFontSize + 0.5, true, primaryColor);
      tableActiveY -= 20;

      const sectionsMap = {};
      const sectionOrder = [];
      params.forEach((param) => {
        const sec = param.section || "Default";
        if (!sectionsMap[sec]) {
          sectionsMap[sec] = [];
          sectionOrder.push(sec);
        }
        sectionsMap[sec].push(param);
      });

      for (const secName of sectionOrder) {
        const sectionParams = sectionsMap[secName];

        if (secName !== "Default") {
          if (tableActiveY < footerMargin + 35) {
            await addNewPage();
            let pageTopY = drawPatientDemographics(currentPage);
            pageTopY = drawDepartmentHeader(currentPage, pageTopY, deptGroup.name, true);
            tableActiveY = drawTableHeader(currentPage, pageTopY);
          }

          currentPage.drawLine({
            start: { x: leftMargin, y: tableActiveY },
            end: { x: pageWidth - rightMargin, y: tableActiveY },
            thickness: 0.3,
            color: tableRowBorderColor,
          });
          drawText(currentPage, secName.toUpperCase(), leftMargin + 10, tableActiveY - 14, parameterFontSize - 0.5, true, mutedTextColor);
          tableActiveY -= 18;
        }

        // Draw individual data rows
        const drawParamRow = async (param, indented, serialNo = "") => {
          const rawVal = resultsMap[param.id];
          const val = rawVal ?? "";
          const flag = flagsMap[param.id];
          const interpretation = interpretationsMap[param.id];
          const ref = getReferenceRange(param, reg);

          if (rawVal === null || rawVal === undefined || val === "" || val === "-") return;

          const displayName = indented ? `  -  ${param.name}` : param.name;
          const paramCol = columnsLayout.find((c) => c.id === "parameter") || columnsLayout[0];
          const xIndent = indented ? 6 : 0;
          const paramMaxWidth = paramCol.width - 8 - xIndent;
          const paramLines = wrapPlainTextLines(displayName, paramMaxWidth, font, parameterFontSize);
          const numLines = Math.max(1, paramLines.length);
          const lineSpacing = 11;
          const rowHeight = 20 + (numLines - 1) * lineSpacing;

          if (tableActiveY - rowHeight < footerMargin + 25) {
            await addNewPage();
            let pageTopY = drawPatientDemographics(currentPage);
            pageTopY = drawDepartmentHeader(currentPage, pageTopY, deptGroup.name, true);
            tableActiveY = drawTableHeader(currentPage, pageTopY);
            currentPage.drawRectangle({
              x: leftMargin,
              y: tableActiveY - 20,
              width: contentWidth,
              height: 18,
              color: rgb(0.96, 0.97, 0.98),
            });
            drawText(currentPage, `${test.name} - Continued`, leftMargin + 10, tableActiveY - 13, parameterFontSize + 0.5, true, primaryColor);
            tableActiveY -= 20;
          }

          currentPage.drawLine({
            start: { x: leftMargin, y: tableActiveY },
            end: { x: pageWidth - rightMargin, y: tableActiveY },
            thickness: 0.3,
            color: tableRowBorderColor,
          });

          const isAbnormal = flag ? flag !== "Normal" : isOutOfRange(val, ref.min, ref.max, ref.rangeStr);
          const resultColor = isAbnormal ? rgb(0.85, 0.12, 0.12) : textColor;

          let formattedVal = val;
          const isNumeric = (param.valueType || "NUMERIC") === "NUMERIC";
          if (val !== "" && isNumeric && /^-?\d+(\.\d+)?$/.test(String(val).trim())) {
            const num = parseFloat(val);
            if (!isNaN(num)) formattedVal = num.toFixed(param.decimalPlace ?? 2);
          }

          let displayVal = formattedVal;
          if (flag && flag !== "Normal" && val !== "") {
            const abbrs = {
              Low: "L",
              High: "H",
              "Critical Low": "CL*",
              "Critical High": "CH*",
              "Borderline Low": "BL",
              "Borderline High": "BH",
            };
            if (abbrs[flag]) displayVal = `${formattedVal} (${abbrs[flag]})`;
          }

          const unitText =
            param.unit && param.unit !== "-" && param.unit !== "null" && param.unit !== "undefined"
              ? String(param.unit).trim()
              : "";

          for (const col of columnsLayout) {
            let cellText = "";
            let isBoldCell = false;
            let cellColor = textColor;

            if (col.id === "sNo") {
              cellText = serialNo ? String(serialNo) : "";
              cellColor = indented ? mutedTextColor : textColor;
              isBoldCell = !indented;
            } else if (col.id === "parameter") {
              // Handled below
            } else if (col.id === "value") {
              cellText = displayVal || "-";
              cellColor = resultColor;
              isBoldCell = isAbnormal;
            } else if (col.id === "unit") {
              cellText = unitText;
              cellColor = mutedTextColor;
            } else if (col.id === "range") {
              const rawRange = ref.rangeStr || "";
              cellText = /positive|negative|\+ve|-ve/i.test(rawRange) ? "" : rawRange;
              cellColor = textColor;
            }

            if (col.id === "parameter") {
              let currentLineY = tableActiveY - 14;
              for (const pLine of paramLines) {
                drawText(currentPage, pLine, col.x + 4 + xIndent, currentLineY, parameterFontSize, false, textColor);
                currentLineY -= lineSpacing;
              }
            } else {
              const activeFont = isBoldCell ? fontBold : font;
              let textX = col.x + 4;
              const textWidth = activeFont.widthOfTextAtSize(cellText, parameterFontSize);

              if (col.align === "center") {
                textX = col.x + (col.width - textWidth) / 2;
              } else if (col.align === "right") {
                textX = col.x + col.width - textWidth - 4;
              }

              drawText(currentPage, cellText, textX, tableActiveY - 14, parameterFontSize, isBoldCell, cellColor);
            }
          }

          tableActiveY -= rowHeight;

          if (interpretation) {
            if (tableActiveY < footerMargin + 25) {
              await addNewPage();
              let pageTopY = drawPatientDemographics(currentPage);
              pageTopY = drawDepartmentHeader(currentPage, pageTopY, deptGroup.name, true);
              tableActiveY = drawTableHeader(currentPage, pageTopY);
            }
            const paramCol = columnsLayout.find((c) => c.id === "parameter") || columnsLayout[0];
            drawText(currentPage, `* Note: ${interpretation}`, paramCol.x + (indented ? 12 : 4), tableActiveY - 12, 7.5, false, mutedTextColor);
            tableActiveY -= 15;
          }
        };

        let mainCounter = 0;
        for (const p of sectionParams) {
          const v = resultsMap[p.id];
          if (v !== null && v !== undefined && v !== "" && v !== "-") {
            mainCounter++;
            await drawParamRow(p, false, `${mainCounter}`);
          }
        }
      }

      // Clinical Interpretation Box
      if (regTest.interpretation) {
        if (tableActiveY < footerMargin + 55) {
          await addNewPage();
          let pageTopY = drawPatientDemographics(currentPage);
          pageTopY = drawDepartmentHeader(currentPage, pageTopY, deptGroup.name, true);
          tableActiveY = drawTableHeader(currentPage, pageTopY);
        }

        currentPage.drawRectangle({
          x: leftMargin,
          y: tableActiveY - 35,
          width: contentWidth,
          height: 30,
          color: patientCardBgColor,
          borderColor: patientCardBorderColor,
          borderWidth: 0.5,
        });

        drawText(currentPage, "Clinical Interpretation & Comments:", leftMargin + 10, tableActiveY - 11, remarkFontSize - 0.5, true, primaryColor);
        drawText(currentPage, regTest.interpretation, leftMargin + 10, tableActiveY - 23, remarkFontSize - 1, false, textColor);
        tableActiveY -= 45;
      }

      tableActiveY -= 10;
    }
  }

  // 5. Remarks & Signatures
  if (tableActiveY < footerMargin + 120) {
    await addNewPage();
    tableActiveY = drawPatientDemographics(currentPage);
  }

  if (reg.remark && reg.remark.trim()) {
    const lineHeight = 11.5;
    const boxPaddingX = 10;
    const boxPaddingY = 8;
    const titleHeight = 14;
    const maxTextWidth = contentWidth - boxPaddingX * 2;

    const paragraphs = parseMarkdownTokens(reg.remark.trim());
    const wrappedLines = layoutMarkdownLines(paragraphs, maxTextWidth, remarkFontSize, font, fontBold);

    const textBlockHeight = wrappedLines.length * lineHeight;
    const totalBoxHeight = titleHeight + textBlockHeight + boxPaddingY * 2;

    if (tableActiveY - totalBoxHeight < footerMargin + 80) {
      await addNewPage();
      tableActiveY = drawPatientDemographics(currentPage);
    }

    const boxTopY = tableActiveY - 5;
    const boxBottomY = boxTopY - totalBoxHeight;

    currentPage.drawRectangle({
      x: leftMargin,
      y: boxBottomY,
      width: contentWidth,
      height: totalBoxHeight,
      borderColor: patientCardBorderColor,
      borderWidth: 0.5,
      color: patientCardBgColor,
    });

    let textCursorY = boxTopY - boxPaddingY - 4;
    drawText(currentPage, "Report Remarks / Summary Note:", leftMargin + boxPaddingX, textCursorY, remarkFontSize, true, primaryColor);
    textCursorY -= lineHeight + 2;

    for (const line of wrappedLines) {
      let textCursorX = leftMargin + boxPaddingX;
      for (const segment of line) {
        currentPage.drawText(segment.text, {
          x: textCursorX,
          y: textCursorY,
          size: remarkFontSize,
          font: segment.isBold ? fontBold : font,
          color: textColor,
        });
        textCursorX += segment.width;
      }
      textCursorY -= lineHeight;
    }

    tableActiveY = boxBottomY - 15;
  }

  if (tableActiveY < footerMargin + 80) {
    await addNewPage();
    tableActiveY = drawPatientDemographics(currentPage);
  }

  // Pathologist Signatures
  if (showSignatures) {
    const sigY = tableActiveY - 50;
    const hasSig1 = !!(authorizedSignatoryName1 && authorizedSignatoryName1.trim());
    const hasSig2 = !!(authorizedSignatoryName2 && authorizedSignatoryName2.trim());

    if (hasSig1) {
      currentPage.drawLine({
        start: { x: leftMargin + 15, y: sigY + 12 },
        end: { x: leftMargin + 155, y: sigY + 12 },
        thickness: 0.5,
        color: rgb(0.6, 0.6, 0.6),
      });
      drawText(currentPage, authorizedSignatoryName1, leftMargin + 15, sigY, parameterFontSize + 0.5, true, textColor);
      if (authorizedSignatoryDegree1) {
        drawText(currentPage, authorizedSignatoryDegree1, leftMargin + 15, sigY - 12, parameterFontSize - 0.5, false, mutedTextColor);
      }
    }

    if (hasSig2) {
      const sig2X = pageWidth - rightMargin - 155;
      currentPage.drawLine({
        start: { x: sig2X, y: sigY + 12 },
        end: { x: sig2X + 140, y: sigY + 12 },
        thickness: 0.5,
        color: rgb(0.6, 0.6, 0.6),
      });
      drawText(currentPage, authorizedSignatoryName2, sig2X, sigY, parameterFontSize + 0.5, true, textColor);
      if (authorizedSignatoryDegree2) {
        drawText(currentPage, authorizedSignatoryDegree2, sig2X, sigY - 12, parameterFontSize - 0.5, false, mutedTextColor);
      }
    }
  }

  return await pdfDoc.save();
}
