import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Fira_Code, Syne } from "next/font/google";
import "./globals.css";
import { seo, personal } from "@/lib/data";

// Display font — distinctive, modern
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700", "800"],
  display: "swap",
});

// Body font — clean, readable
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

// Mono font — for code/tech elements
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: {
    default: seo.title,
    template: `%s | Abdullah Al Adib`,
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
        alt: `${personal.name} — Backend Developer Portfolio`,
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
  themeColor: "#080C14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${spaceGrotesk.variable} ${firaCode.variable} font-body bg-bg-primary text-text-primary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
