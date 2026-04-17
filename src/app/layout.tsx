import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer"; // Import the Footer

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TenderTouch | Pure Organic Skincare",
  description: "Pure comfort for your baby's sensitive skin with organic donkey milk.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
         <Navbar />
        {children}
        <Footer /> {/* Add the Footer right here */}
      </body>
    </html>
  );
}