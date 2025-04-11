import type React from "react"

export const metadata = {
  title: "Journal | Brea Knots",
  description: "Stories from the workshop, insights into our craft, and the journey behind each knot and purse.",
}

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
