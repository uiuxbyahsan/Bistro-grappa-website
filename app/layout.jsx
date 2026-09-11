import "./globals.css";
import { segoePrint, playfair, inter } from "./fonts";
import { LanguageProvider } from "@/lib/LanguageContext";

const SITE_URL = "https://bistrograppa.ba";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Bistro Grappa | Where Every Bite Tells a Story — Sarajevo",
  description:
    "Bistro Grappa is a riverside bistro on the Miljacka in the heart of Sarajevo — slow-roasted veal, fresh trout, sesame tuna, handmade pasta, all-day breakfast and a curated Herzegovinian wine list. Obala Kulina bana 10.",
  keywords: [
    "Bistro Grappa",
    "Sarajevo restaurant",
    "Sarajevo bistro",
    "Obala Kulina bana",
    "fine dining Sarajevo",
    "wine bar Sarajevo",
    "breakfast Sarajevo",
  ],
  authors: [{ name: "Bistro Grappa" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Bistro Grappa",
    title: "Bistro Grappa | A Sarajevo Bistro Born From Passion",
    description:
      "Fresh, bold, soulful bistro dining on the Miljacka river in Sarajevo. Reserve your table.",
    images: [{ url: "/assets/food/hero-tuna.jpg", width: 1011, height: 1100, alt: "Sesame-crusted tuna at Bistro Grappa" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bistro Grappa | Sarajevo",
    description: "Where every bite tells a story. Reserve a table on Obala Kulina bana 10.",
    images: ["/assets/food/hero-tuna.jpg"],
  },
  icons: {
    icon: "/assets/Logo.png",
    apple: "/assets/Logo.png",
  },
};

export const viewport = {
  themeColor: "#04301B",
  width: "device-width",
  initialScale: 1,
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Bistro Grappa",
  servesCuisine: ["Bistro", "Mediterranean", "Bosnian"],
  priceRange: "$$",
  image: `${SITE_URL}/assets/food/hero-tuna.jpg`,
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Obala Kulina bana 10",
    addressLocality: "Sarajevo",
    postalCode: "71000",
    addressCountry: "BA",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "12:00",
      closes: "23:00",
    },
  ],
  sameAs: ["https://www.instagram.com/bistrograppa/"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="bs"
      className={`${segoePrint.variable} ${playfair.variable} ${inter.variable}`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />

        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
