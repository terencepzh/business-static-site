import Schemes from "@/components/Schemes";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function OurServices() {
  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-center items-center gap-12 text-red-600 w-full px-6 py-8">
          <div className="flex flex-wrap justify-center *:text-center *:h-[240px] md:*:h-[320px] lg:*:h-[400px]">
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full md:w-1/2 lg:w-1/4 xl:w-[14.2%] p-10 px-4">
              <Link
                to="/singapore-pr"
                className="flex flex-col items-center gap-4 h-full md:pt-12 px-8"
              >
                <img
                  src="/Service1.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-lg lg:text-2xl">
                  Singapore Permanent Residences
                </h1>
              </Link>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full md:w-1/2 lg:w-1/4 xl:w-[14.2%] p-10 px-4">
              <Link
                to="/singapore-citizenship"
                className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-8"
              >
                <img
                  src="/Service2.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-lg lg:text-2xl">Singapore Citizenship</h1>
              </Link>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full md:w-1/2 lg:w-1/4 xl:w-[14.2%] p-10 px-4">
              <Link
                to="/work-passes"
                className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-8"
              >
                <img
                  src="/Service3.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-lg lg:text-2xl">
                  <p>Work Passes</p>
                  <p>(WP / S Pass / EP / PEP / ONE Pass)</p>
                </h1>
              </Link>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full md:w-1/2 lg:w-1/4 xl:w-[14.2%] p-10 px-4">
              <Link
                to="/ltv-dependent-pass"
                className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-8"
              >
                <img
                  src="/Service4.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-lg lg:text-2xl">
                  Long-Term Visit Pass and Dependent's Pass
                </h1>
              </Link>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full md:w-1/2 lg:w-1/4 xl:w-[14.2%] p-10 px-4">
              <Link
                to="/student-pass"
                className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-8"
              >
                <img
                  src="/Service5.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-lg lg:text-2xl">Student Pass</h1>
              </Link>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full md:w-1/2 lg:w-1/4 xl:w-[14.2%] p-10 px-4">
              <Link
                to="/global-investor-programme"
                className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-8"
              >
                <img
                  src="/Service5.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-lg lg:text-2xl">
                  Global Investor Programme
                </h1>
              </Link>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full md:w-1/2 lg:w-1/4 xl:w-[14.2%] p-10 px-4">
              <Link
                to="/business-relocation-service"
                className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-8"
              >
                <img
                  src="/Service6.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-lg lg:text-2xl">
                  Business Relocation Service
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Schemes />
      <div className="flex justify-center px-6 py-8">
        <div className="bg-[url(https://media-cdn.tripadvisor.com/media/photo-s/18/33/5c/4c/1807-merlion-marinabay.jpg)] bg-[75%] bg-cover bg-no-repeat border rounded-2xl max-w-screen-lg">
          <div className="flex flex-col justify-evenly items-center gap-4 bg-black/45 text-white text-center border rounded-2xl h-[480px] p-8 md:py-16">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
              Find the best scheme for you
            </h1>
            <p className="text-xs md:text-base lg:text-base">
              Whether you're a working professional, investor, student, or
              artist, Assurance Immigration offers expert assistance in
              navigating the administrative processes required for each scheme.
              We specialize in optimizing your applications to maximize your
              chances of success, ensuring you meet all necessary criteria and
              present your case effectively.
            </p>
            <Button className="bg-white text-red-600 lg:text-base border rounded-full md:w-full max-w-sm h-12">
              <Link
                to="/contact-us"
                reloadDocument
              >
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
