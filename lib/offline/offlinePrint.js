import db from "./db";
import { generateOfflineReportPdf } from "./print/reportPdfGenerator";
import { generateOfflineBillPdf } from "./print/billPdfGenerator";

/**
 * Client-Side Offline Bill / Money Receipt PDF Printer
 */
export async function printBillOffline(regId) {
  try {
    const blobUrl = await generateOfflineBillPdf(regId);
    const printWindow = window.open(blobUrl, "_blank");
    if (!printWindow) {
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `receipt_${regId}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  } catch (err) {
    console.error("Offline Bill PDF Generation Error:", err);
    alert("Failed to generate offline bill PDF: " + err.message);
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
