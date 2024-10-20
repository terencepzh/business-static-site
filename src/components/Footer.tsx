import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function Footer() {
  return (
    <div className="bg-orange-500 text-white text-sm w-full mt-auto">
      <div className="flex flex-col justify-center items-center gap-4 p-8">
        <div className="flex justify-evenly w-[80%] max-w-sm">
          <img
            src="/instagram.svg"
            alt="Instagram"
          />
          <img
            src="/twitter.svg"
            alt="X"
          />
          <img
            src="/facebook.svg"
            alt="Facebook"
          />

          <img
            src="/linkedin.svg"
            alt="LinkedIn"
          />
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-bold mr-auto md:w-full">
          <h1 className="md:text-2xl xl:text-4xl">
            Bridging you closer to Singapore.
          </h1>
          <Button className="bg-white text-orange-500 border rounded-full w-fit max-w-sm h-10">
            <Link to="/contact-us">Contact Us</Link>
          </Button>
        </div>
        <hr className="border-1 border-white w-full" />
        <div className="text-left md:text-base w-full">
          <p>Email</p>
          <p>Mobile</p>
          <p>Address</p>
        </div>
        <p className="text-center">© 2024 Lennon - All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
