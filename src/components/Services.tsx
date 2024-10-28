function Services() {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col justify-center items-center gap-12 text-red-600 w-full px-6 py-8">
        <div className="flex flex-col gap-4 w-full">
          <h1 className="text-4xl xl:text-5xl text-center font-bold">
            Our Services
          </h1>
          <h3 className="text-sm text-justify">
            At SG Immigrations, we specialize in helping foreigners navigate the
            path to a successful future in Singapore. With expertise in all
            immigration avenues, we work closely with you to identify the most
            suitable option and guide you through the process for a smooth and
            successful outcome.
          </h3>
        </div>
        <div className="flex flex-wrap *:text-center *:h-[240px] md:*:h-[320px] lg:*:h-[400px]">
          <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
            <div className="flex flex-col items-center gap-4 h-full md:pt-12 px-8">
              <img
                src="/Service1.png"
                alt=""
                className="w-16"
              />
              <h1 className="text-lg lg:text-2xl">
                Singapore Permanent Residences
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
            <div className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-8">
              <img
                src="/Service2.png"
                alt=""
                className="w-16"
              />
              <h1 className="text-lg lg:text-2xl">Singapore Citizenship</h1>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
            <div className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-8">
              <img
                src="/Service3.png"
                alt=""
                className="w-16"
              />
              <h1 className="text-lg lg:text-2xl">
                <p>Work Passes</p>
                <p>(WP / S Pass / EP / PEP / ONE Pass)</p>
              </h1>
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
                Long-Term Visit Pass and Dependent's Pass
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
            <div className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-8">
              <img
                src="/Service5.png"
                alt=""
                className="w-16"
              />
              <h1 className="text-lg lg:text-2xl">Global Investor Programme</h1>
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
                Business Relocation Service
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
