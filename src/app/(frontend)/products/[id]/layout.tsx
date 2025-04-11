import type React from "react"

export const metadata = {
  title: "Product Details | Brea Knots",
  description: "Explore our handmade knotted purses. Each piece is unique and crafted with care.",
}

export default function ProductDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
