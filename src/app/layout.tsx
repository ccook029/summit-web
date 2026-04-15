import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Summit Equipment | Bulk Transportation Equipment — Buy, Sell, Lease",
    template: "%s | Summit Equipment",
  },
  description:
    "Canada's trusted source for bulk transportation equipment. Buy, sell, or lease tanker trailers, dry bulk trailers, tank containers, chassis, and tractors. Based in Strathroy, Ontario.",
  keywords: [
    "tanker trailers",
    "dry bulk trailers",
    "tank containers",
    "transportation equipment",
    "buy trailers",
    "lease trailers",
    "Strathroy Ontario",
    "bulk transport",
    "chemical tanker",
    "food grade tanker",
    "Summit Equipment",
  ],
  openGraph: {
    title: "Summit Equipment | Bulk Transportation Equipment",
    description:
      "Buy, sell, or lease tanker trailers, dry bulk trailers, tank containers, and more. Strathroy, Ontario.",
    type: "website",
    locale: "en_CA",
    siteName: "Summit Equipment",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
