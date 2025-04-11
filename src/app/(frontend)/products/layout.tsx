import type React from "react"

export const metadata = {
  title: "Products | Brea Knots",
  description: "Browse our collection of handmade knotted purses. Each piece is unique and crafted with care.",
}

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
