import {
  BsFillPeopleFill,
  BsBookHalf,
  BsFillPersonCheckFill,
} from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import p1 from "../../images/p1.jpg";
const Para = () => {
  return (
    <div className="my-12 h-[1158px] sm:h-[644px] md:h-[362px]">
      <div
        className="bg-fixed relative w-full h-full"
        style={{
          backgroundImage: `url(${p1})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className="h-full w-full  over2 absolute grid sm:grid-cols-2 md:grid-cols-4
          place-items-center
          content-center
          lg:gap-0
          gap-y-14
        "
        >
          <Box Icon={BsFillPeopleFill} text={"STUDENTS"} num={"292"} />
          <Box Icon={BsBookHalf} text={"Courses"} num={"5"} />
          <Box Icon={BsFillPersonCheckFill} text={"Staffs"} num={"38"} />
          <Box Icon={HiOutlineLocationMarker} text={"Location"} num={"1"} />
        </div>
      </div>
    </div>
  );
};

export default Para;

export const Box = ({ Icon, text, num }) => {
  return (
    <div className=" text-white flex flex-col items-center space-y-2">
      <div className="w-28 h-28 rounded-full flex justify-center items-center border">
        <Icon className=" text-4xl " />
      </div>
      <p className="border-b-2 pb-2 border-white text-2xl font-bold">{num}</p>
      <p className="text-2xl">{text}</p>
    </div>
  );
};
