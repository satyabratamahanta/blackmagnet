import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://blackmagnet.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://blackmagnet.vercel.app/services",
      lastModified: new Date(),
    },
    {
      url: "https://blackmagnet.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://blackmagnet.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}
