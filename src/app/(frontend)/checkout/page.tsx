"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  CreditCard,
  Info,
  Lock,
  ShoppingBag,
  Truck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock cart data
const cartItems = [
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
]

// Mock countries for shipping
const countries = [
  { code: "RO", name: "Romania" },
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "DE", name: "Germany" },
  { code: "FR", name: "France" },
  { code: "IT", name: "Italy" },
  { code: "ES", name: "Spain" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
  { code: "JP", name: "Japan" },
].sort((a, b) => a.name.localeCompare(b.name))

// Shipping methods
const shippingMethods = [
  {
    id: "standard",
    name: "Standard Shipping",
    price: 5,
    description: "4-7 business days",
    estimatedDelivery: "April 16-19",
  },
  {
    id: "express",
    name: "Express Shipping",
    price: 10,
    description: "2-3 business days",
    estimatedDelivery: "April 12-13",
  },
]

// Checkout steps
const steps = [
  { id: "cart", name: "Cart" },
  { id: "information", name: "Information" },
  { id: "shipping", name: "Shipping" },
  { id: "payment", name: "Payment" },
]

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState("cart")
  const [cartOpen, setCartOpen] = useState(true)
  const [shippingMethod, setShippingMethod] = useState(shippingMethods[0].id)
  const [giftWrap, setGiftWrap] = useState(false)
  const [includeNote, setIncludeNote] = useState(false)

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = shippingMethods.find((method) => method.id === shippingMethod)?.price || 0
  const total = subtotal + shipping + (giftWrap ? 5 : 0)

  const handleNextStep = () => {
    const currentIndex = steps.findIndex((step) => step.id === currentStep)
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1].id)
      window.scrollTo(0, 0)
    }
  }

  const handlePreviousStep = () => {
    const currentIndex = steps.findIndex((step) => step.id === currentStep)
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id)
      window.scrollTo(0, 0)
    }
  }

  return (
    <div className="min-h-screen bg-[#f9f6f2]">
      <header className="container mx-auto px-4 py-6 border-b border-[#e9e2d9]">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif text-[#3c3a38] hover:opacity-90">
            Brea Knots
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div
                  className={`flex items-center justify-center h-6 w-6 rounded-full text-xs ${currentStep === step.id
                      ? "bg-[#d4a89a] text-white"
                      : steps.findIndex((s) => s.id === currentStep) > index
                        ? "bg-[#d4a89a] text-white"
                        : "bg-[#e9e2d9] text-[#3c3a38]"
                    }`}
                >
                  {steps.findIndex((s) => s.id === currentStep) > index ? <Check className="h-3 w-3" /> : index + 1}
                </div>
                <span
                  className={`ml-2 text-sm ${currentStep === step.id ? "text-[#3c3a38] font-medium" : "text-[#3c3a38]/70"
                    }`}
                >
                  {step.name}
                </span>
                {index < steps.length - 1 && <div className="mx-2 h-px w-4 bg-[#e9e2d9]"></div>}
              </div>
            ))}
          </div>
          <div className="md:hidden">
            <span className="text-sm text-[#3c3a38]">
              Step {steps.findIndex((step) => step.id === currentStep) + 1} of {steps.length}
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Checkout Flow */}
          <div className="md:col-span-2 order-2 md:order-1">
            {/* Cart Review Step */}
            {currentStep === "cart" && (
              <div className="space-y-8">
                <div>
                  <h1 className="font-serif text-2xl md:text-3xl text-[#3c3a38] mb-6">Your Cart</h1>

                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-4 pb-6 border-b border-[#e9e2d9]">
                        <div className="relative h-24 w-24 rounded-md overflow-hidden flex-shrink-0">
                          <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-serif text-lg text-[#3c3a38]">{item.name}</h3>
                            <p className="font-medium text-[#3c3a38]">${item.price}</p>
                          </div>
                          <p className="text-sm text-[#3c3a38]/70 mb-2">
                            {item.color}, {item.size}, {item.style}
                          </p>
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center border border-[#e9e2d9] rounded-md">
                              <button className="px-2 py-1 text-[#3c3a38]">
                                <ChevronDown className="h-4 w-4" />
                              </button>
                              <span className="px-2 py-1 text-[#3c3a38]">{item.quantity}</span>
                              <button className="px-2 py-1 text-[#3c3a38]">
                                <ChevronUp className="h-4 w-4" />
                              </button>
                            </div>
                            <button className="text-sm text-[#d4a89a] hover:underline">Remove</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-white rounded-lg border border-[#e9e2d9]">
                    <p className="text-sm text-[#3c3a38] italic">
                      This purse is handmade just for you. Ready to ship within 3 days.
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Link href="/products" className="flex items-center text-[#d4a89a] hover:underline">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Continue Shopping
                  </Link>
                  <Button onClick={handleNextStep} className="rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white">
                    Continue to Information
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {/* Customer Information Step */}
            {currentStep === "information" && (
              <div className="space-y-8">
                <div>
                  <h1 className="font-serif text-2xl md:text-3xl text-[#3c3a38] mb-6">Contact Information</h1>

                  <div className="space-y-6">
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Your email address" className="border-[#e9e2d9]" />
                        <div className="flex items-center gap-2 mt-1">
                          <Checkbox id="newsletter" />
                          <Label htmlFor="newsletter" className="text-sm font-normal">
                            Keep me updated about new collections and drops
                          </Label>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h2 className="font-serif text-xl text-[#3c3a38] mb-4">Shipping Address</h2>
                      <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" placeholder="First name" className="border-[#e9e2d9]" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" placeholder="Last name" className="border-[#e9e2d9]" />
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="country">Country/Region</Label>
                          <Select defaultValue="RO">
                            <SelectTrigger className="border-[#e9e2d9]">
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              {countries.map((country) => (
                                <SelectItem key={country.code} value={country.code}>
                                  {country.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="address">Address</Label>
                          <Input id="address" placeholder="Street address" className="border-[#e9e2d9]" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="apartment" className="text-sm text-[#3c3a38]/70">
                            Apartment, suite, etc. (optional)
                          </Label>
                          <Input id="apartment" placeholder="Apartment, suite, etc." className="border-[#e9e2d9]" />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="city">City</Label>
                            <Input id="city" placeholder="City" className="border-[#e9e2d9]" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="state">State/Province</Label>
                            <Input id="state" placeholder="State" className="border-[#e9e2d9]" />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="zip">Postal Code</Label>
                            <Input id="zip" placeholder="Postal code" className="border-[#e9e2d9]" />
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="phone">Phone (for delivery updates)</Label>
                          <Input id="phone" type="tel" placeholder="Phone number" className="border-[#e9e2d9]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="ghost" onClick={handlePreviousStep} className="text-[#3c3a38] hover:bg-[#e9e2d9]/50">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Return to Cart
                  </Button>
                  <Button onClick={handleNextStep} className="rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white">
                    Continue to Shipping
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {/* Shipping Method Step */}
            {currentStep === "shipping" && (
              <div className="space-y-8">
                <div>
                  <h1 className="font-serif text-2xl md:text-3xl text-[#3c3a38] mb-6">Shipping Method</h1>

                  <div className="space-y-6">
                    <div className="p-4 bg-white rounded-lg border border-[#e9e2d9]">
                      <RadioGroup value={shippingMethod} onValueChange={setShippingMethod} className="space-y-3">
                        {shippingMethods.map((method) => (
                          <div
                            key={method.id}
                            className={`flex items-center justify-between p-3 rounded-md border ${shippingMethod === method.id ? "border-[#d4a89a] bg-[#d4a89a]/5" : "border-[#e9e2d9]"
                              }`}
                          >
                            <div className="flex items-start gap-3">
                              <RadioGroupItem value={method.id} id={method.id} />
                              <div>
                                <Label htmlFor={method.id} className="font-medium">
                                  {method.name}
                                </Label>
                                <p className="text-sm text-[#3c3a38]/70">{method.description}</p>
                                <p className="text-sm text-[#3c3a38] mt-1">
                                  Estimated delivery: <span className="font-medium">{method.estimatedDelivery}</span>
                                </p>
                              </div>
                            </div>
                            <span className="font-medium">${method.price}</span>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div className="space-y-4">
                      <h2 className="font-serif text-xl text-[#3c3a38]">Additional Options</h2>

                      <div className="p-4 bg-white rounded-lg border border-[#e9e2d9] space-y-4">
                        <div className="flex items-start gap-3">
                          <Checkbox
                            id="gift-wrap"
                            checked={giftWrap}
                            onCheckedChange={(checked) => setGiftWrap(checked === true)}
                          />
                          <div>
                            <Label htmlFor="gift-wrap" className="font-medium">
                              Gift Wrap (+$5)
                            </Label>
                            <p className="text-sm text-[#3c3a38]/70">
                              We'll wrap your purse in our signature linen paper with a handmade knot.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Checkbox
                            id="include-note"
                            checked={includeNote}
                            onCheckedChange={(checked) => setIncludeNote(checked === true)}
                          />
                          <div className="flex-1">
                            <Label htmlFor="include-note" className="font-medium">
                              Include a Handwritten Note
                            </Label>
                            <p className="text-sm text-[#3c3a38]/70 mb-2">
                              We'll include a personal handwritten note with your order.
                            </p>
                            {includeNote && (
                              <Textarea
                                placeholder="Your message (max 200 characters)"
                                className="border-[#e9e2d9] h-24"
                                maxLength={200}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="ghost" onClick={handlePreviousStep} className="text-[#3c3a38] hover:bg-[#e9e2d9]/50">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Return to Information
                  </Button>
                  <Button onClick={handleNextStep} className="rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white">
                    Continue to Payment
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {/* Payment Step */}
            {currentStep === "payment" && (
              <div className="space-y-8">
                <div>
                  <h1 className="font-serif text-2xl md:text-3xl text-[#3c3a38] mb-6">Payment</h1>

                  <div className="space-y-6">
                    <div className="p-6 bg-white rounded-lg border border-[#e9e2d9]">
                      <div className="flex items-center gap-2 mb-6">
                        <Lock className="h-4 w-4 text-[#d4a89a]" />
                        <span className="text-sm text-[#3c3a38]">Your payment is secure and encrypted</span>
                      </div>

                      <div className="space-y-6">
                        <div className="grid gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="card-number">Card Number</Label>
                            <div className="relative">
                              <Input
                                id="card-number"
                                placeholder="1234 5678 9012 3456"
                                className="border-[#e9e2d9] pl-10"
                              />
                              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#3c3a38]/50" />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="expiry">Expiration Date</Label>
                              <Input id="expiry" placeholder="MM / YY" className="border-[#e9e2d9]" />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="cvc">Security Code</Label>
                              <Input id="cvc" placeholder="CVC" className="border-[#e9e2d9]" />
                            </div>
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="name-on-card">Name on Card</Label>
                            <Input
                              id="name-on-card"
                              placeholder="Name as it appears on card"
                              className="border-[#e9e2d9]"
                            />
                          </div>
                        </div>

                        <div className="flex items-center gap-2 pt-4 border-t border-[#e9e2d9]">
                          <div className="flex gap-2">
                            <div className="h-8 w-12 bg-[#e9e2d9] rounded flex items-center justify-center text-xs font-medium">
                              VISA
                            </div>
                            <div className="h-8 w-12 bg-[#e9e2d9] rounded flex items-center justify-center text-xs font-medium">
                              MC
                            </div>
                            <div className="h-8 w-12 bg-[#e9e2d9] rounded flex items-center justify-center text-xs font-medium">
                              AMEX
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-white rounded-lg border border-[#e9e2d9]">
                      <div className="flex items-start gap-3">
                        <Info className="h-4 w-4 text-[#d4a89a] mt-0.5" />
                        <p className="text-sm text-[#3c3a38]">
                          By completing your purchase, you agree to our{" "}
                          <Link href="#" className="text-[#d4a89a] hover:underline">
                            Terms of Service
                          </Link>
                          . We offer free returns within 14 days if the item is unused.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button variant="ghost" onClick={handlePreviousStep} className="text-[#3c3a38] hover:bg-[#e9e2d9]/50">
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Return to Shipping
                  </Button>
                  <Link href="/checkout/confirmation">
                    <Button className="rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white">
                      Complete Purchase
                      <Lock className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1 order-1 md:order-2">
            <div className="bg-white rounded-lg border border-[#e9e2d9] overflow-hidden sticky top-6">
              <div
                className="p-4 border-b border-[#e9e2d9] flex justify-between items-center cursor-pointer md:cursor-default"
                onClick={() => setCartOpen(!cartOpen)}
              >
                <div className="flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4 text-[#d4a89a]" />
                  <h2 className="font-serif text-lg text-[#3c3a38]">Order Summary</h2>
                </div>
                <ChevronDown className={`h-4 w-4 md:hidden transition-transform ${cartOpen ? "rotate-180" : ""}`} />
              </div>

              <div className={`${cartOpen ? "block" : "hidden md:block"}`}>
                <div className="p-4 space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        <div className="absolute top-0 right-0 h-5 w-5 bg-[#3c3a38] rounded-full flex items-center justify-center text-white text-xs">
                          {item.quantity}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium text-[#3c3a38]">{item.name}</h3>
                        <p className="text-xs text-[#3c3a38]/70">
                          {item.color}, {item.size}
                        </p>
                        <p className="text-sm font-medium text-[#3c3a38] mt-1">${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="p-4">
                  <Accordion type="single" collapsible defaultValue="discount">
                    <AccordionItem value="discount" className="border-b-0">
                      <AccordionTrigger className="py-2 text-[#3c3a38] hover:no-underline">
                        <span className="text-sm">Add discount code</span>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex gap-2">
                          <Input placeholder="Discount code" className="border-[#e9e2d9]" />
                          <Button variant="outline" className="border-[#d4a89a] text-[#d4a89a]">
                            Apply
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                <Separator />

                <div className="p-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#3c3a38]">Subtotal</span>
                    <span className="text-[#3c3a38]">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#3c3a38]">Shipping</span>
                    <span className="text-[#3c3a38]">${shipping.toFixed(2)}</span>
                  </div>
                  {giftWrap && (
                    <div className="flex justify-between text-sm">
                      <span className="text-[#3c3a38]">Gift Wrap</span>
                      <span className="text-[#3c3a38]">$5.00</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span className="text-[#3c3a38]">Total</span>
                    <span className="text-[#3c3a38]">${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="p-4 bg-[#f9f6f2] border-t border-[#e9e2d9] flex items-center gap-2">
                  <Truck className="h-4 w-4 text-[#d4a89a]" />
                  <p className="text-sm text-[#3c3a38]">Free shipping on orders over $200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
