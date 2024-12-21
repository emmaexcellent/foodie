import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";
import Newsletter from "@/components/shared/Newsletter";
import Footer from "@/components/shared/Footer";

const inter = Inter({
  subsets: ["latin"]
});


export const metadata: Metadata = {
  title: "Foodie",
  description: "Empowering Busy Professionals to Eat Well",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Newsletter />
        <Footer/>
      </body>
    </html>
  );
}
