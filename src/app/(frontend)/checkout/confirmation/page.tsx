import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Instagram, Mail, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// Mock order data
const order = {
  id: "BK-2025-04-11",
  date: "April 11, 2025",
  items: [
    {
      id: 1,
      name: "Dune Knot",
      price: 189,
      color: "Natural",
      size: "Medium",
      style: "Crossbody",
      quantity: 1,
      image: "/placeholder.svg?height=600&width=600&text=Dune Knot",
    },
  ],
  shipping: 5,
  total: 194,
  shippingAddress: {
    name: "Maria Johnson",
    address: "123 Main Street, Apt 4B",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "United States",
  },
  shippingMethod: "Standard Shipping (4-7 business days)",
  estimatedDelivery: "April 16-19, 2025",
}

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-[#f9f6f2]">
      <header className="container mx-auto px-4 py-6 border-b border-[#e9e2d9]">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif text-[#3c3a38] hover:opacity-90">
            Brea Knots
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#d4a89a]/20 mb-6">
              <Check className="h-8 w-8 text-[#d4a89a]" />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl text-[#3c3a38] mb-3">
              Thank you, {order.shippingAddress.name.split(" ")[0]}!
            </h1>
            <p className="text-[#3c3a38] text-lg">Your handmade purse is on its way to you.</p>
            <p className="text-[#3c3a38] mt-2">
              We'll send you an email once it ships. Estimated delivery: {order.estimatedDelivery}.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-[#e9e2d9] overflow-hidden mb-8">
            <div className="p-4 md:p-6 border-b border-[#e9e2d9]">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-serif text-xl text-[#3c3a38]">Order Summary</h2>
                <span className="text-sm text-[#3c3a38]/70">Order #{order.id}</span>
              </div>

              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-20 w-20 rounded-md overflow-hidden flex-shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium text-[#3c3a38]">{item.name}</h3>
                        <p className="font-medium text-[#3c3a38]">${item.price}</p>
                      </div>
                      <p className="text-sm text-[#3c3a38]/70">
                        {item.color}, {item.size}, {item.style}
                      </p>
                      <p className="text-sm text-[#3c3a38]/70 mt-1">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-[#3c3a38]">Subtotal</span>
                  <span className="text-[#3c3a38]">
                    ${order.items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#3c3a38]">Shipping</span>
                  <span className="text-[#3c3a38]">${order.shipping.toFixed(2)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-medium">
                  <span className="text-[#3c3a38]">Total</span>
                  <span className="text-[#3c3a38]">${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6 border-b border-[#e9e2d9]">
              <h2 className="font-serif text-xl text-[#3c3a38] mb-4">Shipping Information</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-[#3c3a38] mb-2">Shipping Address</h3>
                  <p className="text-sm text-[#3c3a38]">{order.shippingAddress.name}</p>
                  <p className="text-sm text-[#3c3a38]">{order.shippingAddress.address}</p>
                  <p className="text-sm text-[#3c3a38]">
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
                  </p>
                  <p className="text-sm text-[#3c3a38]">{order.shippingAddress.country}</p>
                </div>
                <div>
                  <h3 className="font-medium text-[#3c3a38] mb-2">Shipping Method</h3>
                  <p className="text-sm text-[#3c3a38]">{order.shippingMethod}</p>
                  <p className="text-sm text-[#3c3a38] mt-2">
                    <span className="font-medium">Estimated Delivery:</span> {order.estimatedDelivery}
                  </p>
                  <div className="flex items-center gap-2 mt-4 p-2 bg-[#f9f6f2] rounded-md">
                    <Truck className="h-4 w-4 text-[#d4a89a]" />
                    <p className="text-sm text-[#3c3a38]">
                      We'll email you tracking information once your order ships.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6">
              <h2 className="font-serif text-xl text-[#3c3a38] mb-4">Need Help?</h2>
              <p className="text-sm text-[#3c3a38] mb-4">
                If you have any questions about your order, please contact us at{" "}
                <a href="mailto:hello@breaknots.com" className="text-[#d4a89a] hover:underline">
                  hello@breaknots.com
                </a>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="outline"
                  className="border-[#d4a89a] text-[#d4a89a] hover:bg-[#d4a89a] hover:text-white"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email Us
                </Button>
                <Button
                  variant="outline"
                  className="border-[#d4a89a] text-[#d4a89a] hover:bg-[#d4a89a] hover:text-white"
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  Follow on Instagram
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button className="rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white">
                Continue Shopping
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-sm text-[#3c3a38]/70 mt-12">
        <p>© {new Date().getFullYear()} Brea Knots. All rights reserved.</p>
      </footer>
    </div>
  )
}
