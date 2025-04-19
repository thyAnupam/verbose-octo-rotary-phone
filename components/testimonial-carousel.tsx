"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

// Testimonial data
const testimonials = [
  {
    id: 1,
    text: "After my knee surgery, I was struggling with mobility. The home physiotherapy services from RehabNest Physio were a game-changer. Their therapist was professional, knowledgeable, and genuinely cared about my recovery. I'm now back to my normal activities, pain-free!",
    name: "Rajesh Kumar",
    role: "Knee Rehabilitation Patient",
    rating: 5,
  },
  {
    id: 2,
    text: "My elderly mother needed physiotherapy after her stroke, but taking her to a clinic was challenging. RehabNest Physio's home service was a blessing. The therapist was patient, gentle, and effective. We've seen remarkable improvement in her mobility and strength.",
    name: "Priya Sharma",
    role: "Caregiver for Stroke Patient",
    rating: 5,
  },
  {
    id: 3,
    text: "As a professional athlete, I needed specialized care for my sports injury. The team at RehabNest Physio understood my needs and designed a rehabilitation program that got me back to training quickly and safely. Their expertise in sports injuries is exceptional.",
    name: "Arjun Mehta",
    role: "Professional Athlete",
    rating: 5,
  },
  {
    id: 4,
    text: "I've been dealing with chronic back pain for years. After just a few sessions with RehabNest Physio, I experienced significant relief. Their holistic approach addressed not just my symptoms but also the root causes of my pain. Highly recommended!",
    name: "Sunita Patel",
    role: "Chronic Pain Patient",
    rating: 5,
  },
  {
    id: 5,
    text: "The pediatric physiotherapy services for my son with developmental delays have been incredible. The therapist is so good with children, making the sessions fun while being effective. We've seen tremendous progress in his motor skills.",
    name: "Vikram Singh",
    role: "Parent of Pediatric Patient",
    rating: 5,
  },
  {
    id: 6,
    text: "After my car accident, I needed extensive rehabilitation. RehabNest Physio created a comprehensive recovery plan that addressed all my injuries. Their attention to detail and personalized approach made all the difference in my recovery journey.",
    name: "Ananya Desai",
    role: "Accident Rehabilitation Patient",
    rating: 5,
  },
  {
    id: 7,
    text: "As someone with multiple sclerosis, finding the right physiotherapy is crucial. The team at RehabNest Physio has extensive knowledge about neurological conditions. Their specialized exercises have helped maintain my mobility and independence.",
    name: "Rahul Verma",
    role: "Multiple Sclerosis Patient",
    rating: 5,
  },
  {
    id: 8,
    text: "The geriatric care for my father has been exceptional. The physiotherapist is not only skilled but also compassionate and patient. Dad's balance and strength have improved significantly, reducing his fall risk.",
    name: "Meera Kapoor",
    role: "Daughter of Elderly Patient",
    rating: 5,
  },
  {
    id: 9,
    text: "I was skeptical about physiotherapy for my frozen shoulder, having tried various treatments without success. RehabNest Physio proved me wrong! Their targeted approach and manual therapy techniques have restored my range of motion.",
    name: "Sanjay Gupta",
    role: "Shoulder Rehabilitation Patient",
    rating: 5,
  },
  {
    id: 10,
    text: "The post-pregnancy physiotherapy services were exactly what I needed. The therapist understood the unique challenges of postpartum recovery and designed exercises that helped me regain core strength and address diastasis recti safely.",
    name: "Deepika Reddy",
    role: "Postpartum Patient",
    rating: 5,
  },
  {
    id: 11,
    text: "Working from home caused severe neck and back issues for me. The ergonomic assessment and targeted therapy from RehabNest Physio not only relieved my pain but also taught me how to prevent future problems with proper workspace setup.",
    name: "Karthik Nair",
    role: "Work-From-Home Professional",
    rating: 5,
  },
  {
    id: 12,
    text: "My tennis elbow was affecting both my professional and sporting life. The specialized treatment I received was excellent. The therapist combined various techniques that provided both immediate relief and long-term recovery.",
    name: "Aditya Sharma",
    role: "Sports Injury Patient",
    rating: 5,
  },
  {
    id: 13,
    text: "After my hip replacement surgery, I was anxious about recovery. The physiotherapist from RehabNest Physio was incredibly knowledgeable about post-surgical protocols and guided me through each stage of rehabilitation with confidence.",
    name: "Lakshmi Rao",
    role: "Post-Surgical Rehabilitation Patient",
    rating: 5,
  },
  {
    id: 14,
    text: "The vestibular rehabilitation for my vertigo has been life-changing. After years of dizziness affecting my daily life, the specialized exercises and treatment approach have significantly reduced my symptoms. I can finally enjoy normal activities again.",
    name: "Vivek Malhotra",
    role: "Vestibular Rehabilitation Patient",
    rating: 5,
  },
  {
    id: 15,
    text: "As a marathon runner, preventing injuries is as important as treating them. The sports physiotherapy team at RehabNest Physio has been instrumental in keeping me injury-free with their preventative approach and running gait analysis.",
    name: "Neha Joshi",
    role: "Marathon Runner",
    rating: 5,
  },
  {
    id: 16,
    text: "The lymphedema management for my post-cancer treatment has been excellent. The therapist is highly specialized in this area and has helped reduce my swelling significantly. The home service makes the regular treatments much more manageable.",
    name: "Ritu Khanna",
    role: "Lymphedema Patient",
    rating: 5,
  },
  {
    id: 17,
    text: "My child with cerebral palsy has shown remarkable progress with RehabNest Physio's pediatric neurodevelopmental therapy. The therapist is not only skilled but also connects wonderfully with my child, making the sessions enjoyable.",
    name: "Suresh Menon",
    role: "Parent of Child with Cerebral Palsy",
    rating: 5,
  },
  {
    id: 18,
    text: "The respiratory physiotherapy for my COPD has improved my breathing capacity and quality of life. The therapist taught me breathing techniques and exercises that I can do daily to manage my condition better.",
    name: "Mohan Lal",
    role: "COPD Patient",
    rating: 5,
  },
]

