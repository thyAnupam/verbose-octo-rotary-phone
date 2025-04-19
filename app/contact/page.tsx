import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gray-800 text-white py-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=400&width=1600"
              alt="Contact Us"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <div className="w-24 h-1 bg-purple-500 mx-auto mb-8"></div>
              <p className="text-xl">
                We're here to answer your questions and help you schedule your physiotherapy services. Reach out to us
                today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="text-purple-500 font-medium mb-2">GET IN TOUCH</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Whether you have questions about our services, want to schedule an appointment, or need more
                  information about how we can help with your specific condition, our team is ready to assist you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4 text-purple-500">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                      <a
                        href="tel:+918431185513"
                        className="text-gray-600 hover:text-purple-500 transition-colors block"
                      >
                        +91 8431185513
                      </a>

                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4 text-purple-500">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                      <a
                        href="mailto:info@rehabnestphysio.com"
                        className="text-gray-600 hover:text-purple-500 transition-colors"
                      >
                        info@rehabnestphysio.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4 text-purple-500">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Location</h3>
                      <p className="text-gray-600">Bengaluru, KA, India</p>
                      <p className="text-gray-600 mt-1">We provide home visit services throughout Bengaluru.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-100 p-3 rounded-full mr-4 text-purple-500">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 mb-1">Working Hours</h3>
                      <p className="text-gray-600">Available 24/7 for your convenience</p>
                      <p className="text-gray-600 mt-1">Home visits scheduled at your preferred time</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                <form className="space-y-4">
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
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Subject of your message"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600 transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="text-purple-500 font-medium mb-2">FREQUENTLY ASKED QUESTIONS</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Common Questions</h2>
              <div className="w-24 h-1 bg-purple-500 mx-auto mt-4"></div>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    How do I schedule a home physiotherapy session?
                  </h3>
                  <p className="text-gray-600">
                    You can schedule a session by calling our phone number, sending us an email, or filling out the
                    contact form on this page. Our team will get back to you promptly to arrange a convenient time for
                    your session.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">What areas in Bengaluru do you serve?</h3>
                  <p className="text-gray-600">
                    We provide home physiotherapy services throughout Bengaluru, including all major neighborhoods and
                    surrounding areas. If you're unsure whether we serve your specific location, please contact us for
                    confirmation.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    What should I expect during the first session?
                  </h3>
                  <p className="text-gray-600">
                    Your first session will include a comprehensive assessment of your condition, medical history
                    review, and physical examination. Based on this evaluation, your physiotherapist will develop a
                    personalized treatment plan and begin initial treatment. The session typically lasts 45-60 minutes.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Do you accept insurance?</h3>
                  <p className="text-gray-600">
                    We work with several insurance providers and can provide detailed receipts for reimbursement
                    purposes. Please contact us with your specific insurance details, and we'll be happy to guide you
                    through the process.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">How many sessions will I need?</h3>
                  <p className="text-gray-600">
                    The number of sessions varies depending on your specific condition, its severity, and your body's
                    response to treatment. After your initial assessment, your physiotherapist will provide a
                    recommended treatment plan with an estimated number of sessions. This plan may be adjusted as your
                    treatment progresses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="text-purple-500 font-medium mb-2">OUR COVERAGE AREA</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">We Serve All of Bengaluru</h2>
              <div className="w-24 h-1 bg-purple-500 mx-auto mt-4"></div>
            </div>

            <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-xl relative">
              <Image
                src="/placeholder.svg?height=400&width=1200"
                alt="Map of Bengaluru"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <p className="font-bold text-gray-800">Map placeholder - We serve all areas of Bengaluru</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-500 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Recovery Journey?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our team of expert physiotherapists is ready to help you achieve your health and mobility goals. Schedule
              your consultation today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+918431185513"
                className="bg-white text-purple-500 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium flex items-center gap-2"
              >
                <Phone size={20} /> Call Now
              </a>
              <Link
                href="/#appointment"
                className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors font-medium border border-white"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

