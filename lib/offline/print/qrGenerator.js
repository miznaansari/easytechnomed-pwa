import QRCode from "qrcode";

/**
 * Generates PNG byte array (Uint8Array) for a QR code in 0ms without any network request.
 * Compatible with pdf-lib embedPng() in both client-side browser and server-side Node.js.
 * 
 * @param {string} text - The URL or text string to encode
 * @param {object} options - QRCode options (width, margin, errorCorrectionLevel)
 * @returns {Promise<Uint8Array>}
 */
export async function generateQrCodePngBytes(text, options = {}) {
  if (!text) throw new Error("Text is required to generate QR code");

  const opts = {
    margin: 1,
    width: 150,
    errorCorrectionLevel: "M",
    ...options,
  };

  try {
    // If in Node.js environment with Buffer support
    if (typeof Buffer !== "undefined" && QRCode.toBuffer) {
      const buffer = await QRCode.toBuffer(text, opts);
      return new Uint8Array(buffer);
    }

    // In Browser environment using DataURL
    const dataUrl = await QRCode.toDataURL(text, opts);
    const base64Data = dataUrl.split(",")[1];
    const binaryStr = atob(base64Data);
    const bytes = new Uint8Array(binaryStr.length);
    for (let i = 0; i < binaryStr.length; i++) {
      bytes[i] = binaryStr.charCodeAt(i);
    }
    return bytes;
  } catch (err) {
    console.error("[QRGenerator] Failed to generate QR PNG bytes:", err);
    throw err;
  }
}

/**
 * Generates base64 PNG Data URL for a QR code.
 * 
 * @param {string} text 
 * @param {object} options 
 * @returns {Promise<string>}
 */
export async function generateQrCodeDataUrl(text, options = {}) {
  if (!text) return "";
  const opts = {
    margin: 1,
    width: 150,
    errorCorrectionLevel: "M",
    ...options,
  };
  return await QRCode.toDataURL(text, opts);
}
