import PackageCarousel from "@/components/PackageCarousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function SingaporePr() {
  return (
    <div className="">
      <div className="bg-[url(https://img.freepik.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1728864000&semt=ais_hybrid-rr-similar)] bg-center bg-cover bg-no-repeat">
        <div className="flex flex-col justify-center items-center gap-4 bg-black/65 text-white text-center h-[360px] p-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Singapore Permanent Residence
            </h1>
            <p className="text-xs md:text-base">
              This page outlines the criteria and eligibility to become a
              Singapore PR as well as the challenges faced during PR
              application.
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
        <div className="flex flex-col gap-4 md:gap-6 items-center text-red-600 w-full *:lg:pr-8">
          <h1 className="text-4xl lg:text-3xl font-bold">
            Becoming a Singapore Permanent Resident
          </h1>
          <p className="text-base">
            Obtaining Singapore Permanent Resident (SPR) status through the
            Immigration and Checkpoints Authority (ICA) does not grant you
            Singaporean citizenship, but it does provide access to many of the
            same privileges and benefits as citizens.
          </p>
          <p className="text-base">
            Due to the high volume of PR applications processed every month, the
            selection of applicants remains a critical process. It is important
            for individuals to familiarize themselves with the key elements that
            influence whether their PR application will be approved.
          </p>
          <p className="text-base">
            If you're interested in learning more about the PR application
            process, feel free to get in touch with our Immigration Expert for a
            free consultation by submitting your contact information below.
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
      {/* Singapore PR Services */}
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-center items-center gap-4 text-red-600 w-full px-6 py-8">
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-4xl xl:text-5xl text-center font-bold">
              Our Singapore PR Services
            </h1>
          </div>
          <div className="flex flex-wrap *:text-center *:h-[240px] md:*:h-[320px] lg:*:h-[400px]">
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 px-8">
                <img
                  src="/Service1.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-lg lg:text-2xl">PR Rejection & Appeals</h1>
                <p>For individuals</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-8">
                <img
                  src="/Service2.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-lg lg:text-2xl">Spouse PR Application</h1>
                <p>For individuals & partners</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-8">
                <img
                  src="/Service3.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-lg lg:text-2xl">Parent PR Application</h1>
                <p>For individuals & families</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-8">
                <img
                  src="/Service4.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-lg lg:text-2xl">
                  PR Application for EP Holders
                </h1>
                <p>For working individuals</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-8">
                <img
                  src="/Service5.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-lg lg:text-2xl">
                  PR Application for SP Holders
                </h1>
                <p>For working individuals</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-8">
                <img
                  src="/Service6.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-lg lg:text-2xl">
                  PR Application for Students
                </h1>
                <p>For businesses</p>
              </div>
            </div>
          </div>
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
          <div className="flex flex-wrap *:items-start *:bg-red-100 *:text-left *:h-[240px] md:*:h-[320px] lg:*:h-[400px]">
            <div className="flex flex-col gap-4 border-2 md:border-0 md:border-t-2 md:border-l-2 xl:border-b-2 border-gray-400 w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col gap-4 h-full">
                <h1 className="text-4xl lg:text-5xl font-bold">01</h1>
                <p className="text-sm md:text-base">
                  You are currently employed in Singapore on a valid Employment
                  Pass (EP), S Pass, or Personalised Employment Pass (PEP).​
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-2 border-t-0 md:border-0 md:border-t-2 md:border-l-2 xl:border-b-2 border-gray-400 text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col gap-4 h-full">
                <h1 className="text-4xl lg:text-5xl font-bold">02</h1>
                <p className="text-sm md:text-base">
                  You are the spouse of a Singapore Citizen or Permanent
                  Resident.​
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-2 border-t-0 md:border-b-0 md:border-t-2 xl:border-b-2 xl:border-r-0 border-gray-400 text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col gap-4 h-full">
                <h1 className="text-4xl lg:text-5xl font-bold">03</h1>
                <p className="text-sm md:text-base">
                  You are under 21 years old and the unmarried child of a
                  Singapore Citizen or Permanent Resident.​
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-2 border-t-0 md:border-t-2 md:border-r-0 border-gray-400 text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col gap-4 h-full">
                <h1 className="text-4xl lg:text-5xl font-bold">04</h1>
                <p className="text-sm md:text-base">
                  You are 60 years old or older and the parent of a Singapore
                  Citizen.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-2 border-t-0 md:border-t-2 md:border-r-0 border-gray-400 text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col gap-4 h-full">
                <h1 className="text-4xl lg:text-5xl font-bold">05</h1>
                <p className="text-sm md:text-base">
                  You are studying in Singapore on a student pass and have
                  completed local national exams, such as the PSLE, GCE
                  ‘N’/’O’/’A’ Levels, or the Integrated Programme (IP).
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-2 border-t-0 md:border-t-2 border-gray-400 text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col gap-4 h-full">
                <h1 className="text-4xl lg:text-5xl font-bold">06</h1>
                <p className="text-sm md:text-base">
                  You’re a foreign investor, entrepreneur or family office
                  principal in Singapore with $10 Million to invest locally.
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
    </div>
  );
}

export default SingaporePr;
