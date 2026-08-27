import db from "./db";
import { generateOfflineReportPdf } from "./print/reportPdfGenerator";

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
    const regIdStr = String(regId).trim();
    const allRegs = await db.registrations.toArray();
    let reg =
      allRegs.find((r) => String(r.id) === regIdStr) ||
      allRegs.find((r) => String(r.regNo) === regIdStr) ||
      allRegs.find((r) => String(r.labId) === regIdStr) ||
      allRegs.find((r) => String(r.barcode) === regIdStr);

    if (!reg) {
      alert("Registration record not found in local IndexedDB.");
      return;
    }

    const [admins, workspaces, doctors, tests, allRegTests] = await Promise.all([
      db.admins.toArray(),
      db.workspaces.toArray(),
      db.doctors.toArray(),
      db.tests.toArray(),
      db.registrationTests.toArray().catch(() => []),
    ]);

    const admin = admins?.[0] || {};
    const labName = admin.companyName || workspaces?.[0]?.name || "Pathology & Diagnostic Centre";
    const refDoc = doctors.find((d) => d.id === reg.refById) || reg.refBy || { name: "Self" };
    
    const matchingRegTests = allRegTests.filter(
      (rt) => rt.registrationId === reg.id || String(rt.registrationId) === String(reg.regNo)
    );
    const regTests = (Array.isArray(reg.tests) && reg.tests.length > 0) ? reg.tests : matchingRegTests;

    const totalAmount = Number(reg.totalAmount || reg.netAmount || 0);
    const paidAmount = Number(reg.paidAmount || reg.advanceAmount || 0);
    const dueAmount = Math.max(0, totalAmount - paidAmount);

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
            <div class="info-row"><span class="info-label">Patient Name:</span><span class="info-val">${reg.patientTitle ? reg.patientTitle + " " : ""}${reg.patientName || reg.name || "-"}</span></div>
            <div class="info-row"><span class="info-label">Age / Gender:</span><span class="info-val">${reg.age || "-"} ${reg.ageUnit || "Yrs"} / ${reg.gender || "-"}</span></div>
            <div class="info-row"><span class="info-label">Mobile:</span><span class="info-val">${reg.mobileNumber || reg.mobileNo || "-"}</span></div>
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

    const blob = new Blob([htmlContent], { type: "text/html" });
    const blobUrl = URL.createObjectURL(blob);
    const printWindow = window.open(blobUrl, "_blank");
    if (!printWindow) {
      alert("Please allow popups to print.");
      return;
    }
  } catch (err) {
    console.error("Offline Bill Print Error:", err);
    alert("Failed to generate offline print: " + err.message);
  }
}

/**
 * Client-Side Offline Medical Test Report Generator (Exact matching server PDF)
 */
export async function printReportOffline(regId, options = {}) {
  try {
    const blobUrl = await generateOfflineReportPdf(regId, options);
    const printWindow = window.open(blobUrl, "_blank");
    if (!printWindow) {
      // Fallback: Trigger download if popup blocked
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `report_${regId}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  } catch (err) {
    console.error("Offline Report PDF Generation Error:", err);
    alert("Failed to generate offline report: " + err.message);
  }
}
