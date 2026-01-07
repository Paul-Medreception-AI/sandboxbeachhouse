import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";
import MobileCTA from "@/components/MobileCTA";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VacationRental",
  name: "The Sandbox Cottage",
  description: "Private beach house with pool in Holmes Beach, Anna Maria Island.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Holmes Beach",
    addressRegion: "FL",
    addressCountry: "US",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Private Pool" },
    { "@type": "LocationFeatureSpecification", name: "Walk to Beach" },
    { "@type": "LocationFeatureSpecification", name: "Pet Friendly" },
  ],
  image: ["https://sandboxbeachhouse.com/Front.webp"],
  url: "https://sandboxbeachhouse.com",
  sameAs: ["https://www.vrbo.com/4984875ha"],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sandboxbeachhouse.com"),
  title: "The Sandbox Cottage — Steps to the Beach",
  description:
    "Private beach house steps from the Gulf with a pool. Walkable, unique, and highly rated. Book Sandbox Beach House direct or check availability.",
  openGraph: {
    title: "The Sandbox Cottage — Steps to the Beach",
    description: "A private Holmes Beach house with pool, steps from the Gulf.",
    url: "https://sandboxbeachhouse.com",
    type: "website",
    images: [
      {
        url: "/Front.webp",
        width: 1200,
        height: 630,
        alt: "Sandbox Beach House",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KSMQ7QLN');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KSMQ7QLN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Nav />
        <div className="pt-16 pb-16 md:pb-0">{children}</div>
        <MobileCTA />
      </body>
    </html>
  );
}
