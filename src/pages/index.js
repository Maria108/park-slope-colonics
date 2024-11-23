import React from "react"
import Layout from "../components/layout"
import me from "../images/mem.jpg"
import lenaImage from "../images/lena.jpeg"
import lena4Image from "../images/lena4.jpeg"
import { FaFeather, FaGem } from "react-icons/fa"
import { FaChildReaching } from "react-icons/fa6"
import { GiCheckMark } from "react-icons/gi"

const HomePage = () => (
  <Layout>
    <section
      className="relative h-auto min-h-[70vh] sm:mx-20 mb-20 sm:bg-cover bg-auto bg-left-top sm:bg-top flex flex-col sm:flex-row items-center"
      style={{
        backgroundImage: `url(${me})`,
      }}
    >
      {/* Right Section - Slogan */}
      <div
        className="relative z-10 w-full sm:w-2/3 order-1 sm:order-2 flex flex-col justify-center items-left p-6 sm:p-12 bg-cover bg-center min-h-[30vh] sm:min-h-[70vh]"
        style={{ backgroundImage: `url(${me})` }}
      >
        <h1 className="text-lg sm:text-4xl font-bold text-customDarkGreen text-left">
          Let go of what weighs you down <br />{" "}
          <span className="sm:pl-16 pl-10">with Park Slope Colonics</span>
        </h1>
      </div>

      {/* Left Section - Text */}
      <div className="relative z-10 h-[55vh] sm:h-[70vh] w-full sm:w-[40%] order-2 sm:order-1 bg-white bg-opacity-70 text-customDarkGreen px-6 flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
          Colon Hydrotherapy
        </h2>
        <p className="text-sm sm:text-base mb-2 mx-4 max-w-sm text-left">
          Discover a gentle yet powerful way to support your body’s natural
          detoxification and digestive health. Colon hydrotherapy isn’t just
          about cleansing—it’s about restoring balance, easing discomfort, and
          helping you feel your best from the inside out. Each session is
          tailored to your needs in a calm, relaxing environment. Whether you’re
          looking for relief or proactive wellness, we’re here to help you feel
          your best.
        </p>
        <p className="text-sm sm:text-base mt-14 mb-6 ml-4 font-comfortaaBold self-left">
          One Colonic Session (45-60 mins) - $150
        </p>
        <a
          href="https://square-link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-customDarkGreen px-6 py-3 text-lg rounded-md hover:bg-customBeige inline-block self-center my-4"
        >
          Book an Appointment
        </a>
      </div>
    </section>

    <section className="my-20 px-8 max-w-6xl mx-auto text-customDarkGreen">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
        What Will You Get Out of the Treatment
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
        {/* Feel Section */}
        <div>
          <FaFeather className="mx-auto text-4xl text-customGreen mb-4" />
          <h3 className="text-xl font-semibold my-4">Feel</h3>
          <ul className="list-none mx-auto inline-block text-left mt-2">
            <li className="flex items-center mb-4">
              <GiCheckMark className="text-customGreen mr-2 text-2xl" />
              Increased energy
            </li>
            <li className="flex items-center mb-4">
              <GiCheckMark className="text-customGreen mr-2 text-2xl" />
              Improved digestion
            </li>
            <li className="flex items-center mb-4">
              <GiCheckMark className="text-customGreen mr-2 text-2xl" />
              Clearer skin
            </li>
            <li className="flex items-center mb-4">
              <GiCheckMark className="text-customGreen mr-2 text-2xl" />
              Reduced bloating
            </li>
            <li className="flex items-center mb-4">
              <GiCheckMark className="text-customGreen mr-2 text-2xl" />
              Better mood
            </li>
          </ul>
        </div>

        {/* Look Section */}
        <div>
          <FaGem className="mx-auto text-4xl text-customGreen mb-4" />
          <h3 className="text-xl font-semibold my-4">Look</h3>
          <ul className="list-none mx-auto inline-block text-left mt-2">
            <li className="flex items-center mb-4">
              <GiCheckMark className="text-customGreen mr-2 text-2xl" />
              Flatter stomach
            </li>
            <li className="flex items-center mb-4">
              <GiCheckMark className="text-customGreen mr-2 text-2xl" />
              Glowing complexion
            </li>
            <li className="flex items-center mb-4">
              <GiCheckMark className="text-customGreen mr-2 text-2xl" />
              Lighter body
            </li>
            <li className="flex items-center mb-4">
              <GiCheckMark className="text-customGreen mr-2 text-2xl" />
              Clearer eyes
            </li>
            <li className="flex items-center mb-4">
              <GiCheckMark className="text-customGreen mr-2 text-2xl" />
              Refreshed appearance
            </li>
          </ul>
        </div>

        {/* Experience Section */}
        <div>
          <FaChildReaching className="mx-auto text-4xl text-customGreen mb-4" />
          <h3 className="text-xl font-semibold my-4">Experience</h3>
          <ul className="list-none mx-auto inline-block text-left mt-2">
            <li className="flex items-center mb-4">
              <GiCheckMark className="text-customGreen mr-2 text-2xl" />
              Relaxation
            </li>
            <li className="flex items-center mb-4">
              <GiCheckMark className="text-customGreen mr-2 text-2xl" />
              Well-being
            </li>
            <li className="flex items-center mb-4">
              <GiCheckMark className="text-customGreen mr-2 text-2xl" />
              Comfort
            </li>
            <li className="flex items-center mb-4">
              <GiCheckMark className="text-customGreen mr-2 text-2xl" />
              Positive mindset
            </li>
            <li className="flex items-center mb-4">
              <GiCheckMark className="text-customGreen mr-2 text-2xl" />
              Increased focus
            </li>
          </ul>
        </div>
      </div>
    </section>

    {/* Section 2: Pricing */}

    {/* Section 3: Meet Your Therapist */}
    <section className="my-20 sm:mx-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Background Image */}
        <div
          className="bg-cover bg-center h-full min-h-[70vh]"
          style={{
            backgroundImage: `url(${lenaImage})`,
          }}
        ></div>

        {/* Right Image with Text Overlay */}
        <div
          className="bg-cover bg-center flex items-center justify-center relative min-h-[70vh]"
          style={{
            backgroundImage: `url(${lena4Image})`,
          }}
        >
          <div className="absolute inset-0 bg-customPink bg-opacity-70 text-customDarkGreen flex items-center justify-center p-6 sm:p-8">
            <div className="max-w-md">
              <h2 className="text-2xl sm:text-3xl font-bold text-center">
                Meet Your Therapist
              </h2>
              <p className="mt-4 text-sm sm:text-base text-left">
                Elena Bykova is a certified colon hydrotherapist, a certified
                holistic nutritionist, and the founder of Park Slope Colonics.
                Elena’s journey began in her early twenties when she started
                working at a colonic center and witnessed firsthand the
                remarkable transformations clients achieved with gravity-method
                colonics. This experience inspired her to become certified and
                dedicate herself to the practice of colon hygiene, both for
                herself and for her clients. Since becoming a therapist in 2014,
                Elena has performed over 1,000 colonics annually, helping
                clients reach optimal digestive health. She is deeply passionate
                about the role of digestive health in overall well-being and
                sees the tremendous impact colonics can have on enhancing the
                digestive system and promoting lasting health.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section 4: What Clients Are Saying */}
    <section className="h-auto my-20 sm:mx-8 px-8 text-customDarkGreen">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
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
            className="relative bg-customLigterBlue p-4 rounded-md h-36 flex flex-col justify-center items-center text-center transition-transform duration-700 ease-in-out transform scale-95 overflow-hidden hover:scale-100 hover:h-auto"
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
