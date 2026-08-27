import db from "@/lib/offline/db";

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

function numberToWords(num) {
  if (num === 0) return "Zero";
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
 * Generates client-side offline Money Receipt / Bill HTML matching server output 1:1.
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

  const [allDoctors, allRegTests, allTests, allPayments, allWorkspaces] = await Promise.all([
    db.doctors.toArray(),
    db.registrationTests.toArray(),
    db.tests.toArray(),
    db.registrationPayments.toArray(),
    db.workspaces.toArray(),
  ]);

  const refBy = allDoctors.find((d) => d.id === reg.refById) || null;
  const workspace = allWorkspaces.find((w) => w.id === reg.workspaceId) || allWorkspaces[0] || {};

  let matchingRegTests = allRegTests.filter(
    (rt) => rt.registrationId === reg.id || rt.registrationId === reg.regNo
  );
  if (matchingRegTests.length === 0 && Array.isArray(reg.tests)) {
    matchingRegTests = reg.tests;
  }

  const testsList = matchingRegTests.map((rt) => {
    const testObj = allTests.find((t) => t.id === rt.testId) || rt.test || {};
    return {
      ...rt,
      test: testObj,
      price: rt.price ?? testObj.price ?? 0,
    };
  });

  const matchingPayments = allPayments
    .filter((p) => p.registrationId === reg.id || String(p.registrationId) === String(reg.regNo))
    .sort((a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0));

  const totalAmount = parseFloat(reg.totalAmount || 0);
  const paidAmount = parseFloat(reg.paidAmount || 0);
  const dueAmount = parseFloat(reg.dueAmount || 0);
  const discount = parseFloat(reg.discount || 0);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Receipt - ${reg.regNo}</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 15mm;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #1e293b;
      margin: 0;
      padding: 0;
      font-size: 13px;
      line-height: 1.4;
      background: #fff;
    }
    .receipt-container {
      max-width: 800px;
      margin: 0 auto;
      border: 1px solid #e2e8f0;
      padding: 24px;
      border-radius: 12px;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 2px solid #0f766e;
      padding-bottom: 16px;
      margin-bottom: 16px;
    }
    .lab-info h1 {
      margin: 0 0 4px 0;
      color: #0f766e;
      font-size: 20px;
      font-weight: 800;
    }
    .lab-info p {
      margin: 0;
      color: #64748b;
      font-size: 12px;
    }
    .receipt-title {
      text-align: right;
    }
    .receipt-title h2 {
      margin: 0 0 4px 0;
      color: #0f172a;
      font-size: 18px;
      font-weight: 800;
    }
    .receipt-title span {
      display: inline-block;
      padding: 3px 8px;
      background: #f0fdf4;
      color: #16a34a;
      border: 1px solid #bbf7d0;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 700;
    }
    .details-box {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      padding: 14px;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    .detail-row {
      display: flex;
      margin-bottom: 4px;
    }
    .detail-row:last-child {
      margin-bottom: 0;
    }
    .detail-label {
      width: 110px;
      color: #64748b;
      font-weight: 600;
      font-size: 12px;
    }
    .detail-val {
      font-weight: 700;
      color: #0f172a;
      font-size: 12px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 20px;
    }
    th {
      background: #0f766e;
      color: #ffffff;
      text-align: left;
      padding: 8px 10px;
      font-size: 12px;
      font-weight: 700;
    }
    td {
      padding: 8px 10px;
      border-bottom: 1px solid #e2e8f0;
      font-size: 12px;
    }
    .text-right {
      text-align: right;
    }
    .summary-grid {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      border-top: 1px solid #e2e8f0;
      padding-top: 16px;
    }
    .words-box {
      max-width: 60%;
    }
    .words-box span {
      display: block;
      color: #64748b;
      font-size: 11px;
      font-weight: 600;
      margin-bottom: 4px;
    }
    .words-box strong {
      color: #0f172a;
      font-size: 12px;
      font-style: italic;
    }
    .totals-box {
      width: 240px;
    }
    .total-row {
      display: flex;
      justify-content: space-between;
      padding: 4px 0;
      font-size: 12px;
    }
    .total-row.grand {
      border-top: 2px solid #0f766e;
      border-bottom: 2px solid #0f766e;
      font-weight: 800;
      font-size: 14px;
      color: #0f766e;
      margin: 6px 0;
      padding: 6px 0;
    }
    .total-row.due {
      font-weight: 800;
      color: #dc2626;
    }
    .payments-history {
      margin-top: 20px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      padding: 12px;
    }
    .payments-history h4 {
      margin: 0 0 8px 0;
      color: #334155;
      font-size: 12px;
      font-weight: 700;
    }
    .footer {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-top: 16px;
    }
    .terms {
      color: #64748b;
      font-size: 10px;
      max-width: 60%;
    }
    .signature {
      text-align: center;
      border-top: 1px solid #94a3b8;
      padding-top: 6px;
      width: 160px;
      font-size: 11px;
      font-weight: 700;
      color: #334155;
    }
    @media print {
      body {
        padding: 0;
      }
      .receipt-container {
        border: none;
        padding: 0;
      }
      .no-print {
        display: none !important;
      }
    }
  </style>
</head>
<body>
  <div class="receipt-container">
    <div class="header">
      <div class="lab-info">
        <h1>${workspace.name || "Pathology & Diagnostic Laboratory"}</h1>
        <p>${workspace.address || ""}</p>
        <p>${workspace.phone ? `Phone: ${workspace.phone}` : ""}</p>
      </div>
      <div class="receipt-title">
        <h2>MONEY RECEIPT</h2>
        <span>${dueAmount <= 0 ? "PAID" : "PARTIALLY PAID"}</span>
      </div>
    </div>

    <div class="details-box">
      <div>
        <div class="detail-row">
          <span class="detail-label">Patient Name:</span>
          <span class="detail-val">${reg.title || ""} ${reg.name}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Age / Gender:</span>
          <span class="detail-val">${reg.age} ${reg.ageUnit || "Yrs"} / ${reg.gender}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Ref. Doctor:</span>
          <span class="detail-val">${refBy?.name || reg.refDoctor || "Self"}</span>
        </div>
      </div>
      <div>
        <div class="detail-row">
          <span class="detail-label">Receipt / Reg No:</span>
          <span class="detail-val">${reg.regNo}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Lab ID:</span>
          <span class="detail-val">${reg.labId || "—"}</span>
        </div>
        <div class="detail-row">
          <span class="detail-label">Date & Time:</span>
          <span class="detail-val">${formatDate(reg.date)}</span>
        </div>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th style="width: 40px;">#</th>
          <th>Test Description / Investigation</th>
          <th class="text-right" style="width: 120px;">Amount (₹)</th>
        </tr>
      </thead>
      <tbody>
        ${testsList
          .map(
            (t, index) => `
          <tr>
            <td>${index + 1}</td>
            <td><strong>${t.test?.name || "Diagnostic Investigation"}</strong></td>
            <td class="text-right">${parseFloat(t.price || 0).toFixed(2)}</td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>

    <div class="summary-grid">
      <div class="words-box">
        <span>Amount in words:</span>
        <strong>${numberToWords(paidAmount)}</strong>
      </div>
      <div class="totals-box">
        <div class="total-row">
          <span>Subtotal:</span>
          <span>₹${(totalAmount + discount).toFixed(2)}</span>
        </div>
        ${
          discount > 0
            ? `
          <div class="total-row">
            <span>Discount:</span>
            <span>-₹${discount.toFixed(2)}</span>
          </div>
        `
            : ""
        }
        <div class="total-row grand">
          <span>Net Total:</span>
          <span>₹${totalAmount.toFixed(2)}</span>
        </div>
        <div class="total-row">
          <span>Paid Amount:</span>
          <span style="color: #16a34a; font-weight: 700;">₹${paidAmount.toFixed(2)}</span>
        </div>
        <div class="total-row due">
          <span>Balance Due:</span>
          <span>₹${dueAmount.toFixed(2)}</span>
        </div>
      </div>
    </div>

    ${
      matchingPayments.length > 0
        ? `
      <div class="payments-history">
        <h4>Payment Transactions Breakdown</h4>
        <table style="margin: 0;">
          <thead>
            <tr>
              <th>Date</th>
              <th>Method</th>
              <th class="text-right">Amount Paid</th>
            </tr>
          </thead>
          <tbody>
            ${matchingPayments
              .map(
                (p) => `
              <tr>
                <td>${formatDate(p.createdAt)}</td>
                <td>${p.paymentMethod || "Cash"}</td>
                <td class="text-right">₹${parseFloat(p.amount || 0).toFixed(2)}</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `
        : ""
    }

    <div class="footer">
      <div class="terms">
        <p style="margin: 0 0 2px 0;">* Computer generated invoice, signature not strictly required.</p>
        <p style="margin: 0;">* Thank you for choosing ${workspace.name || "our laboratory"}.</p>
      </div>
      <div class="signature">
        Authorized Signatory
      </div>
    </div>
  </div>

  <script>
    window.addEventListener("load", () => {
      setTimeout(() => {
        window.print();
      }, 400);
    });
  </script>
</body>
</html>`;

  const blob = new Blob([html], { type: "text/html" });
  return URL.createObjectURL(blob);
}
