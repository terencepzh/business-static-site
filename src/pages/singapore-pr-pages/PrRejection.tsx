import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function PrRejection() {
  return (
    <>
      <div className="bg-[url(https://img.freepik.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1728864000&semt=ais_hybrid-rr-similar)] bg-center bg-cover bg-no-repeat">
        <div className="flex flex-col justify-center items-center gap-4 bg-black/65 text-white text-center md:h-[400px] p-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
              <p>Singapore Permanent Residence</p>
              <p>- PR Application Rejection -</p>
            </h1>
            <p className="text-xs md:text-base">
              With our in-depth understanding of Singapore’s immigration
              regulations, we specialize in turning setbacks into success
              stories. Our comprehensive approach focuses on strengthening your
              application, addressing the reasons for rejection, and presenting
              a compelling case to increase your chances of securing permanent
              residency. Let us help you move closer to achieving your dream of
              making Singapore your home.
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
            PR Application Rejection
          </h1>
          <p className="text-base">
            Facing a PR application rejection can be disheartening, but it’s
            important not to give up. The ICA adheres to strict evaluation
            standards due to the large volume of applications they receive
            annually.
          </p>
          <p className="text-base">
            A rejection can be a valuable opportunity to reflect on your
            application and identify any shortcomings. Careful analysis of the
            feedback provided by the ICA allows you to understand which areas
            need enhancement, whether it's your qualifications, supporting
            documents, or other aspects of the submission.
          </p>
          <p className="text-base">
            The Singapore PR application process requires considerable effort
            and investment, including time spent gathering documents, completing
            forms, and potentially undergoing medical examinations. Resubmitting
            your application without addressing the issues that led to rejection
            might result in a repeat of the same mistakes.
          </p>
          <p className="text-base">
            Seeking expert assistance can be crucial to improving your chances.
            SG Immigrations offers personalized services tailored to your unique
            situation, providing strategies to navigate the complex PR
            application process with greater confidence.
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
      {/* Possible Reasons */}
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-center items-center gap-4 text-black w-full px-6 py-8">
          <div className="flex flex-col gap-4 text-red-600 w-full">
            <h1 className="text-4xl xl:text-5xl text-center font-bold">
              Possible Reasons for PR Application Rejection
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
          <div className="flex flex-col gap-4 md:basis-2/3">
            <div className="bg-red-600 rounded-xl text-white p-6">
              <p>
                <b>1. Thorough Review of Your Initial Application -</b> Our team
                will meticulously review your original PR application to
                identify any potential improvements or overlooked areas. By
                understanding where the initial application may have fallen
                short, we help you address these aspects effectively in the
                appeal.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl text-red-600 p-6">
              <p>
                <b>2. Showcasing Your Unique Contributions –</b> We will work
                with you to highlight your professional achievements,
                involvement in the community, and personal growth that
                demonstrate your dedication and potential value to Singapore. SG
                Immigrations helps you identify and present the qualities that
                make you a strong candidate for PR status.
              </p>
            </div>
            <div className="bg-red-600 rounded-xl text-white p-6">
              <p>
                <b>3. Compiling Key Supporting Documents – </b> To strengthen
                your re-application, our experts assist in gathering critical
                supporting documentation that verifies your qualifications and
                achievements. Whether it’s certificates, recommendation letters,
                or additional evidence of your accomplishments, we ensure your
                re-applicationn is well-supported and credible.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl text-red-600 p-6">
              <p>
                <b>4. Ensuring a Polished Re-Application –</b> Before
                submitting, we conduct a thorough review of your re-application
                materials to guarantee that everything is clear, professional,
                and free from errors. SG Immigrations ensures that your
                re-application leaves a stronger, positive impression that will
                increase your chances of success this time.
              </p>
            </div>
            <div className="bg-red-600 rounded-xl text-white p-6">
              <p>
                <b>5. Awaiting the Results –</b> We will diligently track the
                status of your re-application and keep you updated on its
                progress, minimizing the need for you to monitor.
              </p>
            </div>
          </div>
          <div className="hidden md:block md:basis-1/3 bg-[url('https://static.wixstatic.com/media/11062b_3c83c170368c49508bd78126dd6f8bab~mv2.jpg/v1/fill/w_691,h_1052,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Archive.jpg')] bg-cover w-full h-inherit"></div>
        </div>
      </div>
    </>
  );
}

export default PrRejection;
