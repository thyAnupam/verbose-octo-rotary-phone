import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Understanding Chronic Pain: Causes, Effects, and Management Strategies",
    excerpt:
      "Chronic pain affects millions of people worldwide. Learn about the underlying causes, how it impacts daily life, and effective strategies for managing and reducing chronic pain.",
    image: "/placeholder.svg?height=300&width=600",
    date: "April 2, 2025",
    author: "Dr. Nalini Paschine",
    category: "Pain Management",
    slug: "understanding-chronic-pain",
  },
  {
    id: 2,
    title: "The Role of Physiotherapy in Post-Surgical Recovery",
    excerpt:
      "Discover how physiotherapy plays a crucial role in helping patients recover after surgery, reducing complications, and improving outcomes for various surgical procedures.",
    image: "/placeholder.svg?height=300&width=600",
    date: "March 28, 2025",
    author: "Dr. Seema J.",
    category: "Rehabilitation",
    slug: "physiotherapy-post-surgical-recovery",
  },
  {
    id: 3,
    title: "Exercises for Better Balance: Preventing Falls in Older Adults",
    excerpt:
      "Falls are a major concern for older adults. Learn about effective exercises and techniques that can improve balance, strengthen key muscles, and reduce the risk of falls.",
    image: "/placeholder.svg?height=300&width=600",
    date: "March 20, 2025",
    author: "Dr. Priya Patel",
    category: "Geriatric Care",
    slug: "exercises-better-balance-preventing-falls",
  },
  {
    id: 4,
    title: "Managing Sports Injuries: When to Rest and When to Seek Help",
    excerpt:
      "Sports injuries are common among athletes of all levels. This article discusses how to identify serious injuries, when to apply RICE, and when professional help is necessary.",
    image: "/placeholder.svg?height=300&width=600",
    date: "March 15, 2025",
    author: "Dr. Seema J. ",
    category: "Sports Injuries",
    slug: "managing-sports-injuries",
  },
  {
    id: 5,
    title: "The Benefits of Home Physiotherapy Services",
    excerpt:
      "Home physiotherapy offers numerous advantages over clinic visits. Explore how receiving treatment in your own environment can enhance comfort, convenience, and effectiveness.",
    image: "/placeholder.svg?height=300&width=600",
    date: "March 8, 2025",
    author: "Dr. Nalini Paschine",
    category: "Home Care",
    slug: "benefits-home-physiotherapy",
  },
  {
    id: 6,
    title: "Neuroplasticity: How the Brain Adapts During Rehabilitation",
    excerpt:
      "The brain's ability to reorganize itself is crucial for recovery from neurological conditions. Learn about neuroplasticity and how physiotherapy leverages this remarkable capability.",
    image: "/placeholder.svg?height=300&width=600",
    date: "March 1, 2025",
    author: "Dr. Priya Patel",
    category: "Neurological Rehabilitation",
    slug: "neuroplasticity-brain-adaptation-rehabilitation",
  },
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gray-800 text-white py-20">
          <div className="absolute inset-0 z-0">
            <Image src="/placeholder.svg?height=400&width=1600" alt="Blog" fill className="object-cover opacity-30" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
              <div className="w-24 h-1 bg-purple-500 mx-auto mb-8"></div>
              <p className="text-xl">
                Insights, tips, and expert advice on physiotherapy, rehabilitation, and maintaining optimal physical
                health.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
                >
                  <div className="h-48 relative">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-purple-500 font-medium hover:underline flex items-center"
                    >
                      Read More <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">Browse by Category</h2>
              <div className="w-24 h-1 bg-purple-500 mx-auto mt-4"></div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/blog/category/pain-management"
                className="bg-white px-6 py-3 rounded-full shadow-md hover:bg-purple-500 hover:text-white transition-colors"
              >
                Pain Management
              </Link>
              <Link
                href="/blog/category/rehabilitation"
                className="bg-white px-6 py-3 rounded-full shadow-md hover:bg-purple-500 hover:text-white transition-colors"
              >
                Rehabilitation
              </Link>
              <Link
                href="/blog/category/geriatric-care"
                className="bg-white px-6 py-3 rounded-full shadow-md hover:bg-purple-500 hover:text-white transition-colors"
              >
                Geriatric Care
              </Link>
              <Link
                href="/blog/category/sports-injuries"
                className="bg-white px-6 py-3 rounded-full shadow-md hover:bg-purple-500 hover:text-white transition-colors"
              >
                Sports Injuries
              </Link>
              <Link
                href="/blog/category/home-care"
                className="bg-white px-6 py-3 rounded-full shadow-md hover:bg-purple-500 hover:text-white transition-colors"
              >
                Home Care
              </Link>
              <Link
                href="/blog/category/neurological-rehabilitation"
                className="bg-white px-6 py-3 rounded-full shadow-md hover:bg-purple-500 hover:text-white transition-colors"
              >
                Neurological Rehabilitation
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-purple-500 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
              <p className="text-xl mb-8">
                Stay updated with the latest articles, tips, and insights on physiotherapy and wellness.
              </p>
              <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                <button
                  type="submit"
                  className="bg-darkblue-500 text-white px-6 py-3 rounded-full hover:bg-darkblue-600 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm mt-4 text-white/80">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

