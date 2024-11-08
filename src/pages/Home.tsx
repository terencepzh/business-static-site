import Overview from "@/components/Overview";
import Services from "@/components/Services";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="md:flex justify-evenly items-center">
        <div className="bg-[url('/home.jpg')] bg-no-repeat bg-cover bg-[65%] w-full h-[320px] md:h-[700px]">
          <div className="hidden md:flex flex-col justify-center items-center gap-4 bg-black/45 text-red-600 text-center w-full h-full px-6 py-8">
            <div className="flex flex-col justify-between items-center gap-4 max-w-screen-md h-4/5">
              <h1 className="flex flex-col gap-4 text-5xl lg:text-6xl xl:text-5xl font-bold">
                <p>Singapore's Leading</p>
                <p>Immigration Consultancy</p>
              </h1>
              <h3 className="text-white text-xl drop-shadow-lg">
                Your leading consultancy for Singapore immigration advice. Over
                20 years of providing unmatched service and excellence.
              </h3>
              <p className="text-4xl md:text-5xl text-white text-center font-bold drop-shadow-lg">
                Unlimited Warranty Till Approval!
              </p>
              <Button className="bg-red-600 text-white text-xl border rounded-full w-full max-w-sm h-16">
                <Link to="/contact-us">
                  Book your <span className="text-2xl font-bold">FREE</span>{" "}
                  consultation now
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex md:hidden flex-col justify-between items-center gap-4 text-red-600 text-center w-full px-6 py-8">
          <h1 className="text-4xl xl:text-5xl font-bold">
            Singapore's Leading Immigration Consultancy
          </h1>
          <h3 className="xl:text-lg tracking-wide">
            Your leading consultancy for Singapore immigration advice. Over 20
            years of providing unmatched service and excellence.
          </h3>
          <Button className="bg-red-600 text-white border rounded-full w-full max-w-sm h-12">
            <Link to="/contact-us">
              Book your <span className="text-base font-bold">FREE</span>{" "}
              consultation now
            </Link>
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
        <div className="flex flex-col items-center gap-4 mt-6">
          <h1 className="text-4xl xl:text-5xl text-center font-bold">
            Check your success rate now
          </h1>
          <p className="text-sm xl:text-base">
            Want to know the current state of your application details? Click on
            our free PR & Citizenship quiz below!
          </p>
          <Button className="bg-white text-red-600 text-xl border rounded-full w-full max-w-sm h-12">
            <Link to="/quiz">Free PR & Citizenship Quiz</Link>
          </Button>
        </div>
      </div>
      {/* Nationalities */}
      <div className="flex flex-col justify-center items-center gap-4 text-red-600 text-center px-6 py-8">
        <h1 className="text-4xl lg:text-5xl text-center font-bold">
          We have helped multiple nationalities
        </h1>
        <h3 className="text-sm lg:text-base">
          Regardless of your country of origin, we will ensure that your chances
          to obtain PR & Citizenship is optimized.
        </h3>
        <div>Countries TBD</div>
      </div>
      {/* Testimonials */}
      <div className="flex flex-col gap-4 bg-red-600 text-white text-center px-6 py-8">
        <h1 className="text-4xl text-center font-bold">Our Testimonials</h1>
        <h3 className="text-sm">
          Hear more from our past clients on their experience with us!
        </h3>
        <div>Testimonials TBD</div>
      </div>
      <Overview />
      {/* Services */}
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
          <Services />
        </div>
      </div>
    </>
  );
}

export default App;
