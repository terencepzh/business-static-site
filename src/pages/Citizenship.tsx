import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

function Citizenship() {
  return (
    <>
      <div className="bg-[url(https://www.traveltalktours.com/wp-content/smush-webp/2023/12/mike-enerio-7ryPpZK1qV8-unsplash-1-scaled.jpg.webp)] bg-center bg-cover bg-no-repeat">
        <div className="flex flex-col justify-center items-center gap-4 bg-black/15 text-white text-center md:h-[400px] lg:h-[500px] p-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl lg:text-5xl font-bold">
              SINGAPORE CITIZENSHIP APPLICATION SERVICES
            </h1>
          </div>
          <Button className="bg-white text-red-600 lg:text-base border rounded-full max-w-sm h-10">
            <Link
              to="/contact-us"
              reloadDocument
            >
              Book a free consultation
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 max-w-screen-lg px-6 py-8 mx-auto">
        <div className="flex flex-col gap-4 md:gap-6 items-center text-red-600 w-full">
          <div className="flex gap-2 items-center w-full">
            <p className="text-nowrap font-bold">SG Immigrations</p>
            <hr className="border-red-600 w-full" />
          </div>
          <h1 className="text-4xl lg:text-5xl text-left font-bold w-full">
            Your Guide to Singapore Citizenship Application
          </h1>
          <p className="text-base">
            Managing the complex Singapore Citizenship Application process can
            be overwhelming. SG Immigrations focuses on aiding eligible
            Permanent Residents to smoothly transition, offering tailored
            support throughout every phase of their journey.
          </p>
          <div className="flex flex-col gap-4 mt-4">
            <h1 className="text-4xl lg:text-5xl text-left font-bold w-full">
              Why Pursue Singapore Citizenship
            </h1>
            <p className="text-base">
              Singapore citizenship offers a range of benefits for both
              individuals and families:
            </p>
            <ul className="flex flex-col gap-2 list-decimal px-8 ml-4">
              <li>
                <b>Privileged Passport: </b>Enjoy one of the world’s STRONGEST
                passports, with access to over 190 countries, so you can travel
                effortlessly.
              </li>
              <li>
                <b>Access to Government Support: </b>Citizens gain access to a
                wide array of benefits, including healthcare subsidies,
                education grants, and other social services.
              </li>
              <li>
                <b>Long-Term Stability: </b>Solidify your roots in Singapore and
                secure your future with full residency rights for you and your
                loved ones.
              </li>
            </ul>
            <p>
              If you’re interested in learning more about the perks and process,{" "}
              <Link
                to="/contact-us"
                reloadDocument
              >
                <u>
                  <b>book your FREE consultation</b>
                </u>{" "}
              </Link>
              to discuss your options with our dedicated consultants.
            </p>
          </div>
          {/* Eligibility */}
          <div className="flex flex-col gap-4 mt-4">
            <h1 className="text-4xl lg:text-5xl text-left font-bold w-full">
              Eligibility Criteria for Singapore Citizenship
            </h1>
            <p className="text-base">
              Eligibility is the cornerstone of the application for Singapore
              citizenship. Here are the key eligibility criteria for your
              Singapore citizenship application.
            </p>
            <ul className="flex flex-col gap-2 list-decimal px-8 ml-4">
              <li>
                <b>Permanent Residents (PRs): </b>You must hold Permanent
                Resident status in Singapore for at least 2 years before
                applying.
              </li>
              <li>
                <b>Residency and Stability: </b>Having stable employment, a
                solid record of tax contributions, and family ties can
                strengthen your application.
              </li>
              <li>
                <b>Children: </b>Children born to Singapore citizens outside of
                Singapore may be eligible if they meet certain requirements.
              </li>
              <li>
                <b>Spouses of Singapore Citizens: </b>Spouses who have been PRs
                for a period may also be eligible to apply.
              </li>
            </ul>
            <p>
              Our team at SG Immigrations can help assess your unique
              circumstances to ensure you meet the eligibility criteria.{" "}
              <Link
                to="contact-us"
                reloadDocument
              >
                <u>
                  <b>Contact us</b>
                </u>
              </Link>{" "}
              to get a personalized eligibility assessment today.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <h1 className="text-4xl lg:text-5xl text-left font-bold w-full">
              National Service Obligation
            </h1>
            <p className="text-base">
              An integral part of Singapore Citizenship is the commitment to
              National Service. Male citizens and second-generation Permanent
              Residents must serve to contribute to the nation’s security.
              Understanding the nuances of this obligation is critical, and our
              team is equipped to offer detailed guidance.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <h1 className="text-4xl lg:text-5xl text-left font-bold w-full">
              Documents Required
            </h1>
            <p className="text-base">
              Submitting the correct documents is pivotal in the citizenship
              application. Required paperwork includes a valid Permanent
              Resident identity card, passports, birth certificates, and
              marriage certificates where applicable. Employment and tax
              documents also play a crucial role. For a full list of required
              documents:
            </p>
            <ul className="flex flex-col gap-2 list-disc px-8 ml-4">
              <li>
                <b>Adult: </b>
              </li>
              <li>
                <b>Child: </b>
              </li>
              <li>
                <b>Aged Parent: </b>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <h1 className="text-4xl lg:text-5xl text-left font-bold w-full">
              Step-by-Step Guide to Applying for Singapore Citizenship
            </h1>
            <p className="text-base">
              Applying for Singapore citizenship can feel overwhelming, but our
              team is here to support you from start to finish. Here’s how we
              work with you to simplify the process:
            </p>
            <ul className="flex flex-col gap-2 list-decimal px-8 ml-4">
              <li>
                <b>Comprehensive Eligibility Assessment: </b>We start with a
                detailed evaluation of your profile, ensuring that you meet all
                requirements and are fully prepared to apply.
              </li>
              <li>
                <b>Document Guidance and Preparation: </b>Gathering documents is
                often the most challenging part of any application. Our
                consultants provide clear instructions and assistance, helping
                you gather and review each piece to ensure accuracy.
              </li>
              <li>
                <b>Submission and Follow-Up: </b>Once your application is
                complete, we handle the submission, follow up with relevant
                authorities, and keep you updated on its progress.
              </li>
              <li>
                <b>Continuous Support: </b>From eligibility checks to final
                approval, we provide support every step of the way, including
                guidance on any additional requirements that might arise.
              </li>
            </ul>
            <p className="text-base">
              With SG Immigration by your side, you can trust that every detail
              is taken care of, maximizing your chances of a smooth and
              successful application.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <h1 className="text-4xl lg:text-5xl text-left font-bold w-full">
              Processing Time: What to Expect
            </h1>
            <p className="text-base">
              On average, it takes between 6 and 12 months. However, the
              processing time may vary depending on your unique profile and the
              volume of applications. Our team follows up conscientiously,
              providing you with regular updates so you know exactly where your
              application stands.
            </p>
          </div>
          <Button className="bg-red-600 text-base border rounded-full md:w-full max-w-sm h-12">
            <Link
              to="/contact-us"
              reloadDocument
            >
              Book a free consultation
            </Link>
          </Button>
        </div>
      </div>
      {/* FAQ */}
      <div className="flex flex-col gap-4 text-red-600 text-center px-6 py-8">
        <h1 className="text-4xl lg:text-5xl text-center font-bold">
          Frequently Asked Questions:
        </h1>
        <div className="flex justify-center">
          <Accordion
            type="single"
            collapsible
            className="flex flex-col gap-4 *:*:[&[data-state=open]]:bg-gray-200 w-full max-w-screen-lg"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="[&[data-state=open]]:bg-red-600 [&[data-state=open]]:text-white [&[data-state=open]>svg]:text-white text-left px-4">
                Who qualifies for Singapore citizenship?
              </AccordionTrigger>
              <AccordionContent className="text-left p-4">
                Generally, Permanent Residents who have held PR status for two
                or more years are eligible to apply. We’ll review your
                circumstances to confirm your eligibility.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="[&[data-state=open]]:bg-red-600 [&[data-state=open]]:text-white [&[data-state=open]>svg]:text-white text-left px-4">
                What’s the timeline for citizenship application processing?
              </AccordionTrigger>
              <AccordionContent className="text-left p-4">
                Processing times vary, with most applications taking between 6
                and 12 months. We’ll stay on top of the timeline, keeping you
                informed at every stage.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="[&[data-state=open]]:bg-red-600 [&[data-state=open]]:text-white [&[data-state=open]>svg]:text-white text-left px-4">
                What documents are required for application?
              </AccordionTrigger>
              <AccordionContent className="text-left p-4">
                Required documents vary depending on your profile but typically
                include identity verification, employment records, and family
                information. Don’t worry — our team provides a checklist and
                ongoing support to ensure nothing is missed.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      {/* Ready to take the next step? */}
      <div className="flex flex-col gap-4 items-center text-red-600 text-left max-w-screen-lg px-6 py-8 mx-auto">
        <h1 className="text-4xl lg:text-5xl text-center font-bold">
          Ready to Take the Next Step?
        </h1>
        <p className="text-base">
          Becoming a Singapore citizen is a big decision, and SG Immigration is
          here to make it as simple and stress-free as possible. Whether you’re
          ready to apply or just considering your options, we’re here to help.
        </p>
        <p className="w-full">
          Book your consultation and let us help you make Singapore your forever
          home with confidence.
        </p>
        <Button className="bg-red-600 text-base border rounded-full md:w-full max-w-sm h-12">
          <Link
            to="/contact-us"
            reloadDocument
          >
            Book a free consultation
          </Link>
        </Button>
      </div>
    </>
  );
}

export default Citizenship;
