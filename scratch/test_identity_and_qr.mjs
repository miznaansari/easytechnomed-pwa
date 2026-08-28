import { generateReportToken, decryptReportToken, verifyReportToken } from "../lib/reportSecurity.js";
import { generateQrCodePngBytes, generateQrCodeDataUrl } from "../lib/offline/print/qrGenerator.js";
import { generateRandomSuffix } from "../lib/offline/registrationIdentity.js";

async function runTests() {
  console.log("=== Testing Registration Identity, Report Security & QR Engine ===");

  // 1. Test Random Suffix
  const suffix = generateRandomSuffix(4);
  console.log("1. Random Suffix:", suffix);
  if (!suffix || suffix.length !== 4) throw new Error("Invalid suffix");

  // 2. Test Mock Registration Object
  const mockReg = {
    id: 42,
    regNo: `ETM-${suffix}-00042`,
    labId: "042",
    pdfOtp: "729104",
    workspaceId: 1,
    name: "John Doe",
  };

  // 3. Test Token Generation
  const token = generateReportToken(mockReg);
  console.log("2. Generated Report Token:", token);
  if (!token || typeof token !== "string") throw new Error("Failed to generate token");

  // 4. Test Token Decryption
  const decrypted = decryptReportToken(token);
  console.log("3. Decrypted Token Payload:", decrypted);
  if (!decrypted || decrypted.regNo !== mockReg.regNo) {
    throw new Error(`Decrypted regNo mismatch! Expected: ${mockReg.regNo}, got: ${decrypted?.regNo}`);
  }
  if (decrypted.secret !== mockReg.pdfOtp) {
    throw new Error(`Decrypted secret mismatch! Expected: ${mockReg.pdfOtp}, got: ${decrypted?.secret}`);
  }

  // 5. Test Token Verification
  const isVerified = verifyReportToken(token, mockReg);
  console.log("4. Token Verification (Valid):", isVerified);
  if (!isVerified) throw new Error("Expected valid token to verify successfully");

  const isInvalidVerified = verifyReportToken("invalid_fake_token", mockReg);
  console.log("5. Token Verification (Invalid):", isInvalidVerified);
  if (isInvalidVerified) throw new Error("Expected invalid token to fail verification");

  const isOtpVerified = verifyReportToken(mockReg.pdfOtp, mockReg);
  console.log("6. Token Verification (via direct OTP fallback):", isOtpVerified);
  if (!isOtpVerified) throw new Error("Expected direct OTP to verify successfully");

  // 6. Test QR Code Generation
  const qrData = `http://localhost:3000/q?v=${encodeURIComponent(token)}`;
  const qrBytes = await generateQrCodePngBytes(qrData, { width: 150, margin: 1 });
  console.log("7. Generated QR PNG Bytes Length:", qrBytes.length);
  if (!qrBytes || qrBytes.length === 0) throw new Error("Failed to generate QR PNG bytes");

  const qrDataUrl = await generateQrCodeDataUrl(qrData, { width: 150, margin: 1 });
  console.log("8. Generated QR Data URL prefix:", qrDataUrl.substring(0, 30));
  if (!qrDataUrl.startsWith("data:image/png;base64,")) throw new Error("Invalid QR Data URL");

  console.log("\nALL TESTS PASSED SUCCESSFULLY! 🚀");
}

runTests().catch((err) => {
  console.error("Test Failed:", err);
  process.exit(1);
});
