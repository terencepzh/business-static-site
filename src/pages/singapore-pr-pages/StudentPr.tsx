import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function StudentPr() {
  return (
    <>
      <div className="bg-[url(https://img.freepik.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1728864000&semt=ais_hybrid-rr-similar)] bg-center bg-cover bg-no-repeat">
        <div className="flex flex-col justify-center items-center gap-4 bg-black/65 text-white text-center md:h-[400px] p-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              <p>Singapore Permanent Residence</p>
              <p>- PR Application for Students -</p>
            </h1>
            <p className="text-xs md:text-base">
              SG Immigration applies its deep expertise in Singapore’s
              immigration process to support students in their pursuit of
              Permanent Residency. We customize each application to showcase
              your commitment to continuing your education and building a
              meaningful life in Singapore. Let us help you present a compelling
              case for PR, opening the door to a secure and enriching future in
              Singapore’s vibrant, multicultural society.
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
            Applying for Singapore PR as a Student
          </h1>
          <p className="text-base">
            Foreign students studying in Singapore have a pathway to apply for
            Permanent Residency, allowing them to build a long-term future here.
            Recognizing the contributions that international students bring to
            its educational institutions and broader community, Singapore
            provides PR opportunities for those who wish to establish roots in
            the country. Assurance Immigration understands the unique challenges
            that students face when pursuing PR and offers expert guidance
            tailored to meet their specific needs.
          </p>
          <p className="text-base">
            Our team supports students in navigating eligibility requirements,
            compiling essential documents, and crafting a strong application for
            PR. We focus on showcasing each student’s academic achievements,
            active participation in extracurriculars, and meaningful
            contributions to Singapore’s society—qualities that highlight their
            potential as future residents. With our experience and support, we
            aim to increase the chances of approval for students and help them
            achieve their goal of becoming Permanent Residents in Singapore.
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
        <div className="flex flex-col justify-center items-center gap-4 text-black w-full px-6 py-8">
          <div className="flex flex-col gap-4 text-red-600 w-full">
            <h1 className="text-4xl xl:text-5xl text-center font-bold">
              Eligibility Requirements for Student PR Application
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <p>
              Before applying for student Permanent Residency (PR) in Singapore,
              applicants must verify their eligibility. To qualify, students
              must meet the following criteria:
            </p>
            <ol className="list-decimal ml-4">
              <b>
                <li>
                  Have studied in Singapore for at least two years at the time
                  of application
                </li>
              </b>
              <b>
                <li>
                  Have passed a national exam, such as the GCE 'N'/'O'/'A'
                  levels or PSLE
                </li>
              </b>
              <b>
                <li>Be enrolled in an Integrated Programme (IP)</li>
              </b>
            </ol>
            <p>
              The Student PR Application Scheme is exclusively for those
              attending institutions within Singapore's public education system.
              Students at private institutions do not qualify for this scheme,
              as most international students in private colleges have not
              completed a national examination in Singapore.
            </p>
          </div>
        </div>
      </div>
      {/* Checklist */}
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-center items-center gap-4 text-black w-full px-6 py-8">
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-4xl xl:text-5xl text-red-600 text-center font-bold">
              Checklist of Documents for Student PR Application
            </h1>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <p>
              To successfully apply for PR as a student in Singapore, it’s
              crucial to gather all essential supporting documents.
            </p>
            <div>
              <p>
                <b>Documents needed from the Applicant:</b>
              </p>
              <ul className="list-disc ml-4">
                <li>
                  A passport and student pass with at least six months of
                  remaining validity
                </li>
                <li>
                  Birth certificate and any necessary identification documents
                </li>
                <li>Name change certificate (if applicable)</li>
                <li>
                  Academic certificates, transcripts, and proof of enrollment in
                  a Singapore educational institution
                </li>
                <li>Comprehensive academic records and notable achievements</li>
                <li>
                  Confirmation from the school verifying current enrollment in
                  the Integrated Programme (if relevant)
                </li>
                <li>
                  Letters of recommendation and testimonials from educational
                  institutions
                </li>
                <li>
                  A personal statement from the applicant outlining future
                  aspirations
                </li>
                <li>Valid passports and travel documents for both parents</li>
                <li>
                  Additional supporting documents as required by authorities
                </li>
                <li>
                  Certificates recognizing achievements or scholarships
                  (recommended)
                </li>
                <li>
                  Documentation of extracurricular participation and community
                  contributions (recommended)
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
        <h3 className="text-red-600 text-2xl lg:text-lg font-bold">
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
                <b>1. Making the PR Process Simple for Students -</b> Applying
                for PR as a student in Singapore can be complex, with numerous
                forms, requirements, and documentation involved. Assurance
                Immigration’s experienced consultants simplify this journey by
                offering a clear, step-by-step approach. We make sure you
                understand each stage of the application and help you assemble
                the required paperwork, presenting your information accurately
                and thoroughly. Our aim is to ease the pressure of this process
                so that you can focus on presenting a compelling application.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl text-red-600 p-6">
              <p>
                <b>2. Optimizing Your PR Approval Chances –</b> At Assurance
                Immigration, we’re dedicated to helping students improve their
                approval chances for PR. We know the nuances of the application
                process and what factors influence decisions. Using this
                insight, we carefully tailor your application to meet official
                standards and emphasize your strengths. Our team’s attention to
                detail, strategic planning, and deep knowledge of the criteria
                ensure your application is well-positioned for success, giving
                you the best possible shot at becoming a Singapore PR.
              </p>
            </div>
            <div className="bg-red-600 rounded-xl text-white p-6">
              <p>
                <b>3. Strengthening Your PR Application Profile –</b> Assurance
                Immigration understands the unique journey students face when
                seeking PR status in Singapore. We offer personalized guidance
                to build a robust application that highlights your academic
                achievements, extracurricular involvement, and intention to grow
                and contribute within Singapore. By showcasing your unique
                qualities, we help create an impactful application aligned with
                the requirements, presenting you as a strong candidate for
                permanent residency.
              </p>
            </div>
          </div>
          <div className="hidden md:block md:basis-1/3 bg-[url('https://static.wixstatic.com/media/11062b_3c83c170368c49508bd78126dd6f8bab~mv2.jpg/v1/fill/w_691,h_1052,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Archive.jpg')] bg-cover w-full h-inherit"></div>
        </div>
      </div>
    </>
  );
}

export default StudentPr;
