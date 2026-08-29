import db from "@/lib/offline/db";
import { generateQrCodeDataUrl } from "@/lib/offline/print/qrGenerator";
import { generateReportToken } from "@/lib/reportSecurity";

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
 * Generates client-side offline Money Receipt / Bill HTML matching server route 1:1.
 * @param {string|number} identifier - regNo or registration ID
 * @returns {Promise<string>} - Blob URL
 */
export async function generateOfflineBillHtml(identifier) {
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
      price: rt.price !== undefined ? rt.price : (testObj.price !== undefined ? testObj.price : 0),
    };
  });

  const subtotal = testsList.reduce((sum, t) => sum + parseFloat(t.price || 0), 0);
  const collCharge = parseFloat(reg.collectionCharge || 0);
  const discAmount = parseFloat(reg.discountAmount || 0);
  const discPercent = parseFloat(reg.discountPercent || 0);
  const netAmount = subtotal + collCharge - discAmount;
  const paidAmount = parseFloat(reg.receivedAmount || 0);
  const dueAmount = parseFloat(reg.dueAmount || 0);

  const testRows = testsList.map((t, idx) => `
    <tr>
      <td style="padding: 8px 0; font-family: monospace;">${idx + 1}</td>
      <td style="padding: 8px 0;">${t.test?.name || "Diagnostic Test"}</td>
      <td style="padding: 8px 0; color: #555;">-</td>
      <td align="right" style="padding: 8px 0; font-family: monospace;">${parseFloat(t.price || 0).toFixed(2)}</td>
    </tr>
  `).join("") || `
    <tr>
      <td style="padding: 8px 0; font-family: monospace;">1</td>
      <td style="padding: 8px 0;">Diagnostic Investigation</td>
      <td style="padding: 8px 0; color: #555;">-</td>
      <td align="right" style="padding: 8px 0; font-family: monospace;">${subtotal.toFixed(2)}</td>
    </tr>
  `;

  const currentDateStr = new Date().toLocaleString("en-IN", { dateStyle: "short", timeStyle: "short" });
  const regDateStr = formatDate(reg.date);

  // Generate QR codes
  const publicToken = generateReportToken(reg);
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const qrReportData = `${origin}/q?v=${encodeURIComponent(publicToken)}`;
  const qrPaymentData = `${origin}/q?v=${encodeURIComponent(publicToken)}&type=bill`;

  let qrReportUrl = "";
  let qrPaymentUrl = "";
  try {
    qrReportUrl = await generateQrCodeDataUrl(qrReportData, { width: 150, margin: 1 });
    qrPaymentUrl = await generateQrCodeDataUrl(qrPaymentData, { width: 150, margin: 1 });
  } catch (qrErr) {
    console.warn("[billHtmlGenerator] QR generation warning:", qrErr);
  }

  const receivedWords = numberToWords(paidAmount);

  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Money Receipt - ${reg.name}</title>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+39&display=swap" rel="stylesheet">
        <style>
          @media print {
            body { margin: 0; padding: 20px; font-family: 'Arial', sans-serif; font-size: 13px; color: #000; }
            @page { size: auto; margin: 15mm; }
          }
          body { font-family: 'Arial', sans-serif; font-size: 13px; padding: 40px; max-width: 800px; margin: 0 auto; color: #333; }
          .header { text-align: center; margin-bottom: 15px; }
          .header h1 { margin: 0; font-size: 24px; font-weight: bold; }
          .header p { margin: 4px 0; font-size: 14px; }
          .divider { border-bottom: 2px solid #000; margin-top: 10px; margin-bottom: 5px; }
          .title { text-align: center; font-size: 16px; font-weight: bold; text-decoration: underline; margin-bottom: 20px; }
          .details-table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
          .details-table td { padding: 4px 0; vertical-align: top; }
          .details-label { font-weight: bold; width: 15%; }
          .details-value { width: 35%; }
          .investigations-table { width: 100%; border-collapse: collapse; margin-top: 15px; }
          .investigations-table th { border-top: 1px solid #000; border-bottom: 1px solid #000; padding: 8px 0; text-align: left; font-weight: bold; }
          .investigations-table td { border-bottom: 1px dashed #ccc; padding: 6px 0; }
          .investigations-table tr:last-child td { border-bottom: 1px solid #000; }
          .total-row { font-weight: bold; }
          .receipt-footer { margin-top: 20px; font-size: 12px; line-height: 1.6; }
          .signatory { text-align: right; margin-top: 50px; font-weight: bold; }
          .qr-barcodes { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 40px; }
          .barcode-box { display: flex; flex-direction: column; align-items: center; }
          .barcode-lines { font-family: 'Libre Barcode 39', cursive; font-size: 42px; line-height: 1; margin: 0; }
          .qr-container { display: flex; gap: 30px; }
          .qr-box { text-align: center; font-size: 10px; font-weight: bold; }
          .qr-image { width: 80px; height: 80px; margin-bottom: 5px; border: 1px solid #eee; padding: 2px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>${companyName}</h1>
          <p>${addrString}</p>
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
            <td class="details-label">Reg.No</td>
            <td class="details-value">: ${reg.regNo}</td>
            <td class="details-label">Ref. By</td>
            <td class="details-value">: ${refBy?.name || "Self"}</td>
          </tr>
          <tr>
            <td class="details-label">Patient Name</td>
            <td class="details-value">: ${reg.title || ""} ${reg.name}</td>
            <td class="details-label">Age/Sex</td>
            <td class="details-value">: ${reg.age} ${reg.ageUnit || "Year"} / ${reg.gender || "Male"}</td>
          </tr>
          <tr>
            <td class="details-label">Address</td>
            <td class="details-value">: ${reg.city && reg.city !== "-NA-" ? reg.city : "-"}</td>
            <td class="details-label">Cont. No</td>
            <td class="details-value">: ${reg.mobileNo || "-"}</td>
          </tr>
        </table>

        <table class="investigations-table">
          <thead>
            <tr>
              <th width="8%">SL</th>
              <th width="62%">Investigation</th>
              <th width="15%">Reporting</th>
              <th width="15%" align="right" style="text-align: right;">Amount</th>
            </tr>
          </thead>
          <tbody>
            ${testRows}
            <tr class="total-row">
              <td colspan="2"></td>
              <td align="right" style="white-space: nowrap;">Subtotal:</td>
              <td align="right" style="font-family: monospace;">₹${subtotal.toFixed(2)}</td>
            </tr>
            ${collCharge > 0 ? `
            <tr class="total-row">
              <td colspan="2"></td>
              <td align="right" style="white-space: nowrap;">Collection Charge:</td>
              <td align="right" style="font-family: monospace;">₹${collCharge.toFixed(2)}</td>
            </tr>
            ` : ''}
            ${discAmount > 0 ? `
            <tr class="total-row" style="color: #16a34a;">
              <td colspan="2"></td>
              <td align="right" style="white-space: nowrap;">Discount ${discPercent > 0 ? `(${discPercent}%)` : ''}:</td>
              <td align="right" style="font-family: monospace;">-₹${discAmount.toFixed(2)}</td>
            </tr>
            ` : ''}
            <tr class="total-row" style="border-top: 1px double #000; border-bottom: 1px double #000;">
              <td colspan="2"></td>
              <td align="right" style="white-space: nowrap;">Net Amount:</td>
              <td align="right" style="font-family: monospace;">₹${netAmount.toFixed(2)}</td>
            </tr>
            <tr class="total-row">
              <td colspan="2"></td>
              <td align="right" style="white-space: nowrap;">Paid:</td>
              <td align="right" style="font-family: monospace; color: #047857;">₹${paidAmount.toFixed(2)}</td>
            </tr>
            <tr class="total-row" style="color: #b91c1c;">
              <td colspan="2"></td>
              <td align="right" style="white-space: nowrap;">Due:</td>
              <td align="right" style="font-family: monospace;">₹${dueAmount.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>

        <div class="receipt-footer">
          <div><strong>Received Amount :</strong> ${receivedWords} Only By: ${reg.paymentMode || "Cash"}</div>
          <div style="color: #666; margin-top: 5px;">Printed By : ${companyName} @ ${currentDateStr}</div>
        </div>

        <div class="qr-barcodes">
          <div class="barcode-box">
            <div class="barcode-lines">*${reg.regNo}*</div>
            <div style="font-size: 11px; margin-top: 4px;">${reg.regNo}</div>
          </div>
          
          <div class="qr-container">
            ${qrReportUrl ? `
            <div class="qr-box">
              <img class="qr-image" src="${qrReportUrl}" />
              <br />
              <span>(SCAN FOR REPORT)</span>
            </div>
            ` : ""}
            ${qrPaymentUrl ? `
            <div class="qr-box">
              <img class="qr-image" src="${qrPaymentUrl}" />
              <br />
              <span>(SCAN FOR PAYMENT)</span>
            </div>
            ` : ""}
          </div>

          <div class="signatory">
            <div style="border-top: 1px solid #000; width: 180px; margin-bottom: 5px;"></div>
            (AUTHORIZED SIGNATORY)
          </div>
        </div>
        
        <script>
          window.onload = function() {
            window.print();
          }
        </script>
      </body>
    </html>
  `;

  const blob = new Blob([htmlContent], { type: "text/html" });
  return URL.createObjectURL(blob);
}
