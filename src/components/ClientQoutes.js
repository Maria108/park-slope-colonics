import React, { useState } from "react"
import ReactDOM from "react-dom"

const ClientQuotes = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const reviews = [
    {
      text: "Amazing experience, I feel so much lighter after my treatment! Amazing experience, I feel so much lighter after my treatment!",
      author: "- Sarah L.",
    },
    {
      text: "I've never felt better, highly recommend it!",
      author: "- John D.",
    },
    {
      text: "Amazing experience, I feel so much lighter after my treatment!",
      author: "- Sarah L.",
    },
    {
      text: "I've never felt better, I feel so much lighter after my treatment! highly recommend it! I've never felt better, I feel so much lighter after my  I've never felt better, I feel so much lighter after my  I've never felt better, I feel so much lighter after my I've never felt better, I feel so much lighter after my I've never felt better, I feel so much lighter after my I've never felt better, I feel so much lighter after my I've never felt better, I feel so much lighter after my I've never felt better, I feel so much lighter after my I've never felt better, I feel so much lighter after my I've never felt better, I feel so much lighter after my fbefwewekfewk",
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
  ]

  return (
    <section className="h-[70vh] my-20 px-8 text-customDarkGreen relative">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Clients Are Saying
      </h2>

      {/* Scrollable container with limited rows */}
      <div className="grid grid-cols-2 gap-8 overflow-y-auto max-h-[60vh]">
        {reviews.map((quote, index) => (
          <div
            key={index}
            className="relative bg-customBeige p-4 rounded-md h-36 flex flex-col justify-center items-center text-center transition-all duration-300 overflow-hidden"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Static Display with Line Clamp */}
            <blockquote className="w-full">
              <p className="line-clamp-3">{quote.text}</p>
              <cite className="mt-2">{quote.author}</cite>
            </blockquote>

            {/* Render Popup via Portal if Hovered */}
            {hoveredIndex === index &&
              ReactDOM.createPortal(
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
                    <p>{quote.text}</p>
                    <cite className="mt-2 block text-right">
                      {quote.author}
                    </cite>
                  </div>
                </div>,
                document.body
              )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ClientQuotes
