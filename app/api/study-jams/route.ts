import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/**
 * Reads the editable Study Jam data safely. An empty or malformed draft is
 * treated as no available tracks so the UI can show its empty state.
 */
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data", "studyJams.json");
    const rawData = await readFile(filePath, "utf8");
    const tracks = rawData.trim() ? JSON.parse(rawData) : [];

    return NextResponse.json(Array.isArray(tracks) ? tracks : []);
  } catch {
    return NextResponse.json([]);
  }
}
