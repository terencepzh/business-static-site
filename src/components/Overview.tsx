function Overview() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 text-red-600 text-center px-6 py-8">
        <h1 className="text-4xl xl:text-5xl font-bold">
          A Smooth & Stress-free Immigration Journey
        </h1>
        <p>Here's an overview of your journey with TIP</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 text-black p-4">
        <div className="flex flex-col justify-start items-center gap-2 border-black border rounded-lg text-center w-full lg:w-1/5 p-6 px-8">
          <img
            src="Overview1.png"
            alt=""
          />
          <h1 className="text-3xl font-bold">1.</h1>
          <h2 className="text-xl font-bold">
            Complementary One-On-One Consultation
          </h2>
          <p>
            Schedule a consultation session physically or online. Find out more.
          </p>
        </div>
        <div className="flex flex-col justify-start items-center gap-2 border-black border rounded-lg text-center w-full lg:w-1/5 p-6 px-8">
          <img
            src="Overview2.png"
            alt=""
          />
          <h1 className="text-3xl font-bold">2.</h1>
          <h2 className="text-xl font-bold">Profile-building</h2>
          <p>At least 3-4 months to properly prepare and build every case.</p>
        </div>
        <div className="flex flex-col justify-start items-center gap-2 border-black border rounded-lg text-center w-full lg:w-1/5 p-6 px-8">
          <img
            src="Overview3.png"
            alt=""
          />
          <h1 className="text-3xl font-bold">3.</h1>
          <h2 className="text-xl font-bold">
            Dedicated Advisory and Support At Every Milestone
          </h2>
          <p>Consistent advisory and support at every milestone.</p>
        </div>
        <div className="flex flex-col justify-start items-center gap-2 border-black border rounded-lg text-center w-full lg:w-1/5 p-6 px-8">
          <img
            src="Overview4.png"
            alt=""
          />
          <h1 className="text-3xl font-bold">4.</h1>
          <h2 className="text-xl font-bold">Application Submission</h2>
          <p>
            Through end-to-end support from case-building to submission of the
            application to the immigration authorities.
          </p>
        </div>
        <div className="flex flex-col justify-start items-center gap-2 border-black border rounded-lg text-center w-full lg:w-1/5 p-6 px-8">
          <img
            src="Overview5.png"
            alt=""
          />
          <h1 className="text-3xl font-bold">5.</h1>
          <h2 className="text-xl font-bold">Post Submission Support</h2>
          <p>
            Post-Submission and Post-Outcome support and advisory from the team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
