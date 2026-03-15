import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Marina Barbershop | Premium Cuts in Jersey City, NJ",
  description:
    "Marina Barbershop — Premium cuts, fades, and beard services in Journal Square, Jersey City. Walk-ins welcome. Call (201) 736-3239.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-zinc-950 text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
