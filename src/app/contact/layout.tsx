import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Summit Equipment in Strathroy, Ontario. Get a quote on tanker trailers, dry bulk trailers, tank containers, and more. Buy, sell, or lease bulk transportation equipment.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
