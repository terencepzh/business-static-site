import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

function WorkPass() {
  return (
    <>
      <div className="bg-[url(https://img.freepik.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1728864000&semt=ais_hybrid-rr-similar)] bg-center bg-cover bg-no-repeat">
        <div className="flex flex-col justify-center items-center gap-4 bg-black/65 text-white text-center h-[360px] p-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Work Pass Application
            </h1>
            <p className="text-xs md:text-base">
              This page outlines the types of work passes SG Immigrations is
              able to provide, as well as a brief overview of the application
              process.
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
        <div className="bg-[url(https://static.wixstatic.com/media/11062b_55137f34e78a4b21b45afeef2ae3a049~mv2.jpeg/v1/fill/w_952,h_771,fp_0.35_0.26,q_85,usm_0.66_1.00_0.01,enc_auto/Business%20Meeting.jpeg)] bg-center lg:bg-[65%] bg-cover bg-no-repeat w-full h-[370px] lg:h-[840px]"></div>
        <div className="flex flex-col gap-4 md:gap-6 items-center lg:items-start text-red-600 text-left w-full *:lg:pr-8">
          <h1 className="text-4xl lg:text-5xl text-center lg:text-left font-bold w-full">
            Working in Singapore
          </h1>
          <p className="text-base">
            Our highly skilled team, well-versed in the rules, regulations, and
            requirements set by Singapore’s Ministry of Manpower (MOM), is
            equipped to provide tailored advice based on the current policies
            and your individual profile for different work pass applications.
          </p>
          <p className="text-base w-full">
            We specialize in handling the following types of work passes:
          </p>
          <ul className="list-disc list-inside w-full">
            <li>Employment Pass (EP)</li>
            <li>S Pass</li>
            <li>Personalised Employment Pass (PEP)</li>
            <li>ONE Pass</li>
            <li>Work Permit</li>
          </ul>
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
        <div className="flex flex-col justify-center items-center gap-6 text-red-600 w-full px-6 py-8">
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-4xl xl:text-5xl text-center font-bold">
              Eligiblity
            </h1>
          </div>
          <p className="text-base">
            Before proceeding, we will arrange a free consultation session to
            thoroughly assess your profile. This session allows us to gain a
            deeper understanding of your background, your reasons for seeking a
            work pass in Singapore, and your strengths and areas for improvement
            in the application process. You can use this session to address any
            questions you may have about work pass applications or immigration
            matters.
          </p>
          <p className="text-base w-full">
            During the consultation, we will offer guidance, suggest the most
            suitable pass type for your situation, and provide advice on how to
            enhance your chances of a successful application.
          </p>
        </div>
      </div>
      {/* Our Services */}
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
      </div>
      {/* Packages */}
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row flex-wrap md:justify-center gap-4 text-center w-full max-w-[1440px] p-6">
          <Card className="flex flex-col justify-between md:basis-[48%] lg:basis-[24%] bg-red-600 text-white">
            <CardHeader>
              <CardTitle>
                <h1 className="text-4xl lg:text-5xl">
                  Work Pass Applications (S-Pass, EP & PEP)
                </h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-bold">processing fees from</p>
                  <p className="text-4xl lg:text-5xl font-bold">$1,200</p>
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
          <Card className="flex flex-col justify-between md:basis-[48%] lg:basis-[24%] bg-red-600 text-white">
            <CardHeader>
              <CardTitle>
                <h1 className="text-4xl lg:text-5xl">One Pass Application</h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-bold">processing fees from</p>
                  <p className="text-4xl lg:text-5xl font-bold">$1,800</p>
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
          <Card className="flex flex-col justify-between md:basis-[48%] lg:basis-[24%] bg-red-600 text-white">
            <CardHeader>
              <CardTitle className="text-lg">
                <h1 className="text-4xl lg:text-5xl">
                  Work Pass Renewal Applications (S-Pass, EP, PEP & ONE)
                </h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-bold">processing fees from</p>
                  <p className="text-4xl lg:text-5xl font-bold">$1,800</p>
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
          <Card className="flex flex-col justify-between md:basis-[48%] lg:basis-[24%] bg-red-600 text-white">
            <CardHeader>
              <CardTitle className="text-lg">
                <h1 className="text-4xl lg:text-5xl">Entrepass Application</h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-bold">processing fees from</p>
                  <p className="text-4xl lg:text-5xl font-bold">$1,800</p>
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
      </div>
    </>
  );
}

export default WorkPass;
