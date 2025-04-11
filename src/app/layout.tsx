import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google"
import { Toaster } from "@/components/ui/toaster";

import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata = {
  title: "Brea Knots | Handmade Knotted Purses",
  description: "Artisanal purses handcrafted with patience and care. Limited releases of unique, knotted designs.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable, playfair.variable)}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
