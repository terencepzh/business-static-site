import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <>
      <header className="sticky top-0 bg-white text-red-600 z-90">
        <div
          className={`flex flex-col gap-4 fixed right-0 bg-white/95 text-red-600 transition duration-300 ease-in-out ${
            click ? "translate-x-0" : "translate-x-full"
          }
            z-90 w-full h-lvh p-4`}
        >
          <img
            className="ml-auto md:w-10"
            src="/close.svg"
            onClick={() => setClick(!click)}
          />
          <ul className="flex flex-col justify-center items-center md:text-xl gap-4">
            <li>
              <Link
                to="/"
                reloadDocument
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/#why-us"
                reloadDocument
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link
                to="/singapore-pr"
                reloadDocument
              >
                Singapore PR
              </Link>
            </li>
            <li>
              <Link
                to="/our-services"
                reloadDocument
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                reloadDocument
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                reloadDocument
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                reloadDocument
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <nav className="flex justify-between max-w-4xl mx-auto p-4">
          <div>
            <Link
              to="/"
              reloadDocument
            >
              <img
                src="/Logo.png"
                alt="Logo"
                className="w-16 sm:w-36"
              />
            </Link>
          </div>
          <img
            src="/menu.svg"
            onClick={() => setClick(!click)}
            className="lg:hidden md:w-[40px]"
          />
          <ul className="hidden lg:flex items-center gap-8 text-lg font-bold">
            <li>Why Us</li>
            <li>
              <Link
                to="/singapore-pr"
                reloadDocument
              >
                Singapore PR
              </Link>
            </li>
            <li>
              <Link
                to="/our-services"
                reloadDocument
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                reloadDocument
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/resources"
                reloadDocument
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                reloadDocument
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
