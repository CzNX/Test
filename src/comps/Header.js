import logo from "../images/college-logo.png";
import { About, Academics } from "./Nav";
import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div
      className=" 
      md:overflow-visible
      sticky
      top-0
      z-20

    "
    >
      {/* main header section */}

      <section
        className="flex items-center justify-between
      lg:px-10 
h-20
      mb-0 md:mb-5 lg:mb-0
      relative
bg-white


      md:justify-center lg:justify-start md:flex-col lg:flex-row
      "
      >
        {/* left part */}
        <div
          className="flex items-center space-x-3 
      
        "
        >
          <img src={logo} alt="college-logo" className="h-10 ml-5" />
          <div className="m-0 p-0">
            Adarsha Saula
            <p className="-mt-2">College</p>
          </div>
        </div>

        <div
          className="hidden md:m-auto 
        lg:ml-auto lg:mr-0 md:flex space-x-5 whitespace-nowrap
        "
        >
          <p className="navDef">HOME</p>
          <About />
          <p className="navDef">COURSES</p>
          <Academics />
          <p className="navDef">NEWS</p>
          <p className="navDef">EVENTS</p>
          <p className="navDef">GALLERY</p>
          <p className="navDef">CONTACT US</p>
          <p className="navDef">TU NOTICE</p>
        </div>
        {/* mobile menu hamburger */}

        {toggle ? (
          <div>
            <MenuIcon
              onClick={() => setToggle(!toggle)}
              className="h-8 cursor-pointer md:hidden  bg-yellow-700 px-1 
mr-5
active:bg-red-500
text-white rounded-sm"
            />
          </div>
        ) : (
          <div>
            <XIcon
              onClick={() => setToggle(!toggle)}
              className="h-8 cursor-pointer md:hidden  bg-yellow-700 px-1 
  mr-5
  active:bg-red-500
  text-white rounded-sm"
            />
          </div>
        )}

        <div
          className={`flex flex-col bg-gray-600 items-end mr-10 md:hidden space-y-4 
          absolute    
          w-[35%]
          py-5
          pr-5
          -right-10
          z-0
                  transition-all ease-in-out duration-200
          ${toggle ? "top-[-500px]" : "top-20"}
          `}
        >
          <p className="navDef">HOME</p>
          <About adjust />
          <p className="navDef">COURSES</p>
          <Academics adjust />
          <p className="navDef">NEWS</p>
          <p className="navDef">EVENTS</p>
          <p className="navDef">GALLERY</p>
          <p className="navDef">CONTACT US</p>
          <p className="navDef">TU NOTICE</p>
        </div>
      </section>

      {/* mobile nav */}
    </div>
  );
};

export default Header;
