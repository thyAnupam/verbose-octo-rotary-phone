"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/rehabnest-logo.jpg?height=50&width=50"
                alt="RehabNest Physiocare Logo"
                width={50}
                height={50}
                className="mr-3"
              />
              <h3 className="text-xl font-bold">RehabNest PHYSIOCARE</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Professional physiotherapy services delivered with care and expertise. We're committed to helping you
              achieve optimal physical health and well-being.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-purple-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-purple-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-purple-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Orthopedic Rehabilitation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Neurological Rehabilitation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Sports Injury Rehabilitation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Geriatric Physiotherapy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Pediatric Physiotherapy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Home Physiotherapy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-purple-500" />
                <span className="text-gray-400">Mahaveer Rd, Akshaynagar, Hulimavu, Bengaluru, Karnataka 560076 India</span>
                <span className="text-gray-400">15th Main Rd, Harlur, Eastwood Twp, Bengaluru, Karnataka 560103 India</span>

              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-3 mt-1 text-purple-500" />
                <div>
                  <a href="tel:+918431185513" className="text-gray-400 hover:text-white transition-colors block">
                    +91 8431185513
                  </a>

                </div>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 mt-1 text-purple-500" />
                <a href="mailto:info@rehabnestphysio.com" className="text-gray-400 hover:text-white transition-colors">
                  info@rehabnestphysio.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} RehabNest Physiocare. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

