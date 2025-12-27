import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("API HIT");

  const { keyword } = await req.json();

  if (!keyword) {
    return NextResponse.json({ names: [] });
  }

  const prompt = `Generate 5 business names for "${keyword}".`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  console.log("OPENAI STATUS:", response.status);

  const text = await response.text();
  console.log("OPENAI RAW RESPONSE:", text);

  if (!response.ok) {
    return NextResponse.json({ error: text }, { status: 500 });
  }

  const data = JSON.parse(text);
  const names = data.choices?.[0]?.message?.content
    ?.split("\n")
    .filter(Boolean) || [];

  console.log("RETURNING NAMES");

  return NextResponse.json({ names });
}
