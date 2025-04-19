import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gray-800 text-white py-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=400&width=1600"
              alt="Our Services"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <div className="w-24 h-1 bg-purple-500 mx-auto mb-8"></div>
              <p className="text-xl">
                Comprehensive physiotherapy solutions tailored to your unique needs, delivered with expertise and
                compassion.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="text-purple-500 font-medium mb-2">WHAT WE OFFER</div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Comprehensive Physiotherapy Services</h2>
              <div className="w-24 h-1 bg-purple-500 mx-auto mt-4 mb-8"></div>
              <p className="text-gray-600 max-w-3xl mx-auto">
                At RehabNest Physio, we provide a wide range of physiotherapy services designed to address various
                conditions and help you achieve optimal physical health. Our expert therapists use evidence-based
                techniques and personalized approaches to ensure the best outcomes for each patient.
              </p>
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
                  <ul className="text-gray-600 mb-4 space-y-2">
                    <li>• Joint replacement rehabilitation</li>
                    <li>• Fracture recovery</li>
                    <li>• Arthritis management</li>
                    <li>• Tendon and ligament injuries</li>
                  </ul>
                  <Link href="#orthopedic" className="text-purple-500 font-medium hover:underline">
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
                  <ul className="text-gray-600 mb-4 space-y-2">
                    <li>• Stroke rehabilitation</li>
                    <li>• Parkinson's disease management</li>
                    <li>• Multiple sclerosis therapy</li>
                    <li>• Balance and coordination training</li>
                  </ul>
                  <Link href="#neurological" className="text-purple-500 font-medium hover:underline">
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
                  <ul className="text-gray-600 mb-4 space-y-2">
                    <li>• ACL and other ligament injuries</li>
                    <li>• Muscle strains and tears</li>
                    <li>• Tendonitis and overuse injuries</li>
                    <li>• Performance enhancement</li>
                  </ul>
                  <Link href="#sports" className="text-purple-500 font-medium hover:underline">
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
                  <ul className="text-gray-600 mb-4 space-y-2">
                    <li>• Fall prevention</li>
                    <li>• Osteoporosis management</li>
                    <li>• Arthritis care</li>
                    <li>• Functional mobility training</li>
                  </ul>
                  <Link href="#geriatric" className="text-purple-500 font-medium hover:underline">
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
                  <ul className="text-gray-600 mb-4 space-y-2">
                    <li>• Developmental delay intervention</li>
                    <li>• Cerebral palsy management</li>
                    <li>• Torticollis treatment</li>
                    <li>• Sensory integration therapy</li>
                  </ul>
                  <Link href="#pediatric" className="text-purple-500 font-medium hover:underline">
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
                  <ul className="text-gray-600 mb-4 space-y-2">
                    <li>• Post-surgical rehabilitation</li>
                    <li>• Mobility assistance</li>
                    <li>• Chronic pain management</li>
                    <li>• Customized home exercise programs</li>
                  </ul>
                  <Link href="#home" className="text-purple-500 font-medium hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Service Sections */}
        <section id="orthopedic" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Orthopedic Rehabilitation"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-purple-500 font-medium mb-2">ORTHOPEDIC REHABILITATION</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Restore Movement & Function</h2>
                <p className="text-gray-600 mb-6">
                  Our orthopedic rehabilitation services are designed to help patients recover from musculoskeletal
                  injuries, surgeries, and chronic conditions. Using evidence-based techniques and personalized
                  treatment plans, we focus on restoring mobility, strength, and function.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you're recovering from a joint replacement, dealing with arthritis, or healing from a
                  fracture, our expert therapists will guide you through a comprehensive rehabilitation program tailored
                  to your specific needs and goals.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Our Approach Includes:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Comprehensive assessment and personalized treatment planning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Manual therapy techniques to improve joint mobility and reduce pain</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Therapeutic exercises to restore strength and function</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Modalities for pain management and tissue healing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Education on injury prevention and self-management strategies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="neurological" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="text-purple-500 font-medium mb-2">NEUROLOGICAL REHABILITATION</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Regain Independence & Ability</h2>
                <p className="text-gray-600 mb-6">
                  Our neurological rehabilitation services are specifically designed to address the unique challenges
                  faced by individuals with neurological conditions. We work with patients who have experienced strokes,
                  traumatic brain injuries, spinal cord injuries, and those living with conditions like Parkinson's
                  disease and multiple sclerosis.
                </p>
                <p className="text-gray-600 mb-6">
                  Our expert neurological physiotherapists use specialized techniques to help improve movement,
                  coordination, balance, and functional independence. We understand that each neurological condition
                  presents different challenges, which is why we create highly individualized treatment plans.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Our Neurological Rehabilitation Includes:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Functional movement retraining and neuroplasticity-based approaches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Balance and coordination exercises to prevent falls</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Gait training and mobility assistance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Strategies for managing spasticity and muscle tone</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">•</span>
                      <span>Adaptive equipment recommendations and training</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Neurological Rehabilitation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Additional service sections would continue here */}

        {/* CTA Section */}
        <section className="py-16 bg-purple-500 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Specialized Physiotherapy Services?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our team of expert physiotherapists is ready to provide personalized care tailored to your specific
              condition and recovery goals.
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

