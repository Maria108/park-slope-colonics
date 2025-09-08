import React from "react"
import logoBackImage from "../images/logoBack.jpeg"

const Contact = () => {
  return (
    <section className="sm:mx-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 h-auto sm:h-[70vh] h-[50vh]">
        {/* Left Section - Contact Details */}
        <div
          className="col-span-1 bg-cover bg-bottom flex items-center justify-center"
          style={{
            backgroundImage: `url(${logoBackImage})`,
          }}
        >
          <div className="p-4 sm:p-6 md:p-8 h-full w-full flex flex-col items-center justify-center">
            <div className="break-words whitespace-normal">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center">
                Contacts
              </h2>
              <div className="grid grid-cols-[1fr_2fr] gap-x-4 gap-y-2 text-sm sm:text-base">
                <span className="text-right font-comfortaaBold">Address:</span>
                <span>516 3rd Ave, Brooklyn, NY, 11215</span>

                <span className="text-right font-comfortaaBold">Phone:</span>
                <span>646-385-9985 (text or call)</span>

                <span className="text-right font-comfortaaBold">Email:</span>
                <span>parkslopecolonics@gmail.com</span>

                <span className="text-right font-comfortaaBold">Hours:</span>
                <span>
                  Mon-Tue 2:30PM - 8PM <br />
                  Wed-Fri 8AM - 8PM <br />
                  Sat-Sun 9AM - 3PM
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
        <div className="col-span-2 h-[calc(50vh-4rem)] sm:h-[50vh] md:h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7899945628654!2d-73.9905205242921!3d40.670965245080996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3783775d6d%3A0xeed2e8f48e81d9d5!2s516%203rd%20Ave%2C%20Brooklyn%2C%20NY%2011215%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
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
