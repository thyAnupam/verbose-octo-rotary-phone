"use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, ArrowUp } from "lucide-react"
import { HeroSlideshow } from "@/components/hero-slideshow"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section - Slideshow */}
        <section className="relative bg-gray-800 text-white min-h-[600px] flex items-center">
          <HeroSlideshow />
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="text-purple-500 font-medium mb-2">WHAT WE DO</div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Our Services</h2>
              <div className="w-24 h-1 bg-purple-500 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Orthopedic Rehabilitation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Orthopedic Rehabilitation</h3>
                  <p className="text-gray-600 mb-4">
                    Specialized treatment for musculoskeletal injuries, joint pain, and post-surgical recovery to
                    restore mobility and function.
                  </p>
                  <Link href="/services#orthopedic" className="text-purple-500 font-medium hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>

              {/* Service 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Neurological Rehabilitation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Neurological Rehabilitation</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive therapy for stroke recovery, Parkinson's, multiple sclerosis, and other neurological
                    conditions.
                  </p>
                  <Link href="/services#neurological" className="text-purple-500 font-medium hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>

              {/* Service 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Sports Injury Rehabilitation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Sports Injury Rehabilitation</h3>
                  <p className="text-gray-600 mb-4">
                    Targeted treatment for athletes with sports-related injuries to facilitate quick and safe return to
                    activities.
                  </p>
                  <Link href="/services#sports" className="text-purple-500 font-medium hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>

              {/* Service 4 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Geriatric Physiotherapy"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Geriatric Physiotherapy</h3>
                  <p className="text-gray-600 mb-4">
                    Specialized care for elderly patients focusing on mobility, balance, and pain management to improve
                    quality of life.
                  </p>
                  <Link href="/services#geriatric" className="text-purple-500 font-medium hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>

              {/* Service 5 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Pediatric Physiotherapy"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Pediatric Physiotherapy</h3>
                  <p className="text-gray-600 mb-4">
                    Gentle and effective therapy for children with developmental delays, neurological disorders, and
                    orthopedic conditions.
                  </p>
                  <Link href="/services#pediatric" className="text-purple-500 font-medium hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>

              {/* Service 6 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-gray-200 relative">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Home Physiotherapy"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Home Physiotherapy</h3>
                  <p className="text-gray-600 mb-4">
                    Convenient physiotherapy services delivered in the comfort of your home, tailored to your specific
                    needs and schedule.
                  </p>
                  <Link href="/services#home" className="text-purple-500 font-medium hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px]">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="About RehabNest Physiocare"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
              <div>
                <div className="text-purple-500 font-medium mb-2">ABOUT US</div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Dedicated to Your Recovery and Well-being</h2>
                <p className="text-gray-600 mb-6">
                  At RehabNest Physiocare, we are committed to providing exceptional physiotherapy services that focus on
                  your individual needs. Our team of highly qualified and experienced physiotherapists is dedicated to
                  helping you achieve optimal physical health and well-being.
                </p>
                <p className="text-gray-600 mb-6">
                  We believe in a holistic approach to rehabilitation, combining evidence-based techniques with
                  personalized care to ensure the best outcomes for our patients. Whether you're recovering from an
                  injury, managing a chronic condition, or seeking to improve your physical performance, we're here to
                  support you every step of the way.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <div className="bg-purple-500 p-2 rounded-full mr-3 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Experienced Therapists</h3>
                      <p className="text-gray-600">Highly qualified professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-500 p-2 rounded-full mr-3 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Personalized Care</h3>
                      <p className="text-gray-600">Tailored treatment plans</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-500 p-2 rounded-full mr-3 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Home Visits</h3>
                      <p className="text-gray-600">Convenient in-home therapy</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-purple-500 p-2 rounded-full mr-3 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">24/7 Availability</h3>
                      <p className="text-gray-600">Care when you need it</p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/about"
                  className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition-colors inline-block"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Scrolling */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="text-purple-500 font-medium mb-2">TESTIMONIALS</div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">What Our Patients Say</h2>
              <div className="w-24 h-1 bg-purple-500 mx-auto mt-4"></div>
            </div>

            <TestimonialCarousel />
          </div>
        </section>

        {/* Appointment Section */}
        <section id="appointment" className="py-20 bg-purple-500 text-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Book Your Appointment Today</h2>
                <p className="text-xl mb-8">
                  Take the first step towards pain-free living. Schedule your consultation with our expert
                  physiotherapists.
                </p>
                <div className="bg-white p-1 inline-flex rounded-full mb-8">
                  <a
                    href="tel:+917483023316"
                    className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
                  >
                    Call: +91 7483023316
                  </a>
                  <a
                    href="https://wa.me/917483023316"
                    className="text-purple-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
                <p className="text-lg">
                  Available 24/7 for your convenience. Home visits available throughout Bengaluru.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-xl p-8 text-gray-800">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Request an Appointment</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                        placeholder="Your Phone"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service Required
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                    >
                      <option value="">Select a Service</option>
                      <option value="orthopedic">Orthopedic Rehabilitation</option>
                      <option value="neurological">Neurological Rehabilitation</option>
                      <option value="sports">Sports Injury Rehabilitation</option>
                      <option value="geriatric">Geriatric Physiotherapy</option>
                      <option value="pediatric">Pediatric Physiotherapy</option>
                      <option value="home">Home Physiotherapy</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Please describe your condition or requirements"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition-colors font-medium"
                  >
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Floating Call Button */}
      <a
        href="tel:+917483023316"
        className="fixed bottom-24 right-6 bg-darkblue-500 text-white p-3 rounded-full shadow-lg hover:bg-darkblue-600 transition-colors z-50"
        aria-label="Call us"
      >
        <Phone size={20} />
      </a>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-purple-500 text-white p-3 rounded-full shadow-lg hover:bg-purple-600 transition-colors z-50"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  )
}

