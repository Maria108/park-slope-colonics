import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Contact = () => {
  // Query the image using Gatsby's GraphQL
  const data = useStaticQuery(graphql`
    query {
      logoBackImage: file(relativePath: { eq: "logoBack.jpeg" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `)

  // Get the optimized image
  const backgroundImage = getImage(data.logoBackImage)

  return (
    <section className="text-customDarkGreen sm:mx-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 h-auto sm:h-[70vh] h-[50vh]">
        {/* Left Section - Contact Details */}
        <div className="col-span-1 relative">
          <GatsbyImage
            image={backgroundImage}
            alt="Background"
            className="absolute inset-0 w-full h-full z-[-1]" // Covers the entire div
            imgStyle={{
              objectFit: "cover", // Ensures it covers the div
              objectPosition: "bottom", // Aligns to the bottom
            }}
          />
          <div className="p-4 sm:p-6 md:p-8 h-full w-full flex flex-col items-center justify-center">
            <div className="break-words whitespace-normal">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center">
                Contacts
              </h2>
              <div className="grid grid-cols-[1fr_2fr] gap-x-4 gap-y-2 text-sm sm:text-base">
                <span className="text-right font-comfortaaBold">Address:</span>
                <span>313 7th St, Brooklyn, NY, 11215</span>

                <span className="text-right font-comfortaaBold">Phone:</span>
                <span>646-385-9985 (text or call)</span>

                <span className="text-right font-comfortaaBold">Email:</span>
                <span>parkslopecolonics@gmail.com</span>

                <span className="text-right font-comfortaaBold">Hours:</span>
                <span>
                  Mon-Tue 2:30PM - 8PM <br />
                  Wed-Fri 8AM - 8PM
                </span>
              </div>
            </div>
            {/* Button Section */}
            <a
              href="https://square.site/book/B5H65JGC5J9Y9/park-slope-colonics-brooklyn-ny"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-6 py-3 text-lg rounded-md hover:bg-customBeige inline-block mt-6 mb-36 md:mb-8"
            >
              Book an Appointment
            </a>
          </div>
        </div>

        {/* Right Section - Google Map */}
        <div className="col-span-2 h-[50vh] md:h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.843575716129!2d-73.98816832429223!3d40.669789345136576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a37b1c93d05%3A0x2dbf2459af29eb2!2s313%207th%20St%2C%20Brooklyn%2C%20NY%2011215%2C%20USA!5e0!3m2!1sen!2sin!4v1698000000000!5m2!1sen!2sin"
            title="Google map"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Contact
