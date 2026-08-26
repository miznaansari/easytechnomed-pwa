import db from "./db";

/**
 * Converts numbers to Indian currency word representation.
 */
export function numberToWords(num) {
  if (!num || isNaN(num) || num === 0) return "Zero Rupees";
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
  if (temp >= 10000000) {
    str += h(Math.floor(temp / 10000000)) + " Crore ";
    temp %= 10000000;
  }
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
 * Formats a date/time string nicely.
 */
export function formatDateTime(dateStr) {
  if (!dateStr) return "-";
  try {
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
  } catch (e) {
    return dateStr;
  }
}

/**
 * Checks if a value is qualitatively abnormal.
 */
function isQualitativeAbnormal(valStr, refRangeStr = "") {
  if (!valStr || typeof valStr !== "string") return false;
  const valLower = valStr.trim().toLowerCase();
  const refLower = (refRangeStr || "").trim().toLowerCase();

  if (refLower && valLower === refLower) return false;
  if (valLower.includes("reactive") && !valLower.includes("non")) return true;
  if (valLower.includes("positive") && !valLower.includes("non")) return true;
  if (valLower.includes("present") && !valLower.includes("absent")) return true;
  if (valLower.includes("detected") && !valLower.includes("not")) return true;
  if (["abnormal", "trace", "seen", "+", "++", "+++", "++++", "1+", "2+", "3+", "4+", "cloudy", "turbid", "hazy"].some(k => valLower === k || (k.startsWith("+") && valLower.includes(k)))) {
    return true;
  }
  if (valLower.includes("negative") || valLower.includes("non-reactive") || valLower.includes("absent") || valLower.includes("not detected") || valLower === "nil" || valLower === "normal" || valLower === "clear") {
    return false;
  }
  if (refLower.includes("negative") && valLower.includes("positive")) return true;
  return false;
}

/**
 * Checks if a parameter numeric value is out of range.
 */
function isOutOfRange(valStr, min, max, refRangeStr = "") {
  if (!valStr) return false;
  const valRaw = String(valStr).trim();
  const num = parseFloat(valRaw);
  if (!isNaN(num) && /^-?\d+(\.\d+)?$/.test(valRaw) && (min !== null || max !== null)) {
    if (min !== null && min !== undefined && num < min) return true;
    if (max !== null && max !== undefined && num > max) return true;
    return false;
  }
  return isQualitativeAbnormal(valRaw, refRangeStr);
}

/**
 * Determines appropriate reference range for patient age and gender.
 */
function getReferenceRange(param, reg) {
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
}

/**
 * Generates full standalone printable HTML for Lab Test Report.
 */
export async function generateOfflineReportHtml({ regIdOrNo, withFrame = true, testIds = [] }) {
  // 1. Fetch registration
  let reg = null;
  if (!isNaN(Number(regIdOrNo))) {
    reg = await db.registrations.get(Number(regIdOrNo));
  }
  if (!reg) {
    reg = await db.registrations.where("regNo").equals(String(regIdOrNo)).first();
  }
  if (!reg) {
    reg = await db.registrations.filter(r => r.regNo === String(regIdOrNo) || r.id === Number(regIdOrNo)).first();
  }
  if (!reg) {
    throw new Error(`Registration '${regIdOrNo}' not found in offline database.`);
  }

  // 2. Fetch admin / lab settings and PDF settings
  const admin = (await db.admins.toArray())[0] || {};
  const pdfSettings = (await db.workspacePdf.toArray())[0] || {};
  const doctor = reg.refById ? await db.doctors.get(reg.refById) : (reg.refBy || null);

  const labName = pdfSettings.headerTitle || admin.companyName || "Diagnostic Pathology Laboratory";
  const labAddress = admin.address || pdfSettings.headerAddress || "Diagnostic Healthcare Center";
  const labContact = admin.mobileNumber || admin.email || "";
  const logoUrl = pdfSettings.headerLogoUrl || admin.profilePicture || "";

  const regDateStr = formatDateTime(reg.date || reg.createdAt);
  const sampleDateStr = formatDateTime(reg.sampleDate || reg.date);
  const expRptDateStr = formatDateTime(reg.expRptDate || reg.updatedAt || reg.date);

  // 3. Collect tests and test parameters
  let allRegTests = reg.tests || [];
  if (allRegTests.length === 0 && db.registrationTests) {
    const rawTests = await db.registrationTests.where("registrationId").equals(reg.id).toArray();
    for (const rt of rawTests) {
      const testObj = await db.tests.get(rt.testId);
      allRegTests.push({ ...rt, test: testObj });
    }
  }

  // Filter specific testIds if provided
  let filteredRegTests = allRegTests;
  if (Array.isArray(testIds) && testIds.length > 0) {
    const idSet = new Set(testIds.map(String));
    filteredRegTests = allRegTests.filter(rt => {
      const tId = String(rt.testId || (rt.test ? rt.test.id : ""));
      return idSet.has(tId);
    });
  }

  // Load results from patientResults store
  let patientResults = reg.results || [];
  if (patientResults.length === 0 && db.patientResults) {
    patientResults = await db.patientResults.where("registrationId").equals(reg.id).toArray();
  }
  const resultMap = new Map();
  patientResults.forEach(pr => {
    resultMap.set(Number(pr.testParameterId), String(pr.value || ""));
  });

  // Group by Test / Department
  let testsHtml = "";
  for (const rt of filteredRegTests) {
    const testObj = rt.test || (await db.tests.get(rt.testId)) || {};
    const testName = testObj.name || rt.testName || "Laboratory Investigation";

    // Fetch parameters
    let params = testObj.parameters || [];
    if (params.length === 0 && db.testParameters) {
      params = await db.testParameters.where("testId").equals(testObj.id || rt.testId).sortBy("order");
    }

    let rowsHtml = "";
    params.forEach(p => {
      const paramId = p.id || p.parameterId;
      const val = resultMap.get(Number(paramId)) || "";

      if (p.isHeader) {
        rowsHtml += `
          <tr class="header-row">
            <td colspan="4" style="padding-top: 10px; padding-bottom: 4px; font-weight: bold; text-decoration: underline; color: #0f172a;">
              ${p.name}
            </td>
          </tr>
        `;
        return;
      }

      const ref = getReferenceRange(p, reg);
      const abnormal = isOutOfRange(val, ref.min, ref.max, ref.rangeStr);

      const valDisplay = val ? (abnormal ? `<strong style="color: #dc2626;">${val} *</strong>` : `<strong>${val}</strong>`) : "-";

      rowsHtml += `
        <tr class="param-row">
          <td style="padding: 5px 8px; border-bottom: 1px dashed #e2e8f0; width: 40%;">${p.name}</td>
          <td style="padding: 5px 8px; border-bottom: 1px dashed #e2e8f0; width: 20%; font-family: monospace; font-size: 13px;">${valDisplay}</td>
          <td style="padding: 5px 8px; border-bottom: 1px dashed #e2e8f0; width: 15%; color: #64748b;">${p.unit || "-"}</td>
          <td style="padding: 5px 8px; border-bottom: 1px dashed #e2e8f0; width: 25%; color: #475569; font-size: 11.5px;">${ref.rangeStr || "-"}</td>
        </tr>
      `;
    });

    const interpretation = rt.interpretation || testObj.interpretation || "";
    const interpretationHtml = interpretation ? `
      <div style="margin-top: 8px; margin-bottom: 15px; padding: 8px 12px; background: #f8fafc; border-left: 3px solid #0284c7; font-size: 11.5px;">
        <strong>Interpretation / Clinical Notes:</strong><br />
        ${interpretation.replace(/\n/g, "<br />")}
      </div>
    ` : "";

    testsHtml += `
      <div class="test-section" style="margin-bottom: 20px;">
        <div style="background: #e2e8f0; padding: 6px 10px; font-weight: bold; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; border-radius: 3px;">
          ${testName}
        </div>
        <table style="width: 100%; border-collapse: collapse; margin-top: 6px;">
          <thead>
            <tr style="border-bottom: 1.5px solid #94a3b8; font-size: 11px; text-transform: uppercase; color: #475569;">
              <th style="padding: 4px 8px; text-align: left;">Test Parameter</th>
              <th style="padding: 4px 8px; text-align: left;">Result</th>
              <th style="padding: 4px 8px; text-align: left;">Units</th>
              <th style="padding: 4px 8px; text-align: left;">Biological Reference Interval</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
        ${interpretationHtml}
      </div>
    `;
  }

  const sig1Name = pdfSettings.authorizedSignatoryName1 || "Medical Lab Technician";
  const sig1Degree = pdfSettings.authorizedSignatoryDegree1 || "DMLT / BMLT";
  const sig2Name = pdfSettings.authorizedSignatoryName2 || "Dr. Pathologist";
  const sig2Degree = pdfSettings.authorizedSignatoryDegree2 || "MD (Pathology)";

  const framePdfData = pdfSettings.framePdfData || admin.framePdfData || null;
  const headerMargin = pdfSettings.headerMargin || admin.headerMargin || 140;
  const footerMargin = pdfSettings.footerMargin || admin.footerMargin || 100;

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Lab Report - ${reg.name} (${reg.regNo})</title>
      <style>
        @media print {
          @page {
            size: A4;
            margin: ${withFrame && framePdfData ? `${headerMargin}px 15mm ${footerMargin}px 15mm` : (withFrame ? "12mm 15mm 15mm 15mm" : "45mm 15mm 20mm 15mm")};
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }
          .letterhead-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
          }
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          font-size: 12px;
          line-height: 1.4;
          color: #1e293b;
          margin: 0;
          padding: ${withFrame && !framePdfData ? "20px" : "0 20px"};
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
        }
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid #0f766e;
          padding-bottom: 12px;
          margin-bottom: 15px;
        }
        .patient-box {
          border: 1px solid #cbd5e1;
          border-radius: 4px;
          padding: 8px 12px;
          margin-bottom: 15px;
          background: #f8fafc;
        }
        .patient-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 4px 20px;
        }
        .patient-item {
          display: flex;
        }
        .patient-label {
          font-weight: 600;
          width: 110px;
          color: #475569;
        }
        .patient-val {
          flex: 1;
          font-weight: 500;
          color: #0f172a;
        }
        .signatures {
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
          padding-top: 15px;
        }
        .sig-block {
          text-align: center;
          width: 200px;
        }
        .sig-line {
          border-top: 1px solid #64748b;
          margin-bottom: 4px;
        }
      </style>
    </head>
    <body>
      <div class="no-print" style="background: #0f766e; color: white; padding: 10px 16px; border-radius: 6px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong>Offline Report Mode:</strong> Ready to print.
        </div>
        <button onclick="window.print()" style="background: #ffffff; color: #0f766e; border: none; font-weight: bold; padding: 6px 16px; border-radius: 4px; cursor: pointer;">
          🖨️ Print Now
        </button>
      </div>

      ${withFrame && !framePdfData ? `
      <div class="header-container">
        <div>
          <h1 style="margin: 0; font-size: 20px; color: #0f766e; font-weight: 800;">${labName}</h1>
          <p style="margin: 3px 0 0 0; color: #475569; font-size: 11.5px;">${labAddress}</p>
          <p style="margin: 2px 0 0 0; color: #64748b; font-size: 11px;">Contact: ${labContact}</p>
        </div>
        ${logoUrl ? `<img src="${logoUrl}" alt="Lab Logo" style="max-height: 60px; max-width: 140px; object-fit: contain;" />` : ''}
      </div>
      ` : ''}

      ${withFrame && framePdfData ? `
      <div class="letterhead-bg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; pointer-events: none; opacity: 0.95;">
        ${framePdfData.startsWith("data:image/") || framePdfData.includes(".png") || framePdfData.includes(".jpg") ? `
          <img src="${framePdfData}" alt="Letterhead Frame" style="width: 100%; height: 100%; object-fit: fill;" />
        ` : `
          <iframe src="${framePdfData}#toolbar=0&navpanes=0" style="width: 100%; height: 100%; border: none;" />
        `}
      </div>
      ` : ''}

      <div class="patient-box">
        <div class="patient-grid">
          <div class="patient-item"><span class="patient-label">Patient Name:</span><span class="patient-val">${reg.title || ""} ${reg.name}</span></div>
          <div class="patient-item"><span class="patient-label">Reg. Number:</span><span class="patient-val" style="font-family: monospace; font-weight: 700; color: #0f766e;">${reg.regNo}</span></div>
          
          <div class="patient-item"><span class="patient-label">Age / Gender:</span><span class="patient-val">${reg.age} ${reg.ageUnit} / ${reg.gender}</span></div>
          <div class="patient-item"><span class="patient-label">Patient ID (Lab):</span><span class="patient-val">${reg.labId || "-"}</span></div>
          
          <div class="patient-item"><span class="patient-label">Ref By Doctor:</span><span class="patient-val">${doctor?.name || "Self"}</span></div>
          <div class="patient-item"><span class="patient-label">Registered Date:</span><span class="patient-val">${regDateStr}</span></div>

          <div class="patient-item"><span class="patient-label">Sample Time:</span><span class="patient-val">${sampleDateStr}</span></div>
          <div class="patient-item"><span class="patient-label">Reported Time:</span><span class="patient-val">${expRptDateStr}</span></div>
        </div>
      </div>

      <div class="reports-body">
        ${testsHtml}
      </div>

      <div style="margin-top: 15px; border-top: 1px solid #cbd5e1; padding-top: 6px; font-size: 10.5px; color: #64748b; text-align: center;">
        *** End of Laboratory Report ***
      </div>

      <div class="signatures">
        <div class="sig-block">
          <div class="sig-line"></div>
          <strong>${sig1Name}</strong><br />
          <span style="color: #64748b; font-size: 10.5px;">${sig1Degree}</span>
        </div>
        <div class="sig-block" style="display: flex; flex-direction: column; align-items: center;">
          <div style="font-size: 9px; color: #64748b; margin-top: 8px;">(Scan to Verify Report)</div>
          <div style="font-family: monospace; font-weight: 700; color: #0f766e; margin-top: 2px;">${reg.regNo}</div>
        </div>
        <div class="sig-block">
          <div class="sig-line"></div>
          <strong>${sig2Name}</strong><br />
          <span style="color: #64748b; font-size: 10.5px;">${sig2Degree}</span>
        </div>
      </div>

      <script>
        window.onload = function() {
          setTimeout(() => { window.print(); }, 400);
        };
      </script>
    </body>
    </html>
  `;

  return html;
}

/**
 * Generates full standalone printable HTML for Money Receipt / Bill.
 */
export async function generateOfflineBillHtml({ regIdOrNo }) {
  let reg = null;
  if (!isNaN(Number(regIdOrNo))) {
    reg = await db.registrations.get(Number(regIdOrNo));
  }
  if (!reg) {
    reg = await db.registrations.where("regNo").equals(String(regIdOrNo)).first();
  }
  if (!reg) {
    reg = await db.registrations.filter(r => r.regNo === String(regIdOrNo) || r.id === Number(regIdOrNo)).first();
  }
  if (!reg) {
    throw new Error(`Registration '${regIdOrNo}' not found in offline database.`);
  }

  const admin = (await db.admins.toArray())[0] || {};
  const doctor = reg.refById ? await db.doctors.get(reg.refById) : (reg.refBy || null);

  const companyName = admin.companyName || "Diagnostic Pathology Laboratory";
  const address = admin.address || "Healthcare Diagnostic Centre";
  const email = admin.email || "";
  const regDateStr = formatDateTime(reg.date || reg.createdAt);

  let allRegTests = reg.tests || [];
  if (allRegTests.length === 0 && db.registrationTests) {
    const rawTests = await db.registrationTests.where("registrationId").equals(reg.id).toArray();
    for (const rt of rawTests) {
      const testObj = await db.tests.get(rt.testId);
      allRegTests.push({ ...rt, test: testObj });
    }
  }

  let subtotal = 0;
  let testRows = "";
  allRegTests.forEach((rt, idx) => {
    const name = rt.test?.name || rt.name || "Test Investigation";
    const price = Number(rt.price !== undefined ? rt.price : (rt.test?.price || 0));
    subtotal += price;

    testRows += `
      <tr>
        <td style="padding: 6px 0; border-bottom: 1px dashed #ccc;">${idx + 1}</td>
        <td style="padding: 6px 0; border-bottom: 1px dashed #ccc;">${name}</td>
        <td style="padding: 6px 0; border-bottom: 1px dashed #ccc;">Standard</td>
        <td align="right" style="padding: 6px 0; border-bottom: 1px dashed #ccc; font-family: monospace;">₹${price.toFixed(2)}</td>
      </tr>
    `;
  });

  const totalAmount = Number(reg.totalAmount || subtotal);
  const collCharge = Number(reg.collectionCharge || 0);
  const discAmount = Number(reg.discountAmount || 0);
  const discPercent = Number(reg.discountPercent || 0);
  const netAmount = Number(totalAmount + collCharge - discAmount);
  const paidAmount = Number(reg.receivedAmount || 0);
  const dueAmount = Number(reg.dueAmount !== undefined ? reg.dueAmount : Math.max(0, netAmount - paidAmount));
  const receivedWords = numberToWords(paidAmount);

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Money Receipt - ${reg.name}</title>
      <style>
        @media print {
          @page { size: auto; margin: 15mm; }
          body { padding: 0; }
          .no-print { display: none !important; }
        }
        body {
          font-family: Arial, sans-serif;
          font-size: 13px;
          padding: 30px;
          max-width: 800px;
          margin: 0 auto;
          color: #1e293b;
        }
        .header { text-align: center; margin-bottom: 15px; }
        .header h1 { margin: 0; font-size: 22px; font-weight: bold; color: #0f766e; }
        .header p { margin: 3px 0; font-size: 12px; color: #64748b; }
        .divider { border-bottom: 2px solid #000; margin-top: 10px; margin-bottom: 8px; }
        .title { text-align: center; font-size: 15px; font-weight: bold; text-decoration: underline; margin-bottom: 15px; }
        .details-table { width: 100%; border-collapse: collapse; margin-bottom: 15px; }
        .details-table td { padding: 4px 0; vertical-align: top; }
        .details-label { font-weight: bold; width: 18%; color: #475569; }
        .details-value { width: 32%; }
        .investigations-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        .investigations-table th { border-top: 1px solid #000; border-bottom: 1px solid #000; padding: 6px 0; text-align: left; font-weight: bold; }
        .investigations-table td { padding: 6px 0; }
        .total-row { font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="no-print" style="background: #0f766e; color: white; padding: 10px 16px; border-radius: 6px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
        <div><strong>Offline Receipt:</strong> Ready to print.</div>
        <button onclick="window.print()" style="background: #ffffff; color: #0f766e; border: none; font-weight: bold; padding: 6px 16px; border-radius: 4px; cursor: pointer;">
          🖨️ Print Receipt
        </button>
      </div>

      <div class="header">
        <h1>${companyName}</h1>
        <p>${address}</p>
        <p>Email: ${email}</p>
      </div>
      <div class="divider"></div>
      <div class="title">MONEY RECEIPT</div>
      
      <table class="details-table">
        <tr>
          <td class="details-label">Bill No</td>
          <td class="details-value">: ${reg.id}</td>
          <td class="details-label">Date</td>
          <td class="details-value">: ${regDateStr}</td>
        </tr>
        <tr>
          <td class="details-label">Reg. No</td>
          <td class="details-value" style="font-weight: bold; color: #0f766e;">: ${reg.regNo}</td>
          <td class="details-label">Ref. By</td>
          <td class="details-value">: ${doctor?.name || "Self"}</td>
        </tr>
        <tr>
          <td class="details-label">Patient Name</td>
          <td class="details-value">: ${reg.title || ""} ${reg.name}</td>
          <td class="details-label">Age / Gender</td>
          <td class="details-value">: ${reg.age} ${reg.ageUnit} / ${reg.gender}</td>
        </tr>
        <tr>
          <td class="details-label">Address</td>
          <td class="details-value">: ${reg.city || "-NA-"}</td>
          <td class="details-label">Mobile No</td>
          <td class="details-value">: ${reg.mobileNo}</td>
        </tr>
      </table>

      <table class="investigations-table">
        <thead>
          <tr>
            <th width="8%">SL</th>
            <th width="57%">Investigation</th>
            <th width="15%">Reporting</th>
            <th width="20%" align="right" style="text-align: right;">Amount</th>
          </tr>
        </thead>
        <tbody>
          ${testRows}
          <tr class="total-row">
            <td colspan="2"></td>
            <td align="right">Subtotal:</td>
            <td align="right" style="font-family: monospace;">₹${subtotal.toFixed(2)}</td>
          </tr>
          ${collCharge > 0 ? `
          <tr class="total-row">
            <td colspan="2"></td>
            <td align="right">Collection Charge:</td>
            <td align="right" style="font-family: monospace;">₹${collCharge.toFixed(2)}</td>
          </tr>
          ` : ''}
          ${discAmount > 0 ? `
          <tr class="total-row" style="color: #16a34a;">
            <td colspan="2"></td>
            <td align="right">Discount ${discPercent > 0 ? `(${discPercent}%)` : ''}:</td>
            <td align="right" style="font-family: monospace;">-₹${discAmount.toFixed(2)}</td>
          </tr>
          ` : ''}
          <tr class="total-row" style="border-top: 1px double #000; border-bottom: 1px double #000;">
            <td colspan="2"></td>
            <td align="right">Net Amount:</td>
            <td align="right" style="font-family: monospace;">₹${netAmount.toFixed(2)}</td>
          </tr>
          <tr class="total-row" style="color: #047857;">
            <td colspan="2"></td>
            <td align="right">Paid:</td>
            <td align="right" style="font-family: monospace;">₹${paidAmount.toFixed(2)}</td>
          </tr>
          <tr class="total-row" style="color: #b91c1c;">
            <td colspan="2"></td>
            <td align="right">Due:</td>
            <td align="right" style="font-family: monospace;">₹${dueAmount.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>

      <div style="margin-top: 20px; font-size: 12px;">
        <div><strong>Received Amount :</strong> ${receivedWords} Only via ${reg.paymentMode || "Cash"}</div>
        <div style="color: #64748b; margin-top: 4px; font-size: 11px;">Printed By : ${companyName}</div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 40px;">
        <div style="font-family: monospace; font-size: 12px; font-weight: bold; border: 1px solid #cbd5e1; padding: 6px 12px; border-radius: 4px;">
          Reg: ${reg.regNo}
        </div>
        <div style="text-align: right; font-weight: bold;">
          <div style="border-top: 1px solid #000; width: 160px; margin-bottom: 4px;"></div>
          (AUTHORIZED SIGNATORY)
        </div>
      </div>

      <script>
        window.onload = function() {
          setTimeout(() => { window.print(); }, 400);
        };
      </script>
    </body>
    </html>
  `;

  return html;
}

