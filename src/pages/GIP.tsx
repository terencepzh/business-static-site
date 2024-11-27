import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function GIP() {
  return (
    <>
      <div className="bg-[url(https://img.freepik.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1728864000&semt=ais_hybrid-rr-similar)] bg-center bg-cover bg-no-repeat">
        <div className="flex flex-col justify-center items-center gap-4 bg-black/65 text-white text-center h-[360px] p-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Global Investor Programme
            </h1>
            <p className="text-xs md:text-base">
              This page covers the Global Investor Programme (GIP), its
              eligibility criteria, and how SG Immigrations can help with the
              entire application process from eligibility assessment to
              application support.
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
        <div className="flex flex-col justify-between gap-4 md:gap-6 items-center lg:items-start text-red-600 w-full h-inherit *:lg:pr-8">
          <h1 className="text-4xl lg:text-5xl text-center lg:text-left font-bold w-full">
            Global Investor Programme
          </h1>
          <p className="text-base">
            The Global Investor Programme (GIP) is a unique initiative by the
            Singapore Economic Development Board (EDB) and Enterprise Singapore.
            It is designed for high-net-worth individuals and entrepreneurs who
            are looking to invest in and relocate their business to Singapore.
            Through this program, qualified individuals can apply for Singapore
            Permanent Residency (PR) by making substantial investments in the
            country’s economy.
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
      {/* Investment Options */}
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-center items-center gap-4 text-black w-full px-6 py-8">
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-4xl xl:text-5xl text-red-600 text-center font-bold">
              Investment Options
            </h1>
          </div>
          <div className="flex flex-wrap xl:flex-nowrap justify-center *:items-start *:bg-red-100 *:text-left">
            <div className="flex flex-col gap-4 md:basis-1/2 lg:basis-1/3 border-2 border-gray-400 w-full p-10 px-4">
              <div className="flex flex-col gap-4 h-full">
                <h1 className="text-4xl xl:text-5xl font-bold">Option A</h1>
                <p className="text-sm md:text-base">
                  Make a minimum investment of S$10 million in establishing a
                  new business or expanding an existing operation in Singapore.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:basis-1/2 lg:basis-1/3 border-2 border-t-0 md:border-l-0 md:border-t-2 border-gray-400 text-center w-full p-10 px-4">
              <div className="flex flex-col gap-4 h-full">
                <h1 className="text-4xl xl:text-5xl font-bold">Option B</h1>
                <p className="text-sm md:text-base">
                  Invest S$25 million in a GIP-approved fund that focuses on
                  Singapore-based companies.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:basis-1/2 lg:basis-1/3 border-2 border-t-0 lg:border-l-0 lg:border-t-2 border-gray-400 w-full p-10 px-4">
              <div className="flex flex-col gap-4 h-full">
                <h1 className="text-4xl xl:text-5xl font-bold">Option C</h1>
                <p className="text-sm md:text-base">
                  Commit at least S$50 million to a new or existing
                  single-family office in Singapore, with the requirement that
                  the office manages assets worth at least S$200 million.
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
      {/* Eligibility */}
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-center items-center gap-4 text-black w-full px-6 py-8">
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-4xl xl:text-5xl text-red-600 text-center font-bold">
              Eligibility
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default GIP;
