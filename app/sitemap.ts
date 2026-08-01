import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tinkerhub-sngce.com";

// Define all routes for the website
const routes = [
  "",
  "/study-jam",
  "/events",
  "/campus",
  "/resources",
  "/spotlight",
  "/success-stories",
  "/discord",
  "/whatsapp",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
