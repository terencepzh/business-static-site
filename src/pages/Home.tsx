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
        <div className="grow sm:hidden"></div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 text-orange-500 text-center px-12 py-8">
        <h1 className="text-4xl text-center font-bold">
          Singapore PR & Citizenship Consulting
        </h1>
        <p>
          Your leading consultancy for Singapore immigration advice. Over 20
          years of providing unmatched service and excellence.
        </p>
        <Button className="bg-orange-500 text-white text-md border rounded-full w-full max-w-sm h-12">
          <Link to="/contact-us">Book a consultation now</Link>
        </Button>
      </div>
      <div className="flex flex-col gap-4 bg-orange-500 text-white text-center px-8 py-8">
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
      <div className="flex flex-col gap-12 items-center mx-4">
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
      </div>
    </>
  );
}

export default App;
