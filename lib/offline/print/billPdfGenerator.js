import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import db from "@/lib/offline/db";
import { generateQrCodePngBytes } from "./qrGenerator";
import { generateReportToken } from "@/lib/reportSecurity";

const CODE39_PATTERNS = {
  '0': '000110100', '1': '100100001', '2': '001100001', '3': '101100000',
  '4': '000110001', '5': '100110000', '6': '001110000', '7': '000100101',
  '8': '100100100', '9': '001100100', 'A': '100001001', 'B': '001001001',
  'C': '101001000', 'D': '000011001', 'E': '100011000', 'F': '001011000',
  'G': '000001101', 'H': '100001100', 'I': '001001100', 'J': '000011100',
  'K': '100000011', 'L': '001000011', 'M': '101000010', 'N': '000010011',
  'O': '100010010', 'P': '001010010', 'Q': '000000111', 'R': '100000110',
  'S': '001000110', 'T': '000010110', 'U': '110000001', 'V': '011000001',
  'W': '111000000', 'X': '010010001', 'Y': '110010000', 'Z': '011010000',
  '-': '010000101', '.': '110000100', ' ': '011000100', '$': '010101000',
  '/': '010100010', '+': '010001010', '%': '000101010', '*': '010010100'
};

function drawCode39Barcode(page, text, startX, startY, height = 28, narrowWidth = 0.8, wideWidth = 2.0) {
  const clean = String(text || "").trim().toUpperCase().replace(/[^A-Z0-9\-\.\ \$\/\+\%]/g, "");
  const fullText = `*${clean}*`;
  let currentX = startX;
  
  for (let i = 0; i < fullText.length; i++) {
    const char = fullText[i];
    const pattern = CODE39_PATTERNS[char] || CODE39_PATTERNS['-'];
    for (let j = 0; j < 9; j++) {
      const isBar = j % 2 === 0;
      const isWide = pattern[j] === '1';
      const width = isWide ? wideWidth : narrowWidth;
      
      if (isBar) {
        page.drawRectangle({
          x: currentX,
          y: startY,
          width: width,
          height: height,
          color: rgb(0, 0, 0),
        });
      }
      currentX += width;
    }
    currentX += narrowWidth; // inter-character gap
  }
  return currentX - startX;
}

const formatDate = (dateStr) => {
  if (!dateStr) return "-";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return "-";
  return d.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

function numberToWords(num) {
  if (!num || num === 0) return "Zero";
  const a = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
  ];
  const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  function g(n) {
    if (n < 20) return a[n];
    const digit = n % 10;
    return b[Math.floor(n / 10)] + (digit ? " " + a[digit] : "");
  }

  function h(n) {
    if (n >= 100) {
      return a[Math.floor(n / 100)] + " Hundred" + (n % 100 ? " and " + g(n % 100) : "");
    }
    return g(n);
  }

  let str = "";
  let temp = Math.floor(num);
  if (temp >= 100000) {
    str += h(Math.floor(temp / 100000)) + " Lakh ";
    temp %= 100000;
  }
  if (temp >= 1000) {
    str += h(Math.floor(temp / 1000)) + " Thousand ";
    temp %= 1000;
  }
  if (temp > 0) {
    str += h(temp);
  }
  return str.trim() + " Rupees";
}

/**
 * Generates client-side offline Money Receipt / Bill as a real PDF document using pdf-lib.
 * @param {string|number} identifier - regNo or registration ID
 * @returns {Promise<string>} - application/pdf Blob URL
 */
