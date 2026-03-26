import type { Metadata } from "next";
import { Poppins, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { siteImages } from "@/lib/assets";
import { siteConfig } from "@/lib/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: [{ url: "/uploads/2024/10/AGRIFOOD-3-64x64.jpg", sizes: "32x32", type: "image/jpeg" }],
    apple: "/uploads/2024/10/AGRIFOOD-3-300x300.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    images: [{ url: siteImages.logo, width: 600, height: 324, alt: siteConfig.shortName }],
  },
  twitter: {
    card: "summary_large_image",
    images: [siteImages.logo],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
        <body className={`${poppins.variable} ${manrope.variable} min-h-screen font-sans antialiased`}>
        <SiteHeader />
        <main className="min-h-[60vh]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
