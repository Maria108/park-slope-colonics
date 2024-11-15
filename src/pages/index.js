import React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import waterImage from "../images/bali.jpg"
import lenaImage from "../images/lena.jpeg"
import lena4Image from "../images/lena4.jpeg"
import { FaFeather, FaGem } from "react-icons/fa"
import { FaChildReaching } from "react-icons/fa6"
import { IoCheckmarkDoneSharp } from "react-icons/io5"

const HomePage = () => (
  <Layout>
    {/* Section 1: Hero */}
    <section
      className="relative h-auto min-h-[70vh] w-full bg-cover bg-center text-white flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${waterImage})` }}
    >
      <div className="absolute inset-0 bg-customBlue bg-opacity-30"></div>
      <h1 className="relative text-4xl sm:text-5xl font-bold mb-4 z-10 text-center">
        Lighter & Brighter with Park Slope Colonics
      </h1>
      <a
        href="https://square-link"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 bg-white text-black px-6 py-3 text-lg rounded-md hover:bg-customBeige"
      >
        Book an Appointment
      </a>
    </section>

    {/* Section 2: What Will You Get */}
    <section className="my-20 px-8 max-w-6xl mx-auto text-customDarkGreen">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Will You Get Out of the Treatment
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
        {/* Feel Section */}
        <div>
          <FaFeather className="mx-auto text-4xl text-customGreen mb-4" />
          <h3 className="text-xl font-semibold uppercase my-4">Feel</h3>
          <ul className="list-none mx-auto inline-block text-left mt-2">
            <li className="flex items-center mb-4">
              <IoCheckmarkDoneSharp className="text-customGreen mr-2 text-2xl" />
              Increased energy
            </li>
            <li className="flex items-center mb-4">
              <IoCheckmarkDoneSharp className="text-customGreen mr-2 text-2xl" />
              Improved digestion
            </li>
            <li className="flex items-center mb-4">
              <IoCheckmarkDoneSharp className="text-customGreen mr-2 text-2xl" />
              Clearer skin
            </li>
            <li className="flex items-center mb-4">
              <IoCheckmarkDoneSharp className="text-customGreen mr-2 text-2xl" />
              Reduced bloating
            </li>
            <li className="flex items-center mb-4">
              <IoCheckmarkDoneSharp className="text-customGreen mr-2 text-2xl" />
              Better mood
            </li>
          </ul>
        </div>

        {/* Look Section */}
        <div>
          <FaGem className="mx-auto text-4xl text-customGreen mb-4" />
          <h3 className="text-xl font-semibold uppercase my-4">Look</h3>
          <ul className="list-none mx-auto inline-block text-left mt-2">
            <li className="flex items-center mb-4">
              <IoCheckmarkDoneSharp className="text-customGreen mr-2 text-2xl" />
              Flatter stomach
            </li>
            <li className="flex items-center mb-4">
              <IoCheckmarkDoneSharp className="text-customGreen mr-2 text-2xl" />
              Glowing complexion
            </li>
            <li className="flex items-center mb-4">
              <IoCheckmarkDoneSharp className="text-customGreen mr-2 text-2xl" />
              Lighter body
            </li>
            <li className="flex items-center mb-4">
              <IoCheckmarkDoneSharp className="text-customGreen mr-2 text-2xl" />
              Clearer eyes
            </li>
            <li className="flex items-center mb-4">
              <IoCheckmarkDoneSharp className="text-customGreen mr-2 text-2xl" />
              Refreshed appearance
            </li>
          </ul>
        </div>

        {/* Experience Section */}
        <div>
          <FaChildReaching className="mx-auto text-4xl text-customGreen mb-4" />
          <h3 className="text-xl font-semibold uppercase my-4">Experience</h3>
          <ul className="list-none mx-auto inline-block text-left mt-2">
            <li className="flex items-center mb-4">
              <IoCheckmarkDoneSharp className="text-customGreen mr-2 text-2xl" />
              Relaxation
            </li>
            <li className="flex items-center mb-4">
              <IoCheckmarkDoneSharp className="text-customGreen mr-2 text-2xl" />
              Well-being
            </li>
            <li className="flex items-center mb-4">
              <IoCheckmarkDoneSharp className="text-customGreen mr-2 text-2xl" />
              Comfort
            </li>
            <li className="flex items-center mb-4">
              <IoCheckmarkDoneSharp className="text-customGreen mr-2 text-2xl" />
              Positive mindset
            </li>
            <li className="flex items-center mb-4">
              <IoCheckmarkDoneSharp className="text-customGreen mr-2 text-2xl" />
              Increased focus
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* Section 3: Meet Your Therapist */}
    <section className="my-20 h-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Left Background Image */}
        <div
          className="bg-cover bg-center h-[70vh]"
          style={{
            backgroundImage: `url(${lenaImage})`,
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        {/* Right Background Image with Text Overlay */}
        <div
          className="bg-cover bg-center h-[70vh]"
          style={{
            backgroundImage: `url(${lena4Image})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bg-customPink bg-opacity-70 text-customDarkGreen p-8 flex flex-col items-center justify-center h-full">
            <h2 className="text-3xl font-bold text-left">
              Meet Your Therapist
            </h2>
            <p className="mt-4 text-justify">
              Elena Bykova is a certified colon hydrotherapist, a certified
              holistic nutritionist, and the founder of Park Slope Colonics.
              Elena’s journey began in her early twenties when she started
              working at a colonic center and witnessed firsthand the remarkable
              transformations clients achieved with gravity-method colonics.
              This experience inspired her to become certified and dedicate
              herself to the practice of colon hygiene, both for herself and for
              her clients. Since becoming a therapist in 2014, Elena has
              performed over 1,000 colonics annually, helping clients reach
              optimal digestive health. She is deeply passionate about the role
              of digestive health in overall well-being and sees the tremendous
              impact colonics can have on enhancing the digestive system and
              promoting lasting health.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Section 4: What Clients Are Saying */}
    <section className="h-auto my-20 px-8 text-customDarkGreen">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Clients Are Saying
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 overflow-y-auto max-h-[60vh]">
        {[
          {
            text: "Amazing experience, I feel so much lighter after my treatment! Amazing experience, Amazing experience, I feel so much lighter after my treatment!",
            author: "- Sarah L.",
          },
          {
            text: "I've never felt better, highly recommend it!",
            author: "- John D.",
          },
          {
            text: "Amazing experience, I feel so much lighter after my treatment! Amazing experience, Amazing experience, I feel so much lighter after my treatment! Amazing experience, Amazing experience, I feel so much lighter after my treatment! Amazing experience, Amazing experience, I feel so much lighter after my treatment! Amazing experience, Amazing experience, I feel so much lighter after my treatment! Amazing experience, Amazing experience, I feel so much lighter after my treatment! Amazing experience, Amazing experience, I feel so much lighter after my treatment! Amazing experience, Amazing experience, I feel so much lighter after my treatment! Amazing experience, Amazing experience, I feel so much lighter after my treatment! Amazing experience, I feel so much lighter after my treatment! fbhjdgfhj",
            author: "- Sarah L.",
          },
          {
            text: "I've never felt better, highly recommend it!",
            author: "- John D.",
          },
          {
            text: "Amazing experience, I feel so much lighter after my treatment! Amazing experience, I feel so much lighter after my treatment! Amazing experience, I feel so much lighter after my treatment! Amazing experience, I feel so much lighter after my treatment! Amazing experience, I feel so much lighter after my treatment!Amazing experience, I feel so much lighter after my treatment!Amazing experience, I feel so much lighter after my treatment!Amazing experience, I feel so much lighter after my treatment! hjerfgejrgfeyrg",
            author: "- Sarah L.",
          },
          {
            text: "I've never felt better, I feel so much lighter after my treatment! highly recommend it!",
            author: "- John D.",
          },
          {
            text: "Amazing experience, I feel so much lighter after my treatment!",
            author: "- Sarah L.",
          },
          {
            text: "I've never felt better, I feel so much lighter after my treatment! I feel so much lighter after my treatment!, highly recommend it! This review goes on and on to give you a sense of how it looks with more content.",
            author: "- John D.",
          },
          {
            text: "Amazing experience, I feel so much lighter after my treatment!",
            author: "- Sarah L.",
          },
          {
            text: "I've never felt better, I feel so much lighter after my treatment! I've never felt better, I feel so much lighter after my treatment! I've never felt better, I feel so much lighter after my treatment! I've never felt better, I feel so much lighter after my treatment! I've never felt better, I feel so much lighter after my treatment! I've never felt better, I feel so much lighter after my treatment! I've never felt better, I feel so much lighter after my treatment! I've never felt better, I feel so much lighter after my treatment! I've never felt better, I feel so much lighter after my treatment! I've never felt better, I feel so much lighter after my treatment! I've never felt better, I feel so much lighter after my treatment! I feel so much lighter after my treatment!, highly recommend it! This review goes on and on to give you a sense of how it looks with more content. referferf",
            author: "- John D.",
          },
          {
            text: "Amazing experience, I feel so much lighter after my treatment!",
            author: "- Sarah L.",
          },
          {
            text: "I've never felt better, I feel so much lighter after my treatment! I feel so much lighter after my treatment!, highly recommend it! This review goes on and on to give you a sense of how it looks with more content.",
            author: "- John D.",
          },
          // Additional reviews here
        ].map((quote, index) => (
          <div
            key={index}
            className="relative bg-customBeige p-4 rounded-md h-36 flex flex-col justify-center items-center text-center transition-transform duration-700 ease-in-out transform scale-95 overflow-hidden hover:scale-100 hover:h-auto"
          >
            <blockquote className="w-full">
              <p className="line-clamp-3 hover:line-clamp-none">{quote.text}</p>
              <cite className="mt-2">{quote.author}</cite>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  </Layout>
)

export default HomePage
