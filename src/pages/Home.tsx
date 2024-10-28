import Overview from "@/components/Overview";
import Quiz from "@/components/Quiz";
import Services from "@/components/Services";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="md:flex justify-evenly items-center">
        <div className="bg-[url('/home.jpg')] bg-no-repeat bg-cover bg-[65%] w-full h-[320px] md:h-[640px] lg:h-[960px]"></div>
        <div className="flex flex-col justify-between items-center gap-4 text-red-600 text-center md:text-left md:items-start w-full xl:h-80 px-6 py-8 md:py-6">
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
      <Services />
      <Quiz />
    </>
  );
}

export default App;
