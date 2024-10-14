import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Faq from "@/components/Faq";
import About from "@/components/About";
import { Link } from "react-router-dom";

const FAQ = [
  {
    question: "Can you provide examples?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tincidunt erat, a convallis lectus. Praesent iaculis lorem eu mollis.",
  },
  {
    question: "Can you help?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a tincidunt erat, a convallis lectus. Praesent iaculis lorem eu mollis.",
  },
];

const AboutContent = [
  {
    title: "Our Company",
    background:
      "bg-[url(https://media.istockphoto.com/id/1487894858/photo/candlestick-chart-and-data-of-financial-market.jpg?s=612x612&w=0&k=20&c=wZ6vVmbm4BV2JOePSnNNz-0aFVOJZ0P9nhdeOMGUg5I=)] bg-center",
  },
  {
    title: "What we do",
    background:
      "bg-[url(https://t4.ftcdn.net/jpg/02/61/31/83/360_F_261318391_vCfeZxtPmq1tCXFbPuuX0GkzutiVJKM5.jpg)] bg-cover",
  },
  {
    title: "Our locations",
    background:
      "bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Raffles_Place_MRT_station_exit_A_221023.jpg/800px-Raffles_Place_MRT_station_exit_A_221023.jpg)] bg-center",
  },
];

function App() {
  return (
    <>
      <div className="bg-[url(https://media.istockphoto.com/id/1182637714/photo/father-embracing-his-daughter-while-they-walking-into-the-symbolic-ferris-wheel-at-marina.jpg?s=612x612&w=0&k=20&c=u_wTC0aWI8pp1JdrhJWdyUs6vZre73tMykODYih_1EA=)] bg-center bg-no-repeat">
        <div className="flex flex-col items-center justify-between bg-black/20 h-80 p-2"></div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 text-orange-500 text-center px-6 py-8">
        <h1 className="text-4xl text-center font-bold">
          Singapore PR & Citizenship Consulting
        </h1>
        <h3>
          Your leading consultancy for Singapore immigration advice. Over 20
          years of providing unmatched service and excellence.
        </h3>
        <Button className="bg-orange-500 text-white text-md border rounded-full w-full max-w-sm h-12">
          <Link to="/contact-us">Book a consultation now</Link>
        </Button>
      </div>
      <div className="flex flex-col gap-4 bg-orange-500 text-white text-center px-6 py-8">
        <h1 className="text-4xl text-center font-bold">Why SG Immigrations?</h1>
        <p className="text-sm">
          There are countless of immigration consulting firms in Singapore.
          <br />
          Here's why you should choose us.
        </p>
        <Card className="text-orange-500">
          <CardHeader>
            <CardTitle className="text-lg">
              <h1 className="text-4xl ">20+</h1>
              <h3>Years of Immigration Advisory Expertise</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sagittis mauris massa, id venenatis dolor congue ac.
            </p>
          </CardContent>
        </Card>
        <Card className="text-orange-500">
          <CardHeader>
            <CardTitle className="text-lg">
              <h1 className="text-4xl ">90%</h1>
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
        <Card className="text-orange-500">
          <CardHeader>
            <CardTitle className="text-lg">
              <h1 className="text-4xl ">24/7</h1>
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
      <div className="flex flex-col justify-center items-center gap-4 text-orange-500 text-center px-6 py-8">
        <h1 className="text-4xl text-center font-bold">
          We Serve Clients From
        </h1>
        <div>Images</div>
        <h1 className="text-2xl text-center font-bold">
          We have helped multiple nationalities
        </h1>
        <h3 className="text-sm">
          Regardless of your country of origin, we will ensure that your chances
          to obtain PR & Citizenship is optimized.
        </h3>
      </div>
      <div className="flex flex-col gap-4 bg-orange-500 text-white text-center px-6 py-8">
        <h1 className="text-4xl text-center font-bold">Our Testimonials</h1>
        <h3 className="text-sm">
          Hear more from our past clients on their experience with us!
        </h3>
      </div>
      {/* <div className="flex flex-col gap-12 items-center mx-4">
        <div className="flex flex-col flex-wrap justify-center items-center gap-4 w-full">
          <h1 className="text-2xl md:text-4xl font-bold pt-12">About Us</h1>
          <About content={AboutContent} />
        </div>
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <h1 className="text-2xl md:text-4xl font-bold">Testimonials</h1>
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-[70%] max-w-sm sm:max-w-2xl xl:max-w-4xl"
          >
            <CarouselContent className="">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="sm:basis-1/2 xl:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="flex flex-col justify-center gap-4 max-w-xl">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            Our Services
          </h1>
          <p>
            Navigating the PR application process in Singapore can be complex,
            but you don't have to do it alone.
          </p>
          <p>
            Our comprehensive suite of services at A1 Immigration Consultancy is
            designed to cater to your specific needs. With our team of
            immigration services experts, we're committed to guiding you through
            each step, ensuring a smooth and successful application journey.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 w-full max-w-xl">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            Frequently Asked Questions
          </h1>
          <Faq content={FAQ} />
        </div>
      </div> */}
      <div className="flex flex-col justify-center items-center gap-12 text-orange-500 text-left px-6 py-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl text-center font-bold">Our Services</h1>
          <h3 className="text-sm text-center">
            We offer a guided pathway to clients and their families who are
            looking to make Singapore their permanent home.
          </h3>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="bg-[url(https://media.licdn.com/dms/image/C4E12AQFXh12hNqf8ug/article-cover_image-shrink_600_2000/0/1520096222164?e=2147483647&v=beta&t=kKIVF8nbSuEvlcU3Pjf1zM_b7sKFMoqkjRdIgcyKzi0)] bg-center w-full">
            <div className="flex flex-col items-center justify-between bg-black/20 h-80 p-2"></div>
            <div className="grow sm:hidden"></div>
          </div>
          <h1 className="text-xl font-bold">Singapore Permanent Residences</h1>
          <p className="text-xs">
            Whether you're an EP or S Pass holder, an international student, or
            seeking PR through spousal or parental ties, our seasoned
            consultants offer personalized guidance tailored to your unique
            circumstances.
          </p>
          <p className="text-xs">
            From eligibility assessment to documentation assistance and
            application strategy, we're committed to maximizing your chances of
            success. Trust our experienced team to navigate the complexities of
            Singapore's immigration landscape with precision and
            professionalism. Let us be your trusted partner in unlocking the
            door to a brighter future in Singapore.
          </p>
          <p className="text-sm font-bold ">
            <u>Find out more</u>
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="bg-[url(https://media.licdn.com/dms/image/C5612AQF6_2Lxw5bF-Q/article-cover_image-shrink_720_1280/0/1596976573441?e=2147483647&v=beta&t=BiIJ34OmZH-FKr7KQbgUBF83TK4iUvkRImLv-ut8m4o)] bg-center w-full">
            <div className="flex flex-col items-center justify-between bg-black/20 h-80 p-2"></div>
            <div className="grow sm:hidden"></div>
          </div>
          <h1 className="text-xl font-bold">Singapore Citizenship</h1>
          <p className="text-xs">
            Embark on your journey to Singapore Citizenship with confidence,
            guided by our expert consulting services. We offer personalised
            guidance tailored to your unique background, from eligibility
            assessment to documentation preparation and application strategy.
          </p>
          <p className="text-xs">
            With our decades of experience and in-depth knowledge of Singapore's
            citizenship requirements and procedures, we're committed to
            maximising your likelihood of success. Trust us to navigate your
            path to Singaporean citizenship with professionalism and expertise.
          </p>
          <p className="text-sm font-bold ">
            <u>Find out more</u>
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="bg-[url(https://static.wixstatic.com/media/b30672_13009e3f098040b4a38078b1d281c55e~mv2.jpg/v1/fill/w_528,h_296,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/b30672_13009e3f098040b4a38078b1d281c55e~mv2.jpg)] bg-center w-full">
            <div className="flex flex-col items-center justify-between bg-black/20 h-72 p-2"></div>
          </div>
          <h1 className="text-xl font-bold">Application Appeal & Diagnosis</h1>
          <p className="text-xs">
            Experiencing a setback in your SC or PR application can be
            discouraging, but at our Singapore immigration agency, we offer
            comprehensive diagnostics for your application. We understand the
            disappointment rejection brings, and our dedicated team is committed
            to analysing your case thoroughly.
          </p>
          <p className="text-xs">
            Experiencing a setback in your SC or PR application can be
            discouraging, but at our Singapore immigration agency, we offer
            comprehensive diagnostics for your application. We understand the
            disappointment rejection brings, and our dedicated team is committed
            to analysing your case thoroughly.
          </p>
          <p className="text-sm font-bold ">
            <u>Find out more</u>
          </p>
        </div>
      </div>
      <div className="bg-[url(https://a.travel-assets.com/findyours-php/viewfinder/images/res70/542000/542607-singapore.jpg)] bg-center bg-cover bg-no-repeat">
        <div className="flex flex-col items-center justify-between h-80 p-2"></div>
      </div>
      <div className="flex flex-col items-center gap-4 text-orange-500 text-left px-6 py-8">
        <h1 className="text-2xl text-center font-bold">Why Singapore?</h1>
        <p className="text-xs">
          Singapore, renowned for its modern infrastructure, safety, and high
          quality of life, offers a unique blend of cultural diversity and
          economic opportunity. As a global financial hub with a stable
          political environment, the city-state provides excellent healthcare,
          world-class education, and a low crime rate, making it an attractive
          destination for individuals and families alike.
        </p>
        <p className="text-xs">
          Its strategic location in Asia, combined with efficient public
          services and a thriving job market, caters to foreigners seeking a
          dynamic yet secure place to live and work. Whether for business or
          personal growth, Singapore presents a vibrant, well-rounded lifestyle
          that is hard to match.
        </p>
        <Button className="bg-orange-500 text-white text-md border rounded-full max-w-sm h-12">
          Find out more
        </Button>
      </div>
      <div className="bg-[url(https://img.freepik.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1728864000&semt=ais_hybrid-rr-similar)] bg-center bg-cover bg-no-repeat">
        <div className="flex flex-col justify-between items-center gap-4 bg-black/65 text-white text-center h-60 p-8">
          <img
            src="phone.svg"
            alt=""
            className="h-10 w-10"
          />
          <div className="flex flex-col gap-2">
            <h1 className="text-lg font-bold">Have an urgent query?</h1>
            <p className="text-xs">
              Drop us a message on WhatsApp and we will get back to you as soon
              as possible!
            </p>
          </div>
          <Button className="bg-green-600 text-white text-md border rounded-full max-w-sm h-12">
            WhatsApp
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
