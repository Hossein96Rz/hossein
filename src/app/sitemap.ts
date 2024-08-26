import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://hossein.vercel.app",
      lastModified: new Date(),
      alternates: {
        languages: {
          en: "https://hossein.vercel.app/en",
          fa: "https://hossein.vercel.app/fa",
        },
      },
    },
  ];
}
