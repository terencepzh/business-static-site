import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Faq from "@/components/Faq";
import About from "@/components/About";

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
      "bg-[url(https://strategylab.ca/wp-content/uploads/2016/01/Stock-Photos-are-the-worst.jpg)] bg-cover",
  },
  {
    title: "Our locations",
    background:
      "bg-[url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Raffles_Place_MRT_station_exit_A_221023.jpg/800px-Raffles_Place_MRT_station_exit_A_221023.jpg)] bg-center",
  },
];

function App() {
  return (
    <div className="grid grid-rows-1 grid-cols-1">
      <div className="bg-[url(https://st4.depositphotos.com/13194036/20998/i/450/depositphotos_209984430-stock-photo-multicultural-business-people-having-business.jpg)] bg-center bg-no-repeat">
        <div className="flex flex-col items-center justify-between bg-black/60 h-80 p-2">
          <h1 className="hidden sm:flex flex-col items-center text-3xl font-bold text-orange-400">
            <p>Lorem ipsum</p>
            <p className="text-5xl">sit amet consectetur</p>
            <p>dolor adipiscing elit</p>
          </h1>
          <h1 className="sm:hidden text-4xl text-center font-bold text-white mt-2">
            Lorem ipsum sit amet consectetur
          </h1>
          <div className="hidden sm:flex flex-col justify-center items-center text-center text-white grow">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              sagittis mauris massa, id venenatis dolor congue ac.
            </p>
            <p>
              Sed sit amet sapien sollicitudin magna lobortis condimentum. Proin
              maximus mauris mauris, id cursus turpis dignissim eu.
            </p>
          </div>
          <div className="grow sm:hidden"></div>
          <Button className="bg-white text-orange-500 border-2 border-gray-500 rounded-full w-[50%] max-w-sm">
            Enquire Now
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-12 items-center mx-4">
        <div className="flex flex-col flex-wrap justify-center items-center gap-4 w-full">
          <h1 className="text-2xl md:text-4xl font-bold pt-12">About Us</h1>
          <About content={AboutContent} />
          <Button className="bg-orange-500 text-white border-2 border-gray-500 rounded-full w-[95%] max-w-xl py-6 my-8">
            <h1 className="text-lg">Book your Free Consultation!</h1>
          </Button>
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
    </div>
  );
}

export default App;
