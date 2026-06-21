import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import ThemeProvider from "@/components/providers/ThemeProvider";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SkipToContent from "@/components/layout/SkipToContent";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zeen Zheng — Portfolio",
  description:
    "Zeen Zheng — Computer Science student at the University of Washington. Portfolio of software development, AI/ML, and creative technology projects.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Zeen Zheng — Portfolio",
    description:
      "Computer Science student at the University of Washington. Software development, AI/ML, and creative technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} dark h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans antialiased">
        <ThemeProvider>
          <SkipToContent />
          <div className="scanline-overlay" aria-hidden="true" />
          <div className="grain-overlay" aria-hidden="true" />
          <Navigation />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
