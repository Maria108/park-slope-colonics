import React, { useState } from "react"

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "How long is a typical session?",
      answer:
        "A typical Gravity Colon Hydrotherapy session lasts between 45 minutes to an hour.",
    },
    {
      question: "Is the procedure safe?",
      answer:
        "Yes, the Gravity Method is safe and non-invasive, ensuring a comfortable and effective colon cleansing.",
    },
    {
      question: "How often should I get a colonic session?",
      answer:
        "Frequency depends on your intentions and health concerns. If you are in good health and are interested in colonic for detox and optimum health, the recommendation for colon hygiene is every change of a season - 3-4 times a year. If you have any digestive issues, issues with skin, weight, inflammation, low energy or if you are doing a Cleanse right now - you most likely will need a series of colonics - that could be once a week for 3-6 weeks, every 2 weeks or every month depending on the issue. I will be able to judge when is the best next time for you to come after our session. As you feel the results, you will not need to do colonics that often.",
    },
    {
      question: "Does it hurt?",
      answer:
        "No, Gravity method colonics are known for being gentle on the body. As your body releases matter and gas you may feel some cramping or pressure for a few seconds, that might be uncomfortable but not painful. Most clients feel comfortable and at ease during the treatment. I highly recommend to prepare for your session, following the dietary suggestions I offer will help you to avoid any discomfort.",
    },
    {
      question: "Will colonic wash out all my good bacteria?",
      answer:
        "NO, there is no evidence for that and it is a myth. I have been getting colonics regularly for over 6 years and have been seeing clients who have been doing colonics for over 20 years and still have healthy digestion and regular bowel movements, that would be impossible if the bacteria in the colon was “washed out”. Your heathy bacteria can only survive in a proper, clean, healthy environment and colonic combined with a healthy diet plays a huge role in it.",
    },
    {
      question: "How do I feel after?",
      answer:
        "You feel lighter and brighter! Feel free to go about you day. You should feel empty, light, relieved, rejuvenated, energized, happy. Increased sense of sight is very common. Lower back pain, headaches, puffyness often relieved after one treatment. If you feel less than great (sluggish, sleepy, dizzy, headaches, etc.), this is a sign that there is more work to do and you need to come back for a follow-up session within a week and be careful with food choices.",
    },
    {
      question: "Who should not come in for colonic?",
      answer:
        "Most people can benefit from colonic, but there are some contradictions. You should consul with your doctor if you have conditions listed below: <br/> Abdominal hernia <br/> Acute Crohn’s disease, diverticulitis, abdominal pain <br/> Severe liver, kidney or heart disease conditions <br/> Epilepsy or psychological disorders <br/> Pregnancy <br/> Recent heat attack <br/> Recent surgery (last 6 month) <br/> Rectal or abdominal tumor <br/> Severe hemorrhoids <br/> Uncontrolled hypertension <br/> Vascular aneurism",
    },
    {
      question: "Can I just take a laxative?",
      answer:
        "Laxatives (like senna or cassia), are often marketed as being “natural”, but overtime, these types of laxatives damage the function of your intestinal walls and decrease the ability of your muscles to contract on their own. Too often I get clients in my practice who have been on laxatives for years and their colon is so weak and loose, it can not function anymore so now these people HAVE TO use something to have a bowel movement. Unlike laxatives, colonic is actually strengthening your colon muscle. During the session your colon hydrotherapist is massaging your colon in a specific way to stimulate your natural peristalsis, we call it “a gym for your colon”, overtime the muscle gets stronger and clients report more frequent easy-to-pass bowel movements. Thats the part of the “therapy” in colon hydrotherapy.",
    },
  ]

  return (
    <section className="bg-white py-20 px-4 sm:px-0 sm:mx-20">
      <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">FAQ</h2>
      <div className="space-y-8">
        {faqs.map((faq, index) => {
          const isExpandable = faq.answer.length > 150 // Adjust threshold as needed

          return (
            <div
              key={index}
              className="p-6 bg-customBeige rounded-md shadow-lg"
            >
              <div
                className={`flex items-center ${
                  isExpandable ? "cursor-pointer" : ""
                }`}
                onClick={() => isExpandable && toggleFAQ(index)}
              >
                <h3 className="font-bold flex-1">{faq.question}</h3>
                {isExpandable && (
                  <span
                    className={`transform transition-transform ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                )}
              </div>
              <p
                className={`mt-4 text-gray-700 transition-all overflow-hidden ${
                  openIndex === index || !isExpandable
                    ? "max-h-screen"
                    : "max-h-6"
                }`}
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQSection
