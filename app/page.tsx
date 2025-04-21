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
                    src="/ortho1.jpg?height=200&width=400"
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
                    src="/neuro.jpg?height=200&width=400"
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
                    src="/sports.jpg?height=200&width=400"
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
                    src="/geriar.jpg?height=200&width=400"
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
                    src="/pedia.jpg?height=200&width=400"
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
                    src="/home.jpg?height=200&width=400"
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
                  src="/about.jpg?height=500&width=600"
                  alt="About RehabNest Physio"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
              <div>
                <div className="text-purple-500 font-medium mb-2">ABOUT US</div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Dedicated to Your Recovery and Well-being</h2>
                <p className="text-gray-600 mb-6">
                  At RehabNest Physio, we are committed to providing exceptional physiotherapy services that focus on
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
                    href="tel:+918431185513"
                    className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
                  >
                    Call: +91 8431185513
                  </a>
                  <a
                    href="https://api.whatsapp.com/send?phone=918431185513&text=Hello%20RehabNest%20Physio"
                    className="text-purple-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    WhatsApp
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                      <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
                  </svg>
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
        href="tel:+918431185513"
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

