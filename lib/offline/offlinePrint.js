import db from "./db";

function formatDate(dateStr) {
  if (!dateStr) return "-";
  const d = new Date(dateStr);
  return d.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

function numberToWords(num) {
  if (!num || num === 0) return "Zero Rupees Only";
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
  return str.trim() + " Rupees Only";
}

/**
 * Client-Side Offline Bill / Money Receipt Printer
 */
export async function printBillOffline(regId) {
  try {
    let reg = await db.registrations.get(regId);
    if (!reg) {
      const allRegs = await db.registrations.toArray();
      reg = allRegs.find((r) => r.id === regId || r.regNo === String(regId) || r.labId === String(regId));
    }

    if (!reg) {
      alert("Registration record not found in local IndexedDB.");
      return;
    }

    const [admins, workspaces, doctors, tests] = await Promise.all([
      db.admins.toArray(),
      db.workspaces.toArray(),
      db.doctors.toArray(),
      db.tests.toArray(),
    ]);

    const admin = admins?.[0] || {};
    const labName = admin.companyName || workspaces?.[0]?.name || "Pathology & Diagnostic Centre";
    const refDoc = doctors.find((d) => d.id === reg.refById) || reg.refBy || { name: "Self" };
    const regTests = Array.isArray(reg.tests) ? reg.tests : [];

    const totalAmount = Number(reg.totalAmount || reg.netAmount || 0);
    const paidAmount = Number(reg.paidAmount || reg.advanceAmount || 0);
    const dueAmount = Math.max(0, totalAmount - paidAmount);

    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Please allow popups to print.");
      return;
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Money Receipt - ${reg.regNo || reg.id}</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 24px; color: #1e293b; background: #fff; }
          .receipt-box { max-width: 750px; margin: 0 auto; border: 1px solid #cbd5e1; border-radius: 8px; padding: 24px; }
          .header { text-align: center; border-bottom: 2px solid #0f766e; padding-bottom: 12px; margin-bottom: 16px; }
          .header h1 { margin: 0 0 4px 0; color: #0f766e; font-size: 22px; }
          .header p { margin: 0; font-size: 12px; color: #64748b; }
          .title-tag { display: inline-block; background: #0f766e; color: #fff; padding: 4px 12px; border-radius: 4px; font-weight: 700; font-size: 13px; margin-top: 8px; text-transform: uppercase; }
          .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 13px; margin-bottom: 16px; background: #f8fafc; padding: 12px; border-radius: 6px; }
          .info-row { display: flex; justify-content: space-between; }
          .info-label { font-weight: 600; color: #475569; }
          .info-val { font-weight: 700; color: #0f172a; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 16px; font-size: 13px; }
          th { background: #f1f5f9; color: #334155; font-weight: 700; text-align: left; padding: 8px; border-bottom: 2px solid #cbd5e1; }
          td { padding: 8px; border-bottom: 1px solid #e2e8f0; }
          .text-right { text-align: right; }
          .totals-box { margin-left: auto; width: 280px; font-size: 13px; margin-bottom: 16px; }
          .totals-row { display: flex; justify-content: space-between; padding: 4px 0; }
          .totals-row.grand { font-size: 15px; font-weight: 800; border-top: 2px solid #0f766e; padding-top: 6px; color: #0f766e; }
          .words { font-size: 12px; font-style: italic; color: #475569; margin-bottom: 24px; padding: 8px; background: #f8fafc; border-radius: 4px; }
          .footer-sign { display: flex; justify-content: space-between; margin-top: 40px; font-size: 12px; color: #64748b; }
          .sign-line { border-top: 1px dashed #94a3b8; width: 160px; text-align: center; padding-top: 4px; }
          @media print {
            body { padding: 0; }
            .receipt-box { border: none; padding: 0; width: 100%; max-width: 100%; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="no-print" style="text-align:center;margin-bottom:16px;">
          <button onclick="window.print()" style="background:#0f766e;color:#fff;border:none;padding:8px 20px;border-radius:6px;font-weight:bold;cursor:pointer;font-size:14px;">🖨️ Print Receipt</button>
        </div>
        <div class="receipt-box">
          <div class="header">
            <h1>${labName}</h1>
            <p>Smart Diagnostic & Pathology Management</p>
            <div class="title-tag">Money Receipt</div>
          </div>
          <div class="info-grid">
            <div class="info-row"><span class="info-label">Reg No:</span><span class="info-val">${reg.regNo || reg.id}</span></div>
            <div class="info-row"><span class="info-label">Date:</span><span class="info-val">${formatDate(reg.date || reg.createdAt)}</span></div>
            <div class="info-row"><span class="info-label">Patient Name:</span><span class="info-val">${reg.patientTitle ? reg.patientTitle + " " : ""}${reg.patientName || "-"}</span></div>
            <div class="info-row"><span class="info-label">Age / Gender:</span><span class="info-val">${reg.age || "-"} ${reg.ageUnit || "Yrs"} / ${reg.gender || "-"}</span></div>
            <div class="info-row"><span class="info-label">Mobile:</span><span class="info-val">${reg.mobileNumber || "-"}</span></div>
            <div class="info-row"><span class="info-label">Ref By Dr:</span><span class="info-val">${refDoc.name || "Self"}</span></div>
          </div>

          <table>
            <thead>
              <tr>
                <th style="width:40px;">#</th>
                <th>Test / Investigation Name</th>
                <th class="text-right" style="width:100px;">Price (₹)</th>
              </tr>
            </thead>
            <tbody>
              ${regTests.map((t, idx) => `
                <tr>
                  <td>${idx + 1}</td>
                  <td><strong>${t.test?.name || t.name || "Test"}</strong></td>
                  <td class="text-right">₹${Number(t.price || t.test?.price || 0).toFixed(2)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>

          <div class="totals-box">
            <div class="totals-row"><span>Total Amount:</span><strong>₹${totalAmount.toFixed(2)}</strong></div>
            <div class="totals-row"><span style="color:#0f766e;">Paid Amount:</span><strong style="color:#0f766e;">₹${paidAmount.toFixed(2)}</strong></div>
            <div class="totals-row grand"><span>Due Balance:</span><span>₹${dueAmount.toFixed(2)}</span></div>
          </div>

          <div class="words"><strong>In Words:</strong> ${numberToWords(paidAmount)}</div>

          <div class="footer-sign">
            <div>Thank you for choosing ${labName}</div>
            <div class="sign-line">Authorized Signatory</div>
          </div>
        </div>
        <script>
          window.onload = function() { window.print(); };
        </script>
      </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  } catch (err) {
    console.error("Offline Bill Print Error:", err);
    alert("Failed to generate offline print: " + err.message);
  }
}

/**
 * Client-Side Offline Medical Test Report Printer
 */
export async function printReportOffline(regId, options = {}) {
  try {
    const { withFrame = true, testIds = [] } = options;

    let reg = await db.registrations.get(regId);
    if (!reg) {
      const allRegs = await db.registrations.toArray();
      reg = allRegs.find((r) => r.id === regId || r.regNo === String(regId) || r.labId === String(regId));
    }

    if (!reg) {
      alert("Registration record not found in local IndexedDB.");
      return;
    }

    const [admins, workspaces, doctors, allTests, allParams] = await Promise.all([
      db.admins.toArray(),
      db.workspaces.toArray(),
      db.doctors.toArray(),
      db.tests.toArray(),
      db.testParameters.toArray(),
    ]);

    const admin = admins?.[0] || {};
    const labName = admin.companyName || workspaces?.[0]?.name || "EasyTechnoMed Pathology";
    const refDoc = doctors.find((d) => d.id === reg.refById) || reg.refBy || { name: "Self" };

    // Filter tests if specified
    let testsToRender = Array.isArray(reg.tests) ? reg.tests : [];
    if (testIds && testIds.length > 0) {
      testsToRender = testsToRender.filter((t) => testIds.includes(t.testId || t.id || t.test?.id));
    }

    const paramMap = new Map();
    allParams.forEach((p) => paramMap.set(p.id, p));

    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Please allow popups to print report.");
      return;
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Report - ${reg.patientName} (${reg.regNo || reg.id})</title>
        <style>
          @page { size: A4; margin: 15mm; }
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 20px; color: #0f172a; background: #fff; font-size: 13px; line-height: 1.4; }
          .report-container { max-width: 800px; margin: 0 auto; }
          .lab-header { text-align: center; border-bottom: 2px solid #0f766e; padding-bottom: 10px; margin-bottom: 14px; }
          .lab-header h1 { margin: 0; color: #0f766e; font-size: 24px; font-weight: 800; }
          .lab-header p { margin: 2px 0 0 0; color: #64748b; font-size: 12px; }
          .patient-card { border: 1px solid #cbd5e1; border-radius: 6px; padding: 10px 14px; margin-bottom: 16px; background: #f8fafc; display: grid; grid-template-columns: 1fr 1fr; gap: 6px 20px; }
          .patient-row { display: flex; justify-content: space-between; }
          .patient-label { font-weight: 600; color: #475569; }
          .patient-val { font-weight: 700; color: #0f172a; }
          .dept-title { font-size: 14px; font-weight: 800; color: #0f766e; text-transform: uppercase; border-bottom: 1.5px solid #0f766e; padding-bottom: 4px; margin: 16px 0 8px 0; }
          .test-title { font-size: 13px; font-weight: 700; color: #1e293b; margin: 10px 0 4px 0; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 12px; font-size: 12px; }
          th { background: #f1f5f9; color: #334155; font-weight: 700; text-align: left; padding: 6px 8px; border-bottom: 1.5px solid #cbd5e1; }
          td { padding: 5px 8px; border-bottom: 1px solid #e2e8f0; }
          .abnormal { color: #dc2626; font-weight: 800; }
          .footer-section { margin-top: 40px; display: flex; justify-content: space-between; align-items: flex-end; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 14px; }
          .sign-box { text-align: center; width: 160px; }
          .sign-line { border-top: 1px dashed #94a3b8; margin-top: 30px; padding-top: 4px; font-weight: 600; }
          @media print {
            body { padding: 0; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="no-print" style="text-align:center;margin-bottom:16px;">
          <button onclick="window.print()" style="background:#0f766e;color:#fff;border:none;padding:8px 20px;border-radius:6px;font-weight:bold;cursor:pointer;font-size:14px;">🖨️ Print / Save PDF</button>
        </div>
        <div class="report-container">
          ${withFrame ? `
            <div class="lab-header">
              <h1>${labName}</h1>
              <p>Pathology Laboratory & Diagnostic Center</p>
            </div>
          ` : `<div style="height: 80px;"></div>`}

          <div class="patient-card">
            <div class="patient-row"><span class="patient-label">Patient Name:</span><span class="patient-val">${reg.patientTitle ? reg.patientTitle + " " : ""}${reg.patientName || "-"}</span></div>
            <div class="patient-row"><span class="patient-label">Reg / Lab No:</span><span class="patient-val">${reg.regNo || reg.id}</span></div>
            <div class="patient-row"><span class="patient-label">Age / Gender:</span><span class="patient-val">${reg.age || "-"} ${reg.ageUnit || "Yrs"} / ${reg.gender || "-"}</span></div>
            <div class="patient-row"><span class="patient-label">Date & Time:</span><span class="patient-val">${formatDate(reg.date || reg.createdAt)}</span></div>
            <div class="patient-row"><span class="patient-label">Ref By Doctor:</span><span class="patient-val">${refDoc.name || "Self"}</span></div>
            <div class="patient-row"><span class="patient-label">Sample Status:</span><span class="patient-val" style="color:#0f766e;">Collected & Verified</span></div>
          </div>

          <div class="dept-title">Diagnostic Test Results</div>

          ${testsToRender.map((t) => {
            const testName = t.test?.name || t.name || "Test";
            const params = Array.isArray(t.parameters) ? t.parameters : (t.test?.parameters || []);
            const results = Array.isArray(reg.results) ? reg.results : [];

            return `
              <div class="test-title">${testName}</div>
              <table>
                <thead>
                  <tr>
                    <th>Investigation / Parameter</th>
                    <th style="width:120px;">Observed Value</th>
                    <th style="width:80px;">Unit</th>
                    <th style="width:180px;">Biological Reference Interval</th>
                  </tr>
                </thead>
                <tbody>
                  ${params.length > 0 ? params.map((p) => {
                    const paramDef = paramMap.get(p.id || p.parameterId) || p;
                    const resItem = results.find((r) => (r.parameterId === p.id || r.parameterId === p.parameterId) && (r.testId === (t.testId || t.id)));
                    const val = resItem ? resItem.value : (p.value || "-");
                    const refRange = paramDef.normalRangeDefault || paramDef.normalRangeMale || "-";
                    const isAbnormal = Boolean(resItem?.isAbnormal || p.isAbnormal);

                    return `
                      <tr>
                        <td><strong>${paramDef.name || p.name}</strong></td>
                        <td class="${isAbnormal ? "abnormal" : ""}"><strong>${val}</strong></td>
                        <td>${paramDef.unit || p.unit || "-"}</td>
                        <td>${refRange}</td>
                      </tr>
                    `;
                  }).join("") : `
                    <tr>
                      <td colspan="4" style="text-align:center;color:#64748b;">No parameters recorded</td>
                    </tr>
                  `}
                </tbody>
              </table>
            `;
          }).join("")}

          <div style="text-align:center;margin:24px 0 10px 0;font-weight:700;color:#64748b;font-size:11px;letter-spacing:1px;">
            *** END OF REPORT ***
          </div>

          <div class="footer-section">
            <div>
              <strong>Medical Lab Technologist</strong><br>
              <span style="font-size:11px;">Verified on: ${formatDate(new Date())}</span>
            </div>
            <div class="sign-box">
              <div class="sign-line">Consultant Pathologist</div>
            </div>
          </div>
        </div>
        <script>
          window.onload = function() { window.print(); };
        </script>
      </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(htmlContent);
    printWindow.document.close();
  } catch (err) {
    console.error("Offline Report Print Error:", err);
    alert("Failed to generate offline report: " + err.message);
  }
}
