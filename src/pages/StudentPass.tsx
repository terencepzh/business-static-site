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
        <div className="flex flex-col justify-center items-center gap-4 text-black w-full px-6 py-8">
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-4xl xl:text-5xl text-red-600 text-center font-bold">
              Eligibility
            </h1>
          </div>
          <div className="flex flex-wrap justify-center *:items-start *:bg-red-100 *:text-left max-w-screen-lg">
            <div className="flex flex-col gap-4 md:basis-1/2 border-2 border-gray-400 w-full p-10 px-4">
              <div className="flex flex-col gap-4 h-full">
                <h1 className="text-4xl lg:text-5xl font-bold">01</h1>
                <p className="text-sm md:text-base">
                  Offered/accepted a full-time course in Institutes of Higher
                  Learning (IHLs): Universities, polytechnics, and other
                  tertiary institutions
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:basis-1/2 border-2 border-t-0 md:border-l-0 md:border-t-2 xl:border-b-2 border-gray-400 text-center w-full p-10 px-4">
              <div className="flex flex-col gap-4 h-full">
                <h1 className="text-4xl lg:text-5xl font-bold">02</h1>
                <p className="text-sm md:text-base">
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
