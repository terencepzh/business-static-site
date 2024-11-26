import Overview from "@/components/Overview";
import Quiz from "@/components/Quiz";
import Services from "@/components/Services";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div
        className="md:flex justify-evenly items-center"
        id="home-cover"
      >
        <div className="bg-[url('/home.jpg')] bg-no-repeat bg-cover bg-[65%] w-full">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 bg-black/45 text-white px-6 py-8 lg:pb-40">
            <div className="flex flex-col gap-4 md:gap-8 justify-between items-center md:items-start text-center md:text-left max-w-screen-md">
              <p className="text-red-600 text-3xl font-bold">
                Your Future, Our Mission
              </p>
              <div className="flex flex-col gap-4 text-2xl md:text-4xl lg:text-6xl font-bold">
                <p>YOUR LEADING PR APPLICATION AND IMMIGRATION CONSULTANCY</p>
              </div>
              <h3 className="text-white text-base md:text-xl">
                Turn your dream of living in Singapore into reality with our
                customized PR and immigration consulting services.
              </h3>
              <p className="text-4xl md:text-5xl text-white font-bold drop-shadow-lg">
                Unlimited Warranty Till Approval!
              </p>
              <Button className="bg-red-600 text-white text-lg md:text-xl text-wrap border rounded-full w-full max-w-sm h-16 mt-16">
                <Link
                  to="/contact-us"
                  reloadDocument
                >
                  Book your <span className="text-xl font-bold">FREE</span>{" "}
                  consultation now
                </Link>
              </Button>
            </div>
            <Quiz />
          </div>
        </div>
      </div>
      {/* Statistics */}
      <div className="flex justify-center">
        <div className="lg:flex lg:p-10 max-w-screen-2xl">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 lg:basis-1/2 items-center lg:relative bg-red-600 lg:rounded-l-[2rem] text-white text-center lg:mt-[-150px]">
            <div className="flex flex-col gap-4 items-center lg:items-start lg:text-left px-6 py-8">
              <h1 className="text-4xl xl:text-5xl text-center font-bold">
                Why SG Immigrations?
              </h1>
              <p className="text-sm xl:text-base">
                At SG Immigration, we’re more than just consultants; we’re your
                partners in making Singapore home. We simplify the PR
                application process, guiding you every step of the way with
                expertise and care. With us, each step brings you closer to a
                new beginning, creating a smooth transition for you and your
                family. Let’s turn your dream of life in Singapore into reality,
                together!
              </p>
              <Button className="bg-white text-red-600 text-lg md:text-xl text-wrap border rounded-full w-full max-w-sm h-16">
                <Link
                  to="/contact-us"
                  reloadDocument
                >
                  Book your <span className="text-2xl font-bold">FREE</span>{" "}
                  consultation now
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-0 lg:basis-1/2 justify-center items-start lg:relative bg-white lg:border text-red-600 lg:mt-[-100px] lg:mb-[50px] w-full">
            <div className="flex flex-col gap-2 md:basis-1/2 items-start border-b md:border-r lg:border-0 lg:border-r p-4 py-6 w-full">
              <p className="text-3xl font-bold">Proven Expertise</p>
              <p>
                We specialize in helping expats achieve Singapore PR and
                citizenship, backed by years of successful applications.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:basis-1/2 items-start border-b lg:border-0 p-4 py-6 w-full">
              <p className="text-3xl font-bold">Personalized Service</p>
              <p>
                Every client’s profile is unique, and we tailor our approach to
                match your specific needs and goals.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:basis-1/2 items-start border-b md:border-b-0 md:border-r lg:border-t p-4 py-6 w-full">
              <p className="text-3xl font-bold">
                Meticulous Attention to Detail
              </p>
              <p>
                Citizenship applications are thorough, and we help ensure every
                document is accurate, complete, and up-to-date.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:basis-1/2 items-start lg:border-t p-4 py-6 w-full">
              <p className="text-3xl font-bold">Continuous Support</p>
              <p>
                From initial consultation to final approval, we’re here every
                step of the way, ready to answer questions and provide guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Link to Quiz */}
      <div className="flex flex-col lg:flex-row gap-4 items-center bg-red-600 text-white text-center">
        <div className="flex flex-col items-center gap-4 px-6 py-8 w-full">
          <h1 className="text-4xl lg:text-5xl text-center font-bold">
            Check your success rate now
          </h1>
          <p className="text-sm xl:text-base">
            Want to know the current state of your application details? Click on
            our free PR & Citizenship quiz below!
          </p>
          <Button
            className="bg-white text-red-600 text-xl border rounded-full w-full max-w-sm h-12"
            onClick={() =>
              document
                .getElementById("home-cover")!
                .scrollIntoView({ behavior: "smooth", block: "center" })
            }
          >
            Free PR & Citizenship Quiz
          </Button>
        </div>
      </div>
      {/* We Customise the Immigration Planning For You */}
      <div className="flex flex-col justify-center items-center gap-4 text-red-600 text-center px-6 py-8">
        <h1 className="text-4xl lg:text-5xl text-center font-bold">
          We Customise the Immigration Planning For You
        </h1>
        <div className="flex flex-col md:flex-row gap-4 max-w-screen-lg">
          <Card className="bg-red-600 text-white">
            <CardHeader>
              <img
                src="https://immigrationlab.sg/wp-content/uploads/2024/04/2.png"
                alt=""
                className="rounded-xl"
              />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <p className="text-left text-xl font-bold">
                  Are You a First Time PR Applicant?
                </p>
                <ul>
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick.svg"></img>
                    <p>Keeping up with changing policies</p>
                  </li>
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick.svg"></img>
                    <p>Compiling extensive documentation</p>
                  </li>
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick.svg"></img>
                    <p>Overcoming language barriers</p>
                  </li>
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick.svg"></img>
                    <p>Understanding financial/legal implications</p>
                  </li>
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick.svg"></img>
                    <p>Handling approval process stress</p>
                  </li>
                </ul>
                <Button className="bg-white text-red-600 text-lg md:text-xl text-wrap border rounded-full w-full max-w-sm h-12">
                  <Link
                    to="/contact-us"
                    reloadDocument
                  >
                    Book a consultation
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-red-600 text-white">
            <CardHeader>
              <img
                src="https://immigrationlab.sg/wp-content/uploads/2024/04/1.png"
                alt=""
                className="rounded-xl"
              />
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                <p className="text-left text-xl font-bold">
                  PR Application Being Rejected?
                </p>
                <ul>
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick.svg"></img>
                    <p>Dealing with repeated rejections</p>
                  </li>
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick.svg"></img>
                    <p>Managing an increased volume of paperwork</p>
                  </li>
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick.svg"></img>
                    <p>Struggling with online application systems</p>
                  </li>
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick.svg"></img>
                    <p>Navigating the complexities of reapplication</p>
                  </li>
                  <li className="flex gap-2 items-center text-left">
                    <img src="/tick.svg"></img>
                    <p>Identifying and correcting previous application flaws</p>
                  </li>
                </ul>
                <Button className="bg-white text-red-600 text-lg md:text-xl text-wrap border rounded-full w-full max-w-sm h-12">
                  <Link
                    to="/contact-us"
                    reloadDocument
                  >
                    Book a consultation
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Testimonials */}
      <div className="flex flex-col gap-4 bg-red-600 text-white text-center px-6 py-8">
        <h1 className="text-4xl lg:text-5xl text-center font-bold">
          Our Testimonials
        </h1>
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
      {/* FAQ */}
      <div className="flex flex-col gap-4 text-red-600 text-center px-6 py-8">
        <h1 className="text-4xl lg:text-5xl text-center font-bold">
          Frequently Asked Questions:
        </h1>
        <div className="flex justify-center">
          <Accordion
            type="single"
            collapsible
            className="flex flex-col gap-4 *:*:[&[data-state=open]]:bg-gray-200 w-full max-w-screen-lg"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="[&[data-state=open]]:bg-red-600 [&[data-state=open]]:text-white [&[data-state=open]>svg]:text-white text-left px-4">
                Is it worth it geting an immigration consultant?
              </AccordionTrigger>
              <AccordionContent className="text-left p-4">
                Hiring an immigration agency in Singapore can be extremely
                beneficial, especially in navigating the complex and
                ever-changing immigration landscape. An experienced consultant
                offers personalised guidance, ensuring that your application not
                only meets all legal requirements but also stands out. They can
                prevent common pitfalls and streamline the process,
                significantly enhancing your chances of success and making the
                investment in professional services worthwhile.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="[&[data-state=open]]:bg-red-600 [&[data-state=open]]:text-white [&[data-state=open]>svg]:text-white text-left px-4">
                What do immigration consultants charge?
              </AccordionTrigger>
              <AccordionContent className="text-left p-4">
                The fees charged by immigration consultants can vary widely
                depending on the specifics of your case, the services provided,
                and the consultant’s expertise and reputation. Typically,
                consultants might offer different service tiers, from basic
                application review to full representation, which can range from
                a few hundred to several thousand dollars. It's important to
                discuss fees upfront to understand what services you will
                receive and ensure they align with your needs and budget.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="[&[data-state=open]]:bg-red-600 [&[data-state=open]]:text-white [&[data-state=open]>svg]:text-white text-left px-4">
                How do I choose an immigration consultant?
              </AccordionTrigger>
              <AccordionContent className="text-left p-4">
                Choosing the right immigration agency in Singapore involves
                researching their qualifications, experience, and client
                reviews. Ensure they are legally accredited and have a thorough
                understanding of the immigration laws pertinent to your
                situation. A good consultant should communicate clearly, offer a
                strategic approach tailored to your case, and have a track
                record of successful applications. Compatibility and trust are
                also crucial, as this professional will guide you through
                personal and impactful decisions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="[&[data-state=open]]:bg-red-600 [&[data-state=open]]:text-white [&[data-state=open]>svg]:text-white text-left px-4">
                How long is the processing of PR applications in Singapore?
              </AccordionTrigger>
              <AccordionContent className="text-left p-4">
                The processing time for a Singapore PR application generally
                ranges from six to twelve months, but it can vary based on the
                individual case and the ICA's current processing volume. It’s
                important to ensure that your application is comprehensive and
                accurately filled out to avoid delays. Processing times can also
                fluctuate based on policy changes or application influx, so
                staying informed through your consultant or official channels is
                advisable.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="[&[data-state=open]]:bg-red-600 [&[data-state=open]]:text-white [&[data-state=open]>svg]:text-white text-left px-4">
                Is it difficult to get PR in Singapore?
              </AccordionTrigger>
              <AccordionContent className="text-left p-4">
                Obtaining PR status in Singapore is considered challenging due
                to the high competition and strict selection criteria aimed at
                identifying applicants who can contribute significantly to the
                country’s society and economy. Factors like age, skill set,
                income level, family ties, and integration into the community
                are critically assessed. A well-prepared application that aligns
                with Singapore’s strategic interests has a better chance of
                success.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="[&[data-state=open]]:bg-red-600 [&[data-state=open]]:text-white [&[data-state=open]>svg]:text-white text-left px-4">
                What are the common challenges first-time PR applicants face?
              </AccordionTrigger>
              <AccordionContent className="text-left p-4">
                First-time PR applicants often encounter difficulties such as
                understanding the complex eligibility criteria, gathering and
                compiling the necessary detailed documentation, navigating the
                online application system, and effectively presenting their
                qualifications and personal strengths. Many also find it
                challenging to interpret the legal and procedural nuances of the
                immigration process, which can lead to errors or omissions in
                their application.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger className="[&[data-state=open]]:bg-red-600 [&[data-state=open]]:text-white [&[data-state=open]>svg]:text-white text-left px-4">
                How can I improve my chances of success in a PR reapplication
                after a rejection?
              </AccordionTrigger>
              <AccordionContent className="text-left p-4">
                Improving your chances after a PR application rejection involves
                careful analysis of the reasons for denial, updating and
                strengthening your profile, and ensuring that all information is
                presented accurately and compellingly. Seek feedback, if
                available, and use it to address any deficiencies or gaps in
                your initial application. Consulting with an immigration expert
                can provide crucial insights and guidance on best practices and
                strategies to enhance your reapplication, tailoring it more
                effectively to meet the stringent criteria of the Singapore PR
                process.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default App;
