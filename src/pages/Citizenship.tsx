import PackageCarousel from "@/components/PackageCarousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Citizenship() {
  return (
    <>
      <div className="bg-[url(https://img.freepik.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1728864000&semt=ais_hybrid-rr-similar)] bg-center bg-cover bg-no-repeat">
        <div className="flex flex-col justify-center items-center gap-4 bg-black/65 text-white text-center h-[360px] p-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Singapore Citizenship
            </h1>
            <p className="text-xs md:text-base">
              This page outlines the criteria and eligibility to become a
              Singapore Citizen as well as the challenges faced during
              citizenship application.
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
            Becoming a Singapore Citizen
          </h1>
          <p className="text-base">
            Singapore has long recognized its people as one of the nation's most
            valuable assets, with their long-term sustainability being vital to
            the country’s economic development. The journey to becoming a
            Singaporean citizen is a detailed and lengthy process, involving
            thorough screening and decision-making by the ICA, which takes
            considerable time.
          </p>
          <p className="text-base">
            If you're interested in learning more about applying for Singapore
            Citizenship, you can reach out to our immigration advisor for a free
            advisory session by providing your contact information below.
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
      {/* Eligibility */}
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-center items-center gap-4 text-black w-full px-6 py-8">
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-4xl xl:text-5xl text-red-600 text-center font-bold">
              Eligibility
            </h1>
          </div>
          <div className="flex flex-wrap justify-center *:items-start *:bg-red-100 *:text-left">
            <div className="flex flex-col gap-4 border-2 border-gray-400 w-full md:basis-1/3 xl:basis-1/6 p-10 px-4">
              <div className="flex flex-col gap-4 h-full">
                <h1 className="text-4xl lg:text-5xl font-bold">01</h1>
                <p className="text-sm md:text-base">
                  You must be a Singapore Permanent Resident (PR) for at least
                  two years and are 21 years old and above
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-2 border-t-0 md:border-l-0 md:border-t-2 xl:border-b-2 border-gray-400 text-center w-full md:basis-1/3 xl:basis-1/6 p-10 px-4">
              <div className="flex flex-col gap-4 h-full">
                <h1 className="text-4xl lg:text-5xl font-bold">02</h1>
                <p className="text-sm md:text-base">
                  You must be a Singapore Permanent Resident (PR) for at least
                  two years and have at least two years of marriage to a
                  Singapore Citizen.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-2 border-t-0 md:border-l-0 md:border-t-2 xl:border-b-2 xl:border-r-0 border-gray-400 text-center w-full md:basis-1/3 xl:basis-1/6 p-10 px-4">
              <div className="flex flex-col gap-4 h-full">
                <h1 className="text-4xl lg:text-5xl font-bold">03</h1>
                <p className="text-sm md:text-base">
                  You’re an unmarried child under the age of 21 born to a
                  Singapore Citizen or who was legally adopted by a Singapore
                  Citizen.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-gray-400 border-2 border-t-0 md:border-t-0 md:border-r-0 xl:border-t-2  text-center w-full md:basis-1/3 xl:basis-1/6 p-10 px-4">
              <div className="flex flex-col gap-4 h-full">
                <h1 className="text-4xl lg:text-5xl font-bold">04</h1>
                <p className="text-sm md:text-base">
                  You’re a Singapore Permanent Resident (PR) studying in
                  Singapore; and has lived in Singapore for more than 3 years
                  (at least one year as a PR); and has passed at least one
                  national examination (PSLE, GCE‘N’/‘O’ levels), or is enrolled
                  in the Integrated Programme (IP).
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-gray-400 border-2 border-t-0 md:border-t-0 xl:border-t-2 text-center w-full md:basis-1/3 xl:basis-1/6 p-10 px-4">
              <div className="flex flex-col gap-4 h-full">
                <h1 className="text-4xl lg:text-5xl font-bold">05</h1>
                <p className="text-sm md:text-base">
                  You’re a Singapore Permanent Resident (PR) and an Aged Parent
                  of a Singapore Citizen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 w-full px-6 py-8">
        <h1 className="text-4xl xl:text-5xl text-red-600 text-center font-bold">
          Our Services
        </h1>
        <h3 className="text-base lg:text-lg">
          Select the best package for{" "}
          <i className="text-red-600 font-bold">you</i>!
        </h3>
        <Button className="bg-red-600 text-base border rounded-full md:w-full max-w-sm h-12">
          <Link
            to="/contact-us"
            reloadDocument
          >
            Talk to an expert!
          </Link>
        </Button>
        <PackageCarousel />
      </div>
    </>
  );
}

export default Citizenship;
