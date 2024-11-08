import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

function StudentPass() {
  return (
    <>
      <div className="bg-[url(https://img.freepik.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1728864000&semt=ais_hybrid-rr-similar)] bg-center bg-cover bg-no-repeat">
        <div className="flex flex-col justify-center items-center gap-4 bg-black/65 text-white text-center h-[360px] p-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Student Pass Application
            </h1>
            <p className="text-xs md:text-base">
              This page offers a concise overview of the eligibility
              requirements and criteria for applying for a Student Pass, as well
              as the common challenges that applicants may face during the
              application process.
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
        <div className="flex flex-col gap-4 md:gap-6 items-center lg:items-start text-red-600 w-full *:lg:pr-8">
          <h1 className="text-4xl lg:text-5xl text-center lg:text-left font-bold w-full">
            Studying in Singapore
          </h1>
          <p className="text-base">
            Singapore has long recognized its people as one of the nation's most
            valuable assets, with their long-term sustainability being vital to
            the country’s economic development. The journey to becoming a
            Singaporean citizen is a detailed and lengthy process, involving
            thorough screening and decision-making by the ICA, which takes
            considerable time.
          </p>
          <p className="text-base">
            If you're interested in learning more about applying for Singapore
            Citizenship, you can reach out to our immigration advisor for a free
            advisory session by providing your contact information below.
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
          <div className="flex justify-center flex-wrap *:text-center">
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col items-center gap-4 md:pt-12 px-6">
                <img
                  src="/Service1.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-4xl font-bold">01</h1>
                <p>
                  Offered/accepted a full-time course in Institutes of Higher
                  Learning (IHLs): Universities, polytechnics, and other
                  tertiary institutions
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 border-grey text-center w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col items-center gap-4 h-full md:pt-12 px-6">
                <img
                  src="/Service2.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-4xl font-bold">02</h1>
                <p>
                  Offered/accepted a full-time course in Private Education
                  Institutions (PEIs): Only PEIs that are registered with the
                  Committee for Private Education (CPE) can apply for a Student
                  Pass on your behalf
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How we can help you */}
      <div className="flex flex-col justify-center items-center gap-4 w-full px-6 py-8">
        <h1 className="text-4xl xl:text-5xl text-red-600 text-center font-bold">
          How we can help you
        </h1>
        <Button className="bg-red-600 text-base border rounded-full md:w-full max-w-sm h-12">
          <Link
            to="/contact-us"
            reloadDocument
          >
            Let us help you!
          </Link>
        </Button>
        <div className="flex gap-6">
          <div className="flex flex-col gap-4 basis-2/3">
            <div className="bg-red-600 rounded-xl text-white p-6">
              <p>
                <b>
                  1. Secure Admission to an Institute of Higher Learning (IHL) -
                </b>
                We guide you in selecting and applying to recognized
                institutions, ensuring your eligibility for the Student Pass.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl text-red-600 p-6">
              <p>
                <b>
                  2. IHL Registers You with SOLAR (Student’s Pass Online
                  Application & Registration) –{" "}
                </b>
                We assist in coordinating with your chosen institution to ensure
                your details are correctly registered with SOLAR.
              </p>
            </div>
            <div className="bg-red-600 rounded-xl text-white p-6">
              <p>
                <b>3. Receive Your SOLAR Reference Number – </b> We monitor the
                registration process and provide timely updates, making sure you
                receive your reference number without delays.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl text-red-600 p-6">
              <p>
                <b>4. Log in to SOLAR and Complete the Application – </b>
                We offer step-by-step guidance on completing your application
                form, ensuring all necessary details are correctly filled out to
                avoid processing delays.
              </p>
            </div>
            <div className="bg-red-600 rounded-xl text-white p-6">
              <p>
                <b>5. Pay the Application Fee – </b>We assist with payment
                guidance and ensure that your application moves forward smoothly
                after the fee is submitted.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl text-red-600 p-6">
              <p>
                <b>6. Await the Decision – </b>
                We track the status of your application and keep you updated on
                its progress, minimizing the need for you to monitor.
              </p>
            </div>
            <div className="bg-red-600 rounded-xl text-white p-6">
              <p>
                <b>7. Receive the In-Principle Approval (IPA) Letter – </b>We
                help you understand your IPA letter and prepare you for the next
                steps, including travel arrangements and entry formalities.
              </p>
            </div>
            <div className="bg-gray-200 rounded-xl text-red-600 p-6">
              <p>
                <b>8. Receive a Visit Pass Upon Arrival – </b>
                We provide pre-arrival guidance and assist with any entry
                requirements, ensuring a smooth transition upon landing in
                Singapore.
              </p>
            </div>
            <div className="bg-red-600 rounded-xl text-white p-6">
              <p>
                <b>9. Arrange an Appointment at ICA – </b> We assist in booking
                your ICA appointment, advise on the documents needed, and guide
                you through the collection process to avoid any issues.
              </p>
            </div>
          </div>
          <div className="hidden md:block basis-1/3 bg-[url('https://static.wixstatic.com/media/a8fdda25916241a9a05253a435f1ae08.jpg/v1/fill/w_843,h_1574,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/School%20LIbrary.jpg')] bg-cover w-full h-inherit"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 w-full px-6 py-8">
        <h1 className="text-4xl xl:text-5xl text-red-600 text-center font-bold">
          Our Services
        </h1>
        <h3 className="text-base lg:text-lg">
          Select the best package for{" "}
          <i className="text-red-600 font-bold">you</i>!
        </h3>
        <Button className="bg-red-600 text-base border rounded-full md:w-full max-w-sm h-12">
          <Link
            to="/contact-us"
            reloadDocument
          >
            Talk to an expert!
          </Link>
        </Button>
        <Card className="flex flex-col justify-between items-center max-w-[350px] bg-red-600 text-white">
          <CardHeader>
            <CardTitle className="text-lg">
              <h1 className="text-3xl text-center">
                Student Pass Application Guidance & Administration
              </h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-center">
                <p className="font-bold">processing fees from</p>
                <p className="text-4xl font-bold">$180</p>
              </div>
              <Button className="bg-white text-red-600 text-base border rounded-full md:w-full max-w-sm h-12">
                <Link
                  to="/contact-us"
                  reloadDocument
                >
                  Find out more!
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default StudentPass;
