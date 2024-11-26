import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [pr, setPr] = useState(false);
  const [service, setService] = useState(false);
  return (
    <>
      <header className="sticky top-0 bg-white text-red-600 z-90">
        {/* Mobile */}
        <div
          className={`flex lg:hidden flex-col gap-4 fixed right-0 bg-white/95 text-red-600 transition duration-300 ease-in-out ${
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
            <li
              className="flex gap-2 items-center text-black"
              onClick={() => setPr(!pr)}
            >
              Singapore PR <ChevronDownIcon className="h-4 w-4" />
            </li>
            <ul
              className={`${
                pr ? "flex" : "hidden"
              } flex-col gap-4 items-center bg-gray-200 rounded-lg text-base p-4`}
            >
              <li>
                <Link
                  to="/singapore-pr"
                  reloadDocument
                >
                  Singapore PR Overview
                </Link>
              </li>
              <li>
                <Link
                  to="/pr-application-rejection"
                  reloadDocument
                >
                  PR Application Rejection
                </Link>
              </li>
              <li>
                <Link
                  to="/spouse-pr-application"
                  reloadDocument
                >
                  Spouse PR Application
                </Link>
              </li>
              <li>
                <Link
                  to="/parent-pr-application"
                  reloadDocument
                >
                  Parent PR Application
                </Link>
              </li>
              <li>
                <Link
                  to="/ep-holder-pr-application"
                  reloadDocument
                >
                  PR Application for EP Holders
                </Link>
              </li>
              <li>
                <Link
                  to="/sp-holder-pr-application"
                  reloadDocument
                >
                  PR Application for SP Holders
                </Link>
              </li>
              <li>
                <Link
                  to="/student-pr-application"
                  reloadDocument
                >
                  PR Application for EP Students
                </Link>
              </li>
            </ul>
            <li
              className="flex gap-2 items-center text-black"
              onClick={() => setService(!service)}
            >
              Our Services <ChevronDownIcon className="h-4 w-4" />
            </li>
            <ul
              className={`${
                service ? "flex" : "hidden"
              } flex-col gap-4 items-center text-center bg-gray-200 rounded-lg text-base p-4`}
            >
              <li>
                <Link
                  to="/our-services"
                  reloadDocument
                >
                  Services Overview
                </Link>
              </li>
              <li>
                <Link
                  to="/singapore-citizenship"
                  reloadDocument
                >
                  Singapore Citizenship
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
                  to="/work-passes"
                  reloadDocument
                >
                  Work Pass Application
                </Link>
              </li>
              <li>
                <Link
                  to="/ltv-dependent-pass"
                  reloadDocument
                >
                  Long-Term Visit Pass & Dependant's Pass
                </Link>
              </li>
              <li>
                <Link
                  to="/student-pass"
                  reloadDocument
                >
                  Student Pass Application
                </Link>
              </li>
              <li>
                <Link
                  to="/business-relocation-service"
                  reloadDocument
                >
                  Business Relocation Programme
                </Link>
              </li>
              <li>
                <Link
                  to="/global-investor-programme"
                  reloadDocument
                >
                  Global Investor Programme
                </Link>
              </li>
            </ul>
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
        {/* Normal */}
        <nav className="flex justify-between max-w-5xl mx-auto p-4">
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
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex gap-2 text-lg font-bold hover:text-red-600 p-0"
                  >
                    Singapore PR
                    <ChevronDownIcon className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="bg-red-600 text-center text-white text-lg z-90 *:*:w-full w-[200px]"
                >
                  <DropdownMenuItem>
                    <Link
                      to="/singapore-pr"
                      reloadDocument
                    >
                      Singapore PR Overview
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      to="/pr-application-rejection"
                      reloadDocument
                    >
                      PR Application Rejection
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      to="/spouse-pr-application"
                      reloadDocument
                    >
                      Spouse PR Application
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      to="/parent-pr-application"
                      reloadDocument
                    >
                      Parent PR Application
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      to="/ep-holder-pr-application"
                      reloadDocument
                    >
                      PR Application for EP Holders
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      to="/sp-holder-pr-application"
                      reloadDocument
                    >
                      PR Application for SP Holders
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      to="/student-pr-application"
                      reloadDocument
                    >
                      PR Application for Students
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex gap-2 text-lg font-bold hover:text-red-600 p-0"
                  >
                    Our Services
                    <ChevronDownIcon className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="bg-red-600 text-center text-white text-lg z-90 *:*:w-full w-[200px]"
                >
                  <DropdownMenuItem>
                    <Link
                      to="/our-services"
                      reloadDocument
                    >
                      Services Overview
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      to="/singapore-citizenship"
                      reloadDocument
                    >
                      Singapore Citizenship
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      to="/singapore-pr"
                      reloadDocument
                    >
                      Singapore PR
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      to="/work-passes"
                      reloadDocument
                    >
                      Work Pass Application
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      to="/ltv-dependent-pass"
                      reloadDocument
                    >
                      Long-Term Visit Pass & Dependant's Pass
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      to="/student-pass"
                      reloadDocument
                    >
                      Student Pass Application
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      to="/business-relocation-service"
                      reloadDocument
                    >
                      Business Relocation Programme
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link
                      to="/global-investor-programme"
                      reloadDocument
                    >
                      Global Investor Programme
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
            <li>
              <Button className="bg-red-600">
                <Link
                  to="http://wa.me/6589628052?text=Hello!%20I%20recently%20came%20across%20your%20website%20offering%20Singapore%20PR%20and%20Citizenship%20consulting%20services.%20I%20would%20like%20to%20learn%20more%20about%20the%20services%20you%20offer."
                  reloadDocument
                >
                  Whatsapp Us
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
