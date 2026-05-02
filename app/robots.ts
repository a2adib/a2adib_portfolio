import { MetadataRoute } from "next";
import { seo } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${seo.url}/sitemap.xml`,
  };
}
