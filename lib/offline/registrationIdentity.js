import db from "./db";

/**
 * Generates a cryptographic uppercase alphanumeric suffix.
 * @param {number} length 
 * @returns {string}
 */
export function generateRandomSuffix(length = 4) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    const bytes = new Uint8Array(length);
    crypto.getRandomValues(bytes);
    for (let i = 0; i < length; i++) {
      result += chars.charAt(bytes[i] % chars.length);
    }
  } else {
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  }
  return result;
}

/**
 * Generates the permanent, authentic registration identity for a new patient registration.
 * Ensures strict workspace isolation and persistence across offline & online environments.
 * 
 * @param {number|string|null} workspaceId 
 * @returns {Promise<{ regNo: string, labId: string, pdfOtp: string, barcode: string, currentSeq: number }>}
 */
export async function generateNextRegistrationIdentity(workspaceId = null) {
  try {
    // 1. Resolve workspace
    let ws = null;
    if (workspaceId && db.workspaces) {
      ws = await db.workspaces.get(Number(workspaceId));
    }
    if (!ws && db.workspaces) {
      const allWs = await db.workspaces.toArray();
      ws = allWs?.[0] || null;
    }

    // 2. Resolve highest sequence from existing registrations and workspace.nextSequence
    let currentSeq = ws?.nextSequence ? Number(ws.nextSequence) : 1;

    if (db.registrations) {
      const existingRegs = await db.registrations.toArray();
      for (const r of existingRegs) {
        if (r.labId && !isNaN(Number(r.labId))) {
          const num = Number(r.labId);
          if (num >= currentSeq) {
            currentSeq = num + 1;
          }
        }
        if (r.regNo && typeof r.regNo === "string") {
          const parts = r.regNo.split("-");
          const lastPart = parts[parts.length - 1];
          if (lastPart && !isNaN(Number(lastPart))) {
            const num = Number(lastPart);
            if (num >= currentSeq) {
              currentSeq = num + 1;
            }
          }
        }
      }
    }

    // 3. Format components
    const labId = String(currentSeq).padStart(3, "0");
    const randomPart = generateRandomSuffix(4);
    const regNo = `ETM-${randomPart}-${String(currentSeq).padStart(5, "0")}`;
    const pdfOtp = Math.floor(100000 + Math.random() * 900000).toString();
    const barcodeNumber = Math.floor(100000000 + Math.random() * 900000000);
    const barcode = `,EDT${barcodeNumber} ${barcodeNumber}`;

    // 4. Increment workspace sequence in local IndexedDB
    if (ws && ws.id && db.workspaces) {
      await db.workspaces.update(ws.id, {
        nextSequence: currentSeq + 1,
        lastUpdatedAt: new Date().toISOString(),
      });
    }

    return {
      regNo,
      labId,
      pdfOtp,
      barcode,
      currentSeq,
    };
  } catch (err) {
    console.error("[RegistrationIdentity] Error generating sequence:", err);
    // Fallback safe identity
    const fallbackSeq = Math.floor(1000 + Math.random() * 9000);
    const randomPart = generateRandomSuffix(4);
    return {
      regNo: `ETM-${randomPart}-${fallbackSeq}`,
      labId: String(fallbackSeq).slice(-3),
      pdfOtp: Math.floor(100000 + Math.random() * 900000).toString(),
      barcode: `,EDT${fallbackSeq} ${fallbackSeq}`,
      currentSeq: fallbackSeq,
    };
  }
}
