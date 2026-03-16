import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Marina Barbershop Jersey City",
  description: "See our work — fresh fades, classic cuts, beard trims, and more at Marina Barbershop in Jersey City, NJ.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
