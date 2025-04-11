import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Instagram, Mail, Star, Package, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f9f6f2]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-90">
            <div className="absolute inset-0 bg-[#3c3a38] opacity-20"></div>
          </div>
          <div className="container relative mx-auto flex h-full flex-col items-center justify-center px-4 text-center">
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">Handmade purses, tied with patience.</h1>
            <p className="text-lg text-white mb-8">Only available in limited releases.</p>
            <Button className="rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white px-8 py-6">
              See Upcoming Drop
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* About the Craft - Enhanced */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/about.jpg"
                  alt="Artisan crafting a knotted purse"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl text-[#3c3a38]">About the Craft</h2>
                <div className="h-1 w-20 bg-[#d4a89a]"></div>
                <p className="text-lg text-[#3c3a38] leading-relaxed">
                  Every Brea purse is made knot by knot, by hand, in our home workshop. We don't rush — because we
                  believe in timeless things.
                </p>
                <p className="text-[#3c3a38] leading-relaxed">
                  The art of knotting has been passed down through generations, and each piece carries with it a story
                  of patience and dedication. Our purses aren't just accessories; they're a testament to the beauty of
                  slow fashion and handcrafted care.
                </p>
                <div className="pt-4">
                  <Button
                    variant="outline"
                    className="rounded-full border-[#d4a89a] text-[#d4a89a] hover:bg-[#d4a89a] hover:text-white"
                  >
                    Read Our Story
                  </Button>
                </div>
              </div>
            </div>

            {/* Founder's Story - New Section */}
            <div className="mt-20 max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-serif text-3xl text-[#3c3a38] mb-4">The Story Behind Brea Knots</h2>
                <p className="text-[#3c3a38]">
                  How a childhood passion for creating became a dedication to preserving traditional craftsmanship
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="text-center">
                  <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/child.webp"
                      alt="Andreea learning to knot as a child"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-[#3c3a38] mb-2">The Beginning</h3>
                  <p className="text-sm text-[#3c3a38]/80">
                    At age 8, Andreea learned her first knots from her grandmother, who crafted fishing nets in a small
                    Romanian coastal village.
                  </p>
                </div>

                <div className="text-center">
                  <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/workshop.webp"
                      alt="Andreea in her workshop"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-[#3c3a38] mb-2">The Workshop</h3>
                  <p className="text-sm text-[#3c3a38]/80">
                    Today, each Brea purse is created in a sunlit corner of Andreea's home, surrounded by spools of
                    natural fibers and sketches of new designs.
                  </p>
                </div>

                <div className="text-center">
                  <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/philo.jpg"
                      alt="Close-up of intricate knotwork"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-xl text-[#3c3a38] mb-2">The Philosophy</h3>
                  <p className="text-sm text-[#3c3a38]/80">
                    We believe in creating fewer, better things. Each knot is tied with intention, creating pieces that
                    will be treasured for years to come.
                  </p>
                </div>
              </div>

              <div className="mt-12 p-8 bg-[#f9f6f2] rounded-lg border border-[#e9e2d9]">
                <blockquote className="text-center italic text-[#3c3a38] text-lg">
                  "I started Brea Knots because I believe we've lost touch with how things are made. When you carry one
                  of our purses, you're carrying hours of focused attention and care — a small rebellion against the
                  disposable world we live in."
                </blockquote>
                <div className="flex justify-center items-center mt-6">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/me.jpg"
                      alt="Andreea Bircea"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-serif text-[#3c3a38]">Andreea Bircea</p>
                    <p className="text-sm text-[#3c3a38]/70">Founder & Artisan</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-6 bg-white rounded-lg border border-[#e9e2d9]">
                  <h3 className="font-serif text-xl text-[#3c3a38] mb-3">Handmade</h3>
                  <p className="text-[#3c3a38]/80">
                    Every purse is made entirely by hand, from the first knot to the final stitch.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-[#e9e2d9]">
                  <h3 className="font-serif text-xl text-[#3c3a38] mb-3">Sustainable</h3>
                  <p className="text-[#3c3a38]/80">
                    We use natural, eco-conscious materials and create minimal waste in our process.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg border border-[#e9e2d9]">
                  <h3 className="font-serif text-xl text-[#3c3a38] mb-3">Limited</h3>
                  <p className="text-[#3c3a38]/80">
                    We create small batches of designs, ensuring each piece receives proper attention.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Drop Calendar */}
        <section id="drops" className="py-20 bg-[#f9f6f2]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-[#3c3a38] mb-4">Limited Releases</h2>
              <p className="text-[#3c3a38] max-w-2xl mx-auto">
                We create our purses in small, thoughtful collections. Each piece is unique and available only until
                sold out.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-sm border border-[#e9e2d9]">
              <div className="flex items-center gap-4 mb-6">
                <Calendar className="h-8 w-8 text-[#d4a89a]" />
                <h3 className="font-serif text-2xl text-[#3c3a38]">Next Collection</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 border-r border-[#e9e2d9] last:border-r-0">
                  <h4 className="font-serif text-3xl text-[#3c3a38]">April 27</h4>
                  <p className="text-[#3c3a38]">Release Date</p>
                </div>
                <div className="text-center p-4 border-r border-[#e9e2d9] last:border-r-0">
                  <h4 className="font-serif text-3xl text-[#3c3a38]">6</h4>
                  <p className="text-[#3c3a38]">New Pieces</p>
                </div>
                <div className="text-center p-4 border-r border-[#e9e2d9] last:border-r-0">
                  <h4 className="font-serif text-3xl text-[#3c3a38]">1</h4>
                  <p className="text-[#3c3a38]">Of Each Design</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Input
                  placeholder="Enter your email"
                  className="rounded-full border-[#e9e2d9] focus:border-[#d4a89a] focus:ring-[#d4a89a]"
                />
                <Button className="rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white w-full sm:w-auto">
                  Get Notified
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-[#e9e2d9]">
                <h4 className="font-serif text-lg text-[#3c3a38] mb-4">Previous Drops</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[#3c3a38]">Spring Collection 2023</span>
                    <span className="text-sm px-2 py-1 bg-[#e9e2d9] rounded-full">Sold Out</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#3c3a38]">Winter Essentials 2022</span>
                    <span className="text-sm px-2 py-1 bg-[#e9e2d9] rounded-full">Sold Out</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Preview */}
        <section id="collection" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-serif text-3xl md:text-4xl text-[#3c3a38] text-center mb-16">Our Collection</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Soft Sand", status: "Coming Soon" },
                { name: "Autumn Whisper", status: "Sold Out" },
                { name: "Meadow Walk", status: "Coming Soon" },
                { name: "Coastal Breeze", status: "Sold Out" },
                { name: "Morning Dew", status: "Coming Soon" },
                { name: "Sunset Glow", status: "Sold Out" },
              ].map((product, index) => (
                <div key={index} className="group">
                  <div className="relative h-[400px] mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={`/${index + 1}.jpg`}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#3c3a38]/70 to-transparent p-4">
                      <span className="inline-block px-3 py-1 text-xs text-white bg-[#3c3a38]/80 rounded-full">
                        {product.status}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl text-[#3c3a38]">{product.name}</h3>
                  <Link href="#" className="text-[#d4a89a] text-sm flex items-center mt-2 hover:underline">
                    Read the story
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials - New Section */}
        <section className="py-20 bg-[#f9f6f2]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-[#3c3a38] mb-4">What Our Customers Say</h2>
              <p className="text-[#3c3a38] max-w-2xl mx-auto">
                Stories from people who carry a piece of our craft with them every day.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  quote:
                    "I wear mine everywhere and get compliments nonstop! It's not just a purse, it's a conversation starter.",
                  name: "Sophia M.",
                  location: "Paris, France",
                  rating: 5,
                },
                {
                  quote:
                    "The craftsmanship is amazing. It's like a little work of art that I get to carry with me. Worth every penny.",
                  name: "Amelia J.",
                  location: "New York, USA",
                  rating: 5,
                },
                {
                  quote:
                    "I love knowing that my purse was made by hand with such care. In a world of mass-produced items, this feels special.",
                  name: "Isabella R.",
                  location: "Barcelona, Spain",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-[#e9e2d9] shadow-sm">
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-[#d4a89a] fill-[#d4a89a]" />
                    ))}
                  </div>
                  <blockquote className="italic text-[#3c3a38] mb-4">"{testimonial.quote}"</blockquote>
                  <div className="text-right">
                    <p className="font-medium text-[#3c3a38]">{testimonial.name}</p>
                    <p className="text-sm text-[#3c3a38]/70">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packaging Experience - New Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-[#3c3a38] mb-4">The Unboxing Experience</h2>
                <p className="text-[#3c3a38] max-w-2xl mx-auto">
                  We believe the joy of receiving a Brea Knots purse should begin the moment your package arrives.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src="/unbox.jpg"
                    alt="Brea Knots packaging experience"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#d4a89a]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Package className="h-5 w-5 text-[#d4a89a]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-[#3c3a38] mb-2">Thoughtful Packaging</h3>
                      <p className="text-[#3c3a38]/80">
                        Each purse arrives wrapped in natural linen cloth, tied with a signature knot that can be reused
                        as a hair tie or bracelet.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#d4a89a]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="h-5 w-5 text-[#d4a89a]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-[#3c3a38] mb-2">Personal Note</h3>
                      <p className="text-[#3c3a38]/80">
                        Inside each package is a handwritten note from Andreea, thanking you for supporting handmade craft
                        and sharing the story behind your specific purse.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-[#d4a89a]/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="h-5 w-5 text-[#d4a89a]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-[#3c3a38] mb-2">Care Instructions</h3>
                      <p className="text-[#3c3a38]/80">
                        We include a beautiful card with care instructions to ensure your purse remains beautiful for
                        years to come, along with a small emergency repair kit.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <blockquote className="italic text-[#3c3a38]">
                      "Opening my Brea package felt like receiving a gift, even though I bought it for myself. The
                      attention to detail in the packaging matched the beauty of the purse itself."
                    </blockquote>
                    <p className="text-right text-sm text-[#3c3a38]/70 mt-2">— Clara T., Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - New */}
        <section className="py-20 bg-[#f9f6f2]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-[#3c3a38] mb-4">Frequently Asked Questions</h2>
              <p className="text-[#3c3a38] max-w-2xl mx-auto">
                Everything you might want to know about our purses and process.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="bg-white rounded-lg border border-[#e9e2d9] px-6">
                  <AccordionTrigger className="text-[#3c3a38] font-medium py-4 hover:no-underline">
                    How long does shipping take?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#3c3a38]/80 pb-4">
                    We ship all orders within 3-5 business days. Domestic shipping (within Romania) typically takes 2-3
                    days. International shipping varies by location but generally takes 7-14 business days. All orders
                    include tracking information so you can follow your package's journey.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="bg-white rounded-lg border border-[#e9e2d9] px-6">
                  <AccordionTrigger className="text-[#3c3a38] font-medium py-4 hover:no-underline">
                    Can I return a product?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#3c3a38]/80 pb-4">
                    Yes, we offer returns within 14 days of delivery if the item is unused and in its original
                    packaging. Since each piece is handmade, we appreciate your understanding that slight variations are
                    part of what makes your purse unique, not defects. Please contact us at hello@breaknots.com to
                    initiate a return.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="bg-white rounded-lg border border-[#e9e2d9] px-6">
                  <AccordionTrigger className="text-[#3c3a38] font-medium py-4 hover:no-underline">
                    Do you take custom orders?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#3c3a38]/80 pb-4">
                    We occasionally accept custom orders depending on our current production schedule. Custom pieces
                    start at €250 and typically take 3-4 weeks to create. If you have a specific design in mind, please
                    reach out to us with details, and we'll let you know if we can accommodate your request.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="bg-white rounded-lg border border-[#e9e2d9] px-6">
                  <AccordionTrigger className="text-[#3c3a38] font-medium py-4 hover:no-underline">
                    Are your purses water-resistant?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#3c3a38]/80 pb-4">
                    Our purses are made from natural cotton cord which is not inherently water-resistant. While they can
                    handle light exposure to moisture, we recommend keeping them away from heavy rain or water. If your
                    purse does get wet, allow it to air dry naturally away from direct heat sources.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="bg-white rounded-lg border border-[#e9e2d9] px-6">
                  <AccordionTrigger className="text-[#3c3a38] font-medium py-4 hover:no-underline">
                    How do I care for my Brea Knots purse?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#3c3a38]/80 pb-4">
                    To keep your purse looking its best, we recommend spot cleaning with a damp cloth when needed. Avoid
                    harsh chemicals or machine washing. Store your purse in the linen bag it came in when not in use,
                    and keep it away from direct sunlight for extended periods to prevent fading.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="bg-white rounded-lg border border-[#e9e2d9] px-6">
                  <AccordionTrigger className="text-[#3c3a38] font-medium py-4 hover:no-underline">
                    When will sold-out items be restocked?
                  </AccordionTrigger>
                  <AccordionContent className="text-[#3c3a38]/80 pb-4">
                    Since each design is created in limited quantities, we don't typically restock exact designs.
                    However, we often create new pieces inspired by popular styles. The best way to stay informed about
                    new releases is to join our mailing list or follow us on Instagram.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="text-center mt-10">
                <p className="text-[#3c3a38] mb-4">Still have questions? We're happy to help.</p>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="rounded-full border-[#d4a89a] text-[#d4a89a] hover:bg-[#d4a89a] hover:text-white"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Sign-Up */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl text-[#3c3a38] mb-4">Join Our Community</h2>
              <p className="text-[#3c3a38] mb-8">
                We release only a few purses at a time. Be the first to know about upcoming collections and special
                events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Your name"
                  className="rounded-full border-[#e9e2d9] focus:border-[#d4a89a] focus:ring-[#d4a89a]"
                />
                <Input
                  placeholder="Your email"
                  className="rounded-full border-[#e9e2d9] focus:border-[#d4a89a] focus:ring-[#d4a89a]"
                />
              </div>
              <Button className="rounded-full bg-[#d4a89a] hover:bg-[#c89485] text-white px-8 mt-4">
                Subscribe
                <Mail className="ml-2 h-4 w-4" />
              </Button>
              <p className="text-sm text-[#3c3a38]/70 mt-4">Join 237 others who love handcrafted purses</p>
            </div>
          </div>
        </section>

        {/* Instagram Feed */}
        <section className="py-20 bg-[#f9f6f2]">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 mb-12">
              <Instagram className="h-5 w-5 text-[#d4a89a]" />
              <h2 className="font-serif text-2xl text-[#3c3a38]">Follow Our Journey</h2>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {/* 
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=400&width=400&text=Instagram ${item}`}
                    alt={`Instagram post ${item}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
                */}
              <div className="relative overflow-hidden rounded-lg">
                <video autoPlay loop muted className="object-cover hover:scale-105 transition-transform duration-500">
                  <source src="/post3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="relative overflow-hidden rounded-lg">
                <video autoPlay loop muted className="object-cover hover:scale-105 transition-transform duration-500">
                  <source src="/post2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/post1.jpg"
                  alt="Instagram post 1"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>
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
                <Link href="#about" className="block text-sm text-white/80 hover:text-white">
                  About
                </Link>
                <Link href="#drops" className="block text-sm text-white/80 hover:text-white">
                  Drops
                </Link>
                <Link href="#collection" className="block text-sm text-white/80 hover:text-white">
                  Collection
                </Link>
                <Link href="#contact" className="block text-sm text-white/80 hover:text-white">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-4">Connect</h3>
              <div className="flex items-center gap-4">
                <Link href="#" className="text-white/80 hover:text-white">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-white/80 hover:text-white">
                  <Mail className="h-5 w-5" />
                </Link>
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
