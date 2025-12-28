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
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f0f1a, #1b1230)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "80px 20px",
        fontFamily: "sans-serif",
      }}
    >
      {/* HERO */}
      <h1 style={{ fontSize: 42, textAlign: "center", maxWidth: 700 }}>
        Create a perfect business name in seconds
      </h1>

      <p
        style={{
          marginTop: 16,
          fontSize: 18,
          opacity: 0.85,
          textAlign: "center",
          maxWidth: 600,
        }}
      >
        Generate unique, brandable names for startups, online businesses and
        digital brands. No signup required.
      </p>

      {/* INPUT */}
      <input
        placeholder="Enter a keyword (e.g. fitness)"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        style={{
          marginTop: 40,
          padding: 16,
          width: 320,
          borderRadius: 10,
          border: "none",
          fontSize: 16,
        }}
      />

      {/* BUTTON */}
      <button
        onClick={generate}
        disabled={loading}
        style={{
          marginTop: 20,
          padding: "14px 34px",
          borderRadius: 10,
          border: "none",
          cursor: "pointer",
          background: "#7c3aed",
          color: "white",
          fontSize: 17,
          fontWeight: 600,
        }}
      >
        {loading ? "Generating..." : "Generate Names"}
      </button>

      <p style={{ marginTop: 10, opacity: 0.6, fontSize: 14 }}>
        Free to use • No login • Instant results
      </p>

      {/* RESULTS */}
      <div style={{ marginTop: 50, width: 320 }}>
        {results.map((name, i) => (
          <div
            key={i}
            style={{
              padding: 14,
              marginBottom: 12,
              background: "#1c1c2b",
              borderRadius: 10,
              textAlign: "center",
              fontSize: 16,
            }}
          >
            {name}
          </div>
        ))}
      </div>

      {/* SEO LINKS */}
      <div style={{ marginTop: 70, textAlign: "center" }}>
        <p style={{ opacity: 0.7 }}>Explore more tools:</p>
        <a href="/business-name-generator" style={{ color: "#7c3aed" }}>
          Business Name Generator
        </a>
        {" • "}
        <a href="/startup-name-generator" style={{ color: "#7c3aed" }}>
          Startup Name Generator
        </a>
        {" • "}
        <a href="/online-business-name-generator" style={{ color: "#7c3aed" }}>
          Online Business Name Generator
        </a>
      </div>
    </main>
  );
}
