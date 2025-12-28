import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://brandforge-ai.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://brandforge-ai.vercel.app/business-name-generator",
      lastModified: new Date(),
    },
    {
      url: "https://brandforge-ai.vercel.app/startup-name-generator",
      lastModified: new Date(),
    },
    {
      url: "https://brandforge-ai.vercel.app/online-business-name-generator",
      lastModified: new Date(),
    },
  ];
}
