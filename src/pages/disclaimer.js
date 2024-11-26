import React from "react"
import Layout from "../components/layout"

const DisclaimerPage = () => (
  <Layout>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Disclaimer</h1>
      <ol className="list-decimal pl-6 space-y-4 text-left">
        <li>
          By using this website, you accept this disclaimer in full. If you
          disagree with any part of this disclaimer, do not use{" "}
          <a
            href="https://parkslopecolonics.com"
            className="text-blue-500 underline"
          >
            https://parkslopecolonics.com
          </a>
          .
        </li>
        <li>
          Any application of the information provided on{" "}
          <a
            href="https://parkslopecolonics.com"
            className="text-blue-500 underline"
          >
            https://parkslopecolonics.com
          </a>{" "}
          is at the reader’s discretion and their sole responsibility.
        </li>
        <li>
          This information is not intended to be, nor should it be considered,
          medical advice. Information provided on this blog is for informational
          purposes only. No information on this site should be used to diagnose,
          treat, prevent, or cure any disease or condition.{" "}
          <a
            href="https://parkslopecolonics.com"
            className="text-blue-500 underline"
          >
            https://parkslopecolonics.com
          </a>{" "}
          is not a substitute for professional medical advice, diagnosis, or
          treatment.
        </li>
        <li>
          All information and resources found on{" "}
          <a
            href="https://parkslopecolonics.com"
            className="text-blue-500 underline"
          >
            https://parkslopecolonics.com
          </a>{" "}
          are based on the opinions of the author unless otherwise noted.{" "}
          <a
            href="https://parkslopecolonics.com"
            className="text-blue-500 underline"
          >
            https://parkslopecolonics.com
          </a>{" "}
          does not warrant that the information contained in this website is
          complete, accurate, current, or reliable.
        </li>
        <li>
          The information on this website is not intended to replace a
          one-on-one relationship with a qualified healthcare professional. It
          is advised that you consult a medical professional before making any
          health changes. No information on this site should be relied upon to
          determine diet, make a medical diagnosis, or determine treatment for a
          medical condition. Never ignore professional medical advice in seeking
          treatment because of something you have read on this blog. If you
          think you may have a medical emergency, immediately call your doctor
          or dial 911.
        </li>
        <li>
          Any statements or claims about the possible health benefits conferred
          by any foods or supplements have not been evaluated by the Food & Drug
          Administration (FDA) and are not intended to diagnose, treat, prevent,
          or cure any disease.
        </li>
        <li>
          If any client chooses to hire Park Slope Colonics LLC for any
          procedure, they confirm that they did not rely on this website to make
          that decision. The client understands that, to the maximum extent
          permitted by law, Park Slope Colonics LLC shall not be liable for any
          indirect, incidental, or negative health effects as a result of any
          treatment. Park Slope Colonics LLC shall not be liable for any
          negative medicine/drug interactions with the medication the client is
          currently taking. I hereby release Park Slope Colonics, LLC, and its
          staff from any and all liability that may occur in connection with the
          Colon Hydrotherapy procedure.
        </li>
      </ol>
      <div className="mt-10 pl-6 text-left">
        <strong>LIMITATION OF LIABILITY:</strong> Excluding indemnification
        obligations or damages arising from breach of a party’s confidentiality
        obligations, neither party shall be liable to the other, regardless of
        the form of action, whether in contract, tort, or otherwise, for any
        indirect, incidental, or negative health effects as a result of GCH,
        even if such party has been advised of the possibility of such damages,
        nor shall the company’s aggregate liability for any other damages
        arising out of this agreement exceed the revenue paid by the client to
        the company in accordance with the applicable SOW.
      </div>
    </div>
  </Layout>
)

export default DisclaimerPage
