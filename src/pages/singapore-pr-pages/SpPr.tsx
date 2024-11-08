import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function SpPr() {
  return (
    <>
      <div className="bg-[url(https://img.freepik.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1728864000&semt=ais_hybrid-rr-similar)] bg-center bg-cover bg-no-repeat">
        <div className="flex flex-col justify-center items-center gap-4 bg-black/65 text-white text-center md:h-[400px] p-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              <p>Singapore Permanent Residence</p>
              <p>- PR Application for SP Holders -</p>
            </h1>
            <p className="text-xs md:text-base">
              Assurance Immigration draws on its extensive expertise in
              Singapore’s immigration framework to support S Pass (SP) holders
              in their journey toward Permanent Residency. Our approach is to
              tailor each application to highlight your contributions and
              long-term commitment to Singapore’s growth. Trust us to present a
              compelling case for residency, helping you build a secure and
              lasting future within Singapore’s vibrant and diverse community.
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
            Applying for Singapore PR as an SP Holder
          </h1>
          <p className="text-base">
            S Pass holders in Singapore get a chance to apply for Permanent
            Residency (PR) without any salary limitations. Unlike other work
            permits, PR eligibility for S Pass holders does not depend on
            meeting a minimum income requirement. This allows individuals
            earning below the typical SGD 6,000 threshold—generally needed to
            bring family members to Singapore—to still pursue PR status.
          </p>
          <p className="text-base">
            Additionally, S Pass holders can include family members in their PR
            applications, even if these relatives are not currently living in
            Singapore on a Dependant Pass. This option enables S Pass holders to
            plan for future family reunification as part of their longer-term
            goal of establishing residence in Singapore. This policy provides an
            opportunity for those who may not meet the salary benchmark to work
            toward securing PR and eventually uniting their families in
            Singapore.
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
              Eligibility Requirements for SP Holder PR Application
            </h1>
          </div>
          <div className="flex md:justify-center flex-wrap *:text-center">
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-10 px-4">
              <div className="flex flex-col items-center gap-4 md:pt-12 px-6">
                <img
                  src="/Service1.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-4xl font-bold">
                  01 <p className="text-xl">Educational Qualifications</p>
                </h1>
                <p>
                  Your academic background can positively influence your PR
                  application, especially if you hold higher qualifications from
                  recognized institutions. A solid educational foundation is
                  often viewed favorably in demonstrating your potential
                  contribution to Singapore.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-10 px-4">
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 px-6">
                <img
                  src="/Service2.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-4xl font-bold">
                  02
                  <p className="text-xl">Age of Applicant</p>
                </h1>
                <p>
                  Age is considered in the PR application process, with younger
                  applicants often perceived as having longer potential to
                  contribute. However, applicants of all ages who meet other key
                  criteria and demonstrate dedication to Singapore’s development
                  can be eligible for PR.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r-0 xl:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-10 px-4">
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 px-6">
                <img
                  src="/Service3.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-4xl font-bold">
                  03
                  <p className="text-xl">Family Connections</p>
                </h1>
                <p>
                  If you have close family members who are Singaporean citizens
                  or permanent residents, it may support your PR application by
                  showing familial ties to the country and increasing the
                  chances of success for your application.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r xl:border-r-0 border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-10 px-4">
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 px-6">
                <img
                  src="/Service3.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-4xl font-bold">
                  04
                  <p className="text-xl">Community Involvement</p>
                </h1>
                <p>
                  Engagement in local initiatives, such as volunteer work or
                  other social contributions, can strengthen your PR
                  application. Demonstrating a genuine commitment to the
                  community reflects positively on your intention to integrate
                  into Singaporean society.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r xl:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-10 px-4">
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 px-6">
                <img
                  src="/Service3.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-4xl font-bold">
                  05
                  <p className="text-xl">In-Demand Skills and Qualifications</p>
                </h1>
                <p>
                  Specialized skills and experience that align with Singapore’s
                  demand areas can improve your PR application’s prospects.
                  Expertise that contributes to local industries is viewed as
                  beneficial to the country’s workforce.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r-0 xl:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-10 px-4">
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 px-6">
                <img
                  src="/Service3.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-4xl font-bold">
                  06
                  <p className="text-xl">Stable Employment Record</p>
                </h1>
                <p>
                  Having a solid employment history in Singapore, including
                  consistent contributions to the workforce, can enhance the
                  strength of your PR application by showing commitment and
                  stability.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-l md:border-r xl:border-none border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-10 px-4">
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 px-6">
                <img
                  src="/Service3.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-4xl font-bold">
                  07
                  <p className="text-xl">Valid SPass</p>
                </h1>
                <p>
                  Only existing SP holders are eligible to apply for PR. While
                  you technically can apply on your first day as an SP holder,
                  waiting for at least six months is generally recommended to
                  allow time for collecting six months’ worth of payslips as
                  evidence of stable employment.
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
              Checklist of Documents for SP Holder PR Application
            </h1>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <p>
              To successfully apply for PR as an SP Holder in Singapore, it’s
              crucial to gather all essential supporting documents.
            </p>
            <div>
              <p>
                <b>Documents needed from the Applicant:</b>
              </p>
              <ul className="list-disc ml-4">
                <li>A valid travel document</li>
                <li>Passport-sized photo recently taken</li>
                <li>Current passport</li>
                <li>Birth Certificate</li>
                <li>Medical examination report of applicant</li>
                <li>Letter of employment</li>
                <li>Valid S pass</li>
                <li>Payslips from the last six months</li>
                <li>Income tax statement (if employed)​</li>
                <li>Document showing proof of residential address​</li>
                <li>
                  PR Cover Letter* (SG Immigration’s skilled copywriters are
                  able to craft a compelling cover letter tailored specifically
                  to your PR application needs!) ​
                </li>
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
          <i>Let us apply for you!</i>
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
                <b>1. Document Preparation Simplified for EP Holders - </b>For
                SP holders, compiling necessary documents for PR applications
                can be intricate, as incomplete or incorrect paperwork may stall
                the process. Assurance Immigration guides you through each
                documentation step, helping you avoid potential oversights,
                streamline submission, and deliver an organized application with
                assurance.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl text-red-600 p-6">
              <p>
                <b>2. Customized Strategies for SP Holder PR Applications – </b>
                Securing PR in Singapore is highly sought-after, so Assurance
                Immigration develops strategies tailored to highlight the
                strengths of SP holders. We emphasize the most relevant aspects
                of your profile, help you stand out among other applicants,
                increasing the likelihood of approval and helping you lay the
                groundwork for a stable future in Singapore.
              </p>
            </div>
            <div className="bg-red-600 rounded-xl text-white p-6">
              <p>
                <b>
                  3. Expert Guidance Based on Industry Experience for SP Holders
                  –
                </b>{" "}
                With nearly 15 years of immigration expertise, Assurance
                Immigration provides SP holders with well-rounded support
                throughout the PR application process. We stay updated on
                regulatory changes, giving you reliable insights and helping
                each stage progress smoothly. Our clear and knowledgeable
                guidance makes navigating requirements straightforward and
                stress-free.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl text-red-600 p-6">
              <p>
                <b>
                  4. Personalized Approach Highlighting SP Holders’ Unique
                  Contributions –
                </b>{" "}
                At Assurance Immigration, we recognize the distinct qualities
                each SP holder brings. Beyond meeting application criteria, we
                help illustrate your contributions and dedication to building a
                life in Singapore. Our personalized approach strengthens your
                application by demonstrating your intention to integrate into
                the community and contribute to its development.
              </p>
            </div>
            <div className="bg-red-600 rounded-xl text-white p-6">
              <p>
                <b>5. Dedication to Client Success – </b>Assurance Immigration
                is dedicated to supporting SP holders throughout the journey to
                permanent residency in Singapore. We build trust with our
                clients by providing transparent communication and reliable
                support. Our goal is to present a strong PR application that not
                only fulfills requirements but also reflects your commitment to
                making Singapore your permanent home.
              </p>
            </div>
          </div>
          <div className="hidden md:block md:basis-1/3 bg-[url('https://static.wixstatic.com/media/11062b_3c83c170368c49508bd78126dd6f8bab~mv2.jpg/v1/fill/w_691,h_1052,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Archive.jpg')] bg-cover w-full h-inherit"></div>
        </div>
      </div>
    </>
  );
}

export default SpPr;
