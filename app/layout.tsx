import type { Metadata, Viewport } from "next";
import { Pixelify_Sans, Anton, Playfair_Display, Special_Elite, Caveat, Poppins, Instrument_Serif } from "next/font/google";
import "./globals.css";

const pixelifySans = Pixelify_Sans({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-pixel",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const playfairDisplay = Playfair_Display({
  weight: ["700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair",
});

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-special",
});

const caveat = Caveat({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-caveat",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tinkerhub-sngce.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "TinkerHub SNGCE — Student Maker Community",
  description: "Official campus chapter website for TinkerHub SNGCE. Empowering students with hands-on maker culture, study jams, open source, and technology learning in Kerala.",
  keywords: ["TinkerHub", "SNGCE", "Maker Culture", "Study Jam", "Kerala", "Open Source", "Student Community", "Tech Community", "Campus Club"],
  authors: [{ name: "TinkerHub SNGCE" }],
  creator: "TinkerHub SNGCE",
  publisher: "TinkerHub SNGCE",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "TinkerHub SNGCE",
    title: "TinkerHub SNGCE — Student Maker Community",
    description: "Everyone has access to the knowledge required to set the course for a better future.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "TinkerHub SNGCE",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TinkerHub SNGCE — Student Maker Community",
    description: "Empowering students with hands-on maker culture and technology learning",
    creator: "@TinkerHubSNGCE",
    images: [`${siteUrl}/og-image.jpg`],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/icon.jpg",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pixelifySans.variable} ${anton.variable} ${playfairDisplay.variable} ${specialElite.variable} ${caveat.variable} ${poppins.variable} ${instrumentSerif.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="TinkerHub SNGCE" />
        <meta name="og:type" content="website" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TinkerHub SNGCE",
              url: siteUrl,
              logo: `${siteUrl}/logo.png`,
              description: "Student Maker Community at SNGCE, Kerala",
              sameAs: [
                "https://twitter.com/TinkerHubSNGCE",
                "https://discord.gg/tinkerhub",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressRegion: "Kerala",
                addressLocality: "Kottayam",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "General",
                url: siteUrl,
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
