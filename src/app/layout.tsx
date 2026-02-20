import type { Metadata } from "next";
import { Inter, Playfair_Display, Permanent_Marker } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-aloja", // Keeping variable name for semantic consistency with request
});

export const metadata: Metadata = {
  title: "Yash Surma - Generative Design",
  description: "Portfolio of Yash Surma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${permanentMarker.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
