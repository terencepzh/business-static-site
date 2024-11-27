import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function Footer() {
  return (
    <div className="bg-red-600 text-white text-sm w-full mt-auto">
      <div className="bg-[url(https://img.freepik.com/free-photo/business-man-financial-inspector-secretary-making-report-calculating-checking-balance-internal-revenue-service-inspector-checking-document-audit-concept_1423-126.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1728864000&semt=ais_hybrid-rr-similar)] bg-center bg-cover bg-no-repeat">
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
          <a href="http://wa.me/6589628052?text=Hello!%20I%20recently%20came%20across%20your%20website%20offering%20Singapore%20PR%20and%20Citizenship%20consulting%20services.%20I%20would%20like%20to%20learn%20more%20about%20the%20services%20you%20offer.">
            <Button className="bg-green-600 text-white lg:text-base border rounded-full max-w-sm h-12">
              WhatsApp
            </Button>
          </a>
        </div>
      </div>
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
          <Button className="bg-white text-red-600 border rounded-full w-fit max-w-sm h-10">
            <Link to="/contact-us">Contact Us</Link>
          </Button>
        </div>
        <hr className="border-1 border-white w-full" />
        <div className="flex flex-col text-left md:text-base w-full">
          <a href="mailto: info@sgimmigrations.com">
            <u>info@sgimmigrations.com</u>
          </a>
          <a href="http://wa.me/6589628052?text=Hello!%20I%20recently%20came%20across%20your%20website%20offering%20Singapore%20PR%20and%20Citizenship%20consulting%20services.%20I%20would%20like%20to%20learn%20more%20about%20the%20services%20you%20offer.">
            <u>+65 89628052</u>
          </a>
          <p>60 Paya Lebar Road (Paya Lebar Square) #07-54,</p>
          <p>Singapore 409051</p>
        </div>
        <p className="text-center">
          © 2024 SG Immigrations - All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
