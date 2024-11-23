import React from "react"
import me7 from "../images/prep.jpeg"

const Contact = () => {
  return (
    <section className="text-customDarkGreen sm:mx-20">
      <div className="grid grid-cols-1 md:grid-cols-2 h-[70vh]">
        {/* Left Image with Contact Details */}
        <div
          className="bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${me7})`,
          }}
        >
          <div className="bg-customLigterBlue bg-opacity-70 p-6 sm:p-8 h-full w-full flex items-center">
            <div className="max-w-lg w-full ml-[-10%] sm:ml-[-5%]">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                CONTACTS
              </h2>
              <div className="grid grid-cols-[1.5fr_2fr] gap-x-4 gap-y-2">
                {/* Labels */}
                <span className="text-right font-comfortaaBold">Address:</span>
                <span className="text-left">
                  313 7th St, Brooklyn, NY, 11215
                </span>

                <span className="text-right font-comfortaaBold">Phone:</span>
                <span className="text-left">646-385-9985 (text or call)</span>

                <span className="text-right font-comfortaaBold">Email:</span>
                <span className="text-left">parkslopecolonics@gmail.com</span>

                <span className="text-right font-comfortaaBold">Hours:</span>
                <span className="text-left">
                  Mon-Tue 2:30PM - 8PM <br />
                  Wed-Fri 8AM - 8PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Google Map */}
        <div className="h-full">
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
