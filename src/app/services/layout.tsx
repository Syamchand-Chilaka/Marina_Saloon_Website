import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Pricing | Marina Barbershop Jersey City",
  description: "Explore Marina Barbershop's full menu of services including haircuts, fades, beard trims, and hot towel shaves. Affordable prices in Jersey City, NJ.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
