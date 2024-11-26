import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col justify-center items-center gap-12 text-red-600 w-full px-6 py-8">
        <div className="flex flex-wrap justify-center *:text-center *:h-[240px] md:*:h-[320px] lg:*:h-[400px]">
          <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full md:w-1/2 lg:w-1/4 xl:w-[14.2%] p-10 px-4">
            <Link
              to="/singapore-pr"
              reloadDocument
              className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-4"
            >
              <img
                src="/Service1.svg"
                alt=""
                className="w-16"
              />
              <h1 className="text-lg lg:text-2xl">
                Singapore Permanent Residences
              </h1>
            </Link>
          </div>
          <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r-0 lg:border-r border-grey text-center w-full md:w-1/2 lg:w-1/4 xl:w-[14.2%] p-10 px-4">
            <Link
              to="/singapore-citizenship"
              reloadDocument
              className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-4"
            >
              <img
                src="/Service2.svg"
                alt=""
                className="w-16"
              />
              <h1 className="text-lg lg:text-2xl">Singapore Citizenship</h1>
            </Link>
          </div>
          <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full md:w-1/2 lg:w-1/4 xl:w-[14.2%] p-10 px-4">
            <Link
              to="/work-passes"
              reloadDocument
              className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-4"
            >
              <img
                src="/Service3.svg"
                alt=""
                className="w-16"
              />
              <h1 className="text-lg lg:text-2xl">
                <p>Work Passes</p>
                <p>(WP / S Pass / EP / PEP / ONE Pass)</p>
              </h1>
            </Link>
          </div>
          <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r-0 xl:border-r border-grey text-center w-full md:w-1/2 lg:w-1/4 xl:w-[14.2%] p-10 px-4">
            <Link
              to="/ltv-dependent-pass"
              reloadDocument
              className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-4"
            >
              <img
                src="/Service4.svg"
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
              reloadDocument
              className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-4"
            >
              <img
                src="/Service5.svg"
                alt=""
                className="w-16"
              />
              <h1 className="text-lg lg:text-2xl">Student Pass</h1>
            </Link>
          </div>
          <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r-0 lg:border-r border-grey text-center w-full md:w-1/2 lg:w-1/4 xl:w-[14.2%] p-10 px-4">
            <Link
              to="/global-investor-programme"
              reloadDocument
              className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-4"
            >
              <img
                src="/Service6.svg"
                alt=""
                className="w-16"
              />
              <h1 className="text-lg lg:text-2xl">Global Investor Programme</h1>
            </Link>
          </div>
          <div className="flex flex-col gap-4 border-t border-b md:border-t-0 md:border-r-0 lg:border-0 border-grey text-center w-full md:w-1/2 lg:w-1/4 xl:w-[14.2%] p-10 px-4">
            <Link
              to="/business-relocation-service"
              reloadDocument
              className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-4"
            >
              <img
                src="/Service7.svg"
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
  );
}

export default Services;
