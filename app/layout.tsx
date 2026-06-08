import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/preloader";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jayashri Utrankar — ML Engineer & Full-Stack Developer",
  description:
    "B.Tech CSE '27 at Vishwakarma University. ML Intern at Wilo. Building production systems at the edge of AI and 3D web.",
  keywords: [
    "Jayashri Utrankar",
    "ML Engineer",
    "Full-Stack Developer",
    "React",
    "Three.js",
    "AI",
    "Portfolio",
  ],
  authors: [{ name: "Jayashri Utrankar" }],
  openGraph: {
    type: "website",
    title: "Jayashri Utrankar",
    description: "ML Engineer & Full-Stack Developer",
    siteName: "Jayashri Utrankar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayashri Utrankar",
    description: "ML Engineer & Full-Stack Developer",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans antialiased">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
