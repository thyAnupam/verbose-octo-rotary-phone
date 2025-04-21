import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gray-800 text-white py-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=400&width=1600"
              alt="About Us"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About RehabNest Physio</h1>
              <div className="w-24 h-1 bg-purple-500 mx-auto mb-8"></div>
              <p className="text-xl">
                Dedicated to providing exceptional physiotherapy services with a personalized approach to help you
                achieve optimal physical health and well-being.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-purple-500 font-medium mb-2">OUR STORY</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">A Journey of Healing and Care</h2>
                <p className="text-gray-600 mb-6">
                  RehabNest Physio was founded in 2019 with a simple yet powerful mission: to provide accessible,
                  high-quality physiotherapy services that truly make a difference in people's lives. What began as a
                  small practice has grown into a trusted name in physiotherapy across Bengaluru.
                </p>
                <p className="text-gray-600 mb-6">
                  Our founder, Dr. Nalini Paschine, established this practice after recognizing the need for personalized
                  physiotherapy services that could be delivered in the comfort of patients' homes. With over 5+ years
                  of experience in various healthcare settings, Dr. Sharma envisioned a service that would eliminate
                  barriers to rehabilitation and recovery.
                </p>
                <p className="text-gray-600">
                  Today, RehabNest Physio comprises a team of dedicated professionals who share the same passion for
                  patient care and rehabilitation excellence. We continue to grow and evolve, but our core values of
                  compassion, expertise, and personalized care remain unchanged.
                </p>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/placeholder.svg?height=400&width=600" alt="Our Story" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="text-purple-500 font-medium mb-2">OUR VALUES</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Drives Us</h2>
              <div className="w-24 h-1 bg-purple-500 mx-auto mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Compassion</h3>
                <p className="text-gray-600">
                  We approach every patient with empathy and understanding, recognizing that each person's journey to
                  recovery is unique. Our care extends beyond physical treatment to emotional support.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  We are committed to the highest standards of professional practice. Our team continuously updates
                  their knowledge and skills to provide evidence-based, effective treatments.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Personalization</h3>
                <p className="text-gray-600">
                  We believe that no two patients are alike. We tailor our treatment plans to address individual needs,
                  goals, and circumstances, ensuring the most effective path to recovery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}


        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="text-purple-500 font-medium mb-2">WHY CHOOSE US</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">The RehabNest Physio Difference</h2>
                <p className="text-gray-600 mb-6">
                  At RehabNest Physio, we go beyond standard physiotherapy practices to provide a truly exceptional
                  experience for our patients. Here's what sets us apart:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-purple-500 p-1 rounded-full mr-3 text-white mt-1">
                      <Check size={16} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Personalized Treatment Plans</h3>
                      <p className="text-gray-600">
                        Customized therapy programs designed specifically for your condition and goals.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-500 p-1 rounded-full mr-3 text-white mt-1">
                      <Check size={16} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Convenient Home Visits</h3>
                      <p className="text-gray-600">
                        Receive professional care in the comfort of your own home, eliminating travel stress.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-500 p-1 rounded-full mr-3 text-white mt-1">
                      <Check size={16} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Holistic Approach</h3>
                      <p className="text-gray-600">
                        We address not just symptoms but the root causes of your condition for lasting results.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-500 p-1 rounded-full mr-3 text-white mt-1">
                      <Check size={16} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Continuous Support</h3>
                      <p className="text-gray-600">
                        Ongoing guidance and home exercise programs to maintain your progress between sessions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-purple-500 p-1 rounded-full mr-3 text-white mt-1">
                      <Check size={16} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Advanced Techniques</h3>
                      <p className="text-gray-600">
                        Access to the latest evidence-based treatment methods and technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image src="/placeholder.svg?height=400&width=600" alt="Why Choose Us" fill className="object-cover" />
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
              <Link
                href="/contact"
                className="bg-white text-purple-500 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium"
              >
                Contact Us
              </Link>
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

