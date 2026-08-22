import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dlawas.fun"),
  title: "Fotobudka 360° | DlaWas.fun",
  description: "Fotobudka 360° na wesela, eventy i imprezy. Dynamiczne klipy, efekty slow motion i szybki odbiór filmu na telefon.",
  openGraph: {
    title: "Fotobudka 360° | DlaWas.fun",
    description: "Twoja impreza w pełnym obrocie. Dynamiczne klipy 360° gotowe do udostępnienia.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Fotobudka 360° — Twoja impreza w pełnym obrocie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fotobudka 360° | DlaWas.fun",
    description: "Twoja impreza w pełnym obrocie.",
    images: ["/og.png"],
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
  "@type": "Organization",
  name: "DlaWas.fun",
  url: "https://www.dlawas.fun/",
  logo: "https://www.dlawas.fun/google-logo.png",
  telephone: "+48 780 059 216",
  email: "kontakt@dlawas.fun",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+48 780 059 216",
    email: "kontakt@dlawas.fun",
    contactType: "customer service",
    availableLanguage: "Polish",
  },
  sameAs: [
    "https://www.instagram.com/dlawas.fun/",
    "https://www.facebook.com/p/Dlawasfun-61572704770269/",
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
