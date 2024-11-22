import React from "react"
import me7 from "../images/me7.jpg"

const Contact = () => {
  return (
    <main className="text-customDarkGreen">
      <section className="my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 h-[70vh]">
          {/* Left Image with Contact Details */}
          <div
            className="bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url(${me7})`,
            }}
          >
            <div className="bg-black bg-opacity-50 text-white p-6 sm:p-8 h-full  w-full flex items-center">
              <div className="max-w-lg w-full ml-[-10%] sm:ml-[-5%]">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                  CONTACTS
                </h2>
                <div className="grid grid-cols-[1.5fr_2fr] gap-x-4 gap-y-2">
                  {/* Labels */}
                  <span className="text-right font-bold">Address:</span>
                  <span className="text-left">
                    313 7th St, Brooklyn, NY, 11215
                  </span>

                  <span className="text-right font-bold">Phone:</span>
                  <span className="text-left">646-385-9985 (text or call)</span>

                  <span className="text-right font-bold">Email:</span>
                  <span className="text-left">parkslopecolonics@gmail.com</span>

                  <span className="text-right font-bold">Hours:</span>
                  <span className="text-left">
                    Mon-Tue 2:30PM - 8PM <br />
                    Wed-Fri 8AM - 8PM
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Background Image */}
          <div
            className="bg-cover bg-center h-full"
            style={{
              backgroundImage: `url(${me7})`,
            }}
          ></div>
        </div>
      </section>
    </main>
  )
}

export default Contact
