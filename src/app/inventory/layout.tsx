import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inventory",
  description:
    "Browse Summit Equipment's current inventory of tanker trailers, dry bulk trailers, tank containers, chassis, and tractors. Available for sale or lease.",
};

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
