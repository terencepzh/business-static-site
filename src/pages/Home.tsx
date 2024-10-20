import Overview from "@/components/Overview";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="md:flex justify-evenly items-center">
        <div className="bg-[url('/home.jpeg')]  bg-no-repeat bg-cover w-full h-[320px] md:h-[640px] lg:[960px]"></div>
        <div className="flex flex-col justify-between items-center gap-4 text-red-600 text-center md:text-left xl:items-start w-full xl:h-80 px-6 py-8 md:py-6">
          <h1 className="text-4xl xl:text-5xl font-bold">
            Singapore PR & Citizenship Consulting
          </h1>
          <h3 className="xl:text-lg">
            Your leading consultancy for Singapore immigration advice. Over 20
            years of providing unmatched service and excellence.
          </h3>
          <Button className="bg-red-600 text-white border rounded-full w-full max-w-sm h-12">
            <Link to="/contact-us">Book a consultation now</Link>
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-red-600 text-white text-center px-6 py-8">
        <h1 className="text-4xl xl:text-5xl text-center font-bold">
          Why SG Immigrations?
        </h1>
        <p className="text-sm xl:text-base">
          There are countless of immigration consulting firms in Singapore.
          <br />
          Here's why you should choose us.
        </p>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row md:justify-between max-w-screen-lg gap-4">
            <Card className="flex flex-col justify-between text-red-600">
              <CardHeader>
                <CardTitle>
                  <h1 className="text-4xl lg:text-5xl">20+</h1>
                  <h3 className="text-lg">
                    Years of Immigration Advisory Expertise
                  </h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sagittis mauris massa, id venenatis dolor congue ac.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col justify-between text-red-600">
              <CardHeader>
                <CardTitle className="text-lg">
                  <h1 className="text-4xl lg:text-5xl">90%</h1>
                  <h3>More Likely of Attaining Application Success</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sagittis mauris massa, id venenatis dolor congue ac.
                </p>
              </CardContent>
            </Card>
            <Card className="flex flex-col justify-between text-red-600">
              <CardHeader>
                <CardTitle className="text-lg">
                  <h1 className="text-4xl lg:text-5xl">24/7</h1>
                  <h3>Dedicated Customer Service Support</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sagittis mauris massa, id venenatis dolor congue ac.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 text-red-600 text-center px-6 py-8">
        <h1 className="text-4xl text-center font-bold">
          We Serve Clients From
        </h1>
        <div>Companies TBD</div>
        <h1 className="text-2xl text-center font-bold">
          We have helped multiple nationalities
        </h1>
        <h3 className="text-sm">
          Regardless of your country of origin, we will ensure that your chances
          to obtain PR & Citizenship is optimized.
        </h3>
        <div>Countries TBD</div>
      </div>
      <div className="flex flex-col gap-4 bg-red-600 text-white text-center px-6 py-8">
        <h1 className="text-4xl text-center font-bold">Our Testimonials</h1>
        <h3 className="text-sm">
          Hear more from our past clients on their experience with us!
        </h3>
        <div>Testimonials TBD</div>
      </div>
      <Overview />
      <div className="flex justify-center w-full">
        <div className="flex flex-col justify-center items-center gap-12 text-red-600 w-full px-6 py-8">
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-4xl xl:text-5xl text-center font-bold">
              Our Services
            </h1>
            <h3 className="text-sm text-justify">
              At SG Immigrations, we specialize in helping foreigners navigate
              the path to a successful future in Singapore. With expertise in
              all immigration avenues, we work closely with you to identify the
              most suitable option and guide you through the process for a
              smooth and successful outcome.
            </h3>
          </div>
          <div className="flex flex-wrap *:text-center *:h-[240px] md:*:h-[320px] lg:*:h-[400px]">
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center md:text-left w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col items-center md:items-start gap-4 h-full md:pt-12">
                <img
                  src="/Service1.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-xl lg:text-3xl">
                  Singapore Permanent Residences
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center md:text-left w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col items-center md:items-start gap-4 h-full md:pt-12">
                <img
                  src="/Service2.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-xl lg:text-3xl">Singapore Citizenship</h1>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center md:text-left w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col items-center md:items-start gap-4 h-full md:pt-12">
                <img
                  src="/Service3.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-xl lg:text-3xl">
                  <p>Work Passes</p>
                  <p>(WP / S Pass / EP / PEP / ONE Pass)</p>
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center md:text-left w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col items-center md:items-start gap-4 h-full md:pt-12">
                <img
                  src="/Service4.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-xl lg:text-3xl">
                  Long-Term Visit Pass and Dependent's Pass
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center md:text-left w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col items-center md:items-start gap-4 h-full md:pt-12">
                <img
                  src="/Service5.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-xl lg:text-3xl">
                  Global Investor Programme
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-r border-grey text-center md:text-left w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-10 px-4">
              <div className="flex flex-col items-center md:items-start gap-4 h-full md:pt-12">
                <img
                  src="/Service6.png"
                  alt=""
                  className="w-16"
                />
                <h1 className="text-xl lg:text-3xl">
                  Business Relocation Service
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row gap-4 w-full lg:px-6 max-w-screen-lg ">
          <div className="bg-[url(https://a.travel-assets.com/findyours-php/viewfinder/images/res70/542000/542607-singapore.jpg)] bg-center bg-cover bg-no-repeat md:basis-1/2">
            <div className="flex flex-col items-center justify-between h-80 md:h-full p-2"></div>
          </div>
          <div className="flex flex-col items-center gap-4 md:basis-1/2 text-red-600 text-justify px-6 lg:p-0">
            <h1 className="text-2xl lg:text-3xl text-center font-bold">
              Why Singapore?
            </h1>
            <p className="text-xs lg:text-base">
              Singapore, renowned for its modern infrastructure, safety, and
              high quality of life, offers a unique blend of cultural diversity
              and economic opportunity. As a global financial hub with a stable
              political environment, the city-state provides excellent
              healthcare, world-class education, and a low crime rate, making it
              an attractive destination for individuals and families alike.
            </p>
            <p className="text-xs lg:text-base">
              Its strategic location in Asia, combined with efficient public
              services and a thriving job market, caters to foreigners seeking a
              dynamic yet secure place to live and work. Whether for business or
              personal growth, Singapore presents a vibrant, well-rounded
              lifestyle that is hard to match.
            </p>
            <Button className="bg-red-600 text-white border rounded-full max-w-sm h-12">
              Find out more
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-[url(https://img.freepik.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1728864000&semt=ais_hybrid-rr-similar)] bg-center bg-cover bg-no-repeat mt-8">
        <div className="flex flex-col justify-between items-center gap-4 bg-black/65 text-white text-center h-60 p-8">
          <img
            src="/phone.svg"
            alt=""
            className="h-10 w-10"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-lg lg:text-3xl font-bold">
              Have an urgent query?
            </h1>
            <p className="text-xs lg:text-base">
              Drop us a message on WhatsApp and we will get back to you as soon
              as possible!
            </p>
          </div>
          <Button className="bg-green-600 text-white lg:text-base border rounded-full max-w-sm h-12">
            WhatsApp
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
