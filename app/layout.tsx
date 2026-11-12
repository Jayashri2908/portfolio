import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Orbitron } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/preloader";
import MotionProvider from "@/components/motion-provider";
import { siteConfig } from "@/lib/data";
import { baseUrl } from "@/lib/site-url";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jetbrains",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const title = `${siteConfig.name} — ${siteConfig.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.fullName, url: siteConfig.social.github }],
  creator: siteConfig.fullName,
  keywords: [
    "Jayashri Utrankar",
    "ML Engineer",
    "Full-Stack Developer",
    "Machine Learning",
    "React",
    "FastAPI",
    "Computer Vision",
    "Vishwakarma University",
    "Pune",
    "Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: `${siteConfig.name} Portfolio`,
    title,
    description: siteConfig.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.fullName,
  alternateName: siteConfig.name,
  jobTitle: siteConfig.role,
  email: `mailto:${siteConfig.email}`,
  url: baseUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Vishwakarma University, Pune",
  },
  sameAs: [
    siteConfig.social.github,
    siteConfig.social.linkedin,
    siteConfig.social.leetcode,
  ],
  knowsLanguage: ["English", "Hindi", "Marathi"],
  knowsAbout: [
    "Machine Learning",
    "Computer Vision",
    "Full-Stack Development",
    "React",
    "FastAPI",
    "PyTorch",
    "Docker",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${jetbrains.variable} ${inter.variable}`}
    >
      <body className="bg-tron-bg font-sans text-tron-text antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:border focus:border-tron-cyan focus:bg-black focus:px-4 focus:py-2 focus:font-mono focus:text-[11px] focus:uppercase focus:tracking-[0.18em] focus:text-tron-cyan"
        >
          Skip to content
        </a>
        <div
          aria-hidden
          className="tron-vignette pointer-events-none fixed inset-0 z-0"
        />
        <div
          aria-hidden
          className="tron-scanlines pointer-events-none fixed inset-0 z-[80]"
        />
        <div
          aria-hidden
          className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-px animate-scan bg-gradient-to-r from-transparent via-tron-cyan/50 to-transparent"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <MotionProvider>
          <Preloader />
          <div className="relative z-10">{children}</div>
        </MotionProvider>
      </body>
    </html>
  );
}
