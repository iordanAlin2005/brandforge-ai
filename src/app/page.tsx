"use client";

import { useState } from "react";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!keyword) return;
    setLoading(true);

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ keyword }),
    });

    const data = await res.json();
    setResults(data.names || []);
    setLoading(false);
  };

  return (
    <main style={{
      minHeight: "100vh",
      background: "#0f0f1a",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: 80,
      fontFamily: "sans-serif",
    }}>
      <h1 style={{ fontSize: 36 }}>BrandForge AI</h1>
      <p style={{ opacity: 0.8 }}>AI-powered brand name generator</p>

      <input
        placeholder="Enter a keyword (e.g. fitness)"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{
          marginTop: 30,
          padding: 14,
          width: 300,
          borderRadius: 8,
          border: "none",
        }}
      />

      <button
        onClick={generate}
        disabled={loading}
        style={{
          marginTop: 20,
          padding: "12px 30px",
          borderRadius: 8,
          border: "none",
          cursor: "pointer",
          background: "#7c3aed",
          color: "white",
          fontSize: 16,
        }}
      >
        {loading ? "Generating..." : "Generate Names"}
      </button>

      <div style={{ marginTop: 40, width: 300 }}>
        {results.map((name, i) => (
          <div key={i} style={{
            padding: 12,
            marginBottom: 10,
            background: "#1c1c2b",
            borderRadius: 8,
            textAlign: "center",
          }}>
            {name}
          </div>
        ))}
      </div>
    </main>
  );
}
