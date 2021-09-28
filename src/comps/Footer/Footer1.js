import { FaFacebook } from "react-icons/fa";

const Footer1 = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center font-normal text-sm sm:grid xs:grid-cols-2 md:grid-cols-4">
      <div className="fotter1">
        <p>About Adarsha Saula College</p>
        <p>Staff Members</p>
      </div>
      <div className="fotter1">
        <p>All Courses</p>
        <p>Admission</p>
        <p>Photo Gallery</p>
      </div>
      <div className="fotter1">
        <p className="font-bold">Location:</p>
        <p> Latitpur Metropolitan-City-25 </p>
        <p> Sainbu,Lalitpur </p>
        <p> Main Campus </p>
      </div>
      <div className="fotter1 border-r-0">
        <p className="flex flex-col items-center font-bold ">
          FIND US ON:
          <span>
            <FaFacebook className="mt-2 text-2xl cursor-pointer" />
          </span>
        </p>

        <p className="font-bold">CALL US ON:</p>
        <p>01-5173049, 9841392403</p>
      </div>
    </div>
  );
};

export default Footer1;
