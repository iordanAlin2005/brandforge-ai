import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    names: ["TEST-API-VERCEL", "API-MERGE", "BRAND-FORGE"],
  });
}
