import type React from "react"

export const metadata = {
  title: "Checkout | Brea Knots",
  description: "Complete your purchase of handmade knotted purses from Brea Knots.",
}

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
