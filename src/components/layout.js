import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Footer from "./Footer"
import logoImg from "../images/logo1.png"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // State to control hamburger menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Toggle the menu open/closed
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="flex flex-col min-h-screen">
      {/* NavBar */}
      <header className="bg-white text-customDarkBlue font-comfortaa border-b-2 border-customBlue sm:mx-20">
        <nav className="container mx-auto flex justify-between items-center p-6">
          {/* Left: Dynamic Site Title */}
          <div className="flex items-center">
            <img
              src={logoImg}
              alt="Site Logo"
              className="h-8 mr-4" // Adjust size as needed
            />
            <h1 className="text-2xl font-bold text-customBlue">
              <Link to="/">{data.site.siteMetadata.title}</Link>
            </h1>
          </div>

          {/* Right: Nav Links for Large Screens */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link to="/gravity-method" className="hover:text-gray-400">
              Details
            </Link>
            <Link to="/pricing-page" className="hover:text-gray-400">
              Prep
            </Link>
            <Link to="/faq-page" className="hover:text-gray-400">
              FAQ
            </Link>
            <Link to="/contact-page" className="hover:text-gray-400">
              Contact
            </Link>
          </div>

          {/* Hamburger Icon for Small Screens */}
          <div className="md:hidden flex items-center" onClick={toggleMenu}>
            <button className="text-customBlue focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="space-y-4 py-4">
              <Link to="/" className="block text-center hover:text-gray-400">
                Home
              </Link>
              <Link
                to="/gravity-method"
                className="block text-center hover:text-gray-400"
              >
                Gravity Method Colonics
              </Link>
              <Link
                to="/faq-pricing"
                className="block text-center hover:text-gray-400"
              >
                FAQ & Pricing
              </Link>
              <Link
                to="/blog"
                className="block text-center hover:text-gray-400"
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block text-center hover:text-gray-400"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow font-comfortaa">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Layout
