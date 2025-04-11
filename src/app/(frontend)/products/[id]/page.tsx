"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, Minus, Plus, ShoppingBag } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"

// Mock product data
const product = {
  id: "dune-knot",
  name: "Dune Knot",
  price: 189,
  description:
    "Inspired by the soft, rolling sand dunes of coastal Romania, this purse embodies tranquility and natural beauty. Each knot is tied by hand, using premium cotton cord, representing over 8 hours of meticulous craftsmanship.",
  story:
    "The Dune Knot was born during a quiet weekend by the Black Sea. As I watched the gentle waves shape the shoreline, I was struck by how the sand formed perfect, flowing patterns. This purse captures that same sense of natural harmony – structured yet organic, simple yet intricate.\n\nEach knot is carefully placed to create a flowing pattern that mimics the movement of wind over sand. The natural cotton cord has been selected for its soft texture and durability, ensuring this piece will accompany you on many journeys to come.",
  details: {
    materials: "100% premium cotton cord",
    dimensions: "22cm x 15cm x 6cm",
    care: "Spot clean with damp cloth. Avoid prolonged exposure to direct sunlight.",
    origin: "Handmade in Romania",
  },
  variants: {
    colors: [
      { id: "natural", name: "Natural", available: true, image: "/placeholder.svg?height=600&width=600&text=Natural" },
      { id: "blush", name: "Blush", available: true, image: "/placeholder.svg?height=600&width=600&text=Blush" },
      { id: "sage", name: "Sage", available: false, image: "/placeholder.svg?height=600&width=600&text=Sage" },
    ],
    sizes: [
      { id: "small", name: "Small", available: true },
      { id: "medium", name: "Medium", available: true },
      { id: "large", name: "Large", available: false },
    ],
  },
  images: [
    {
      id: 1,
      src: "/placeholder.svg?height=1200&width=800&text=Dune Knot Main",
      alt: "Dune Knot purse front view",
      type: "main",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=1200&width=800&text=Dune Knot Detail",
      alt: "Close-up of knot detail",
      type: "detail",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=1200&width=800&text=Dune Knot Size",
      alt: "Size comparison with hand",
      type: "size",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=1200&width=800&text=Dune Knot Lifestyle",
      alt: "Dune Knot being worn",
      type: "lifestyle",
    },
  ],
  stock: 2,
  shipping: {
    time: "Ships in 3 days from Romania",
    worldwide: true,
  },
  limited: true,
  featured: true,
}

