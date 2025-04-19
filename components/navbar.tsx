"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`bg-white py-4 px-6 sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-md" : ""}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/rehabnest-logo.jpg?height=50&width=50"
              alt="RehabNest Physiocare Logo"
              width={50}
              height={50}
              className="mr-3"
            />
          </Link>
          <Link href="/">
            <h1 className="text-2xl font-bold text-gray-800">REHABNEST PHYSIO</h1>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} className="text-gray-800" /> : <Menu size={24} className="text-gray-800" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-gray-700 hover:text-purple-500 font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-purple-500 font-medium">
            About
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-purple-500 font-medium">
            Services
          </Link>
          <div className="relative group">
            <button
              className="text-gray-700 hover:text-purple-500 font-medium flex items-center gap-1"
              onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
            >
              Pages <ChevronDown size={16} />
            </button>
            {/* Improved dropdown with better hover behavior */}
            <div
              className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20 transition-opacity duration-150 ${pagesDropdownOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
              <Link
                href="/blog"
                className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-500"
                onClick={() => setPagesDropdownOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/testimonials"
                className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-500"
                onClick={() => setPagesDropdownOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/faq"
                className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-500"
                onClick={() => setPagesDropdownOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </div>
          <Link href="/contact" className="text-gray-700 hover:text-purple-500 font-medium">
            Contact Us
          </Link>
          <Link
            href="/#appointment"
            className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
          >
            Book Appointment
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-inner">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-800 hover:text-purple-500 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-800 hover:text-purple-500 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-800 hover:text-purple-500 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <div>
              <button
                className="text-gray-800 hover:text-purple-500 font-medium flex items-center gap-1"
                onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
              >
                Pages{" "}
                <ChevronDown
                  size={16}
                  className={`transform transition-transform ${pagesDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {pagesDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                  <Link
                    href="/blog"
                    className="block text-gray-700 hover:text-purple-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/testimonials"
                    className="block text-gray-700 hover:text-purple-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="/faq"
                    className="block text-gray-700 hover:text-purple-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className="text-gray-800 hover:text-purple-500 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/#appointment"
              className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors inline-block w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

