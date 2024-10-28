import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function PackageCarousel() {
  return (
    <Carousel className="hidden md:flex justify-center items-center w-[80%] max-w-screen-xl">
      <CarouselContent>
        <CarouselItem
          key="1"
          className="lg:basis-1/2 xl:basis-1/3"
        >
          <div className="flex justify-center p-1">
            <img
              src="/Package1.png"
              alt=""
            />
          </div>
        </CarouselItem>
        <CarouselItem
          key="2"
          className="lg:basis-1/2 xl:basis-1/3"
        >
          <div className="flex justify-center p-1">
            <img
              src="/Package2.png"
              alt=""
            />
          </div>
        </CarouselItem>
        <CarouselItem
          key="3"
          className="lg:basis-1/2 xl:basis-1/3"
        >
          <div className="flex justify-center p-1">
            <img
              src="/Package3.png"
              alt=""
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="xl:hidden" />
      <CarouselNext className="xl:hidden" />
    </Carousel>
  );
}

export default PackageCarousel;
