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
    {/* Hero Section */}
    <section
      className="relative min-h-[70vh] h-full sm:mx-20 mb-20 sm:bg-cover bg-auto bg-left-top flex sm:flex-row flex-col-reverse sm:items-stretch text-customDarkGreen"
      style={{
        backgroundImage: `url(${me})`,
      }}
    >
      {/* Left Section - Text */}
      <div className="w-full sm:w-[38%] bg-white bg-opacity-70 p-6 sm:p-12 flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
          Colon Hydrotherapy
        </h2>
        <p className="text-sm sm:text-base leading-relaxed mb-6 mx-4">
          Discover a gentle yet powerful way to support your body’s natural
          detoxification and digestive health. Colon hydrotherapy isn’t just
          about cleansing—it’s about restoring balance, easing discomfort, and
          helping you feel your best from the inside out. Each session is
          tailored to your needs in a calm, relaxing environment. Whether you’re
          looking for relief or proactive wellness, we’re here to help you feel
          your best.
        </p>
        <p className="text-sm sm:text-base font-comfortaaBold mb-4 ml-4">
          One Colonic Session (45-60 mins) - $150
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
        className="w-full sm:w-[62%] bg-cover bg-center p-6 sm:p-12 flex justify-left items-center flex-grow sm:h-auto h-[30vh]"
        style={{
          backgroundImage: `url(${me})`,
        }}
      >
        <h1 className="text-lg sm:text-4xl font-bold leading-snug self-left">
          Let go of what weighs you down <br />{" "}
          <span className="sm:pl-16 pl-10">with Park Slope Colonics</span>
        </h1>
      </div>
    </section>

    {/* Benefits Section */}
    <section className="my-20 px-8 max-w-6xl mx-auto text-customDarkGreen">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
        What Will You Get Out of the Treatment
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center">
        {[
          {
            title: "Feel",
            icon: (
              <FaFeather className="mx-auto text-4xl text-customGreen mb-4" />
            ),
            benefits: [
              "Increased energy",
              "Improved digestion",
              "Clearer skin",
              "Reduced bloating",
              "Better mood",
            ],
          },
          {
            title: "Look",
            icon: <FaGem className="mx-auto text-4xl text-customGreen mb-4" />,
            benefits: [
              "Flatter stomach",
              "Glowing complexion",
              "Lighter body",
              "Clearer eyes",
              "Refreshed appearance",
            ],
          },
          {
            title: "Experience",
            icon: (
              <FaChildReaching className="mx-auto text-4xl text-customGreen mb-4" />
            ),
            benefits: [
              "Relaxation",
              "Well-being",
              "Comfort",
              "Positive mindset",
              "Increased focus",
            ],
          },
        ].map((item, idx) => (
          <div key={idx} className="text-center">
            {item.icon}
            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
            <ul className="list-none mx-auto inline-block text-left mt-2">
              {item.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center mb-2">
                  <GiCheckMark className="text-customGreen mr-2 text-xl" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    {/* Meet Your Therapist */}
    <section className="my-10 sm:mx-20 grid grid-cols-1 md:grid-cols-2 text-customDarkGreen">
      {/* Left Background Image */}
      <div
        className="bg-cover bg-center min-h-[50vh] sm:min-h-[70vh]"
        style={{
          backgroundImage: `url(${lenaImage})`,
        }}
      ></div>

      {/* Right Image with Text Overlay */}
      <div
        className="bg-cover bg-center min-h-[50vh] sm:min-h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${lena4Image})`,
        }}
      >
        <div className="bg-customPink bg-opacity-70 p-4 sm:p-6 md:p-8 text-customDarkGreen w-full h-full flex flex-col items-center justify-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-bold mb-4 break-words">
            Meet Your Therapist
          </h2>
          <p className="text-sm sm:text-base text-left leading-relaxed px-4 sm:px-6 md:px-16 break-words">
            Elena Bykova is a certified colon hydrotherapist, a certified
            holistic nutritionist, and the founder of Park Slope Colonics.
            Elena’s journey began in her early twenties when she started working
            at a colonic center and witnessed firsthand the remarkable
            transformations clients achieved with gravity-method colonics. This
            experience inspired her to become certified and dedicate herself to
            the practice of colon hygiene, both for herself and for her clients.
            Since becoming a therapist in 2014, Elena has performed over 1,000
            colonics annually, helping clients reach optimal digestive health.
            She is deeply passionate about the role of digestive health in
            overall well-being and sees the tremendous impact colonics can have
            on enhancing the digestive system and promoting lasting health.
          </p>
        </div>
      </div>
    </section>

    {/* What Clients Are Saying */}
    <section className="h-auto my-20 sm:mx-8 px-8 text-customDarkGreen">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
        What Clients Are Saying
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 overflow-y-auto max-h-[60vh]">
        {[
          {
            text: "I was very nervous in the beginning, but Elena helped ease my anxiety by explaining everything step by step. She reassured me by answering all of my questions in a professional polite manner. Her demeanor was pleasant, and her establishment was very clean. The process it self is painless , I must admit I felt weird about it but actually seeing the feces leave your body is so so satisfying. You won’t believe how much you actually have inside your colon. And I’m someone who goes everyday. Now the best part of it is when it’s over lol. You feel like a brand new person. I felt light like a feather. My abdomen became soft and really really FLAT. 3 days later and I still feel the effects. This will now be included into my self care regimen.",
            author: "- Lorri L.",
          },
          {
            text: "Elena is absolutely amazing! She has the most calming energy that will put you at ease. The space is clean and inviting. Elena walks you through the entire process and makes sure that you are comfortable. Everyone who I have recommended to her has been more than satisfied. Well worth the trip if you’re having stomach issues or for an annual detox!",
            author: "- Akua A.",
          },
          {
            text: "My experience with Elena has been great, she is always professional. The benefits of the colonics I received here have been profound and multifaceted. Not only have I noticed a significant improvement in my digestion and a decrease in bloating, but my energy levels have soared. The sense of overall well-being and lightness is something I hadn't experienced before. I recommend Elena to anyone looking to explore the health benefits of colonics. Her expertise and care make all the difference in embarking on a journey towards better health and vitality.",
            author: "- Jean G.",
          },
          {
            text: "This is by far the best colonic i have ever had. Right away, i noticed her place was very clean and warm. Which made me feel at ease. Elena was a gem. Her treatment was amazing. Her technique for loosing up everything for a easy flow was amazing.  She also gave me some helpful tips. I left there feeling lighter on my feet. Full of energy and better vision. I told all my friends and co worker in which they said they will make an appointment. I myself will definitely be back again.",
            author: "- Shanika M.",
          },
          {
            text: "My experience at Park Slope Colonics was truly exceptional, and I credit that to Elena, who made the whole process tremendously comfortable from start to finish. She was extremely informative about the colonics process and addressed any concerns I had with patience and care. What really set Elena apart, however, was the way she connected everything back to overall wellness, making it clear that this was more than just a colonic - it was a holistic journey towards better health and wellbeing. She is a gifted and deeply spiritual person, and it was an absolute pleasure to learn from her. Overall, I would highly recommend Park Slope Colonics and Elena to anyone seeking a comfortable, informative, and comprehensive experience. I left feeling truly refreshed and with a newfound perspective on overall wellness and knowledge. Thank you Elena for  amazing experience!",
            author: "- J C.",
          },
          {
            text: "Went to see Elena today for my first ever colonic. To say I was nervous was an understatement. I didn’t know what to expect. Elena’s demeanor is so calming in nature and she reassured me multiple times throughout the entire process, letting me know that everything I was feeling during the colonic was normal. Her belly massages are so extremely necessary to get everything out. She stays with you the entire time, massaging your belly and chatting with you. There’s even a mirror if you want to watch what’s coming out of you (which I totally did lol). TMI but man oh man, it’s crazy to see! The entire process went as smoothly as a colonic could go 😂 I struggle with chronic bloating and constipation. After the appointment, my stomach was as flat as it’s been in 2 years. Definitely will be returning soon. I did my research for weeks prior to booking Park Slope and I’m so glad I did. Thank you again!",
            author: "- Denise N.",
          },
          {
            text: "Elena is too good!!! Highly recommend, helped me relax, made me feel comfortable. Men don't hesitate, go to her for your colonic!!! I will be back.",
            author: "- Treis H.",
          },
          {
            text: "You come out leaving like a brand new person.  Very professional and an accommodating place to be at.  Elena makes you feel comfortable and at ease. She's very knowledgeable, and great at what she does.  Happy and grateful to have found this place.",
            author: "- Eliot A.",
          },
        ].map((quote, idx) => (
          <div
            key={idx}
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
