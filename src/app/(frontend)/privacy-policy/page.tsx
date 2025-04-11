import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f9f6f2] flex flex-col">

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-[#d4a89a] hover:underline">
            <ArrowLeft className="h-3 w-3 mr-1" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="font-serif text-3xl md:text-4xl text-[#3c3a38] mb-4">Privacy Policy</h1>
            <p className="text-[#3c3a38]/70">Last updated: April 11, 2025</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-[#e9e2d9] overflow-hidden mb-12">
            {/* Table of Contents */}
            <div className="p-6 md:p-8 border-b border-[#e9e2d9]">
              <h2 className="font-serif text-xl text-[#3c3a38] mb-4">Table of Contents</h2>
              <nav className="space-y-2">
                {[
                  { id: "introduction", title: "Introduction" },
                  { id: "information-we-collect", title: "Information We Collect" },
                  { id: "how-we-use-information", title: "How We Use Your Information" },
                  { id: "information-sharing", title: "Information Sharing and Disclosure" },
                  { id: "your-rights", title: "Your Rights and Choices" },
                  { id: "data-security", title: "Data Security" },
                  { id: "international-transfers", title: "International Data Transfers" },
                  { id: "children-privacy", title: "Children's Privacy" },
                  { id: "changes", title: "Changes to This Privacy Policy" },
                  { id: "contact-us", title: "Contact Us" },
                ].map((section) => (
                  <div key={section.id}>
                    <a href={`#${section.id}`} className="text-[#d4a89a] hover:underline block py-1 transition-colors">
                      {section.title}
                    </a>
                  </div>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="prose prose-stone max-w-none">
                <section id="introduction" className="mb-10">
                  <h2 className="font-serif text-2xl text-[#3c3a38] mb-4">Introduction</h2>
                  <p className="text-[#3c3a38] mb-4">
                    At Brea Knots, we value your privacy and are committed to protecting your personal information. This
                    Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
                    our website, make a purchase, or interact with us in any way.
                  </p>
                  <p className="text-[#3c3a38]">
                    We respect that your personal information belongs to you, and we take our responsibility to protect
                    it seriously. Please read this policy carefully to understand our practices regarding your personal
                    data.
                  </p>
                </section>

                <Separator className="my-8" />

                <section id="information-we-collect" className="mb-10">
                  <h2 className="font-serif text-2xl text-[#3c3a38] mb-4">Information We Collect</h2>
                  <p className="text-[#3c3a38] mb-4">
                    We collect information that you provide directly to us, information we collect automatically when
                    you use our services, and information from third-party sources.
                  </p>

                  <h3 className="font-serif text-xl text-[#3c3a38] mt-6 mb-3">Information You Provide to Us</h3>
                  <ul className="list-disc pl-6 space-y-2 text-[#3c3a38]">
                    <li>
                      <strong>Personal Information:</strong> When you create an account, place an order, or sign up for
                      our newsletter, we collect information such as your name, email address, shipping address, billing
                      address, and phone number.
                    </li>
                    <li>
                      <strong>Payment Information:</strong> When you make a purchase, our payment processor collects
                      your payment information. We do not store complete credit card details on our servers.
                    </li>
                    <li>
                      <strong>Communications:</strong> If you contact us directly, we may receive additional information
                      about you, such as your name, email address, the contents of your message, and any other
                      information you choose to provide.
                    </li>
                  </ul>

                  <h3 className="font-serif text-xl text-[#3c3a38] mt-6 mb-3">Information We Collect Automatically</h3>
                  <p className="text-[#3c3a38] mb-4">
                    When you visit our website, we automatically collect certain information about your device and your
                    interaction with our website:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#3c3a38]">
                    <li>
                      <strong>Device Information:</strong> We collect device information such as your IP address,
                      browser type, operating system, and device identifiers.
                    </li>
                    <li>
                      <strong>Usage Information:</strong> We collect information about your interactions with our
                      website, such as the pages you visit, the time and duration of your visit, and the links you
                      click.
                    </li>
                    <li>
                      <strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking
                      technologies to track activity on our website and hold certain information. You can instruct your
                      browser to refuse all cookies or to indicate when a cookie is being sent.
                    </li>
                  </ul>
                </section>

                <Separator className="my-8" />

                <section id="how-we-use-information" className="mb-10">
                  <h2 className="font-serif text-2xl text-[#3c3a38] mb-4">How We Use Your Information</h2>
                  <p className="text-[#3c3a38] mb-4">
                    We use the information we collect for various purposes, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-[#3c3a38]">
                    <li>To process and fulfill your orders</li>
                    <li>To provide, maintain, and improve our services</li>
                    <li>To communicate with you about products, services, and events</li>
                    <li>To send you technical notices, updates, security alerts, and support messages</li>
                    <li>To respond to your comments, questions, and customer service requests</li>
                    <li>To monitor and analyze trends, usage, and activities in connection with our services</li>
                    <li>To detect, prevent, and address technical issues</li>
                    <li>To comply with legal obligations</li>
                  </ul>
                </section>

                {/* Additional sections would continue here */}
                <Separator className="my-8" />

                <section id="contact-us" className="mb-6">
                  <h2 className="font-serif text-2xl text-[#3c3a38] mb-4">Contact Us</h2>
                  <p className="text-[#3c3a38] mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <div className="bg-[#f9f6f2] p-4 rounded-lg border border-[#e9e2d9]">
                    <p className="text-[#3c3a38] mb-1">
                      <strong>Email:</strong> privacy@breaknots.com
                    </p>
                    <p className="text-[#3c3a38] mb-1">
                      <strong>Postal Address:</strong> Brea Knots, 123 Artisan Street, Bucharest, Romania
                    </p>
                    <p className="text-[#3c3a38]">
                      <strong>Phone:</strong> +40 123 456 789
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <p className="text-[#3c3a38]/70 mb-6">
              If you have any questions about our privacy practices, please don't hesitate to contact us.
            </p>
            <Link href="/contact">
              <Button className="rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>

      <footer className="bg-[#3c3a38] text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl mb-4">Brea Knots</h3>
              <p className="text-sm text-white/80 mb-4">Handmade in Romania</p>
              <p className="text-sm text-white/80">Eco-conscious materials</p>
              <p className="italic text-sm mt-4">"Knots, not factories."</p>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-4">Navigate</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-sm text-white/80 hover:text-white">
                  Home
                </Link>
                <Link href="/products" className="block text-sm text-white/80 hover:text-white">
                  Products
                </Link>
                <Link href="/privacy-policy" className="block text-sm text-white/80 hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-sm text-white/80 hover:text-white">
                  Terms of Service
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-4">Contact</h3>
              <p className="text-sm text-white/80 mb-4">
                Have questions? We're here to help with any inquiries about our products or policies.
              </p>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="rounded-full border-white/20 text-white hover:bg-white/10 hover:border-white/30"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          <Separator className="my-8 bg-white/20" />

          <div className="text-center text-sm text-white/60">
            <p>© {new Date().getFullYear()} Brea Knots. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