export default function ProductDetailPage() {
  const [selectedColor, setSelectedColor] = useState(product.variants.colors.find((color) => color.available)?.id || "")
  const [selectedSize, setSelectedSize] = useState(product.variants.sizes.find((size) => size.available)?.id || "")
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(product.images[0])
  const { toast } = useToast()

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} - ${product.variants.colors.find((color) => color.id === selectedColor)?.name
        } has been added to your cart.`,
    })
  }

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="min-h-screen bg-[#f9f6f2]">
      <main className="container mx-auto px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex items-center text-sm text-[#3c3a38]/70">
            <Link href="/products" className="hover:text-[#d4a89a] flex items-center">
              <ArrowLeft className="h-3 w-3 mr-1" />
              Back to Products
            </Link>
          </nav>
        </div>

        <div className="grid md:grid-cols-5 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Product Images - Desktop */}
          <div className="hidden md:block md:col-span-1">
            <div className="sticky top-24 space-y-4">
              {product.images.map((image) => (
                <div
                  key={image.id}
                  className={`relative aspect-[3/4] cursor-pointer rounded-md overflow-hidden border-2 transition-all ${activeImage.id === image.id ? "border-[#d4a89a]" : "border-transparent hover:border-[#e9e2d9]"
                    }`}
                  onClick={() => setActiveImage(image)}
                >
                  <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Main Product Image */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="relative aspect-[3/4] md:aspect-auto md:h-full rounded-lg overflow-hidden bg-white">
              <Image
                src={activeImage.src || "/placeholder.svg"}
                alt={activeImage.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {product.limited && (
                <div className="absolute top-4 left-4">
                  <Badge className="bg-[#d4a89a] text-white">Limited Edition</Badge>
                </div>
              )}
            </div>

            {/* Mobile Image Carousel */}
            <div className="flex md:hidden justify-center mt-4 space-x-2">
              {product.images.map((image) => (
                <div
                  key={image.id}
                  className={`h-2 w-2 rounded-full transition-all ${activeImage.id === image.id ? "bg-[#d4a89a]" : "bg-[#e9e2d9]"
                    }`}
                  onClick={() => setActiveImage(image)}
                ></div>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="md:col-span-2">
            <div className="space-y-6">
              <div>
                <h1 className="font-serif text-3xl md:text-4xl text-[#3c3a38]">{product.name}</h1>
                <p className="text-2xl font-medium text-[#3c3a38] mt-2">${product.price}</p>
                {product.stock <= 3 && (
                  <p className="text-sm text-[#c89485] mt-2">Only {product.stock} left in stock</p>
                )}
              </div>

              <p className="text-[#3c3a38] leading-relaxed">{product.description}</p>

              <div className="space-y-4">
                {/* Color Selection */}
                <div>
                  <label className="block text-[#3c3a38] font-medium mb-2">Color</label>
                  <div className="flex flex-wrap gap-3">
                    {product.variants.colors.map((color) => (
                      <button
                        key={color.id}
                        className={`relative h-12 w-12 rounded-full overflow-hidden border-2 transition-all ${!color.available
                            ? "opacity-40 cursor-not-allowed"
                            : selectedColor === color.id
                              ? "border-[#d4a89a]"
                              : "border-[#e9e2d9] hover:border-[#d4a89a]/50"
                          }`}
                        onClick={() => color.available && setSelectedColor(color.id)}
                        disabled={!color.available}
                        title={color.available ? color.name : `${color.name} - Not Available`}
                      >
                        <Image src={color.image || "/placeholder.svg"} alt={color.name} fill className="object-cover" />
                        {selectedColor === color.id && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                            <div className="h-3 w-3 rounded-full bg-white"></div>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div>
                  <label className="block text-[#3c3a38] font-medium mb-2">Size</label>
                  <div className="flex flex-wrap gap-3">
                    {product.variants.sizes.map((size) => (
                      <button
                        key={size.id}
                        className={`px-4 py-2 rounded-md border transition-all ${!size.available
                            ? "bg-[#e9e2d9]/30 text-[#3c3a38]/40 cursor-not-allowed"
                            : selectedSize === size.id
                              ? "bg-[#d4a89a]/10 border-[#d4a89a] text-[#3c3a38]"
                              : "border-[#e9e2d9] text-[#3c3a38] hover:border-[#d4a89a]/50"
                          }`}
                        onClick={() => size.available && setSelectedSize(size.id)}
                        disabled={!size.available}
                      >
                        {size.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-[#3c3a38] font-medium mb-2">Quantity</label>
                  <div className="flex items-center border border-[#e9e2d9] rounded-md w-32">
                    <button
                      className="px-3 py-2 text-[#3c3a38] disabled:text-[#3c3a38]/30"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="flex-1 text-center text-[#3c3a38]">{quantity}</span>
                    <button
                      className="px-3 py-2 text-[#3c3a38] disabled:text-[#3c3a38]/30"
                      onClick={incrementQuantity}
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="pt-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    className="flex-1 rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full border-[#d4a89a] text-[#d4a89a] hover:bg-[#d4a89a] hover:text-white"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-[#3c3a38]/70 mt-3">
                  {product.shipping.time}. {product.shipping.worldwide ? "Worldwide shipping available." : ""}
                </p>
              </div>

              {/* Product Story - Mobile Tabs */}
              <div className="md:hidden pt-4">
                <Tabs defaultValue="story">
                  <TabsList className="grid grid-cols-3 bg-[#f9f6f2] border-b border-[#e9e2d9]">
                    <TabsTrigger value="story" className="data-[state=active]:text-[#d4a89a]">
                      Story
                    </TabsTrigger>
                    <TabsTrigger value="details" className="data-[state=active]:text-[#d4a89a]">
                      Details
                    </TabsTrigger>
                    <TabsTrigger value="shipping" className="data-[state=active]:text-[#d4a89a]">
                      Shipping
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="story" className="pt-4">
                    <h3 className="font-serif text-lg text-[#3c3a38] mb-2">The Story</h3>
                    <div className="text-[#3c3a38] space-y-3">
                      {product.story.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="details" className="pt-4">
                    <h3 className="font-serif text-lg text-[#3c3a38] mb-2">Product Details</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-[#3c3a38]">
                        <span className="font-medium">Materials:</span> {product.details.materials}
                      </li>
                      <li className="flex items-start gap-2 text-[#3c3a38]">
                        <span className="font-medium">Dimensions:</span> {product.details.dimensions}
                      </li>
                      <li className="flex items-start gap-2 text-[#3c3a38]">
                        <span className="font-medium">Care:</span> {product.details.care}
                      </li>
                      <li className="flex items-start gap-2 text-[#3c3a38]">
                        <span className="font-medium">Origin:</span> {product.details.origin}
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="shipping" className="pt-4">
                    <h3 className="font-serif text-lg text-[#3c3a38] mb-2">Shipping & Returns</h3>
                    <p className="text-[#3c3a38] mb-3">
                      {product.shipping.time}. {product.shipping.worldwide ? "Worldwide shipping available." : ""}
                    </p>
                    <p className="text-[#3c3a38]">
                      We offer free returns within 14 days if the item is unused and in its original packaging.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Product Story - Desktop */}
              <div className="hidden md:block pt-6">
                <Separator className="mb-6" />
                <div className="space-y-6">
                  <div>
                    <h2 className="font-serif text-2xl text-[#3c3a38] mb-4">The Story</h2>
                    <div className="text-[#3c3a38] space-y-4">
                      {product.story.split("\n\n").map((paragraph, index) => (
                        <p key={index} className="leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-serif text-lg text-[#3c3a38] mb-3">Product Details</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2 text-[#3c3a38]">
                          <span className="font-medium">Materials:</span> {product.details.materials}
                        </li>
                        <li className="flex items-start gap-2 text-[#3c3a38]">
                          <span className="font-medium">Dimensions:</span> {product.details.dimensions}
                        </li>
                        <li className="flex items-start gap-2 text-[#3c3a38]">
                          <span className="font-medium">Care:</span> {product.details.care}
                        </li>
                        <li className="flex items-start gap-2 text-[#3c3a38]">
                          <span className="font-medium">Origin:</span> {product.details.origin}
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-[#3c3a38] mb-3">Shipping & Returns</h3>
                      <p className="text-[#3c3a38] mb-3">
                        {product.shipping.time}. {product.shipping.worldwide ? "Worldwide shipping available." : ""}
                      </p>
                      <p className="text-[#3c3a38]">
                        We offer free returns within 14 days if the item is unused and in its original packaging.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You May Also Like */}
        <div className="mt-16 pt-8 border-t border-[#e9e2d9]">
          <h2 className="font-serif text-2xl text-[#3c3a38] mb-8 text-center">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                id: 1,
                name: "Coastal Weave",
                price: 159,
                image: "/placeholder.svg?height=600&width=600&text=Coastal Weave",
              },
              {
                id: 2,
                name: "Blush Braid",
                price: 179,
                image: "/placeholder.svg?height=600&width=600&text=Blush Braid",
              },
              {
                id: 3,
                name: "Amber Weave",
                price: 169,
                image: "/placeholder.svg?height=600&width=600&text=Amber Weave",
              },
              {
                id: 4,
                name: "Terra Twist",
                price: 199,
                image: "/placeholder.svg?height=600&width=600&text=Terra Twist",
              },
            ].map((relatedProduct) => (
              <Link href={`/products/${relatedProduct.id}`} key={relatedProduct.id}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-serif text-[#3c3a38] group-hover:text-[#d4a89a] transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-[#3c3a38]">${relatedProduct.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-16 py-8 border-t border-[#e9e2d9]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="font-serif text-lg text-[#3c3a38] mb-2">Handmade with Care</h3>
              <p className="text-sm text-[#3c3a38]/80">Each purse is carefully crafted by hand in our home workshop.</p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-lg text-[#3c3a38] mb-2">Free Shipping Over $200</h3>
              <p className="text-sm text-[#3c3a38]/80">Worldwide shipping available on all orders.</p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-lg text-[#3c3a38] mb-2">14-Day Returns</h3>
              <p className="text-sm text-[#3c3a38]/80">We offer free returns if the item is unused.</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#3c3a38] text-white py-12 mt-12">
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
                <input
                  type="email"
                  placeholder="Your email"
                  className="rounded-full bg-[#3c3a38] border border-white/20 text-white placeholder:text-white/50 px-4 py-2 text-sm focus:outline-none focus:border-[#d4a89a] flex-1"
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
