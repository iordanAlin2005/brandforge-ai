import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BrandForge AI – Business Name Generator",
  description:
    "Generate unique business, startup, and online brand names instantly. Free AI-powered business name generator. No signup required.",
  keywords: [
    "business name generator",
    "startup name generator",
    "brand name generator",
    "online business names",
    "company name generator",
  ],
  verification: {
    google: "bpVTbA4XVY3pq_ZvnJBa2PwXoC5mpM5WWRxU2UaGlXw",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
