import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Calendar, Facebook, Instagram, Linkedin, Tag, Twitter, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

// Mock blog post data
const post = {
  id: "how-i-made-the-dune-purse",
  title: "How I Made the Dune Purse in 6 Hours",
  excerpt:
    "Every knot tells a story. This is the journey of creating our bestselling Dune purse, from inspiration to the final stitch.",
  coverImage: "/placeholder.svg?height=800&width=1200&text=Dune Purse Creation",
  date: "April 8, 2025",
  author: "Andreea Bircea",
  authorImage: "/placeholder.svg?height=200&width=200&text=Andreea",
  authorBio:
    "Andreea is the founder and lead artisan at Brea Knots. With over 10 years of experience in traditional knotting techniques, she brings a unique blend of heritage and modern design to each piece.",
  category: "Behind the Scenes",
  content: `
    <p>The Dune Knot purse began as a simple idea during a quiet weekend by the Black Sea. As I watched the gentle waves shape the shoreline, I was struck by how the sand formed perfect, flowing patterns. I wanted to capture that same sense of natural harmony – structured yet organic, simple yet intricate.</p>
    
    <h2>Finding Inspiration</h2>
    
    <p>There's something magical about the way coastal dunes form – wind and water working together to create something both beautiful and ever-changing. I wanted to bring that same feeling to a purse that would be both functional and a piece of art.</p>
    
    <p>I started by collecting images of sand patterns and sketching different knot arrangements that might capture that flowing quality. After several iterations, I settled on a design that used a modified sailor's knot pattern arranged in gentle waves.</p>
    
    <figure>
      <img src="/placeholder.svg?height=600&width=800&text=Sketching Process" alt="Sketching the Dune Knot design" />
      <figcaption>Early sketches exploring different knot patterns</figcaption>
    </figure>
    
    <h2>Selecting the Materials</h2>
    
    <p>For the Dune Knot, I chose a premium cotton cord in a natural, undyed finish. The material needed to be sturdy enough to hold its shape but soft enough to create gentle curves. After testing several options, I found a 5mm cotton cord that had just the right balance.</p>
    
    <p>The natural color was important – I wanted to preserve that sandy, earthy quality that inspired the design in the first place. No dyes, no treatments – just the beautiful natural color of cotton.</p>
    
    <h2>The Knotting Process</h2>
    
    <p>The actual creation process took about 6 hours from start to finish. Here's how it unfolded:</p>
    
    <ul>
      <li><strong>Hour 1:</strong> Preparing the materials and creating the base structure</li>
      <li><strong>Hours 2-4:</strong> Tying the main pattern of knots, carefully ensuring consistent tension</li>
      <li><strong>Hour 5:</strong> Creating the handle with a special reinforced knotting technique</li>
      <li><strong>Hour 6:</strong> Finishing touches, including the signature hidden knot inside</li>
    </ul>
    
    <figure>
      <img src="/placeholder.svg?height=600&width=800&text=Knotting Process" alt="The knotting process in action" />
      <figcaption>Working on the wave pattern of knots</figcaption>
    </figure>
    
    <p>The most challenging part was maintaining consistent tension throughout the piece. Each knot affects those around it, so I had to work slowly and methodically, occasionally undoing sections that didn't flow quite right.</p>
    
    <h2>The Finishing Touch</h2>
    
    <p>Every Brea Knots purse has a signature hidden knot inside – a small detail that most people will never see, but that represents the care and intention behind each piece. For the Dune Knot, I created a tiny star knot in the bottom corner of the interior, a little nod to starfish on the shore.</p>
    
    <p>Once complete, I let the purse rest overnight before giving it a final inspection. Sometimes knots will settle slightly, and I wanted to ensure everything was perfect before considering it complete.</p>
    
    <figure>
      <img src="/placeholder.svg?height=600&width=800&text=Finished Purse" alt="The completed Dune Knot purse" />
      <figcaption>The completed Dune Knot purse</figcaption>
    </figure>
    
    <h2>Why Handmade Matters</h2>
    
    <p>When you hold a Dune Knot purse, you're holding hours of focused attention and care. You're holding a piece that couldn't be replicated exactly, even if I tried. Each one has its own character – tiny variations that make it uniquely yours.</p>
    
    <p>In a world of mass production, there's something special about carrying an item made by human hands, with human care. It's not just a purse; it's a story you get to carry with you.</p>
    
    <p>The Dune Knot has become one of our most popular designs, and I'm grateful for everyone who has chosen to make it part of their story. Each time I create one, I'm transported back to that peaceful weekend by the sea, watching the waves shape the sand into perfect, flowing patterns.</p>
  `,
  relatedPosts: [
    {
      id: "the-knots-i-love-most",
      title: "The Knots I Love Most and Why",
      excerpt:
        "There's something magical about the way threads intertwine to create something both beautiful and functional. These are the knots that inspire me daily.",
      coverImage: "/placeholder.svg?height=800&width=1200&text=Favorite Knots",
      date: "March 25, 2025",
      category: "Craft Insights",
    },
    {
      id: "difference-from-factory-bags",
      title: "What Makes a Brea Purse Different from Factory Bags",
      excerpt:
        "In a world of mass production, handcrafted items tell a different story. Here's why each Brea purse carries a piece of soul that factory items simply can't replicate.",
      coverImage: "/placeholder.svg?height=800&width=1200&text=Handmade Difference",
      date: "February 28, 2025",
      category: "Craft Philosophy",
    },
  ],
}

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-[#f9f6f2]">
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="mb-6">
          <Link href="/blog" className="inline-flex items-center text-[#d4a89a] hover:underline">
            <ArrowLeft className="h-3 w-3 mr-1" />
            Back to Journal
          </Link>
        </div>

        <article className="max-w-4xl mx-auto">
          {/* Post Header */}
          <header className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 text-sm text-[#3c3a38]/70 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-[#d4a89a]"></div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-[#d4a89a]"></div>
              <div className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                <span>{post.category}</span>
              </div>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#3c3a38] mb-6">{post.title}</h1>
            <p className="text-lg text-[#3c3a38] max-w-3xl mx-auto">{post.excerpt}</p>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-10">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>

          {/* Post Content */}
          <div className="prose prose-stone max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Author Bio */}
          <div className="bg-white rounded-lg border border-[#e9e2d9] p-6 mb-12">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <div className="relative h-20 w-20 rounded-full overflow-hidden flex-shrink-0">
                <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#3c3a38] mb-2">About {post.author}</h3>
                <p className="text-[#3c3a38]/80">{post.authorBio}</p>
              </div>
            </div>
          </div>

          {/* Share Links */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12 py-6 border-t border-b border-[#e9e2d9]">
            <span className="font-medium text-[#3c3a38]">Share this story</span>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-[#f9f6f2] flex items-center justify-center text-[#3c3a38] hover:bg-[#d4a89a] hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-[#f9f6f2] flex items-center justify-center text-[#3c3a38] hover:bg-[#d4a89a] hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-[#f9f6f2] flex items-center justify-center text-[#3c3a38] hover:bg-[#d4a89a] hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-[#f9f6f2] flex items-center justify-center text-[#3c3a38] hover:bg-[#d4a89a] hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mb-12">
            <h2 className="font-serif text-2xl text-[#3c3a38] mb-6">You Might Also Enjoy</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {post.relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-[#e9e2d9] transition-all duration-300 hover:shadow-md h-full flex flex-col">
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={relatedPost.coverImage || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 text-xs text-[#3c3a38]/70 mb-3">
                        <span>{relatedPost.date}</span>
                        <div className="h-1 w-1 rounded-full bg-[#d4a89a]"></div>
                        <span>{relatedPost.category}</span>
                      </div>
                      <h3 className="font-serif text-xl text-[#3c3a38] mb-2 group-hover:text-[#d4a89a] transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-[#3c3a38]/80 text-sm mb-4 flex-1">{relatedPost.excerpt}</p>
                      <div className="flex items-center text-[#d4a89a] text-sm font-medium">
                        Read more
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Sign-Up */}
          <div className="py-10 bg-white rounded-lg border border-[#e9e2d9] text-center">
            <div className="max-w-xl mx-auto px-4">
              <h2 className="font-serif text-2xl md:text-3xl text-[#3c3a38] mb-3">Enjoyed this story?</h2>
              <p className="text-[#3c3a38] mb-6">
                Subscribe to our journal for more behind-the-scenes insights and be the first to know about new
                collections.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 rounded-full border border-[#e9e2d9] focus:outline-none focus:border-[#d4a89a]"
                />
                <Button className="rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white">Subscribe</Button>
              </div>
            </div>
          </div>
        </article>
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
