import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <>
      <header className="sticky top-0 bg-orange-500 text-white">
        <div
          className={`flex flex-col gap-4 fixed right-0 bg-white/95 text-orange-500 transition duration-300 ease-in-out ${
            click ? "translate-x-0" : "translate-x-full"
          }
            z-90 w-full h-lvh p-4`}
        >
          <img
            className="ml-auto"
            src="close.svg"
            onClick={() => setClick(!click)}
          />
          <ul className="flex flex-col justify-center items-center gap-4">
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
            <li>Singapore PR</li>
            <li>Our Services</li>
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
        <nav className="flex justify-between p-4 max-w-4xl mx-auto">
          <div>
            <Link
              to="/"
              reloadDocument
            >
              <img
                src="logo.svg"
                alt="Logo"
                className="w-6 h-6 sm:w-12 sm:h-12"
              />
            </Link>
          </div>
          <img
            src="menu.svg"
            onClick={() => setClick(!click)}
            className="sm:hidden"
          />
          <ul className="hidden sm:flex items-center gap-8 font-bold">
            <li>Why Us</li>
            <li>Singapore PR</li>
            <li>Our Services</li>
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
