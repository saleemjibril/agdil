import type { Metadata } from "next";
import { Poppins, Manrope, DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
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

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
        <body className={`${poppins.variable} ${manrope.variable} ${dmSerifDisplay.variable} ${plusJakartaSans.variable} min-h-screen font-sans antialiased`}>
        <SiteHeader />
        <main className="min-h-[60vh]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
