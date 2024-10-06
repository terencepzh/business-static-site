import { useState } from "react";

function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <>
      <header className="bg-blue-900 text-white">
        <div
          className={`bg-gray-500/90 fixed right-0 transition duration-300 ease-in-out ${
            click ? "translate-x-0" : "translate-x-full"
          }
            z-90 w-[70%] h-lvh p-4`}
        >
          <img
            className="ml-auto"
            src="src/assets/close.svg"
            onClick={() => setClick(!click)}
          />
          <ul className="flex flex-col absolute top-24 gap-4">
            <li>Singapore PR</li>
            <li>Citizenship</li>
            <li>Services</li>
            <li>Why Choose Us</li>
            <li>More</li>
          </ul>
        </div>
        <nav className="flex justify-between p-4 max-w-4xl mx-auto">
          <div>
            <img
              src="src/assets/logo.svg"
              alt="Logo"
            />
          </div>
          <img
            src="src/assets/menu.svg"
            onClick={() => setClick(!click)}
            className="sm:hidden"
          />
          <ul className="hidden sm:flex items-center gap-8 font-bold">
            <li>Singapore PR</li>
            <li>Citizenship</li>
            <li>Services</li>
            <li>Why Choose Us</li>
            <li>More</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
