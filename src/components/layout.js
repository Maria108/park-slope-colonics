import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router" // Import useLocation
import Footer from "./Footer"
import logoImg from "../images/logos.png"

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

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const location = useLocation() // Get the current location
  const currentPath = location.pathname

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white text-customDarkBlue font-comfortaa border-b-2 border-customDarkBlue sm:mx-20">
        <nav className="container mx-auto sm:px-0 px-6 flex justify-between items-center py-6">
          <div className="flex items-center">
            <img src={logoImg} alt="Site Logo" className="h-8 mr-4" />
            <h1 className="text-2xl font-bold">
              <Link to="/">{data.site.siteMetadata.title}</Link>
            </h1>
          </div>

          <div className="hidden md:flex space-x-4 items-center">
            <Link
              to="/"
              className={`${
                currentPath === "/"
                  ? "text-gray-800 font-bold"
                  : "hover:text-gray-800"
              }`}
            >
              Home
            </Link>
            <Link
              to="/gravity-method"
              className={`${
                currentPath === "/gravity-method/"
                  ? "text-gray-800 font-bold"
                  : "hover:text-gray-800"
              }`}
            >
              Details
            </Link>
            <Link
              to="/pricing-page"
              className={`${
                currentPath === "/pricing-page/"
                  ? "text-gray-800 font-bold"
                  : "hover:text-gray-800"
              }`}
            >
              Prep
            </Link>
            <Link
              to="/faq-page"
              className={`${
                currentPath === "/faq-page/"
                  ? "text-gray-800 font-bold"
                  : "hover:text-gray-800"
              }`}
            >
              FAQ
            </Link>
            <Link
              to="/contact-page"
              className={`${
                currentPath === "/contact-page/"
                  ? "text-gray-800 font-bold"
                  : "hover:text-gray-800"
              }`}
            >
              Contact
            </Link>
            <a
              href="https://square.site/book/B5H65JGC5J9Y9/park-slope-colonics-brooklyn-ny"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-customLigterBlue px-4 py-2 rounded-md hover:bg-customBeige text-center"
            >
              Book
            </a>
          </div>

          <div
            className="md:hidden flex items-center"
            onClick={toggleMenu}
            tabIndex="0"
            role="button"
            aria-pressed={isMenuOpen}
            onKeyDown={e =>
              e.key === "Enter" || e.key === " " ? toggleMenu() : null
            }
          >
            <button
              className="text-customBlue focus:outline-none"
              aria-label="Toggle menu"
            >
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

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="space-y-4 py-4 text-center">
              <Link
                to="/"
                className={`block ${
                  currentPath === "/"
                    ? "text-gray-800 font-bold"
                    : "hover:text-gray-800"
                }`}
              >
                Home
              </Link>
              <Link
                to="/gravity-method"
                className={`block ${
                  currentPath === "/gravity-method/"
                    ? "text-gray-800 font-bold"
                    : "hover:text-gray-800"
                }`}
              >
                Details
              </Link>
              <Link
                to="/pricing-page"
                className={`block ${
                  currentPath === "/pricing-page/"
                    ? "text-gray-800 font-bold"
                    : "hover:text-gray-800"
                }`}
              >
                Prep
              </Link>
              <Link
                to="/faq-page"
                className={`block ${
                  currentPath === "/faq-page/"
                    ? "text-gray-800 font-bold"
                    : "hover:text-gray-800"
                }`}
              >
                FAQ
              </Link>
              <Link
                to="/contact-page"
                className={`block ${
                  currentPath === "/contact-page/"
                    ? "text-gray-800 font-bold"
                    : "hover:text-gray-800"
                }`}
              >
                Contact
              </Link>
              <a
                href="https://square.site/book/B5H65JGC5J9Y9/park-slope-colonics-brooklyn-ny"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-customLigterBlue px-4 py-2 rounded-md hover:bg-customBeige"
                style={{ margin: "1rem auto 0 auto" }}
              >
                Book
              </a>
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
