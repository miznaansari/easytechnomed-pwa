import { generateOfflineReportPdf } from "./reportPdfGenerator";
import { generateOfflineBillHtml } from "./billHtmlGenerator";
import { toast } from "sonner";

/**
 * Opens medical report PDF instantly from local IndexedDB without server/network dependency.
 * @param {string|number} identifier - regNo or registration ID
 * @param {object} options - { withFrame: boolean, testIds: Array<number> }
 */
export async function openOfflineReportPrint(identifier, options = {}) {
  try {
    toast.loading("Generating report PDF...", { id: "offline-print" });
    const blobUrl = await generateOfflineReportPdf(identifier, options);
    toast.dismiss("offline-print");
    const win = window.open(blobUrl, "_blank");
    if (!win) {
      toast.error("Popup blocked. Please allow popups to view report.");
    }
    return blobUrl;
  } catch (error) {
    console.error("[openOfflineReportPrint] Error generating report PDF:", error);
    toast.error(error.message || "Failed to generate report PDF", { id: "offline-print" });
    // Fallback: If online and offline failed for any reason, try server route
    if (typeof navigator !== "undefined" && navigator.onLine) {
      const withFrameParam = options.withFrame !== undefined ? `withFrame=${options.withFrame}` : "withFrame=true";
      const testIdsParam = options.testIds ? `&testIds=${options.testIds.join(",")}` : "";
      window.open(`/api/print-report/${identifier}?${withFrameParam}${testIdsParam}`, "_blank");
    }
  }
}

/**
 * Opens Money Receipt / Bill instantly from local IndexedDB without server/network dependency.
 * @param {string|number} identifier - regNo or registration ID
 */
export async function openOfflineBillPrint(identifier) {
  try {
    toast.loading("Generating receipt bill...", { id: "offline-bill" });
    const blobUrl = await generateOfflineBillHtml(identifier);
    toast.dismiss("offline-bill");
    const win = window.open(blobUrl, "_blank");
    if (!win) {
      toast.error("Popup blocked. Please allow popups to view receipt.");
    }
    return blobUrl;
  } catch (error) {
    console.error("[openOfflineBillPrint] Error generating receipt:", error);
    toast.error(error.message || "Failed to generate receipt bill", { id: "offline-bill" });
    // Fallback: If online and offline failed, try server route
    if (typeof navigator !== "undefined" && navigator.onLine) {
      window.open(`/api/print-bill/${identifier}`, "_blank");
    }
  }
}
