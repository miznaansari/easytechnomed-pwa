import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

export async function POST(req) {
  try {
    const admin = await requireAdmin();
    const body = await req.json().catch(() => ({}));
    const syncObjects = body.sync_objects || [];

    if (!Array.isArray(syncObjects)) {
      return NextResponse.json(
        { status: false, msg: "Invalid sync_objects payload. Must be an array." },
        { status: 400 }
      );
    }

    const responseData = [];

    for (const obj of syncObjects) {
      const { object_name, is_dirty, is_modified, updated_at } = obj;
      const apiTypes = [];

      // 1. Client has newly created records -> Require POST
      if (is_dirty === true) {
        apiTypes.push("POST");
      }

      // 2. Client has modified existing records -> Require PUT (if not already new)
      if (is_modified === true && is_dirty !== true) {
        apiTypes.push("PUT");
      }

      // 3. Compare server timestamp to determine if client needs GET
      const clientTime = updated_at ? new Date(updated_at) : new Date(0);
      let hasServerUpdates = false;

      try {
        if (object_name === "registrations") {
          const count = await prisma.registration.count({
            where: {
              workspaceId: admin.workspaceId,
              updatedAt: { gt: clientTime },
            },
          });
          hasServerUpdates = count > 0;
        } else if (object_name === "doctors") {
          const count = await prisma.doctor.count({
            where: {
              workspaceId: admin.workspaceId,
              updatedAt: { gt: clientTime },
            },
          });
          hasServerUpdates = count > 0;
        } else if (object_name === "tests") {
          const count = await prisma.test.count({
            where: {
              OR: [{ workspaceId: admin.workspaceId }, { workspaceId: null }],
              updatedAt: { gt: clientTime },
            },
          });
          hasServerUpdates = count > 0;
        } else if (object_name === "parameters") {
          const count = await prisma.parameter.count({
            where: {
              OR: [{ workspaceId: admin.workspaceId }, { workspaceId: null }],
              updatedAt: { gt: clientTime },
            },
          });
          hasServerUpdates = count > 0;
        } else if (object_name === "testParameters") {
          const count = await prisma.testParameter.count({
            where: {
              OR: [{ workspaceId: admin.workspaceId }, { workspaceId: null }],
              updatedAt: { gt: clientTime },
            },
          });
          hasServerUpdates = count > 0;
        } else if (object_name === "testDepartments") {
          const count = await prisma.testDepartment.count({
            where: {
              updatedAt: { gt: clientTime },
            },
          });
          hasServerUpdates = count > 0;
        } else if (object_name === "testFormulas") {
          const count = await prisma.testFormula.count({
            where: {
              OR: [{ workspaceId: admin.workspaceId }, { workspaceId: null }],
              updatedAt: { gt: clientTime },
            },
          });
          hasServerUpdates = count > 0;
        } else if (object_name === "interpretationRules") {
          const count = await prisma.interpretationRule.count({
            where: {
              OR: [{ workspaceId: admin.workspaceId }, { workspaceId: null }],
              updatedAt: { gt: clientTime },
            },
          });
          hasServerUpdates = count > 0;
        } else if (object_name === "registrationPayments") {
          const count = await prisma.registrationPayment.count({
            where: {
              registration: { workspaceId: admin.workspaceId },
              updatedAt: { gt: clientTime },
            },
          });
          hasServerUpdates = count > 0;
        } else if (object_name === "workspacePdf") {
          const count = await prisma.workspacePdf.count({
            where: {
              workspaceId: admin.workspaceId,
              updatedAt: { gt: clientTime },
            },
          });
          hasServerUpdates = count > 0;
        }
      } catch (checkErr) {
        console.warn(`[Sync API] Error checking server timestamps for ${object_name}:`, checkErr);
      }

      if (hasServerUpdates) {
        apiTypes.push("GET");
      }

      responseData.push({
        object_name,
        api_types: apiTypes,
      });
    }

    return NextResponse.json({
      status: true,
      msg: "Please use the appropriate API(s)",
      data: responseData,
    });
  } catch (error) {
    if (error.message === "NEXT_REDIRECT" || (error.digest && error.digest.startsWith("NEXT_REDIRECT"))) {
      return NextResponse.json({ status: false, error: "Unauthorized", msg: "Unauthorized" }, { status: 401 });
    }
    console.error("[Sync API] POST Error:", error);
    return NextResponse.json({ status: false, error: error.message, msg: error.message }, { status: 500 });
  }
}
