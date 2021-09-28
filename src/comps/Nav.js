import { ChevronDownIcon } from "@heroicons/react/solid";
export const About = ({ adjust }) => {
  return (
    <div className="relative group">
      <button className="  uppercase flex  items-center focus:outline-white ">
        <span className="navDef  ">ABOUT</span>
        <span>
          <ChevronDownIcon className="h-5" />
        </span>
      </button>
      <div
        className={`absolute z-10
        ${adjust ? "right-1" : "-left - 7"}
      hidden bg-grey-200 group-hover:block group-focus-within:block active:outline-white `}
      >
        <div className="px-1 w-36  py-1 text-sm bg-gray-200 shadow-lg ">
          <div className=" flex flex-col space-y-3 px-1">
            <a href="#" className="navStyle">
              <p>About Us</p>
            </a>
            <a href="#" className="navStyle">
              <p className="whitespace-normal">Mission & Objectives</p>
            </a>
            <a href="#" className="navStyle">
              <p>Chief's Voice</p>
            </a>
            <a href="#" className="navStyle border-none">
              <p>Our Team</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Academics = ({ adjust }) => {
  return (
    <div className="relative group">
      <button className="  uppercase flex  items-center focus:outline-white">
        <span className="navDef">Academics</span>
        <span>
          <ChevronDownIcon className="h-5" />
        </span>
      </button>
      <div
        className={`absolute z-10 w-36 
                 ${adjust ? "right-1" : "-left - 7"}
      hidden bg-grey-200 group-hover:block group-focus-within:block`}
      >
        <div className="px-2 pt-1 bg-gray-200 shadow-lg ">
          <div className="flex flex-col space-y-2 text-sm">
            <a href="#" className="navStyle">
              <p>BA</p>
            </a>
            <a href="#" className="navStyle">
              <p>BBS</p>
            </a>
            <a href="#" className="navStyle">
              <p>BSW</p>
            </a>
            <a href="#" className="navStyle">
              <p>BED</p>
            </a>
            <a href="#" className="navStyle border-none">
              <p>MBS</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
