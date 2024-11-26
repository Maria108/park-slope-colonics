import React from "react"
import { FaFeather, FaGem } from "react-icons/fa"
import { FaChildReaching } from "react-icons/fa6"
import { GiCheckMark } from "react-icons/gi"

const TreatmentBenefitsSection = () => {
  const benefitsData = [
    {
      title: "Feel",
      icon: <FaFeather className="mx-auto text-4xl text-customGreen mb-4" />,
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
        "Refreshed look",
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
  ]

  return (
    <section className="my-20 px-8 max-w-6xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
        What Will You Get Out of the Treatment
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center">
        {benefitsData.map((item, idx) => (
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
  )
}

export default TreatmentBenefitsSection
