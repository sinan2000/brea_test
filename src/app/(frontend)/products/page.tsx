import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Filter, Heart, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

// Mock product data
const products = [
  {
    id: 1,
    name: "Dune Knot",
    price: 189,
    color: "Natural",
    size: "Medium",
    style: "Crossbody",
    status: "Available",
    remaining: 1,
    featured: true,
    instagram: true,
    images: [
      "/placeholder.svg?height=600&width=600&text=Dune Knot",
      "/placeholder.svg?height=600&width=600&text=Dune Knot Alt",
    ],
  },
  {
    id: 2,
    name: "Midnight Flow",
    price: 219,
    color: "Bold",
    size: "Large",
    style: "Shoulder",
    status: "Sold Out",
    featured: false,
    instagram: false,
    images: [
      "/placeholder.svg?height=600&width=600&text=Midnight Flow",
      "/placeholder.svg?height=600&width=600&text=Midnight Flow Alt",
    ],
  },
  {
    id: 3,
    name: "Coastal Weave",
    price: 159,
    color: "Earthy",
    size: "Small",
    style: "Clutch",
    status: "Available",
    remaining: 2,
    featured: true,
    instagram: true,
    images: [
      "/placeholder.svg?height=600&width=600&text=Coastal Weave",
      "/placeholder.svg?height=600&width=600&text=Coastal Weave Alt",
    ],
  },
  {
    id: 4,
    name: "Terra Twist",
    price: 199,
    color: "Earthy",
    size: "Medium",
    style: "Handle Loop",
    status: "Coming Soon",
    featured: false,
    instagram: false,
    images: [
      "/placeholder.svg?height=600&width=600&text=Terra Twist",
      "/placeholder.svg?height=600&width=600&text=Terra Twist Alt",
    ],
  },
  {
    id: 5,
    name: "Blush Braid",
    price: 179,
    color: "Bold",
    size: "Medium",
    style: "Crossbody",
    status: "Available",
    remaining: 1,
    featured: true,
    instagram: true,
    images: [
      "/placeholder.svg?height=600&width=600&text=Blush Braid",
      "/placeholder.svg?height=600&width=600&text=Blush Braid Alt",
    ],
  },
  {
    id: 6,
    name: "Sage Spiral",
    price: 229,
    color: "Natural",
    size: "Large",
    style: "Shoulder",
    status: "Sold Out",
    featured: false,
    instagram: false,
    images: [
      "/placeholder.svg?height=600&width=600&text=Sage Spiral",
      "/placeholder.svg?height=600&width=600&text=Sage Spiral Alt",
    ],
  },
  {
    id: 7,
    name: "Amber Weave",
    price: 169,
    color: "Mixed",
    size: "Small",
    style: "Clutch",
    status: "Available",
    featured: true,
    instagram: true,
    images: [
      "/placeholder.svg?height=600&width=600&text=Amber Weave",
      "/placeholder.svg?height=600&width=600&text=Amber Weave Alt",
    ],
  },
  {
    id: 8,
    name: "Linen Loop",
    price: 209,
    color: "Natural",
    size: "Medium",
    style: "Handle Loop",
    status: "Coming Soon",
    featured: false,
    instagram: false,
    images: [
      "/placeholder.svg?height=600&width=600&text=Linen Loop",
      "/placeholder.svg?height=600&width=600&text=Linen Loop Alt",
    ],
  },
]

