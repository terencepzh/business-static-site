import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function BRS() {
  return (
    <>
      <div className="bg-[url(https://img.freepik.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1728864000&semt=ais_hybrid-rr-similar)] bg-center bg-cover bg-no-repeat">
        <div className="flex flex-col justify-center items-center gap-4 bg-black/65 text-white text-center h-[360px] p-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Business Relocation Programme
            </h1>
            <p className="text-xs md:text-base">
              This page provides a brief overview of the eligibility
              requirements and criteria for obtaining a Long-Term Visit Pass
              (LTVP) or Dependant's Pass, along with the common challenges
              applicants may encounter during the application process.
            </p>
          </div>
          <Button className="bg-white text-red-600 lg:text-base border rounded-full max-w-sm h-10">
            <Link
              to="/contact-us"
              reloadDocument
            >
              Learn More
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 px-6 py-8 lg:p-0 lg:mb-4">
        <div className="bg-[url(https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHR3byUyMHBlb3BsZSUyMHRhbGtpbmd8ZW58MHx8MHx8fDA%3D)] bg-center lg:bg-[65%] bg-cover bg-no-repeat w-full h-[370px] lg:h-[840px]"></div>
        <div className="flex flex-col gap-4 md:gap-6 items-center lg:items-start text-red-600 w-full *:lg:pr-8">
          <h1 className="text-4xl lg:text-5xl text-center lg:text-left font-bold w-full">
            Business Relocation Programme
          </h1>
          <p className="text-base">
            At Assurance Immigration, we specialize in assisting businesses with
            seamless relocation to Singapore through our comprehensive Business
            Relocation Programme. We understand that moving your business to a
            new country can be a complex process, and our team of experts is
            here to guide you every step of the way.
          </p>
          <p className="text-base">
            From navigating legal regulations to handling the application for
            relevant passes, including the Employment Pass (EP) and EntrePass,
            we ensure your business is set up in compliance with local laws. Our
            services include company incorporation, securing work passes for key
            personnel, and providing advisory on tax incentives and
            industry-specific regulations. ​
          </p>
          <p className="text-base">
            With years of experience and in-depth knowledge of Singapore’s
            business environment, Assurance Immigration simplifies the
            transition for companies looking to establish or expand in
            Singapore, allowing you to focus on growing your business while we
            handle the relocation process.
          </p>
          <Button className="bg-red-600 text-base border rounded-full md:w-full max-w-sm h-12">
            <Link
              to="/contact-us"
              reloadDocument
            >
              Free Consultation Here!
            </Link>
          </Button>
        </div>
      </div>
      {/* Business Structures */}
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-center items-center gap-4 text-black w-full px-6 py-8">
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-4xl xl:text-5xl text-red-600 text-center font-bold">
              Types of Business Structures
            </h1>
          </div>
          <div className="flex flex-wrap xl:flex-nowrap justify-center *:items-start *:bg-red-100 *:text-left">
            <div className="flex flex-col gap-4 md:basis-1/2 xl:basis-1/4 border-2 border-gray-400 w-full p-10 px-4">
              <div className="flex flex-col gap-4 h-full">
                <h1 className="text-4xl xl:text-5xl font-bold">
                  Subsidiary Company
                </h1>
                <p className="text-sm md:text-base">
                  A subsidiary company in Singapore is a private limited company
                  that is locally incorporated. Its shares are primarily owned
                  by either a foreign company or a local entity.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:basis-1/2 xl:basis-1/4 border-2 border-t-0 md:border-l-0 md:border-t-2 border-gray-400 text-center w-full p-10 px-4">
              <div className="flex flex-col gap-4 h-full">
                <h1 className="text-4xl xl:text-5xl font-bold">
                  Branch Office
                </h1>
                <p className="text-sm md:text-base">
                  A branch office is a company registered in Singapore that
                  functions as an extension of its foreign parent company.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:basis-1/2 xl:basis-1/4 border-2 border-t-0 xl:border-l-0 xl:border-t-2 border-gray-400 w-full p-10 px-4">
              <div className="flex flex-col gap-4 h-full">
                <h1 className="text-4xl xl:text-5xl font-bold">
                  Representative Office
                </h1>
                <p className="text-sm md:text-base">
                  A representative office is a temporary setup with limited
                  functions. It allows foreign companies to perform activities
                  such as market research, promoting business, or exploring
                  services in Singapore, without engaging in profit-generating
                  activities.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:basis-1/2 xl:basis-1/4 border-2 border-t-0 md:border-l-0 xl:border-t-2 border-gray-400 w-full p-10 px-4">
              <div className="flex flex-col gap-4 h-full">
                <h1 className="text-4xl xl:text-5xl font-bold">
                  Single-Family Office (SFO)
                </h1>
                <p className="text-sm md:text-base">
                  A Single-Family Office (SFO) is commonly used by Ultra High
                  Net Worth Individuals and their families to manage their
                  assets. The SFO oversees the assets for one family and is
                  managed by trusted advisors like bankers, asset managers,
                  lawyers, and tax experts. It only handles family-owned assets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How we can help you */}
      <div className="flex flex-col justify-center items-center gap-4 w-full px-6 py-8">
        <h1 className="text-4xl xl:text-5xl text-red-600 text-center font-bold">
          How we can help you
        </h1>
        <Button className="bg-red-600 text-base border rounded-full md:w-full max-w-sm h-12">
          <Link
            to="/contact-us"
            reloadDocument
          >
            Let us help you!
          </Link>
        </Button>
      </div>
    </>
  );
}

export default BRS;
