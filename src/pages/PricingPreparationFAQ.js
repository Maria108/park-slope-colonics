import React from "react"
import lena6Image from "../images/prep.jpeg"
import lena5Image from "../images/lena5.jpeg"
import preps from "../images/glass.jpg"
import { GiCheckMark } from "react-icons/gi"
import { GoStop } from "react-icons/go"

const PricingPreparationFAQ = () => {
  return (
    <section className="sm:mx-20 text-customDarkGreen">
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {/* Left Section - Image */}
        <div
          className="relative bg-cover bg-center h-[50vh] sm:h-[70vh] bg-no-repeat"
          style={{
            backgroundImage: `url(${preps})`,
          }}
        ></div>

        {/* Right Section - Background with Text Overlay */}
        <div
          className="relative sm:col-span-2 h-auto sm:h-[70vh] bg-cover bg-center text-white flex items-center"
          style={{
            backgroundImage: `url(${preps})`,
          }}
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-customPink bg-opacity-90"></div>

          {/* Text Content */}
          <div className="relative z-10 p-6 sm:p-14 text-customDarkGreen w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-5 text-center">
              How To Prepare
            </h2>
            <p className="text-sm sm:text-base mb-8 text-left">
              Here are some recommendations to help you get the most out of your
              session, not requirements. Few days prior and right after your
              colonic session:
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 text-left">
              {/* AVOID Column */}
              <div>
                <p className="flex items-center font-bold mb-2">
                  <GoStop className="text-red-400 mr-2 text-xl" /> AVOID:
                </p>
                <ul className="list-disc pl-5">
                  <li className="mb-1">Alcohol</li>
                  <li className="mb-1">Carbonated drinks</li>
                  <li className="mb-1">Dairy Products</li>
                  <li className="mb-1">Fatty and fried foods</li>
                  <li className="mb-1">White flour products</li>
                  <li className="mb-1">Processed and junk foods</li>
                  <li className="mb-1">Beans and legumes</li>
                </ul>
              </div>

              {/* INCLUDE Column */}
              <div className="relative md:ml-[-10px]">
                <p className="flex items-center font-bold mb-2">
                  <GiCheckMark className="text-customGreen mr-2 text-xl" />
                  INCLUDE:
                </p>
                <ul className="list-disc pl-5">
                  <li className="mb-1">
                    Leafy greens (kale, spinach, mustard greens)
                  </li>
                  <li className="mb-1">
                    Seasonal organic vegetables, fruits, berries
                  </li>
                  <li className="mb-1">Veggie juices/smoothies</li>
                  <li className="mb-1">Fermented foods (except kombucha)</li>
                  <li className="mb-1">Whole grains (brown rice, quinoa)</li>
                  <li className="mb-1">Ginger or peppermint tea</li>
                  <li className="mb-1">
                    Purified and distilled water, herbal teas
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="my-4 font-bold">On the day of your session:</h3>
            <p className="text-sm sm:text-base mb-8 text-left">
              You should come on an empty stomach, stop eating at least 3.5
              hours before your appointment and stop drinking about 1.5 hours
              before your appointment. You'll feel a lot more comfortable if you
              avoid a full stomach and bladder. It's important to stay hydrated
              pre and post colonic session.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingPreparationFAQ
