import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    names: ["API-VERCEL-OK", "GET-MERGE", "BRANDFORGE"],
  });
}

export async function POST(req: Request) {
  const { keyword } = await req.json();

  return NextResponse.json({
    names: [
      `${keyword}ly`,
      `${keyword}Hub`,
      `Get${keyword}`,
      `${keyword}Pro`,
      `${keyword}AI`,
    ],
  });
}
