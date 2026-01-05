import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Compound | Know What You're Taking",
  description: "The complete guide to peptides, SARMs, nootropics, and performance compounds. Research-backed information, dosing protocols, and AI-powered guidance.",
  keywords: ["peptides", "SARMs", "nootropics", "BPC-157", "MK-677", "performance", "biohacking"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
