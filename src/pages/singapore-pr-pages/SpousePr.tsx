import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function SpousePr() {
  return (
    <>
      <div className="bg-[url(https://img.freepik.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1728864000&semt=ais_hybrid-rr-similar)] bg-center bg-cover bg-no-repeat">
        <div className="flex flex-col justify-center items-center gap-4 bg-black/65 text-white text-center md:h-[400px] p-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              <p>Singapore Permanent Residence</p>
              <p>- Spouse PR Application -</p>
            </h1>
            <p className="text-xs md:text-base">
              With our expertise in Singapore’s immigration regulations, SG
              Immigrations is dedicated to supporting Spouse PR applications. We
              focus on presenting a strong, well-rounded case by highlighting
              the stability of your relationship, addressing potential
              challenges, and emphasizing your commitment to contributing to
              Singapore. Let us support you in making Singapore a permanent home
              for you and your loved one.
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
          <h1 className="text-4xl lg:text-5xl text-center lg:text-left font-bold w-full">
            Applying for Singapore PR as a Spouse
          </h1>
          <p className="text-base">
            Singapore citizens and PR holders are eligible to sponsor their
            foreign spouse’s application for permanent residency under the
            sponsorship scheme (Form 4SC). This scheme also extends to any
            unmarried children under 21 who are born within a legal marriage or
            have been legally adopted. Long-Term Visit Pass (LTVP) holders are
            often well-positioned to transition to PR status with the support of
            a Singaporean spouse or PR holder.
          </p>
          <p className="text-base">
            Although meeting these eligibility criteria is necessary, it does
            not ensure an approval. SG Immigrations has extensive experience
            navigating the evaluation process and can help strengthen your
            spouse’s application by emphasizing key factors such as
            qualifications, skills, contributions, and commitment to Singapore.
            Our team offers personalized guidance through each stage of the PR
            application journey, making the process smooth and increasing your
            chances of success. Let SG Immigrations support your goal of making
            Singapore a long-term home together.
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
        <div className="flex flex-col justify-center items-center gap-4 text-red-600 w-full px-6 py-8">
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-4xl xl:text-5xl text-center font-bold">
              Eligibility
            </h1>
          </div>
          <div className="flex flex-wrap *:text-center">
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col items-center gap-4 md:pt-12 px-6">
                <img
                  src="/Service1.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-4xl font-bold">
                  01 <p className="text-xl">Marriage Duration</p>
                </h1>
                <p>
                  It is generally advised to wait at least two years before
                  submitting a PR application for your spouse. This time frame
                  allows the ICA to gauge the stability and authenticity of the
                  marriage.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 px-6">
                <img
                  src="/Service2.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-4xl font-bold">
                  02
                  <p className="text-xl">Presence of Children from Marriage</p>
                </h1>
                <p>
                  Presence of children born from the marriage can enhance the
                  spouse’s PR application, as it reflects a committed family
                  bond and authentic relationship.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r-0 xl:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 px-6">
                <img
                  src="/Service3.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-4xl font-bold">
                  03
                  <p className="text-xl">Financial Standing and Employment</p>
                </h1>
                <p>
                  The applicant’s financial health and professional achievements
                  can positively influence PR approval. The ICA reviews the
                  spouse’s income level and their capacity to uphold household
                  expenses and fulfill tax responsibilities.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 px-6">
                <img
                  src="/Service4.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-4xl font-bold">
                  04
                  <p className="text-xl">
                    Community Involvement and Social Integration
                  </p>
                </h1>
                <p>
                  Integration into the local community is valued by the ICA, and
                  applicants who foster social ties and contribute meaningfully
                  are often regarded more favorably. This includes evaluating
                  family connections, as well as the spouse’s length of time
                  spent living and working in Singapore.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 px-6">
                <img
                  src="/Service5.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-4xl font-bold">
                  05
                  <p className="text-xl">Age of Both Partners</p>
                </h1>
                <p>
                  The age of both the sponsor and the spouse is taken into
                  account, as relationships formed at a typical marital age are
                  often viewed more favorably in the application process.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r-0 border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 px-6">
                <img
                  src="/Service6.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-4xl font-bold">
                  06
                  <p className="text-xl">Educational Credentials</p>
                </h1>
                <p>
                  The educational qualifications of the applicant, including the
                  institution’s reputation and the potential economic value of
                  their expertise, are reviewed as part of the PR assessment
                  process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Checklist */}
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-center items-center gap-4 text-black w-full px-6 py-8">
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-4xl xl:text-5xl text-red-600 text-center font-bold">
              Checklist of Documents for Spouse PR Application
            </h1>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <p>
              To successfully apply for PR for your spouse in Singapore, it’s
              crucial to gather all essential supporting documents.
              <p className="text-red-600">
                <i>
                  Note that applicants must hold a current LTVP to be eligible.
                </i>
              </p>
            </p>
            <div>
              <p>
                <b>Documents needed from the Applicant:</b>
              </p>
              <ul className="list-disc ml-4">
                <li>Copy of the passport’s biodata page</li>
                <li>Current Long-Term Visit Pass (LTVP)</li>
                <li>Birth certificate</li>
                <li>Passport-sized photo recently taken</li>
                <li>
                  Business Registration Certificate from ACRA (if self-employed)
                </li>
                <li>
                  Profit and Loss statement of Company for the past year (if
                  self-employed)
                </li>
                <li>
                  Employment letter showing start date, role, and monthly salary
                </li>
                <li>
                  Payslips from the last six months (if employed in Singapore)
                </li>
                <li>Educational certificates and academic transcripts ​</li>
              </ul>
            </div>
            <div>
              <p>
                <b>Documents needed from the Sponsor:</b>
              </p>
              <ul className="list-disc ml-4">
                <li>NRIC (Identity Card)</li>
                <li>
                  Business Registration Certificate from ACRA (if self-employed)
                </li>
                <li>
                  Profit and Loss statement of Company for the past year (if
                  self-employed)
                </li>
                <li>
                  Employment letter specifying start date, position, and monthly
                  income
                </li>
                <li>
                  Payslips from the last six months (if employed in Singapore)
                </li>
                <li>
                  CPF statement detailing monthly contributions over the last
                  twelve months
                </li>
                <li>
                  Income Tax Notices of Assessment from the past three years
                </li>
                <li>Marriage certificate for the union with the applicant</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 w-full px-6 py-8">
        <h1 className="text-4xl xl:text-5xl text-red-600 text-center font-bold">
          How SG Immigration Can Help
        </h1>
        <h3 className="text-red-600 text-center text-2xl lg:text-lg font-bold">
          <i>Let us apply for your spouse!</i>
        </h3>
        <Button className="bg-red-600 text-base border rounded-full md:w-full max-w-sm h-12">
          <Link
            to="/contact-us"
            reloadDocument
          >
            Talk to an expert!
          </Link>
        </Button>
        <div className="flex gap-6">
          <div className="flex flex-col gap-6 md:basis-2/3">
            <div className="bg-red-600 rounded-xl text-white p-6">
              <p>
                <b>1. Comprehensive Document Support - </b> Navigating the
                documentation requirements for a PR application can be
                challenging, especially as missing or incorrect documents can
                lead to rejection. Our team at SG Immigrations takes the stress
                out of document preparation, guiding you through each required
                item to ensure your application is complete and compelling. With
                our assistance, you save time and avoid errors, giving you
                confidence that your application is properly supported.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl text-red-600 p-6">
              <p>
                <b>2. Insight-Driven Strategies to Stand Out – </b>In a
                competitive landscape where limited PR approvals are issued each
                year, SG Immigrations customizes strategies to help your
                application stand out. By thoroughly understanding the PR
                process and tailoring our approach to your unique circumstances,
                we increase the chances of success for your spouse’s PR
                application, helping you take a step closer to permanent
                residency.
              </p>
            </div>
            <div className="bg-red-600 rounded-xl text-white p-6">
              <p>
                <b>3. Expert Guidance Based on In-Depth Knowledge​ – </b> With
                nearly 20 years in the immigration field, SG Immigrations offers
                experienced, informed guidance. We are updated on current
                regulations and policy shifts, allowing us to provide accurate,
                timely advice throughout the process. Our team values
                transparency, keeping you informed and prepared as we support
                your journey toward PR for your spouse.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl text-red-600 p-6">
              <p>
                <b>4. Holistic Approach with Personal Attention – </b>At SG
                Immigrations, we believe that each client’s case is unique and
                deserves a personalized approach. We focus not just on meeting
                requirements but also on highlighting your spouse’s strengths
                and the genuine commitment you share to building a life in
                Singapore. This thoughtful, holistic approach ensures that your
                application reflects both eligibility and a meaningful
                connection to the country.
              </p>
            </div>
            <div className="bg-red-600 rounded-xl text-white p-6">
              <p>
                <b>5. Commitment to Client Success – </b> Our dedication to our
                clients’ goals sets us apart. We believe that a successful
                application starts with mutual trust, clarity, and a commitment
                to excellence in service. SG Immigrations strives to build
                lasting client relationships based on these principles, ensuring
                that each client feels supported throughout their PR application
                journey.
              </p>
            </div>
          </div>
          <div className="hidden md:block md:basis-1/3 bg-[url('https://static.wixstatic.com/media/11062b_3c83c170368c49508bd78126dd6f8bab~mv2.jpg/v1/fill/w_691,h_1052,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Archive.jpg')] bg-cover w-full h-inherit"></div>
        </div>
      </div>
    </>
  );
}

export default SpousePr;
