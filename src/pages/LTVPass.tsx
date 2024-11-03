import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

function LTVPass() {
  return (
    <>
      <div className="bg-[url(https://img.freepik.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1728864000&semt=ais_hybrid-rr-similar)] bg-center bg-cover bg-no-repeat">
        <div className="flex flex-col justify-center items-center gap-4 bg-black/65 text-white text-center h-[360px] p-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Long-Term Visit Pass & Dependant's Pass
            </h1>
            <p className="text-xs md:text-base">
              This page provides a brief overview of the eligibility
              requirements and criteria for obtaining a Long-Term Visit Pass
              (LTVP) or Dependant's Pass, along with the common challenges
              applicants may encounter during the application process.
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
            Long-Term Visit Pass & Dependant's Pass
          </h1>
          <p className="text-base">
            If you hold an EP or S Pass, you may wish to bring your family along
            when relocating to Singapore. To make this possible, they will need
            to obtain a Long-Term Visit Pass (LTVP). This pass allows you to
            bring your common-law spouse, stepchildren, or a child with
            disabilities to Singapore.
          </p>
          <p className="text-base w-full">
            While Singapore is a highly sought-after destination for
            international workers, there are restrictions on the number of
            family members who can accompany them.
          </p>
          <p className="text-base w-full">
            Singapore's LTVP provides an opportunity for certain family members
            to reside in the country. They can live in Singapore as long as
            their relative maintains a valid Employment Pass or S Pass.
            Additionally, the LTVP is granted to foreigners who wish to remain
            in Singapore for more than 30 days.
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
        <div className="flex flex-col justify-center items-left gap-6 text-red-600 w-full px-6 py-8">
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-4xl xl:text-5xl text-center font-bold">
              Eligiblity
            </h1>
          </div>
          <div>
            <p className="text-lg">
              <u>
                <b>Dependant's Pass (MOM)</b>
              </u>
            </p>
            <p>
              A foreigner in Singapore with a work pass can apply for
              Dependant's Pass for their:​
            </p>
            <div className="text-wrap">
              <ul className="flex flex-col flex-wrap list-disc list-inside text-wrap w-full">
                <li>Employment Pass (EP)</li>
                <li>S Pass</li>
                <li>Personalised Employment Pass (PEP)</li>
                <li>ONE Pass</li>
                <li>Work Permit</li>
              </ul>
            </div>
          </div>
          <div>
            <p className="text-lg">
              <u>
                <b>Long-Term Visit Pass (ICA)</b>
              </u>
            </p>
            <p>
              A foreigner in Singapore with a work pass can apply for LTVP for
              their:​
            </p>
            <ul className="list-disc list-inside w-full">
              <li>Non-legal spouse</li>
              <li>Unmarried step-child under the age of 21</li>
              <li>Unmarried handicapped child over the age of 21</li>
              <li>Parent</li>
            </ul>
          </div>
          <div>
            <p className="text-lg">Provided that they possess the following:</p>
            <ul className="list-disc list-inside w-full">
              <li>
                An Employment Pass (EP), S Pass, Personalised Employment Pass
                (PEP), or EntrePass.
              </li>
              <li>
                Have a minimum fixed monthly salary of S$6,000, or at least
                S$12,000 if sponsoring parents.
              </li>
              <li>
                Be sponsored by a company that is based and registered in
                Singapore, typically their employer.
              </li>
            </ul>
          </div>
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
                <h1 className="text-2xl lg:text-3xl">
                  Dependant’s Pass (DP) / Long‐Term Visit Pass (LTVP)
                  Applications With MOM
                </h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-bold">processing fees from</p>
                  <p className="text-4xl font-bold">$1,080</p>
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
                <h1 className="text-2xl lg:text-3xl">
                  Renewal of Dependant’s Pass (DP) / Long‐Term Visit Pass (LTVP)
                  with MOM
                </h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-bold">processing fees from</p>
                  <p className="text-4xl font-bold">$680</p>
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
                <h1 className="text-3xl">
                  Long-Term Visit Pass (LTVP) Application With ICA
                </h1>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-bold">processing fees from</p>
                  <p className="text-4xl font-bold">$880</p>
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

export default LTVPass;
