// components/Navbar.tsx
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Journal" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif text-[#3c3a38] hover:opacity-90">
            Brea Knots
          </Link>

          <div className="hidden md:flex items-center space-x-6 text-[#3c3a38]">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm transition-colors ${pathname === href
                  ? "font-medium border-b border-[#d4a89a]"
                  : "hover:underline"
                  }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <Button
            variant="outline"
            className="rounded-full border-[#d4a89a] text-[#d4a89a] hover:bg-[#d4a89a] hover:text-white"
          >
            Join the List
          </Button>
        </nav>
      </div>
    </header>
  )
}
