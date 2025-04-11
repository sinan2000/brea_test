import type React from "react"

export const metadata = {
  title: "Account | Brea Knots",
  description: "Sign in or create an account to manage your Brea Knots orders and preferences.",
}

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
