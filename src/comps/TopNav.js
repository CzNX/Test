import { PhoneIcon, MailIcon, MenuIcon } from "@heroicons/react/solid";
import { FaFacebook } from "react-icons/fa";

const TopNav = () => {
  return (
    <section
      className="flex items-center justify-center bg1 h-10 text-white space-x-7  md:justify-evenly px-20  
           
         "
    >
      <span className="flex items-center">
        <PhoneIcon className="h-4 mr-2 text-gray-400" />
        <div className="flex space-x-2">
          <p>01-5173049, </p> <p>9841392403</p>
        </div>
      </span>

      <span className="hidden sm:flex items-center md:flex-grow">
        <MailIcon className="h-5 mr-2 cursor-pointer  text-gray-400 " />
        <span> info@adarshacollege.edu.np</span>
      </span>

      <span className="hidden md:flex ">
        <FaFacebook className="cursor-pointer" />
      </span>
    </section>
  );
};

export default TopNav;
