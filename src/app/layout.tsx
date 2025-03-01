import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

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
        <MainHeader />
        <main className="flex-grow mt-20">{children}</main>
      </body>
    </html>
  );
}
