import Schemes from "@/components/Schemes";
import Services from "@/components/Services";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function OurServices() {
  return (
    <div>
      <Services />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 text-red-600 max-w-screen-xl px-6 py-8 mx-auto">
        <div className="flex flex-col gap-4 mt-4">
          <h1 className="text-4xl lg:text-5xl text-left font-bold w-full">
            Singapore Citizenship Application Made Simple and Clear
          </h1>
          <p className="text-lg">
            Looking to make Singapore your permanent home? Becoming a Singapore
            citizen is a major step forward in solidifying your connection to
            this vibrant country. At SG Immigration, we’re here to streamline
            the citizenship application process, so you can focus on building
            your life here with peace of mind.
          </p>
        </div>
      </div>
      <Schemes />

      <div className="flex justify-center px-6 py-8">
        <div className="bg-[url(https://media-cdn.tripadvisor.com/media/photo-s/18/33/5c/4c/1807-merlion-marinabay.jpg)] bg-[75%] bg-cover bg-no-repeat border rounded-2xl max-w-screen-lg">
          <div className="flex flex-col justify-evenly items-center gap-4 bg-black/45 text-white text-center border rounded-2xl h-[480px] p-8 md:py-16">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
              Find the best scheme for you
            </h1>
            <p className="text-xs md:text-base lg:text-base">
              Whether you're a working professional, investor, student, or
              artist, Assurance Immigration offers expert assistance in
              navigating the administrative processes required for each scheme.
              We specialize in optimizing your applications to maximize your
              chances of success, ensuring you meet all necessary criteria and
              present your case effectively.
            </p>
            <Button className="bg-white text-red-600 lg:text-base border rounded-full md:w-full max-w-sm h-12">
              <Link
                to="/contact-us"
                reloadDocument
              >
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
