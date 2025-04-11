import type React from "react"

export const metadata = {
  title: "My Account | Brea Knots",
  description: "Manage your orders, addresses, and account settings for your Brea Knots account.",
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
