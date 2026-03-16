import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import LanguageProvider from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "Marina Barbershop | Premium Cuts in Jersey City, NJ",
  description:
    "Marina Barbershop — Premium cuts, fades, and beard services in Journal Square, Jersey City. Walk-ins welcome. Call (201) 736-3239.",
  metadataBase: new URL("https://marinabarbershop.com"),
  openGraph: {
    title: "Marina Barbershop | Premium Cuts in Jersey City, NJ",
    description:
      "Premium cuts, fades, and beard services in Journal Square, Jersey City. Walk-ins welcome.",
    url: "https://marinabarbershop.com",
    siteName: "Marina Barbershop",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marina Barbershop | Premium Cuts in Jersey City, NJ",
    description:
      "Premium cuts, fades, and beard services in Journal Square, Jersey City. Walk-ins welcome.",
  },
  other: {
    "theme-color": "#fbbf24",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://marinabarbershop.com",
  name: "Marina Barbershop",
  description:
    "Premium cuts, fades, and beard services in Journal Square, Jersey City.",
  url: "https://marinabarbershop.com",
  telephone: "+1-201-736-3239",
  address: {
    "@type": "PostalAddress",
    streetAddress: "865 Bergen Ave #2",
    addressLocality: "Jersey City",
    addressRegion: "NJ",
    postalCode: "07306",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.7317,
    longitude: -74.0657,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "11:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "11:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "11:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "11:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "11:00", closes: "21:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "11:00", closes: "15:00" },
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("marina-theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-stone-50 text-stone-800 dark:bg-stone-950 dark:text-stone-200 antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
