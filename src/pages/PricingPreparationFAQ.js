import React from "react"
import lena6Image from "../images/lena6.jpeg"
import lena1Image from "../images/lena1.jpeg"
import bellyImage from "../images/greenbelly.jpeg"

const PricingPreparationFAQ = () => {
  return (
    <main className="text-customDarkGreen">
      {/* First Section */}
      <section className="my-20 px-4 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
          HOW TO PREPARE
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8">
          <div
            className="relative bg-cover bg-center h-[50vh] sm:h-[60vh] bg-no-repeat"
            style={{
              backgroundImage: `url(${lena6Image})`,
            }}
          >
            {/* <div className="absolute inset-0 bg-customPink bg-opacity-70 flex items-center justify-center px-8 sm:px-8 text-customDarkGreen text-lg sm:text-xl"></div> */}
          </div>

          <div className="p-4 sm:p-8 text-lg sm:text-xl">
            <p className="max-w text-justify">
              Here are some recommendations to help you get the most out of your
              session, not requirements. Few days prior and right after your
              colonic session:
            </p>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-justify">
              {/* AVOID Column */}
              <div>
                <span className="font-bold">AVOID:</span>
                <ul className="list-disc pl-5">
                  <li>Alcohol</li>
                  <li>Carbonated drinks</li>
                  <li>Dairy Products</li>
                  <li>Fatty and fried foods</li>
                  <li>White flour products</li>
                  <li>Processed and junk foods</li>
                  <li>Beans and legumes</li>
                </ul>
              </div>

              {/* INCLUDE Column */}
              <div>
                <span className="font-bold">INCLUDE:</span>
                <ul className="list-disc pl-5">
                  <li>Leafy greens (kale, spinach, mustard greens)</li>
                  <li>Seasonal organic vegetables, fruits, berries</li>
                  <li>Veggie juices/smoothies</li>
                  <li>Fermented foods (except kombucha)</li>
                  <li>Whole grains (brown rice, quinoa)</li>
                  <li>Ginger or peppermint tea</li>
                  <li>Purified and distilled water, herbal teas</li>
                </ul>
              </div>
            </div>

            <h3 className="mt-6 font-bold">On the day of your session:</h3>
            <p className="mt-4 text-justify">
              You should come on an empty stomach, stop eating at least 3.5
              hours before your appointment and stop drinking about 1.5 hours
              before your appointment. You'll feel a lot more comfortable if you
              avoid a full stomach and bladder. It's important to stay hydrated
              pre and post colonic session.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PricingPreparationFAQ
