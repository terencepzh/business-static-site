import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function SingaporePr() {
  return (
    <>
      <div className="bg-[url('https://www.traveltalktours.com/wp-content/smush-webp/2023/12/mike-enerio-7ryPpZK1qV8-unsplash-1-scaled.jpg.webp')] bg-center bg-cover bg-no-repeat h-full">
        <div className="flex flex-col justify-center items-center gap-4 bg-black/35 text-white text-center md:h-[400px] lg:h-[500px] p-8">
          <div className="flex flex-col gap-2 text-4xl lg:text-5xl font-bold">
            <p>SINGAPORE PR</p>
            <p>APPLICATION SERVICES</p>
          </div>
          <Button className="bg-white text-red-600 lg:text-base border rounded-full max-w-sm h-10">
            <Link
              to="/contact-us"
              reloadDocument
            >
              Book a free consultation
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 max-w-screen-lg px-6 py-8 mx-auto">
        <div className="flex flex-col gap-4 md:gap-6 items-center text-red-600 w-full">
          <div className="flex gap-2 items-center w-full">
            <p className="text-nowrap font-bold">SG Immigrations</p>
            <hr className="border-red-600 w-full" />
          </div>
          <h1 className="text-4xl lg:text-5xl lg:text-left font-bold w-full">
            Singapore Permanent Resident Application
          </h1>
          <p className="text-base">
            Singapore is widely regarded as an attractive destination for
            individuals pursuing avenues for residency, employment, and
            education. Acquiring Singapore Permanent Residency (PR) emerges as a
            feasible pathway for those committed to establishing roots in
            Singapore. However, navigating the PR application process can prove
            intricate, given its multifaceted requirements and regulations.
          </p>
          <p className="text-base">
            SG Immigrations specializes in providing comprehensive support
            tailored to enhancing the strength of your Singapore Permanent
            Residence application. Our firm delivers personalized case
            management solutions aimed at bolstering the competitiveness of your
            PR application. Backed by a team of seasoned immigration
            professionals, we offer guidance throughout the entire process. This
            includes elucidating the significance of Singapore’s PR
            prerequisites, identifying pivotal factors, and facilitating the
            compilation of requisite documentation to optimize your prospects of
            approval.
          </p>
          <Button className="bg-red-600 text-base border rounded-full md:w-full max-w-sm h-12">
            <Link
              to="/contact-us"
              reloadDocument
            >
              Book a free consultation
            </Link>
          </Button>
        </div>
      </div>
      {/* Becoming a PR */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 bg-red-600 text-white w-full px-6 py-8 mx-auto">
        <div className="flex flex-col gap-4 md:gap-6 items-center w-full max-w-screen-lg ">
          <div className="flex gap-2 items-center w-full">
            <p className="text-nowrap font-bold">SG Immigrations</p>
            <hr className="border-white w-full" />
          </div>
          <h1 className="text-4xl lg:text-5xl lg:text-left font-bold w-full">
            Becoming a Permanent Resident:
          </h1>
          <h1 className="text-4xl lg:text-5xl lg:text-left font-bold w-full">
            Singapore PR Application
          </h1>
          <p className="text-base">
            Singapore is widely regarded as an attractive destination for
            individuals pursuing avenues for residency, employment, and
            education. Acquiring Singapore Permanent Residency (PR) emerges as a
            feasible pathway for those committed to establishing roots in
            Singapore. However, navigating the PR application process can prove
            intricate, given its multifaceted requirements and regulations.
          </p>
          <p className="text-base">
            SG Immigrations specialises in providing comprehensive support
            tailored to enhancing the strength of your PR application in
            Singapore . Our firm delivers personalised case management solutions
            aimed at bolstering the competitiveness of your PR application.
            Backed by a team of seasoned immigration professionals, we offer
            guidance throughout the entire process. This includes elucidating
            the significance of Singapore’s PR prerequisites, identifying
            pivotal factors, and facilitating the compilation of requisite
            documentation to optimise your prospects of approval.
          </p>
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
            <Link
              to="/pr-application-rejection"
              reloadDocument
              className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4"
            >
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 px-8">
                <img
                  src="/Service1.svg"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-lg lg:text-2xl font-bold">
                  PR Rejection & Appeals
                </h1>
                <p>For individuals</p>
              </div>
            </Link>
            <Link
              to="/spouse-pr-application"
              reloadDocument
              className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4"
            >
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-8">
                <img
                  src="/spouse.svg"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-lg lg:text-2xl font-bold">
                  Spouse PR Application
                </h1>
                <p>For individuals & partners</p>
              </div>
            </Link>
            <Link
              to="/parent-pr-application"
              reloadDocument
              className="flex flex-col gap-4 border-t md:border-t-0 md:border-r-0 xl:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4"
            >
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-8">
                <img
                  src="/parents.svg"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-lg lg:text-2xl font-bold">
                  Parent PR Application
                </h1>
                <p>For individuals & families</p>
              </div>
            </Link>
            <Link
              to="/ep-holder-pr-application"
              reloadDocument
              className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4"
            >
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-8">
                <img
                  src="/Service3.svg"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-lg lg:text-2xl font-bold">
                  PR Application for EP Holders
                </h1>
                <p>For working individuals</p>
              </div>
            </Link>
            <Link
              to="/sp-holder-pr-application"
              reloadDocument
              className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4"
            >
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-8">
                <img
                  src="/Service3.svg"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-lg lg:text-2xl font-bold">
                  PR Application for SP Holders
                </h1>
                <p>For working individuals</p>
              </div>
            </Link>
            <Link
              to="/student-pr-application"
              reloadDocument
              className="flex flex-col gap-4 border-t md:border-t-0 md:border-r-0 border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4"
            >
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 md:px-8">
                <img
                  src="/Service5.svg"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-lg lg:text-2xl font-bold">
                  PR Application for Students
                </h1>
                <p>For studying individuals</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* Eligibility */}
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-center items-center gap-4 text-red-600 w-full px-6 py-8">
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-4xl xl:text-5xl text-center font-bold">
              Eligibility Requirements for Singapore PR Application
            </h1>
          </div>
          <div className="bg-red-600 rounded-xl text-white p-6">
            <p>
              Annually, nearly 100,000 individuals apply for Singapore permanent
              residency, but only about 30,000 are approved by the Immigration &
              Checkpoints Authority (ICA). This quota maintains the PR
              population at around 530,000 and ensures a steady pool of
              potential citizens. Given the high competition, strategic
              preparation is essential to maximise approval chances. The ICA
              evaluates each application based on various factors, and it's
              crucial to choose the right scheme that aligns with your profile
              and circumstances. Various schemes are available to apply for PR,
              each tailored to different applicant profiles. Here’s an overview
              of the eligibility requirements under the main schemes.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 flex-wrap justify-center max-w-screen-xl">
            <div className="flex flex-col md:basis-[48%] gap-6 border-gray-400 border-2 rounded-xl p-4">
              <p className="bg-red-600 rounded-xl text-white text-xl font-bold p-2">
                Professional, Technical Personnel and Skilled Workers (PTS)
                Scheme
              </p>
              <p>
                The PTS Scheme is designed for foreign professionals, technical
                personnel, and skilled workers who are currently employed in
                Singapore. This scheme enables qualified individuals to become
                PRs based on their employment in Singapore, contributing to the
                local economy. The aim is to attract and retain talent that
                supports Singapore’s economic growth. Eligibility is based on
                current employment status and specific criteria.
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-bold">Eligibility</p>
                <ul className="text-sm">
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick-red.svg"></img>
                    <p>Keeping up with changing policies</p>
                  </li>
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick-red.svg"></img>
                    <p>Compiling extensive documentation</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:basis-[48%] gap-6 border-gray-400 border-2 rounded-xl p-4">
              <p className="bg-red-600 rounded-xl text-white text-xl font-bold p-2">
                Sponsored Scheme
              </p>
              <p>
                The Sponsored Scheme is intended for immediate family members of
                Singapore Citizens or PRs, facilitating their PR applications
                through sponsorship. This includes foreign spouses and unmarried
                children under the age of 21. The scheme aims to promote family
                unity and stability by allowing family members to live together
                in Singapore. Sponsors must meet specific relationship and
                documentation requirements.
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-bold">Eligibility</p>
                <ul className="text-sm">
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick-red.svg"></img>
                    <p>
                      Foreign spouse and unmarried child(ren) below 21 years of
                      age.
                    </p>
                  </li>
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick-red.svg"></img>
                    <p>Official marriage certificate.</p>
                  </li>
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick-red.svg"></img>
                    <p>Birth certificates of child(ren) with parents' names.</p>
                  </li>
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick-red.svg"></img>
                    <p>Divorce and custody papers if applicable.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:basis-[48%] gap-6 border-gray-400 border-2 rounded-xl p-4">
              <p className="bg-red-600 rounded-xl text-white text-xl font-bold p-2">
                Foreign Students Scheme (FSS)
              </p>
              <p>
                The FSS targets foreign students who have resided in Singapore
                and have demonstrated strong academic performance. This scheme
                helps integrate students into Singaporean society, fostering
                long-term commitment and contribution. It aims to retain
                talented individuals educated in Singaporean institutions.
                Applicants must meet residency and educational qualifications.
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-bold">Eligibility</p>
                <ul className="text-sm">
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick-red.svg"></img>
                    <p>Reside in Singapore for over two years.</p>
                  </li>
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick-red.svg"></img>
                    <p>
                      Passed at least one national exam (PSLE or GCE levels) or
                      enrolled in the Integrated Programme.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:basis-[48%] gap-6 border-gray-400 border-2 rounded-xl p-4">
              <p className="bg-red-600 rounded-xl text-white text-xl font-bold p-2">
                Foreign Artistic Talent (ForArts) Scheme
              </p>
              <p>
                The ForArts Scheme is tailored for international artists with
                significant achievements and contributions to the arts. It seeks
                to enrich Singapore’s cultural landscape by attracting talented
                artists who can contribute to and thrive within Singapore’s
                vibrant arts community. This scheme supports the growth of the
                arts sector and cultural exchange. Applicants must have a strong
                track record and future plans in the arts.
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-bold">Eligibility</p>
                <ul className="text-sm">
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick-red.svg"></img>
                    <p>
                      Relevant training and professional experience in the arts.
                    </p>
                  </li>
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick-red.svg"></img>
                    <p>Outstanding achievements in the arts sector.</p>
                  </li>
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick-red.svg"></img>
                    <p>
                      Significant contributions to Singapore's arts and cultural
                      scene.
                    </p>
                  </li>
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick-red.svg"></img>
                    <p>
                      Concrete plans for further involvement in Singapore's
                      arts.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-6 border-gray-400 border-2 rounded-xl p-4">
              <p className="bg-red-600 rounded-xl text-white text-xl font-bold p-2">
                Global Investor Programme (GIP)
              </p>
              <p>
                The GIP is for global investors, entrepreneurs, and business
                owners looking to contribute to Singapore’s economy. It provides
                a pathway to PR for those who can drive economic growth through
                substantial investments. This scheme is designed to attract
                high-calibre business leaders and investors. Applicants must
                choose between several investment options and meet stringent
                financial and business criteria.
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-bold">Eligibility</p>
                <ul className="text-sm">
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick-red.svg"></img>
                    <p>
                      Established Business Owners: Minimum three years of
                      business track record, S$200 million annual turnover, 30%
                      shareholding.
                    </p>
                  </li>
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick-red.svg"></img>
                    <p>
                      Next-Generation Business Owners: Family holding 30%
                      shareholding, S$500 million annual turnover, management
                      role.
                    </p>
                  </li>
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick-red.svg"></img>
                    <p>
                      Founders of Fast-Growth Companies: Founder and major
                      shareholder of a company valued at S$500 million, backed
                      by reputable VC or PE firms.
                    </p>
                  </li>
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick-red.svg"></img>
                    <p>
                      Family Office Principals: At least five years of relevant
                      track record, S$200 million net investable assets.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Requirements */}
      <div className="flex flex-col justify-center items-center gap-6 text-red-600 w-full px-6 py-8">
        <p className="text-4xl xl:text-5xl text-center font-bold">
          Singapore PR Application Requirements
        </p>
        <div className="flex flex-col gap-4 max-w-screen-xl">
          <p className="font-bold">
            At SG Immigrations, we are here to assist you with the required
            documents for your Singapore PR application. Please follow these
            explanatory notes and gather the necessary supporting documents via
            the e-Service if you’re applying as:
          </p>
          <ul className="list-outside list-disc ml-4 p-4">
            <li>
              <b>
                Spouse of a Singapore citizen or PR or an unmarried child below
                21:
              </b>{" "}
              Review the explanatory notes and document list for a spouse with
              or without accompanying children. Follow the separate notes and
              list specifically for children.
            </li>
            <li>
              <b>Aged Parent of a Singapore Citizen: </b>
              Refer to the explanatory notes and document list for aged parents.
            </li>
            <li>
              <b>Holder of an Employment Pass or S Pass: </b>
              Follow the explanatory notes and document list for EP or S Pass
              holders.
            </li>
            <li>
              <b>Student Studying in Singapore: </b>
              Check the explanatory notes and document list for students.
            </li>
          </ul>
          <p>
            If you’re a foreign investor, you can apply for PR under the Global
            Investor Programme with the Singapore Economic Development Board.
          </p>
        </div>
      </div>
      {/* Step-by-Step */}
      <div className="flex flex-col justify-center items-center gap-6 text-red-600 w-full px-6 py-8">
        <p className="text-4xl xl:text-5xl text-center font-bold">
          Step-by-Step Guide for PR Application in Singapore
        </p>
        <div className="flex flex-col gap-4  max-w-screen-xl">
          <p>
            At SG Immigrations, we simplify the Singapore PR application
            process, providing comprehensive guidance to help you navigate each
            step and unlock the benefits of obtaining permanent residency.
          </p>
          <ul className="flex flex-col gap-4 list-outside list-disc ml-4 p-4">
            <li>
              <b>Access the e-Service: </b>
              <ul>
                <li>
                  All PR applications are submitted online via the e-Service.
                </li>
                <li>
                  You can either complete the form directly online or download
                  it, fill it out offline, and then submit it online.
                </li>
              </ul>
            </li>
            <li className="flex flex-col gap-4">
              <b>Verify Eligibility:</b>
              <ul className="flex flex-col gap-4">
                <li className="flex flex-col gap-2">
                  <p>Ensure you have a valid Singpass account to apply as:</p>
                  <ul className="flex flex-col gap-2 list-outside list-disc ml-4">
                    <li>
                      A Singapore citizen or PR applying for your spouse or
                      unmarried child under 21.
                    </li>
                    <li>A Singapore citizen applying for your aged parent.</li>
                    <li>
                      An Employment Pass or S Pass holder applying for yourself,
                      your spouse, or unmarried child under 21.
                    </li>
                  </ul>
                </li>
                <li>
                  If you’re a student studying in Singapore, use your Foreign
                  Identification Number (FIN) and immigration pass issuance date
                  to access the e-Service.
                </li>
              </ul>
            </li>
            <li>
              <b>Foreign Investor Application:</b>
              <ul>
                <li>
                  Check the explanatory notes and document list for students.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Button className="bg-red-600 text-base border rounded-full md:w-full max-w-sm h-12">
          <Link
            to="/contact-us"
            reloadDocument
          >
            Book a free consultation
          </Link>
        </Button>
      </div>
    </>
  );
}

export default SingaporePr;