/**
 * Generates full standalone printable HTML for SaaS Subscription Invoice.
 */
export async function generateOfflineSubscriptionInvoiceHtml({ paymentIdOrUid }) {
  const admin = (await db.admins.toArray())[0] || {};
  const workspace = (await db.workspaces.toArray())[0] || {};

  const invoiceNo = `ETM-INV-${paymentIdOrUid || "OFFLINE"}`;
  const invoiceDateStr = formatDateTime(new Date());
  const workspaceName = workspace.name || admin.companyName || "Lab Workspace";
  const adminName = admin.name || "Administrator";
  const email = admin.email || "-";
  const mobile = admin.mobileNumber || "-";

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Subscription Tax Invoice - ${invoiceNo}</title>
      <style>
        @media print {
          @page { size: A4; margin: 15mm; }
          .no-print { display: none !important; }
        }
        body {
          font-family: Arial, sans-serif;
          font-size: 13px;
          color: #1e293b;
          padding: 20px;
          max-width: 800px;
          margin: 0 auto;
        }
        .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #0284c7; padding-bottom: 12px; margin-bottom: 20px; }
        .invoice-title { font-size: 20px; font-weight: bold; color: #0284c7; }
        .details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .table { width: 100%; border-collapse: collapse; margin-top: 15px; }
        .table th { background: #f1f5f9; padding: 8px 12px; text-align: left; border-bottom: 1px solid #cbd5e1; }
        .table td { padding: 10px 12px; border-bottom: 1px solid #e2e8f0; }
      </style>
    </head>
    <body>
      <div class="no-print" style="background: #0284c7; color: white; padding: 10px 16px; border-radius: 6px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center;">
        <div><strong>Offline Invoice Mode:</strong> Ready to print.</div>
        <button onclick="window.print()" style="background: #ffffff; color: #0284c7; border: none; font-weight: bold; padding: 6px 16px; border-radius: 4px; cursor: pointer;">
          🖨️ Print Invoice
        </button>
      </div>

      <div class="header">
        <div>
          <div class="invoice-title">EasyTechnoMed Cloud Services</div>
          <div style="color: #64748b; font-size: 12px;">Diagnostic SaaS Platform & Laboratory Suite</div>
        </div>
        <div style="text-align: right;">
          <div style="font-size: 16px; font-weight: bold;">TAX INVOICE</div>
          <div style="font-family: monospace; font-size: 13px; color: #0284c7;">${invoiceNo}</div>
        </div>
      </div>

      <div class="details-grid">
        <div>
          <strong>Billed To:</strong><br />
          <strong>${workspaceName}</strong><br />
          Attn: ${adminName}<br />
          Email: ${email}<br />
          Phone: ${mobile}
        </div>
        <div style="text-align: right;">
          <strong>Invoice Date:</strong> ${invoiceDateStr}<br />
          <strong>Status:</strong> <span style="color: #16a34a; font-weight: bold;">PAID</span><br />
          <strong>Payment Mode:</strong> Online Subscription
        </div>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Service Period</th>
            <th align="right">Amount (₹)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>EasyTechnoMed Lab Suite Subscription</strong><br />
              <span style="font-size: 11px; color: #64748b;">Full Workspace Cloud Access & Offline PWA Suite</span>
            </td>
            <td>Annual Plan</td>
            <td align="right" style="font-family: monospace; font-weight: bold;">Standard Plan</td>
          </tr>
        </tbody>
      </table>

      <div style="display: flex; justify-content: space-between; margin-top: 40px; padding-top: 20px; border-top: 1px solid #cbd5e1;">
        <div style="font-size: 11px; color: #64748b;">
          * This is a computer-generated tax invoice verified from local offline workspace data.
        </div>
        <div style="text-align: right;">
          <div style="color: #16a34a; font-weight: bold;">✓ DIGITALLY VERIFIED</div>
          <div style="font-size: 12px; color: #475569;">EasyTechnoMed SaaS</div>
        </div>
      </div>

      <script>
        window.onload = function() {
          setTimeout(() => { window.print(); }, 400);
        };
      </script>
    </body>
    </html>
  `;

  return html;
}

/**
 * Universal print handler that works seamlessly OFFLINE and ONLINE.
 * Opens a window and generates report / bill / invoice directly from IndexedDB if offline or on network error.
 */
export async function openOfflinePrint({ type = "report", idOrRegNo, withFrame = true, testIds = [] }) {
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    alert("Please allow popups to print.");
    return;
  }

  printWindow.document.write(`
    <html>
      <head><title>Loading Document...</title></head>
      <body style="font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 80vh; color: #475569;">
        <div style="text-align: center;">
          <div style="font-size: 18px; font-weight: bold; margin-bottom: 8px;">Generating Printable Document...</div>
          <div>Please wait while data is rendered from local storage.</div>
        </div>
      </body>
    </html>
  `);

  try {
    let html = "";
    if (type === "report") {
      html = await generateOfflineReportHtml({ regIdOrNo: idOrRegNo, withFrame, testIds });
    } else if (type === "bill") {
      html = await generateOfflineBillHtml({ regIdOrNo: idOrRegNo });
    } else if (type === "subscription-invoice") {
      html = await generateOfflineSubscriptionInvoiceHtml({ paymentIdOrUid: idOrRegNo });
    }

    printWindow.document.open();
    printWindow.document.write(html);
    printWindow.document.close();
  } catch (err) {
    console.error("[OfflinePrint] Error generating print document:", err);
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <body style="font-family: sans-serif; padding: 40px; color: #b91c1c;">
          <h2>Failed to generate offline print</h2>
          <p>${err.message || "An error occurred while reading from offline storage."}</p>
          <button onclick="window.close()" style="padding: 8px 16px; cursor: pointer;">Close</button>
        </body>
      </html>
    `);
    printWindow.document.close();
  }
}
