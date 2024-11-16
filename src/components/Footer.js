import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="text-customDarkBlue bg-gradient-to-b from-white to-customLigtBlue py-12 px-6 font-comfortaa border-t-2 border-customBlue">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Column 1: Contact Info */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
        <p>Park Slope Colonics</p>
        <p>123 Main Street, Brooklyn, NY</p>
        <p>Email: info@parkslopecolonics.com</p>
        <p>Phone: (555) 123-4567</p>
      </div>

      {/* Column 2: Disclaimer */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Disclaimer</h3>
        <Link to="/disclaimer" className="text-gray-400 hover:text-gray-800">
          Read our Disclaimer
        </Link>
      </div>

      {/* Column 3: Netlify Form */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Send a Message</h3>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-2 bg-white text-customDarkBlue rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 bg-white text-customDarkBlue rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-2 bg-white text-customDarkBlue rounded-md"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-customDarkBlue px-4 py-2 rounded-md hover:bg-customBeige"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </footer>
)

export default Footer
