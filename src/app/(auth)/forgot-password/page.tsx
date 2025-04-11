import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ForgotPasswordPage() {
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
              <div className="mb-2">
                <Link href="/auth/sign-in" className="inline-flex items-center text-[#d4a89a] hover:underline">
                  <ArrowLeft className="h-3 w-3 mr-1" />
                  Back to Sign In
                </Link>
              </div>

              <div className="text-center mb-8">
                <h1 className="font-serif text-2xl md:text-3xl text-[#3c3a38] mb-2">Reset Your Password</h1>
                <p className="text-[#3c3a38]/70">
                  Enter your email address and we'll send you a link to reset your password.
                </p>
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

                <Button className="w-full rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white">
                  Send Reset Link
                </Button>
              </form>

              <div className="mt-8 p-4 bg-[#f9f6f2] rounded-lg border border-[#e9e2d9] text-sm text-[#3c3a38]">
                <p>
                  If you don't receive an email within a few minutes, please check your spam folder or{" "}
                  <Link href="/contact" className="text-[#d4a89a] hover:underline">
                    contact our support team
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-[#3c3a38]/70">
        <p>© {new Date().getFullYear()} Brea Knots. All rights reserved.</p>
      </footer>
    </div>
  )
}