export function TestimonialCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let interval: any

    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    // Clone the testimonials for infinite scrolling effect
    const originalItems = scrollContainer.querySelectorAll(".testimonial-item")
    originalItems.forEach((item) => {
      const clone = item.cloneNode(true)
      scrollContainer.appendChild(clone)
    })

    // Animation function
    const animate = () => {
      if (!scrollContainer) return

      // If we've scrolled to the cloned items, reset to the start without animation
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.style.scrollBehavior = "auto"
        scrollContainer.scrollLeft = 0
        setTimeout(() => {
          scrollContainer.style.scrollBehavior = "smooth"
        }, 20)
      } else {
        // Otherwise, scroll one pixel to create continuous movement
        scrollContainer.scrollLeft += 4
      }
    }

    // Set interval for animation
    interval = setInterval(animate, 30)

    // Pause animation on hover or touch
    const pauseAnimation = () => clearInterval(interval)

    // Resume animation when mouse leaves
    const resumeAnimation = () => {
      clearInterval(interval)
      const newInterval = setInterval(animate, 30)
      return newInterval
    }

    scrollContainer.addEventListener("mouseenter", pauseAnimation)
    scrollContainer.addEventListener("mouseleave", () => {
      interval = resumeAnimation()
    })
    scrollContainer.addEventListener("touchstart", pauseAnimation)
    scrollContainer.addEventListener("touchend", () => {
      interval = resumeAnimation()
    })

    return () => {
      clearInterval(interval)
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", pauseAnimation)
        scrollContainer.removeEventListener("mouseleave", () => {
          interval = resumeAnimation()
        })
        scrollContainer.removeEventListener("touchstart", pauseAnimation)
        scrollContainer.removeEventListener("touchend", () => {
          interval = resumeAnimation()
        })
      }
    }
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

      {/* Scrolling container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide gap-6 py-4 px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollBehavior: "smooth" }}
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="testimonial-item flex-shrink-0 w-[350px] bg-gray-50 p-8 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <div className="text-yellow-400 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-6 italic h-[120px] overflow-hidden">"{testimonial.text}"</p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

