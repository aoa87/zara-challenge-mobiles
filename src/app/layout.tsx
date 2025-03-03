import type { Metadata } from "next";

import MainHeader from "@/components/main-header/main-header";
import CartProvider from "@/shared/cart-provider";

import "./globals.css";

export const metadata: Metadata = {
  title: "ZARA Challenge",
  description: "A simple e-commerce app about mobile phones",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32">
        <CartProvider>
          <MainHeader />
          <main className="mt-20">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