// Filter options
const filterOptions = {
  color: ["Natural", "Earthy", "Bold", "Mixed"],
  size: ["Small", "Medium", "Large"],
  style: ["Crossbody", "Clutch", "Shoulder", "Handle Loop"],
  availability: ["Available", "Sold Out", "Coming Soon"],
}

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f9f6f2]">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif text-[#3c3a38] hover:opacity-90">
            Brea Knots
          </Link>
          <div className="hidden md:flex items-center space-x-6 text-[#3c3a38]">
            <Link href="/" className="text-sm hover:underline">
              Home
            </Link>
            <Link href="/products" className="text-sm font-medium border-b border-[#d4a89a]">
              Products
            </Link>
            <Link href="#about" className="text-sm hover:underline">
              About
            </Link>
            <Link href="#contact" className="text-sm hover:underline">
              Contact
            </Link>
          </div>
          <Button
            variant="outline"
            className="rounded-full border-[#d4a89a] text-[#d4a89a] hover:bg-[#d4a89a] hover:text-white"
          >
            Join the List
          </Button>
        </nav>
      </header>

      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Header + Drop Context */}
          <div className="mb-8 md:mb-12 text-center">
            <h1 className="font-serif text-3xl md:text-4xl text-[#3c3a38] mb-3">Spring 2025 Drop</h1>
            <p className="text-[#3c3a38] mb-2">8 unique pieces, all handmade</p>
            <p className="text-[#3c3a38] mb-4">Next restock: May 10 — Join the list to be notified.</p>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white">Subscribe for Drops</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl text-[#3c3a38]">Stay Updated</DialogTitle>
                  <DialogDescription>Be the first to know about our new drops and limited releases.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" className="border-[#e9e2d9]" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" className="border-[#e9e2d9]" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button className="rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white">Subscribe</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Filters and Sort - Desktop */}
          <div className="hidden md:flex justify-between items-center mb-8">
            <div className="flex items-center gap-6">
              <span className="text-[#3c3a38] font-medium">Filter by:</span>

              {Object.entries(filterOptions).map(([category, options]) => (
                <div key={category} className="relative group">
                  <button className="flex items-center gap-1 text-[#3c3a38] hover:text-[#d4a89a] transition-colors">
                    <span className="capitalize">{category}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md p-3 min-w-[180px] z-10 hidden group-hover:block">
                    <div className="space-y-2">
                      {options.map((option) => (
                        <label key={option} className="flex items-center gap-2 cursor-pointer hover:text-[#d4a89a]">
                          <input type="checkbox" className="rounded border-[#e9e2d9]" />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                    <div className="pt-2 mt-2 border-t border-[#e9e2d9]">
                      <button className="text-sm text-[#d4a89a] hover:underline">Clear {category}</button>
                    </div>
                  </div>
                </div>
              ))}

              <button className="text-sm text-[#d4a89a] hover:underline flex items-center gap-1">
                <X className="h-3 w-3" />
                Clear all filters
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[#3c3a38]">Sort by:</span>
              <Select defaultValue="featured">
                <SelectTrigger className="w-[180px] border-[#e9e2d9]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="available">Available First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Filters and Sort - Mobile */}
          <div className="flex md:hidden justify-between items-center mb-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[350px]">
                <SheetHeader>
                  <SheetTitle className="font-serif">Filter Products</SheetTitle>
                  <SheetDescription>Narrow down your search to find the perfect purse.</SheetDescription>
                </SheetHeader>
                <div className="py-6">
                  <Accordion type="single" collapsible className="w-full">
                    {Object.entries(filterOptions).map(([category, options]) => (
                      <AccordionItem key={category} value={category}>
                        <AccordionTrigger className="capitalize">{category}</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pt-2">
                            {options.map((option) => (
                              <label key={option} className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="rounded border-[#e9e2d9]" />
                                <span>{option}</span>
                              </label>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                  <div className="mt-6 pt-6 border-t border-[#e9e2d9]">
                    <Button variant="outline" className="w-full justify-center gap-2">
                      <X className="h-4 w-4" />
                      Clear all filters
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Select defaultValue="featured">
              <SelectTrigger className="w-[140px] border-[#e9e2d9]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="available">Available First</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <Dialog key={product.id}>
                <DialogTrigger asChild>
                  <div className="group cursor-pointer bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Status Badge */}
                      <div className="absolute top-3 left-3 z-10">
                        {product.status === "Sold Out" && (
                          <Badge variant="secondary" className="bg-[#3c3a38] text-white">
                            Sold Out
                          </Badge>
                        )}
                        {product.status === "Coming Soon" && (
                          <Badge variant="secondary" className="bg-[#d4a89a] text-white">
                            Coming Soon
                          </Badge>
                        )}
                        {product.status === "Available" && product.remaining && product.remaining <= 2 && (
                          <Badge variant="secondary" className="bg-[#c89485] text-white">
                            {product.remaining} Left
                          </Badge>
                        )}
                      </div>

                      {/* Instagram Badge */}
                      {product.instagram && (
                        <div className="absolute top-3 right-3 z-10">
                          <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">
                            As seen on IG
                          </Badge>
                        </div>
                      )}

                      {/* Wishlist Button */}
                      <button className="absolute bottom-3 right-3 z-10 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-white">
                        <Heart className="h-4 w-4 text-[#3c3a38]" />
                      </button>
                    </div>

                    <div className="p-4">
                      <h3 className="font-serif text-lg text-[#3c3a38] mb-1">{product.name}</h3>
                      <div className="flex justify-between items-center">
                        <p className="text-[#3c3a38] font-medium">${product.price}</p>
                        <span className="text-sm text-[#3c3a38]/70">{product.style}</span>
                      </div>
                    </div>
                  </div>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[900px] p-0 overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    {/* Product Images */}
                    <div className="relative aspect-square md:aspect-auto md:h-full bg-[#f9f6f2]">
                      <Image
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="p-6 md:p-8 flex flex-col">
                      <div className="mb-4">
                        <h2 className="font-serif text-2xl md:text-3xl text-[#3c3a38] mb-2">{product.name}</h2>
                        <p className="text-xl text-[#3c3a38] font-medium mb-4">${product.price}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          <Badge variant="outline" className="rounded-full">
                            {product.color}
                          </Badge>
                          <Badge variant="outline" className="rounded-full">
                            {product.size}
                          </Badge>
                          <Badge variant="outline" className="rounded-full">
                            {product.style}
                          </Badge>
                        </div>

                        <p className="text-[#3c3a38] mb-6">
                          This beautiful {product.name.toLowerCase()} purse is handcrafted with care using traditional
                          knotting techniques. Each piece is unique and made with premium materials, showcasing the
                          artistry and dedication that goes into every Brea Knots creation.
                        </p>

                        <div className="space-y-6 mb-8">
                          <div>
                            <h3 className="font-medium text-[#3c3a38] mb-2">Size</h3>
                            <RadioGroup defaultValue={product.size.toLowerCase()} className="flex gap-3">
                              {filterOptions.size.map((size) => (
                                <div key={size} className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value={size.toLowerCase()}
                                    id={`size-${size.toLowerCase()}`}
                                    disabled={size !== product.size}
                                  />
                                  <Label
                                    htmlFor={`size-${size.toLowerCase()}`}
                                    className={size !== product.size ? "opacity-50" : ""}
                                  >
                                    {size}
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </div>
                        </div>

                        {product.status === "Available" ? (
                          <Button className="w-full rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white">
                            Add to Cart
                          </Button>
                        ) : product.status === "Sold Out" ? (
                          <div className="space-y-3">
                            <Button disabled className="w-full rounded-full bg-[#e9e2d9] text-[#3c3a38]">
                              Sold Out
                            </Button>
                            <p className="text-sm text-center text-[#3c3a38]">
                              This piece is currently sold out. Subscribe to be notified when similar pieces become
                              available.
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            <Button disabled className="w-full rounded-full bg-[#e9e2d9] text-[#3c3a38]">
                              Coming Soon
                            </Button>
                            <p className="text-sm text-center text-[#3c3a38]">
                              This piece will be available in our next drop. Subscribe to be notified when it launches.
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="mt-auto pt-6 border-t border-[#e9e2d9]">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-[#d4a89a]"></div>
                            <span className="text-sm text-[#3c3a38]">Handmade in Romania</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-[#d4a89a]"></div>
                            <span className="text-sm text-[#3c3a38]">Shipping in 3-5 days</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="h-1 w-1 rounded-full bg-[#d4a89a]"></div>
                            <span className="text-sm text-[#3c3a38]">Every purse is unique — no two are the same</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Trust Elements */}
          <div className="mt-16 py-8 border-t border-[#e9e2d9] text-center">
            <div className="max-w-3xl mx-auto grid gap-6">
              <h2 className="font-serif text-2xl text-[#3c3a38]">Our Promise</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4">
                  <h3 className="font-serif text-lg text-[#3c3a38] mb-2">Handmade in Romania</h3>
                  <p className="text-sm text-[#3c3a38]/80">
                    Each purse is carefully crafted by hand in our home workshop.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg text-[#3c3a38] mb-2">Shipping in 3-5 days</h3>
                  <p className="text-sm text-[#3c3a38]/80">We prepare and ship your order with care and attention.</p>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg text-[#3c3a38] mb-2">Uniquely Yours</h3>
                  <p className="text-sm text-[#3c3a38]/80">Every purse is unique — no two are exactly the same.</p>
                </div>
              </div>
              <p className="italic text-[#3c3a38]/80 mt-4">"Knots, not factories."</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#3c3a38] text-white py-12">
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
                <Link href="#about" className="block text-sm text-white/80 hover:text-white">
                  About
                </Link>
                <Link href="#contact" className="block text-sm text-white/80 hover:text-white">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-4">Subscribe</h3>
              <p className="text-sm text-white/80 mb-4">
                Join our mailing list to be notified about new drops and exclusive offers.
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Your email"
                  className="rounded-full bg-[#3c3a38] border-white/20 text-white placeholder:text-white/50 focus:border-[#d4a89a]"
                />
                <Button className="rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white">Join</Button>
              </div>
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
