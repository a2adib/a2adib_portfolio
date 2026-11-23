import type { Metadata, Viewport } from "next";
import "./globals.css";
import { seo, personal } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: {
    default: `${personal.name} // Vice Stack Software Engineer`,
    template: `%s | ${personal.name}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: personal.name, url: personal.github }],
  creator: personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seo.url,
    title: seo.title,
    description: seo.description,
    siteName: `${personal.name} — Portfolio`,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${personal.name} — Software Engineer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: seo.url,
  },
};

export const viewport: Viewport = {
  themeColor: "#08060e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="bg-vice-bg font-sans text-vice-text antialiased selection:bg-vice-pink/40 selection:text-white">
        {children}
      </body>
    </html>
  );
}
