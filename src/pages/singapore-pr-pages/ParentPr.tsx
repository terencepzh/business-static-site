import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function ParentPr() {
  return (
    <>
      <div className="bg-[url(https://img.freepik.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1728864000&semt=ais_hybrid-rr-similar)] bg-center bg-cover bg-no-repeat">
        <div className="flex flex-col justify-center items-center gap-4 bg-black/65 text-white text-center md:h-[400px] p-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              <p>Singapore Permanent Residence</p>
              <p>- Parent PR Application -</p>
            </h1>
            <p className="text-xs md:text-base">
              With extensive knowledge of Singapore’s immigration policies,
              Assurance Immigration is dedicated to guiding PR applications for
              aged parents. We build a compelling case that highlights your
              family’s commitment to Singapore and the support network in place
              to help your parents integrate and thrive. Let us help make
              Singapore a secure, welcoming home for your parents in a vibrant,
              inclusive society.
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
            Applying for Singapore PR for Your Parents
          </h1>
          <p className="text-base">
            Applying for PR for your parents in Singapore is a meaningful
            decision, offering them a chance to enjoy the advantages of life in
            one of the world’s most vibrant cities. While the application
            process is intensive, involving a thorough eligibility review,
            detailed documentation, and careful preparation, it reflects
            Singapore’s commitment to fostering a welcoming and diverse society.
          </p>
          <p className="text-base">
            Singapore stands out as an exceptional place for aging parents, with
            its high standards of living, top-quality healthcare, and secure,
            stable environment, providing your parents with a fulfilling
            lifestyle and peace of mind. Applying for PR for your parents is an
            investment in their future, offering them a sense of belonging and a
            secure, comfortable life in a thriving global hub.
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
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 p-10 px-4">
              <div className="flex flex-col items-center gap-4 md:pt-12 px-6">
                <img
                  src="/Service1.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-4xl font-bold">
                  01 <p className="text-xl">Proof of Family Ties</p>
                </h1>
                <p>
                  A key requirement in applying for PR for aged parents in
                  Singapore is establishing the familial connection between the
                  sponsor and the applicant. Official documents such as birth
                  certificates or adoption records are required, clearly showing
                  the names of both parents and the child. This proof is
                  essential, as it verifies the legitimacy of the sponsorship
                  and aligns with Singapore’s immigration guidelines.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 p-10 px-4">
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 px-6">
                <img
                  src="/Service2.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-4xl font-bold">
                  02
                  <p className="text-xl">
                    Sponsorship must be by a Singapore Citizen
                  </p>
                </h1>
                <p>
                  It is important to note that only Singapore citizens are
                  eligible to sponsor PR applications for their parents. If the
                  sponsor is a Singapore Permanent Resident (PR) rather than a
                  citizen, the parents can instead apply for a Long-Term Visit
                  Pass (LTVP).
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r-0 xl:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 p-10 px-4">
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 px-6">
                <img
                  src="/Service3.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-4xl font-bold">
                  03
                  <p className="text-xl">Sponsor’s Financial Capability</p>
                </h1>
                <p>
                  The financial standing of the sponsor plays a critical role in
                  the PR application process. Sponsors must show evidence of
                  sufficient income and financial resources to support their
                  parents in Singapore, covering living expenses, healthcare
                  needs, and other necessary costs. This financial stability
                  reassures authorities of the sponsor’s capacity to provide
                  ongoing support.
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
              To successfully apply for PR for your parents in Singapore, it’s
              crucial to gather all essential supporting documents.
            </p>
            <div>
              <p>
                <b>Documents needed from the Applicant (Your Parent):</b>
              </p>
              <ul className="list-disc ml-4">
                <li>A valid travel document</li>
                <li>Birth certificate</li>
                <li>Current passport</li>
                <li>Medical examination report of applicant</li>
                <li>Proof of familial ties to the sponsor</li>
                <li>
                  Official marriage certificate of both parents (if applicable)
                </li>
                <li>LTVP or short-term visa (if applicable)</li>
                <li>Letter of employment (if employed)</li>
                <li>Valid work pass (if employed in Singapore)​</li>
                <li>Payslips from the last six months (if employed)​</li>
                <li>Income tax statement (if employed)​</li>
              </ul>
            </div>
            <div>
              <p>
                <b>Documents needed from the Sponsor (Yourself):</b>
              </p>
              <ul className="list-disc ml-4">
                <li>NRIC</li>
                <li>Birth certificate indicating the names of both parents</li>
                <li>
                  Proof of last six months income, such as tax returns or recent
                  payslips
                </li>
                <li>
                  Evidence of financial capacity to support parents (e.g., bank
                  statements)
                </li>
                <li>Document showing proof of residential address</li>
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
          <i>Let us apply for your parents!</i>
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
                <b>1. Comprehensive Document Support - </b>Preparing the
                required documents for a parents’ PR application can be complex,
                and errors or missing paperwork can cause delays. At Assurance
                Immigration, we simplify this process by guiding you through
                each necessary document to ensure a complete and strong
                application. With our help, you can avoid setbacks and submit
                your application with confidence.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl text-red-600 p-6">
              <p>
                <b>
                  2. Targetted Strategies to make your Parent's Application
                  Stand Out –{" "}
                </b>
                In Singapore’s selective PR landscape, Assurance Immigration
                customizes strategies to make your application stand out. By
                understanding the specific needs and criteria for parent
                applications, we craft an approach that highlights your parents’
                strengths and unique contributions, increasing their chances for
                successful approval.
              </p>
            </div>
            <div className="bg-red-600 rounded-xl text-white p-6">
              <p>
                <b>3. Expert Guidance Based on In-Depth Knowledge​ – </b>With
                nearly 20 years of experience in immigration services, Assurance
                Immigration provides knowledgeable, up-to-date guidance on
                policy changes and requirements for parent PR applications. We
                prioritize transparency and accuracy, ensuring you receive the
                most current advice and are well-prepared for every stage of the
                process.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl text-red-600 p-6">
              <p>
                <b>4. Personalized and Holistic Approach – </b>At Assurance
                Immigration, we recognize that every family’s circumstances are
                unique. Our holistic approach goes beyond documentation to
                emphasize the meaningful aspects of your application, such as
                family ties and your commitment to supporting your parents in
                Singapore. This comprehensive perspective strengthens your case
                and demonstrates a genuine connection to the country.
              </p>
            </div>
            <div className="bg-red-600 rounded-xl text-white p-6">
              <p>
                <b>5. Dedication to Client Success – </b>Assurance Immigration
                is driven by a commitment to achieving your goals. We believe
                that a strong application is built on trust, clear
                communication, and dedicated service. Our team strives to foster
                lasting relationships with clients, providing reliable support
                throughout the PR application process for your parents.
              </p>
            </div>
          </div>
          <div className="hidden md:block md:basis-1/3 bg-[url('https://static.wixstatic.com/media/11062b_3c83c170368c49508bd78126dd6f8bab~mv2.jpg/v1/fill/w_691,h_1052,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Archive.jpg')] bg-cover w-full h-inherit"></div>
        </div>
      </div>
    </>
  );
}

export default ParentPr;
