import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Tag, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// Mock blog posts data
const blogPosts = [
  {
    id: "how-i-made-the-dune-purse",
    title: "How I Made the Dune Purse in 6 Hours",
    excerpt:
      "Every knot tells a story. This is the journey of creating our bestselling Dune purse, from inspiration to the final stitch.",
    coverImage: "/blog/1.jpg",
    date: "April 8, 2025",
    author: "Andreea Bircea",
    category: "Behind the Scenes",
    featured: true,
  },
  {
    id: "the-knots-i-love-most",
    title: "The Knots I Love Most and Why",
    excerpt:
      "There's something magical about the way threads intertwine to create something both beautiful and functional. These are the knots that inspire me daily.",
    coverImage: "/blog/2.jpg",
    date: "March 25, 2025",
    author: "Andreea Bircea",
    category: "Craft Insights",
    featured: false,
  },
  {
    id: "sustainable-thread-from-brasov",
    title: "We Sourced Sustainable Thread from Brașov!",
    excerpt:
      "Our journey to find the perfect materials led us to the mountains of Transylvania, where tradition meets sustainability.",
    coverImage: "/blog/3.jpg",
    date: "March 12, 2025",
    author: "Andreea Bircea",
    category: "Sustainability",
    featured: false,
  },
  {
    id: "difference-from-factory-bags",
    title: "What Makes a Brea Purse Different from Factory Bags",
    excerpt:
      "In a world of mass production, handcrafted items tell a different story. Here's why each Brea purse carries a piece of soul that factory items simply can't replicate.",
    coverImage: "/blog/4.jpg",
    date: "February 28, 2025",
    author: "Andreea Bircea",
    category: "Craft Philosophy",
    featured: false,
  },
  {
    id: "spring-collection-inspiration",
    title: "The Coastal Inspiration Behind Our Spring Collection",
    excerpt:
      "How a weekend by the Black Sea sparked an entire collection of designs that capture the essence of gentle waves and sandy shores.",
    coverImage: "/blog/5.jpg",
    date: "February 15, 2025",
    author: "Andreea Bircea",
    category: "Design Stories",
    featured: false,
  },
]

// Featured post is the first one marked as featured
const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0]
// Other posts exclude the featured one
const otherPosts = blogPosts.filter((post) => post.id !== featuredPost.id)

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#f9f6f2]">
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#3c3a38] mb-4">The Brea Journal</h1>
          <p className="text-[#3c3a38] max-w-2xl mx-auto">
            Stories from the workshop, insights into our craft, and the journey behind each knot and purse.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={featuredPost.coverImage || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-[#3c3a38]/70">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="h-1 w-1 rounded-full bg-[#d4a89a]"></div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="h-1 w-1 rounded-full bg-[#d4a89a]"></div>
                <div className="flex items-center gap-1">
                  <Tag className="h-4 w-4" />
                  <span>{featuredPost.category}</span>
                </div>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-[#3c3a38]">{featuredPost.title}</h2>
              <p className="text-[#3c3a38] leading-relaxed">{featuredPost.excerpt}</p>
              <Link href={`/blog/${featuredPost.id}`}>
                <Button className="rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white">
                  Read the Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Post Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button variant="outline" className="rounded-full border-[#d4a89a] text-[#d4a89a] bg-[#d4a89a]/5">
            All Posts
          </Button>
          <Button variant="outline" className="rounded-full border-[#e9e2d9] text-[#3c3a38] hover:border-[#d4a89a]">
            Behind the Scenes
          </Button>
          <Button variant="outline" className="rounded-full border-[#e9e2d9] text-[#3c3a38] hover:border-[#d4a89a]">
            Craft Insights
          </Button>
          <Button variant="outline" className="rounded-full border-[#e9e2d9] text-[#3c3a38] hover:border-[#d4a89a]">
            Sustainability
          </Button>
          <Button variant="outline" className="rounded-full border-[#e9e2d9] text-[#3c3a38] hover:border-[#d4a89a]">
            Design Stories
          </Button>
        </div>

        {/* Other Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#e9e2d9] transition-all duration-300 hover:shadow-md h-full flex flex-col">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={post.coverImage || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-[#3c3a38]/70 mb-3">
                    <span>{post.date}</span>
                    <div className="h-1 w-1 rounded-full bg-[#d4a89a]"></div>
                    <span>{post.category}</span>
                  </div>
                  <h3 className="font-serif text-xl text-[#3c3a38] mb-2 group-hover:text-[#d4a89a] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[#3c3a38]/80 text-sm mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center text-[#d4a89a] text-sm font-medium">
                    Read more
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Sign-Up */}
        <div className="mt-16 py-12 bg-white rounded-lg border border-[#e9e2d9] text-center">
          <div className="max-w-xl mx-auto px-4">
            <h2 className="font-serif text-2xl md:text-3xl text-[#3c3a38] mb-3">Subscribe to Our Journal</h2>
            <p className="text-[#3c3a38] mb-6">
              Get the latest stories, behind-the-scenes insights, and special offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-full border border-[#e9e2d9] focus:outline-none focus:border-[#d4a89a]"
              />
              <Button className="rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white">Subscribe</Button>
            </div>
            <p className="text-xs text-[#3c3a38]/70 mt-4">
              We respect your privacy and will never share your information. Unsubscribe anytime.
            </p>
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
                <Link href="/blog" className="block text-sm text-white/80 hover:text-white">
                  Journal
                </Link>
                <Link href="#about" className="block text-sm text-white/80 hover:text-white">
                  About
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-4">Connect</h3>
              <p className="text-sm text-white/80 mb-4">
                Follow our journey and join the community of handmade enthusiasts.
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