export async function generateOfflineBillPdf(identifier) {
  const regIdStr = String(identifier).trim();
  const allRegs = await db.registrations.toArray();
  let reg =
    allRegs.find((r) => String(r.regNo) === regIdStr) ||
    allRegs.find((r) => String(r.id) === regIdStr) ||
    allRegs.find((r) => String(r.labId) === regIdStr) ||
    allRegs.find((r) => String(r.barcode) === regIdStr);

  if (!reg) {
    throw new Error(`Registration record not found for: ${identifier}`);
  }

  const [allDoctors, allRegTests, allTests, allAdmins, allPdfSettings, allWorkspaces] = await Promise.all([
    db.doctors.toArray(),
    db.registrationTests.toArray(),
    db.tests.toArray(),
    db.admins.toArray(),
    db.workspacePdf.toArray(),
    db.workspaces.toArray(),
  ]);

  const refBy = allDoctors.find((d) => d.id === reg.refById) || null;
  const adminRecord = allAdmins[0] || {};
  const pdfSettings = allPdfSettings[0] || {};
  const workspace = allWorkspaces.find((w) => w.id === reg.workspaceId) || allWorkspaces[0] || {};

  const companyName = adminRecord.companyName || pdfSettings.companyName || workspace.name || "Technomed Laboratory";
  const email = adminRecord.email || workspace.email || "";
  const phoneNo = adminRecord.mobileNumber || workspace.phone || "-";
  const addr = adminRecord.address;
  const addrString = pdfSettings.labAddress || (addr
    ? [addr.address1, addr.address2, addr.city, addr.state, addr.pincode].filter(Boolean).join(", ")
    : (workspace.address || "Diagnostic & Clinical Pathology Center"));

  let matchingRegTests = allRegTests.filter(
    (rt) => rt.registrationId === reg.id || String(rt.registrationId) === String(reg.regNo)
  );
  if (matchingRegTests.length === 0 && Array.isArray(reg.tests)) {
    matchingRegTests = reg.tests;
  }

  const testsList = matchingRegTests.map((rt) => {
    const testObj = allTests.find((t) => t.id === (rt.testId || rt.id)) || rt.test || {};
    return {
      ...rt,
      test: testObj,
      name: testObj.name || rt.testName || "Diagnostic Test",
      price: rt.price !== undefined ? parseFloat(rt.price) : (testObj.price !== undefined ? parseFloat(testObj.price) : 0),
    };
  });

  const subtotal = testsList.reduce((sum, t) => sum + (parseFloat(t.price) || 0), 0);
  const collCharge = parseFloat(reg.collectionCharge || 0);
  const discAmount = parseFloat(reg.discountAmount || 0);
  const discPercent = parseFloat(reg.discountPercent || 0);
  const netAmount = subtotal + collCharge - discAmount;
  const paidAmount = parseFloat(reg.receivedAmount || 0);
  const dueAmount = parseFloat(reg.dueAmount || 0);

  // Initialize PDF Document
  const pdfDoc = await PDFDocument.create();
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const pageWidth = 595.28; // Standard A4 width in pt
  const pageHeight = 841.89; // Standard A4 height in pt
  const marginX = 36;
  const usableWidth = pageWidth - marginX * 2;

  const page = pdfDoc.addPage([pageWidth, pageHeight]);

  const textColor = rgb(0.1, 0.1, 0.1);
  const mutedColor = rgb(0.4, 0.45, 0.5);
  const darkTeal = rgb(0.06, 0.46, 0.43);
  const greenColor = rgb(0.05, 0.6, 0.25);
  const redColor = rgb(0.8, 0.1, 0.1);
  const lightGrayBg = rgb(0.96, 0.97, 0.98);
  const borderColor = rgb(0.8, 0.82, 0.85);

  let currentY = pageHeight - 40;

  // 1. Company / Lab Header (Centered)
  const labNameWidth = fontBold.widthOfTextAtSize(companyName, 17);
  page.drawText(companyName, {
    x: (pageWidth - labNameWidth) / 2,
    y: currentY,
    size: 17,
    font: fontBold,
    color: darkTeal,
  });
  currentY -= 16;

  if (addrString) {
    const addrWidth = fontRegular.widthOfTextAtSize(addrString, 9);
    page.drawText(addrString, {
      x: (pageWidth - addrWidth) / 2,
      y: currentY,
      size: 9,
      font: fontRegular,
      color: mutedColor,
    });
    currentY -= 13;
  }

  const contactLine = [email ? `Email: ${email}` : "", phoneNo !== "-" ? `Phone: ${phoneNo}` : ""].filter(Boolean).join("  |  ");
  if (contactLine) {
    const contactWidth = fontRegular.widthOfTextAtSize(contactLine, 8.5);
    page.drawText(contactLine, {
      x: (pageWidth - contactWidth) / 2,
      y: currentY,
      size: 8.5,
      font: fontRegular,
      color: mutedColor,
    });
    currentY -= 14;
  }

  // Divider Line
  page.drawLine({
    start: { x: marginX, y: currentY },
    end: { x: pageWidth - marginX, y: currentY },
    thickness: 1.5,
    color: darkTeal,
  });
  currentY -= 18;

  // Title: MONEY RECEIPT
  const titleText = "MONEY RECEIPT";
  const titleWidth = fontBold.widthOfTextAtSize(titleText, 13);
  page.drawText(titleText, {
    x: (pageWidth - titleWidth) / 2,
    y: currentY,
    size: 13,
    font: fontBold,
    color: textColor,
  });
  // Underline
  page.drawLine({
    start: { x: (pageWidth - titleWidth) / 2, y: currentY - 2 },
    end: { x: (pageWidth + titleWidth) / 2, y: currentY - 2 },
    thickness: 1,
    color: textColor,
  });
  currentY -= 20;

  // 2. Patient Details 4-Column / 2-Block Grid
  const detailsBoxHeight = 65;
  const detailsBoxY = currentY - detailsBoxHeight;

  page.drawRectangle({
    x: marginX,
    y: detailsBoxY,
    width: usableWidth,
    height: detailsBoxHeight,
    color: lightGrayBg,
    borderColor: borderColor,
    borderWidth: 0.75,
  });

  const col1X = marginX + 12;
  const col2X = marginX + usableWidth / 2 + 10;
  let rowY = currentY - 14;

  const regDateStr = formatDate(reg.date);
  const patientFullName = `${reg.title || ""} ${reg.name || ""}`.trim();
  const ageGenderStr = `${reg.age || "-"} ${reg.ageUnit || "Year"} / ${reg.gender || "-"}`;
  const addressStr = reg.city && reg.city !== "-NA-" ? reg.city : "-";
  const mobileStr = reg.mobileNo || "-";
  const doctorName = refBy?.name || "Self";

  const drawField = (label, value, xPos, yPos, valFont = fontBold) => {
    page.drawText(label, { x: xPos, y: yPos, size: 8.5, font: fontRegular, color: mutedColor });
    page.drawText(`: ${value}`, { x: xPos + 72, y: yPos, size: 8.5, font: valFont, color: textColor });
  };

  // Row 1
  drawField("Bill No", String(reg.id || "-"), col1X, rowY);
  drawField("Date", regDateStr, col2X, rowY, fontRegular);
  rowY -= 13;

  // Row 2
  drawField("Reg. No", String(reg.regNo || "-"), col1X, rowY);
  drawField("Ref. By", doctorName, col2X, rowY);
  rowY -= 13;

  // Row 3
  drawField("Patient Name", patientFullName, col1X, rowY);
  drawField("Age / Sex", ageGenderStr, col2X, rowY, fontRegular);
  rowY -= 13;

  // Row 4
  drawField("Address", addressStr, col1X, rowY, fontRegular);
  drawField("Contact No", mobileStr, col2X, rowY, fontRegular);

  currentY = detailsBoxY - 20;

  // 3. Investigations Table
  const thY = currentY;
  const thHeight = 20;

  page.drawRectangle({
    x: marginX,
    y: thY - thHeight,
    width: usableWidth,
    height: thHeight,
    color: rgb(0.92, 0.94, 0.96),
    borderColor: darkTeal,
    borderWidth: 0.75,
  });

  const slX = marginX + 10;
  const invX = marginX + 45;
  const repX = marginX + 320;
  const amtRightX = pageWidth - marginX - 10;

  page.drawText("SL", { x: slX, y: thY - 14, size: 9, font: fontBold, color: textColor });
  page.drawText("Investigation", { x: invX, y: thY - 14, size: 9, font: fontBold, color: textColor });
  page.drawText("Reporting", { x: repX, y: thY - 14, size: 9, font: fontBold, color: textColor });

  const amtHeader = "Amount (Rs.)";
  const amtHeaderW = fontBold.widthOfTextAtSize(amtHeader, 9);
  page.drawText(amtHeader, { x: amtRightX - amtHeaderW, y: thY - 14, size: 9, font: fontBold, color: textColor });

  currentY = thY - thHeight;

  // Test rows
  testsList.forEach((t, idx) => {
    const rowH = 20;
    currentY -= rowH;

    page.drawText(String(idx + 1), { x: slX, y: currentY + 6, size: 8.5, font: fontRegular, color: textColor });
    page.drawText(t.name, { x: invX, y: currentY + 6, size: 8.5, font: fontBold, color: textColor });
    page.drawText("-", { x: repX, y: currentY + 6, size: 8.5, font: fontRegular, color: mutedColor });

    const priceStr = parseFloat(t.price || 0).toFixed(2);
    const priceW = fontRegular.widthOfTextAtSize(priceStr, 8.5);
    page.drawText(priceStr, { x: amtRightX - priceW, y: currentY + 6, size: 8.5, font: fontRegular, color: textColor });

    // Row separator
    page.drawLine({
      start: { x: marginX, y: currentY },
      end: { x: pageWidth - marginX, y: currentY },
      thickness: 0.5,
      color: borderColor,
    });
  });

  // 4. Financial Calculations Summary
  const labelRightX = pageWidth - marginX - 110;
  const drawSummaryRow = (label, valStr, colorVal = textColor, isBold = false) => {
    currentY -= 17;
    const f = isBold ? fontBold : fontRegular;
    const lblW = f.widthOfTextAtSize(label, 9);
    page.drawText(label, { x: labelRightX - lblW, y: currentY + 4, size: 9, font: f, color: colorVal });

    const valW = f.widthOfTextAtSize(valStr, 9);
    page.drawText(valStr, { x: amtRightX - valW, y: currentY + 4, size: 9, font: f, color: colorVal });
  };

  drawSummaryRow("Subtotal:", `Rs. ${subtotal.toFixed(2)}`);

  if (collCharge > 0) {
    drawSummaryRow("Collection Charge:", `Rs. ${collCharge.toFixed(2)}`);
  }

  if (discAmount > 0) {
    const discLabel = discPercent > 0 ? `Discount (${discPercent}%):` : "Discount:";
    drawSummaryRow(discLabel, `-Rs. ${discAmount.toFixed(2)}`, greenColor);
  }

  // Net Total Line
  page.drawLine({
    start: { x: labelRightX - 60, y: currentY - 2 },
    end: { x: pageWidth - marginX, y: currentY - 2 },
    thickness: 1,
    color: darkTeal,
  });

  drawSummaryRow("Net Total:", `Rs. ${netAmount.toFixed(2)}`, darkTeal, true);

  page.drawLine({
    start: { x: labelRightX - 60, y: currentY - 2 },
    end: { x: pageWidth - marginX, y: currentY - 2 },
    thickness: 1,
    color: darkTeal,
  });

  drawSummaryRow("Paid Amount:", `Rs. ${paidAmount.toFixed(2)}`, greenColor, true);

  if (dueAmount > 0) {
    drawSummaryRow("Balance Due:", `Rs. ${dueAmount.toFixed(2)}`, redColor, true);
  } else {
    drawSummaryRow("Balance Due:", "Rs. 0.00", mutedColor, false);
  }

  currentY -= 20;

  // 5. Amount in Words Box & Footer
  const wordsBoxY = currentY - 32;
  page.drawRectangle({
    x: marginX,
    y: wordsBoxY,
    width: usableWidth,
    height: 32,
    color: lightGrayBg,
    borderColor: borderColor,
    borderWidth: 0.5,
  });

  const receivedWords = numberToWords(paidAmount);
  page.drawText(`Received Amount : ${receivedWords} Only  |  Mode: ${reg.paymentMode || "Cash"}`, {
    x: marginX + 10,
    y: wordsBoxY + 18,
    size: 8.5,
    font: fontBold,
    color: textColor,
  });

  const currentDateStr = new Date().toLocaleString("en-IN", { dateStyle: "short", timeStyle: "short" });
  page.drawText(`Printed By : ${companyName} @ ${currentDateStr}`, {
    x: marginX + 10,
    y: wordsBoxY + 6,
    size: 7.5,
    font: fontItalic,
    color: mutedColor,
  });

  // 6. QR Codes, Barcode & Signatory Section
  const bottomBoxY = 48;

  // Left: Vector Code 39 Barcode
  const barcodeStartX = marginX;
  const barcodeHeight = 28;
  const barcodeWidth = drawCode39Barcode(page, reg.regNo, barcodeStartX, bottomBoxY + 18, barcodeHeight, 0.75, 1.85);

  const regTextW = fontRegular.widthOfTextAtSize(reg.regNo, 8.5);
  page.drawText(reg.regNo, {
    x: barcodeStartX + Math.max(0, (barcodeWidth - regTextW) / 2),
    y: bottomBoxY + 5,
    size: 8.5,
    font: fontRegular,
    color: mutedColor,
  });

  // Center: Dual QR Codes
  const publicToken = generateReportToken(reg);
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const qrReportData = `${origin}/q?v=${encodeURIComponent(publicToken)}`;
  const qrPaymentData = `${origin}/q?v=${encodeURIComponent(publicToken)}&type=bill`;

  try {
    const qrReportBytes = await generateQrCodePngBytes(qrReportData, { width: 120, margin: 1 });
    const qrPaymentBytes = await generateQrCodePngBytes(qrPaymentData, { width: 120, margin: 1 });

    const qrReportImg = await pdfDoc.embedPng(qrReportBytes);
    const qrPaymentImg = await pdfDoc.embedPng(qrPaymentBytes);

    const qrSize = 52;
    const qr1X = marginX + Math.max(barcodeWidth + 25, 185);
    const qr2X = qr1X + qrSize + 28;

    // QR 1: Report
    page.drawImage(qrReportImg, { x: qr1X, y: bottomBoxY + 14, width: qrSize, height: qrSize });
    const repLbl = "(SCAN FOR REPORT)";
    const repLblW = fontBold.widthOfTextAtSize(repLbl, 6.5);
    page.drawText(repLbl, {
      x: qr1X + (qrSize - repLblW) / 2,
      y: bottomBoxY + 3,
      size: 6.5,
      font: fontBold,
      color: textColor,
    });

    // QR 2: Payment
    page.drawImage(qrPaymentImg, { x: qr2X, y: bottomBoxY + 14, width: qrSize, height: qrSize });
    const payLbl = "(SCAN FOR PAYMENT)";
    const payLblW = fontBold.widthOfTextAtSize(payLbl, 6.5);
    page.drawText(payLbl, {
      x: qr2X + (qrSize - payLblW) / 2,
      y: bottomBoxY + 3,
      size: 6.5,
      font: fontBold,
      color: textColor,
    });
  } catch (qrErr) {
    console.warn("[billPdfGenerator] QR generation warning:", qrErr);
  }

  // Right: Authorized Signatory
  const sigLineWidth = 135;
  const sigX = pageWidth - marginX - sigLineWidth;
  page.drawLine({
    start: { x: sigX, y: bottomBoxY + 22 },
    end: { x: pageWidth - marginX, y: bottomBoxY + 22 },
    thickness: 0.75,
    color: textColor,
  });

  const sigLabel = "(AUTHORIZED SIGNATORY)";
  const sigLabelW = fontBold.widthOfTextAtSize(sigLabel, 7.5);
  page.drawText(sigLabel, {
    x: sigX + (sigLineWidth - sigLabelW) / 2,
    y: bottomBoxY + 8,
    size: 7.5,
    font: fontBold,
    color: textColor,
  });

  // 7. Save and generate client-side blob URL
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  return URL.createObjectURL(blob);
}
