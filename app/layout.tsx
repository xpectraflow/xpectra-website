import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/header";
import "./globals.css";

const googleAnalyticsMeasurementId = "G-YE3NVQDYYG";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xpectraflow.com"),
  title: "Xpectra | Infrastructure for mission-critical sensor data",
  description: "Xpectra standardizes and validates telemetry ingestion for engineering teams. Eliminate silent sensor failures and automate data cleaning.",
  openGraph: {
    title: "Xpectra | Infrastructure for mission-critical sensor data",
    description: "Infrastructure for mission-critical sensor data",
    url: "https://xpectraflow.com",
    siteName: "Xpectra",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xpectra Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xpectra | Infrastructure for mission-critical sensor data",
    description: "Infrastructure for mission-critical sensor data",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsMeasurementId}`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsMeasurementId}');
          `}
        </Script>
        <Script id="json-ld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Xpectra",
            "url": "https://xpectraflow.com",
            "logo": "https://xpectraflow.com/logo.svg",
            "description": "Infrastructure for mission-critical sensor data",
            "sameAs": [
              "https://x.com/XpectraF3662",
              "https://www.linkedin.com/company/xpectraflow",
              "https://github.com/xpectraflow/"
            ]
          })}
        </Script>
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
