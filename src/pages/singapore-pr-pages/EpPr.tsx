import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function EpPr() {
  return (
    <>
      <div className="bg-[url(https://img.freepik.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1728864000&semt=ais_hybrid-rr-similar)] bg-center bg-cover bg-no-repeat">
        <div className="flex flex-col justify-center items-center gap-4 bg-black/65 text-white text-center md:h-[400px] p-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              <p>Singapore Permanent Residence</p>
              <p>- PR Application for EP Holders -</p>
            </h1>
            <p className="text-xs md:text-base">
              SG Immigrations leverages its deep understanding of Singapore’s
              immigration landscape to assist Employment Pass (EP) holders in
              their journey toward Permanent Residency. We tailor each
              application to showcase your professional contributions and
              long-term commitment to Singapore. Allow us to help you build a
              strong case for residency, opening the door to a stable future in
              Singapore’s vibrant and diverse community.
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
            Applying for Singapore PR as an EP Holder
          </h1>
          <p className="text-base">
            As an Employment Pass (EP) holder, securing Singapore Permanent
            Residency (PR) can provide numerous advantages, including increased
            career flexibility, access to healthcare and educational resources,
            and the stability of long-term residence. SG Immigrations is
            dedicated to supporting you through each step of this process. Our
            team offers tailored strategies and expert advice to enhance your
            chances of success, helping you build a fulfilling future in
            Singapore. ​
          </p>
          <p className="text-base">
            A strong PR application requires demonstrating your commitment to
            Singapore and meeting key eligibility requirements. Showcasing your
            involvement in the local community, highlighting long-term goals,
            and, if applicable, any family ties can make your application more
            compelling.
          </p>
          <p className="text-base">
            The path to PR involves gathering essential documentation and
            emphasizing your potential contributions to Singapore’s society and
            economy. With SG Immigrations' guidance, we help you navigate each
            requirement, providing the professional support you need to present
            a solid case and achieve your goal of making Singapore your
            permanent home.
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
              Eligibility Requirements for EP Holder PR Application
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
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-10 px-4">
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
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r xl:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-10 px-4">
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 px-6">
                <img
                  src="/Service3.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-4xl font-bold">
                  07
                  <p className="text-xl">Employment Pass Requirement</p>
                </h1>
                <p>
                  Only existing EP holders are eligible to apply for PR. While
                  you technically can apply on your first day as an EP holder,
                  waiting for at least six months is generally recommended to
                  allow time for collecting six months’ worth of payslips as
                  evidence of stable employment.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r-0 border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-10 px-4">
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 px-6">
                <img
                  src="/Service3.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-4xl font-bold">
                  08
                  <p className="text-xl">Income Bracket</p>
                </h1>
                <p>
                  Your monthly earnings can play a key role in the PR assessment
                  process. Generally, higher salaries are associated with
                  stronger applications, reflecting stability and the ability to
                  contribute financially to the Singaporean economy.
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
              Checklist of Documents for EP Holder PR Application
            </h1>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <p>
              To successfully apply for PR as an EP Holder in Singapore, it’s
              crucial to gather all essential supporting documents. ​
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
                <li>Valid Employment pass</li>
                <li>Payslips from the last six months</li>
                <li>Income tax statement (if employed)​</li>
                <li>Document showing proof of residential address​</li>
                <li>
                  PR Cover Letter* (SG Immigrations' skilled copywriters are
                  able to craft a compelling cover letter tailored specifically
                  to your PR application needs!)​
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
                EP holders, assembling the necessary documents for a PR
                application can be complex, as missing or incomplete paperwork
                could delay or compromise your application. At SG Immigrations,
                we streamline this process, guiding you through each
                documentation step so that your application is thorough and
                impactful. By partnering with us, you’ll avoid common mistakes,
                saving time and presenting a well-prepared application with
                confidence.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl text-red-600 p-6">
              <p>
                <b>
                  2. Strategic Approaches Customized for EP Holder PR Success –
                </b>
                In Singapore’s competitive PR landscape, SG Immigrations tailors
                strategies specifically for EP holders to increase the impact of
                your application. By understanding the unique position and
                requirements of EP applicants, we customize a plan to help your
                application stand out, improving your chances of approval and
                bringing you closer to securing permanent residency.
              </p>
            </div>
            <div className="bg-red-600 rounded-xl text-white p-6">
              <p>
                <b>
                  3. Expert Guidance Built on In-Depth Knowledge for EP Holders
                  –{" "}
                </b>
                With nearly 20 years of experience in the immigration field, our
                SG Immigrations team provides EP holders with knowledgeable,
                up-to-date advice throughout the PR application process. We stay
                informed of any policy updates or regulatory changes, providing
                accurate insights so that you are well-prepared at each stage.
                Our clear and dependable guidance helps ensure your application
                progresses smoothly.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl text-red-600 p-6">
              <p>
                <b>
                  4. Personalized Approach Focused on EP Holders’ Unique
                  Profiles –{" "}
                </b>
                At SG Immigrations, we understand that each EP holder’s
                background and goals are unique, which is why we take a tailored
                approach to every application. Beyond meeting the basic
                criteria, we help showcase your professional qualifications,
                contributions, and long-term intentions to settle in Singapore.
                This customized approach strengthens your case by highlighting
                your personal commitment to Singapore’s community and growth.
              </p>
            </div>
            <div className="bg-red-600 rounded-xl text-white p-6">
              <p>
                <b>5. Dedication to Client Success – </b>We believe in
                supporting EP holders throughout their journey toward
                establishing long-term residency in Singapore. SG Immigrations
                is committed to building trust with each client, providing
                transparent communication and consistent support. Our goal is to
                ensure that your PR application not only meets the requirements
                but also reflects a strong and lasting commitment to life in
                Singapore.
              </p>
            </div>
          </div>
          <div className="hidden md:block md:basis-1/3 bg-[url('https://static.wixstatic.com/media/11062b_3c83c170368c49508bd78126dd6f8bab~mv2.jpg/v1/fill/w_691,h_1052,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Archive.jpg')] bg-cover w-full h-inherit"></div>
        </div>
      </div>
    </>
  );
}

export default EpPr;
