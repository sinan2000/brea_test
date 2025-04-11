"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Lock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-[#f9f6f2] flex flex-col">
      <header className="container mx-auto px-4 py-6">
        <Link href="/" className="text-2xl font-serif text-[#3c3a38] hover:opacity-90">
          Brea Knots
        </Link>
      </header>

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-xl shadow-sm border border-[#e9e2d9] overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="text-center mb-8">
                <h1 className="font-serif text-2xl md:text-3xl text-[#3c3a38] mb-2">Welcome Back</h1>
                <p className="text-[#3c3a38]/70">Sign in to your Brea Knots account</p>
              </div>

              <form className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    className="border-[#e9e2d9] focus:border-[#d4a89a] focus:ring-[#d4a89a]"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link href="/auth/forgot-password" className="text-xs text-[#d4a89a] hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Your password"
                      className="border-[#e9e2d9] focus:border-[#d4a89a] focus:ring-[#d4a89a] pr-10"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#3c3a38]/50 hover:text-[#3c3a38]"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm font-normal">
                    Remember me
                  </Label>
                </div>

                <Button className="w-full rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white">Sign In</Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-[#3c3a38]/70">
                  Don&apos;t have an account?{" "}
                  <Link href="/auth/sign-up" className="text-[#d4a89a] hover:underline">
                    Create one
                  </Link>
                </p>
              </div>

              <div className="relative mt-8">
                <Separator />
                <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-[#3c3a38]/50">
                  OR
                </span>
              </div>

              <div className="mt-8">
                <Button
                  variant="outline"
                  className="w-full border-[#e9e2d9] text-[#3c3a38] hover:bg-[#f9f6f2] hover:text-[#3c3a38] hover:border-[#e9e2d9]"
                >
                  Continue as Guest
                </Button>
              </div>
            </div>

            <div className="p-6 bg-[#f9f6f2] border-t border-[#e9e2d9] flex items-center justify-center gap-2">
              <Lock className="h-4 w-4 text-[#d4a89a]" />
              <p className="text-sm text-[#3c3a38]">Secure login with 256-bit encryption</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-[#3c3a38]/70">
              By signing in, you agree to our{" "}
              <Link href="/terms" className="text-[#d4a89a] hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="text-[#d4a89a] hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-[#3c3a38]/70">
        <p>© {new Date().getFullYear()} Brea Knots. All rights reserved.</p>
      </footer>
    </div>
  )
}
