import type { Metadata, Viewport } from "next";
import { Fira_Sans } from "next/font/google";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "./config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "César Reyes - Desarrollador Fullstack",
    template: "%s | César Reyes",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "César Reyes",
    "desarrollador fullstack",
    "portafolio",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "frontend",
    "backend",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "es_ES",
    title: "César Reyes - Desarrollador Fullstack",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
};

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-fira-sans",
});

export default function RootLayout({ children, }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${firaSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}