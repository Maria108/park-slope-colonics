// ReviewsSection.jsx
import React from "react"
import { TiStarFullOutline } from "react-icons/ti"

const reviews = [
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
]

const ReviewsSection = () => {
  return (
    <section className="h-auto my-20 sm:mx-8 px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
        Here Are Few of 50+ Reviews From Google
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 overflow-y-auto max-h-[60vh]">
        {reviews.map((quote, idx) => (
          <div
            key={idx}
            className="relative bg-customLigterBlue p-4 rounded-md h-36 flex flex-col justify-center items-center text-center transition-transform duration-700 ease-in-out transform scale-95 overflow-hidden hover:scale-100 hover:h-auto"
          >
            <blockquote className="w-full">
              <p className="line-clamp-3 hover:line-clamp-none">{quote.text}</p>
              <cite className="mt-2 flex items-center justify-center">
                {quote.author}
                <span className="ml-2 flex">
                  {[...Array(5)].map((_, i) => (
                    <TiStarFullOutline key={i} className="text-yellow-600" />
                  ))}
                </span>
              </cite>
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ReviewsSection
