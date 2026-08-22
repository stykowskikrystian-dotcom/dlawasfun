import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://dlawasfun.vercel.app";
const seoTitle = "Fotobudka 360 Mazury – Giżycko, Mikołajki | dlawas.fun";
const seoDescription = "Fotobudka 360 i DJ na imprezę na Mazurach. Obsługujemy wesela i eventy w Giżycku, Mikołajkach, Rynie i Mrągowie. Poznaj ofertę dlawas.fun.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: seoTitle,
  description: seoDescription,
  applicationName: "dlawas.fun — Fotobudka 360 Mazury",
  authors: [{ name: "dlawas.fun", url: "https://www.dlawas.fun/" }],
  creator: "dlawas.fun",
  publisher: "dlawas.fun",
  category: "Oprawa imprez i fotobudka 360",
  keywords: [
    "fotobudka",
    "fotobudka 360",
    "fotobudka 360 Mazury",
    "fotobudka Giżycko",
    "fotobudka Mikołajki",
    "fotobudka Ryn",
    "fotobudka Mrągowo",
    "oprawa imprez Mazury",
    "DJ na imprezę",
    "DJ Giżycko",
    "DJ Mikołajki",
    "wesele Mazury",
    "dlawasfun",
    "dlawas.fun",
  ],
  alternates: {
    canonical: "/",
    languages: { "pl-PL": "/" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    type: "website",
    url: "/",
    siteName: "dlawas.fun",
    locale: "pl_PL",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Fotobudka 360 Mazury — dlawas.fun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    images: ["/og.png"],
  },
  other: {
    "geo.region": "PL-28",
    "geo.placename": "Mazury",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "dlawas.fun",
      alternateName: "dlawasfun",
      url: siteUrl,
      logo: `${siteUrl}/google-logo.png`,
      image: `${siteUrl}/og.png`,
      telephone: "+48 780 059 216",
      email: "kontakt@dlawas.fun",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+48 780 059 216",
        email: "kontakt@dlawas.fun",
        contactType: "customer service",
        areaServed: "PL",
        availableLanguage: "Polish",
      },
      sameAs: [
        "https://www.dlawas.fun/",
        "https://www.instagram.com/dlawas.fun/",
        "https://www.facebook.com/p/Dlawasfun-61572704770269/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Fotobudka 360 Mazury — dlawas.fun",
      alternateName: "dlawas.fun",
      inLanguage: "pl-PL",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: seoTitle,
      description: seoDescription,
      inLanguage: "pl-PL",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      primaryImageOfPage: { "@type": "ImageObject", url: `${siteUrl}/og.png` },
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#fotobudka-360`,
      name: "Fotobudka 360 Mazury",
      serviceType: "Fotobudka 360 na wesela, eventy i imprezy",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: ["Mazury", "Giżycko", "Mikołajki", "Ryn", "Mrągowo"],
      url: `${siteUrl}/#jak-to-dziala`,
    },
    {
      "@type": "Service",
      "@id": `${siteUrl}/#oprawa-imprez`,
      name: "DJ i oprawa imprez na Mazurach",
      serviceType: "DJ, wodzirej, nagłośnienie i oświetlenie imprez",
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: ["Mazury", "Giżycko", "Mikołajki", "Ryn", "Mrągowo"],
      url: `${siteUrl}/#wiecej-o-nas`,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
