import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Portafolio de César Reyes, desarrollador Fullstack",
    template: "%s | César Reyes"
  },
  description: "Conoce más sobre César Reyes, desarrollador fullstack, sus habilidades y tecnologías",
};

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
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
