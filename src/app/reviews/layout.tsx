import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews | Marina Barbershop Jersey City",
  description: "Read what customers are saying about Marina Barbershop in Jersey City, NJ. 5-star reviews for cuts, fades, and beard services.",
};

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
