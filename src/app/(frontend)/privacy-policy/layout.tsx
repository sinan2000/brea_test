import type React from "react"

export const metadata = {
  title: "Privacy Policy | Brea Knots",
  description: "Learn about how Brea Knots collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
