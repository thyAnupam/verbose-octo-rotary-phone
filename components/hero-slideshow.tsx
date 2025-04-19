"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    badge: "HOME VISIT",
    title: "Your Journey To Pain-Free Living Begins Now!",
    description:
      "Experience the convenience of personalized care in the comfort of your own home with our professional home physiotherapy services.",
    image: "/placeholder.svg?height=600&width=1600",
    alt: "Home physiotherapy session",
  },
  {
    id: 2,
    badge: "EXPERT CARE",
    title: "Specialized Physiotherapy For All Your Needs",
    description:
      "Our team of experienced physiotherapists provides personalized treatment plans to help you recover faster and live better.",
    image: "/placeholder.svg?height=600&width=1600",
    alt: "Physiotherapist with patient",
  },
  {
    id: 3,
    badge: "REHABILITATION",
    title: "Regain Your Strength And Mobility",
    description:
      "Advanced rehabilitation techniques to help you recover from injuries, surgeries, and chronic conditions with lasting results.",
    image: "/placeholder.svg?height=600&width=1600",
    alt: "Rehabilitation session",
  },
]

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.alt}
              fill
              className="object-cover opacity-50"
              priority={index === 0}
            />
          </div>
          <div className="container mx-auto px-6 py-20 relative z-10 h-full flex items-center">
            <div className="max-w-3xl md:pt-0 pt-8">
              <div className="bg-purple-500 inline-block px-4 py-1 mb-4 rounded">{slide.badge}</div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{slide.title}</h2>
              {/* Description only visible on tablet and larger screens */}
              <p className="text-xl mb-8 hidden md:block">{slide.description}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://api.whatsapp.com/send?phone=918431185513&text=Hello%20RehabNest%20Physio"
                  className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition-colors flex items-center gap-2"
                >
                  Book Appointment
                  <i className="fab fa-whatsapp text-xl"></i>
                </Link>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="text-lg font-bold">Call or WhatsApp on</div>
                    <a
                      href="tel:+918431185513"
                      className="text-2xl md:text-3xl font-bold hover:text-purple-400 transition-colors"
                    >
                      8431185513
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xs md:text-sm text-white/80">
                <p>Email: info@rehabnestphysio.com | Working Hours: All Week (24 × 7)</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - smaller on mobile */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white p-1 md:p-2 rounded-full hover:bg-black/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={16} className="md:hidden" />
        <ChevronLeft size={24} className="hidden md:block" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 text-white p-1 md:p-2 rounded-full hover:bg-black/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={16} className="md:hidden" />
        <ChevronRight size={24} className="hidden md:block" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

