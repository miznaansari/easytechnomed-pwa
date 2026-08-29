import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import packageJson from "@/package.json";

// Default initial release notes when database is initially unpopulated
const DEFAULT_INITIAL_CHANGES = [
  "Complete client-side IndexedDB & storage purge on user logout",
  "Automated PWA version detection with instant one-click Hard Refresh",
  "High-performance client-side PDF Report & Money Receipt generator (pdf-lib)",
  "Instant 0ms IndexedDB offline forms & liveQuery table reactivity",
  "Improved offline sync coordinator & background network heartbeat"
];

export async function GET(request) {
  try {
    // 1. Fetch latest active version from MySQL database
    let latestRelease = await prisma.appVersion.findFirst({
      where: { isActive: true },
      orderBy: { id: "desc" },
    });

    // 2. If no record in DB yet, auto-seed with current package version and notes
    if (!latestRelease) {
      const currentPkgVersion = packageJson.version || "3.1.2";
      latestRelease = await prisma.appVersion.create({
        data: {
          version: currentPkgVersion,
          title: "EasyTechnoMed High-Performance PWA Update",
          description: "New features, enhanced offline storage, full logout cleanup, and performance upgrades.",
          changes: JSON.stringify(DEFAULT_INITIAL_CHANGES),
          isMandatory: false,
          isActive: true,
          releaseDate: new Date(),
        },
      }).catch(async () => {
        // If race condition or duplicate key, fetch existing
        return await prisma.appVersion.findFirst({
          where: { isActive: true },
          orderBy: { id: "desc" },
        });
      });
    }

    // Parse changes if stored as JSON string
    let parsedChanges = [];
    if (latestRelease?.changes) {
      try {
        parsedChanges = typeof latestRelease.changes === "string" 
          ? JSON.parse(latestRelease.changes) 
          : latestRelease.changes;
      } catch {
        parsedChanges = latestRelease.changes.split("\n").filter(Boolean);
      }
    }

    return NextResponse.json({
      success: true,
      latestVersion: latestRelease?.version || packageJson.version,
      currentPackageVersion: packageJson.version,
      title: latestRelease?.title || "EasyTechnoMed Update",
      description: latestRelease?.description || "",
      changes: parsedChanges,
      releaseDate: latestRelease?.releaseDate || new Date(),
      isMandatory: !!latestRelease?.isMandatory,
    });
  } catch (error) {
    console.error("[api/version] Error fetching app version:", error);
    return NextResponse.json({
      success: false,
      latestVersion: packageJson.version || "3.1.2",
      currentPackageVersion: packageJson.version || "3.1.2",
      title: "EasyTechnoMed Update",
      description: "Offline fallback version data.",
      changes: DEFAULT_INITIAL_CHANGES,
      releaseDate: new Date(),
      isMandatory: false,
    });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { version, title, description, changes, isMandatory = false, isActive = true } = body;

    if (!version || !title) {
      return NextResponse.json(
        { success: false, error: "Version and title are required." },
        { status: 400 }
      );
    }

    const changesJson = typeof changes === "object" ? JSON.stringify(changes) : String(changes || "");

    const newRelease = await prisma.appVersion.upsert({
      where: { version: String(version).trim() },
      create: {
        version: String(version).trim(),
        title: String(title).trim(),
        description: description ? String(description) : null,
        changes: changesJson,
        isMandatory: Boolean(isMandatory),
        isActive: Boolean(isActive),
        releaseDate: new Date(),
      },
      update: {
        title: String(title).trim(),
        description: description ? String(description) : null,
        changes: changesJson,
        isMandatory: Boolean(isMandatory),
        isActive: Boolean(isActive),
        releaseDate: new Date(),
      },
    });

    return NextResponse.json({
      success: true,
      message: `App version ${newRelease.version} published successfully.`,
      release: newRelease,
    });
  } catch (error) {
    console.error("[api/version] Error publishing app version:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
