import React from "react"
import lenaHandImage from "../images/lenaHand.jpeg"
import lenaPrepImage from "../images/lenaPrep.jpeg"
import office1Image from "../images/office1.jpg"
import office2Image from "../images/office2.jpg"
import office3Image from "../images/office3.jpg"
import {
  IoCloudyNightOutline,
  IoCloudy,
  IoCloudOfflineOutline,
} from "react-icons/io5"
import { FiWind } from "react-icons/fi"
import { FiCloudSnow, FiCloudLightning } from "react-icons/fi"

const GravityMethodColonics = () => {
  return (
    <main>
      {/* First Section */}
      <section className="mb-20 sm:mx-20">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Background Image with Text Overlay */}
          <div
            className="bg-cover bg-center h-auto"
            style={{
              backgroundImage: `url(${lenaHandImage})`,
            }}
          >
            <div className="bg-customLigterBlue bg-opacity-70 flex items-center justify-center px-8 sm:px-8 h-full">
              <div className="max-w-md my-5">
                <h2 className="text-2xl sm:text-3xl font-bold text-center">
                  About Your Colonic Session
                </h2>
                <div className="mt-4 text-sm sm:text-base text-left">
                  <p className="indent-6">
                    A colonic, or colon hydrotherapy, is a natural and gentle
                    cleanse of the colon (large intestine) using warm, purified
                    water. In my private practice, I use the{" "}
                    <span className="font-comfortaaBold">Gravity Method</span>,
                    which relies on the natural flow of water under gravity,
                    ensuring a comfortable and pressure-free experience.
                  </p>
                  <p className="indent-6">
                    Unlike other methods,{" "}
                    <span className="font-comfortaaBold">
                      there are no machines involved
                    </span>
                    , and the water flows in and out continuously, with the
                    outflow safely directed into the sewage system ensuring both
                    cleanliness and comfort throughout the session.
                  </p>
                  <p className="indent-6">
                    As the sole therapist, I provide{" "}
                    <span className="font-comfortaaBold">
                      one-on-one, personalized care
                    </span>{" "}
                    during your treatment, including a firm yet gentle abdominal
                    massage to help facilitate the release of accumulated waste.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Background Image */}
          <div
            className="bg-cover bg-center h-full sm:min-h-[70vh] min-h-[50vh]"
            style={{
              backgroundImage: `url(${lenaPrepImage})`,
            }}
          ></div>
        </div>
      </section>

      {/* Second Section */}
      <section className="my-20 mx-5 sm:mx-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
          How Do You Know It's Time for a Colonic
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {[
            {
              title: "Fatigue",
              icon: (
                <IoCloudyNightOutline className="inline-block mx-2 text-3xl" />
              ),
              description:
                "Bloating and a congested colon can contribute to feelings of fatigue. When the digestive system is burdened with excess waste, it may impact overall energy levels. Addressing these issues can be a step towards revitalizing your well-being. In a decade of practice, clients often report heightened energy and occasional sleep restoration post-colonic.",
            },
            {
              title: "Bloating",
              icon: <FiWind className="inline-block mx-2 text-3xl" />,
              description:
                "Bloating is one of the top concerns clients mention when they come for colonic sessions. This isn't surprising, given that bloating is often linked to factors like stress, overeating, food intolerances, medication, lack of movement, and frequent travel—common challenges in the bustling life of New York. Addressing bloating in my practice, I consistently witness immediate relief during a session. Whether pursued independently or as part of a comprehensive health plan, colonics compliment balanced diets, exercise, and medical recommendations for a holistic approach to well-being.",
            },
            {
              title: "Constipation",
              icon: (
                <IoCloudOfflineOutline className="inline-block mx-2 text-3xl" />
              ),
              description:
                "Constipation is frustrating. Often caused by factors such as low fiber, dehydration, medication, and lack of movement, it’s a widespread concern. Colon hydrotherapy provides a highly effective and straightforward solution for relieving constipation and eliminating toxic buildup. In many scenarios, a single session can promptly restore regular bowel movements—whether rebounding after travel, adjusting to new medications, or navigating short-term stressors like staying at your new boyfriend's house.",
            },
            {
              title: "Skin Issues",
              icon: <FiCloudSnow className="inline-block mx-2 text-3xl" />,
              description:
                "As someone who battled acne and psoriasis, I discovered that colonics played a crucial role in my skin journey. Health practitioners and advocates of colon hydrotherapy universally recognize the essential link between a healthy colon and well-functioning elimination organs for achieving clear and beautiful skin. Skin condition often mirrors colon health. While regular colonic sessions and a clean diet can contribute to relieving issues like acne, psoriasis, and eczema, achieving clear skin involves a mix of factors. In some cases, I've witnessed a single colonic session providing an immediate radiant glow to the skin.",
            },
            {
              title: "Feeling Heavy/Sluggish",
              icon: <IoCloudy className="inline-block mx-2 text-3xl" />,
              description:
                "Feeling sluggish, frequently battling colds, flu, or allergies, and experiencing cravings for sugary foods are signs that your body may benefit from a cleanse or detox. Colon hydrotherapy offers an effective starting point. Many clients report feeling lighter, more energized, less bloated, with an uplifted and happier demeanor after just one session or a series of treatments.",
            },
            {
              title: "Headache",
              icon: <FiCloudLightning className="inline-block mx-2 text-3xl" />,
              description:
                "Headaches and brain fog often signal an overload of impurities in the body. If your headache isn't linked to tight neck muscles, dehydration, or stress, it might be time for a colonic. Eliminating unwanted waste from your colon will effectively address this concern. In my practice, I consistently hear feedback that brain fog disappears after colonic sessions. Nourishing your cells with nutrient-dense foods, free from the burden of processed foods, sugars, fats, and heavy proteins, can lead to improved brain function and clarity.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 bg-customLigterBlue rounded-md shadow-lg"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center flex items-center justify-center">
                {item.title} {item.icon}
              </h3>
              <p className="text-left text-sm sm:text-base indent-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* My Space Section */}
      <section className="my-20 mx-5 sm:mx-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center">
          The Space
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {[office1Image, office2Image, office3Image].map((img, i) => (
            <div
              key={i}
              className="rounded-md shadow-lg overflow-hidden h-[300px] sm:h-[400px] lg:h-[500px] bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>
      </section>

    </main>
  )
}

export default GravityMethodColonics
