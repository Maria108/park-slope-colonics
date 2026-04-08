import React from "react"
import Layout from "../components/layout"
import bellyImage from "../images/belly.jpeg"
import lenaNewImage from "../images/lenaNew2.jpg"
import jennImage from "../images/Jenn.png"
import roomImage from "../images/room.jpeg"
import officeImage from "../images/office5.jpeg"
import ReviewsSection from "../components/ReviewsSection"
import TreatmentBenefitsSection from "../components/TreatmentBenefitsSection"
import { FaMapPin } from "react-icons/fa";

const HomePage = () => (
  <Layout>
    {/* Temporary Price Update Notice (appears right after nav) */}
    <section className="px-4 sm:px-6 md:px-8 py-6 sm:py-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl sm:text-2xl font-comfortaaBold text-center mb-4">
          New Location Update
        </h2>
    
        <p className="text-sm sm:text-base leading-relaxed mb-4">
          I'm now welcoming clients in a <span className="font-comfortaaBold">new, spacious office</span> at:
          <br />
        </p>

        <p className="text-sm sm:text-base leading-relaxed mb-4">
          <span className="inline-flex items-baseline gap-1">
            <FaMapPin className="text-red-500" />
            <span className="font-comfortaaBold">
              516 3rd Ave, Brooklyn, NY 11215 — street-level storefront
            </span>.
          </span>
        </p>
    
        <p className="text-sm sm:text-base leading-relaxed mb-4">
          The new space is just a short walk from the previous location, right here in the same neighborhood.
        </p>
    
        <p className="text-sm sm:text-base leading-relaxed mb-4">
          Thank you for your trust and support — it's truly an honor to be part of your wellness journey.
        </p>
      </div>
    </section>

    {/* Hero Section */}
    <section
      className="relative min-h-[70vh] h-full sm:mx-20 mb-20 xl:bg-cover bg-auto bg-left-top flex xl:flex-row flex-col-reverse xl:items-stretch"
      style={{
        backgroundImage: `url(${bellyImage})`,
      }}
    >
      {/* Left Section - Text */}
      <div className="w-full xl:w-[38%] bg-white bg-opacity-70 p-6 xl:p-12 flex flex-col justify-center">
        <h2 className="text-2xl xl:text-3xl font-bold mb-4 text-center">
          Colon Hydrotherapy
        </h2>
        <p className="text-sm xl:text-base leading-relaxed mb-6 mx-4 indent-6">
          Discover a gentle yet powerful way to support your body's natural
          detoxification and digestive health. Colon hydrotherapy isn't just
          about cleansing—it's about restoring balance, easing discomfort, and
          helping you feel your best from the inside out. Each session is
          tailored to your needs in a calm, relaxing environment. Whether you're
          looking for relief or proactive wellness, we're here to help you feel
          your best.
        </p>
        <p className="text-sm xl:text-base font-comfortaaBold mb-4 ml-4">
          One Colonic Session (45-60 mins) - $175
        </p>
        <a
          href="https://square.site/book/B5H65JGC5J9Y9/park-slope-colonics-brooklyn-ny"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white px-6 py-3 text-lg rounded-md hover:bg-customBeige inline-block self-center my-4"
        >
          Book an Appointment
        </a>
      </div>

      {/* Right Section - Slogan */}
      <div
        className="w-full xl:w-[62%] bg-cover bg-center p-6 xl:p-12 flex justify-left items-center flex-grow xl:h-auto h-[30vh]"
        style={{
          backgroundImage: `url(${bellyImage})`,
        }}
      >
        <h1 className="text-lg md:text-4xl font-bold leading-snug self-left">
          Let go of what weighs you down <br />{" "}
          <span className="xl:pl-16 pl-10">with Park Slope Colonics</span>
        </h1>
      </div>
    </section>

    {/* Benefits Section */}
    <TreatmentBenefitsSection />

    {/* Meet Your Therapists - Header */}
    <div className="my-10 px-8 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
        Meet Your Therapists
      </h2>
    </div>

    {/* Meet Your Therapist - Elena */}
    <section className="mt-0 mb-10 sm:mx-20 grid grid-cols-1 md:grid-cols-2">
      {/* Left Background Image */}
      <div
        className="bg-cover bg-no-repeat min-h-[50vh] sm:min-h-[70vh] bg-[center_20%] sm:bg-[center_25%] md:bg-[center_30%]"
        style={{
          backgroundImage: `url(${lenaNewImage})`,
        }}
      ></div>

      {/* Right Image with Text Overlay */}
      <div
        className="bg-cover bg-center min-h-[50vh] sm:min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${roomImage})`,
        }}
      >
        <div className="bg-customPink bg-opacity-70 p-4 sm:p-6 md:p-8 w-full h-full flex flex-col items-center justify-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-bold mb-4 break-words">
            Elena
          </h2>
          <p className="text-sm sm:text-base text-left indent-6 leading-relaxed px-4 sm:px-6 md:px-16 break-words">
            I’m Elena Bykova, a certified colon hydrotherapist, holistic nutritionist, and the founder of Park Slope Colonics. I started working at a colonic center in my early twenties, where I witnessed the remarkable transformations clients experienced through gravity-method colonics. That experience inspired me to become certified and dedicate myself to this work, both for my own health and for my clients.
          </p>
          <p className="text-sm sm:text-base text-left indent-6 leading-relaxed px-4 sm:px-6 md:px-16 break-words">Since becoming a therapist in 2014, I’ve performed over 1,000 colonics annually, helping clients support and improve their digestive health. I’m deeply passionate about the role digestion plays in overall well-being, and I’ve seen firsthand the powerful impact colonics can have in restoring balance and promoting lasting health.</p>
        </div>
      </div>
    </section>

    {/* Meet Your Therapist - Jenn */}
    <section className="mt-0 mb-10 sm:mx-20 grid grid-cols-1 md:grid-cols-2">
      {/* Left - Text Overlay (mirrored layout) */}
      <div
        className="bg-cover bg-center min-h-[50vh] sm:min-h-[70vh] flex items-center justify-center order-2 md:order-1"
        style={{
          backgroundImage: `url(${officeImage})`,
        }}
      >
        <div className="bg-customPink bg-opacity-70 p-4 sm:p-6 md:p-8 w-full h-full flex flex-col items-center justify-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-bold mb-4 break-words">
            Jennifer
          </h2>
          <p className="text-sm sm:text-base text-left indent-6 leading-relaxed px-4 sm:px-6 md:px-16 break-words">
            I’m Jennifer Gage, a certified Colon Hydrotherapist and Lymphatic Drainage Specialist with over 15 years of experience in the wellness industry. As a native New Yorker, I bring a thoughtful, integrative approach to my work, supporting the body physically, mentally, emotionally, and spiritually.
          </p>
          <p className="text-sm sm:text-base text-left indent-6 leading-relaxed px-4 sm:px-6 md:px-16 break-words">I’ve been practicing colon hydrotherapy since 2012 and later expanded into lymphatic drainage. My work is deeply personal. In 2022, I was diagnosed with Stage 3 melanoma, an experience that reshaped how I understand the body’s resilience and need for support. During that time, colonics became a foundation for my internal wellness.</p>
          <p className="text-sm sm:text-base text-left indent-6 leading-relaxed px-4 sm:px-6 md:px-16 break-words">
            After surgery and the physical challenges that followed, I discovered lymphatic drainage, which played a significant role in my recovery. That experience led me to deepen my practice and become certified in this work. Today, I’m passionate about helping clients feel lighter, more balanced, and supported in their own healing.
          </p>
        </div>
      </div>

      {/* Right - Jenn's Photo */}
      <div
        className="bg-cover bg-no-repeat min-h-[50vh] sm:min-h-[70vh] bg-[center_top] order-1 md:order-2"
        style={{
          backgroundImage: `url(${jennImage})`,
        }}
      ></div>
    </section>

    {/* What Clients Are Saying */}
    <ReviewsSection />
  </Layout>
)

export default HomePage