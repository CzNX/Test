import s1 from "../../images/s1.jpg";
import s2 from "../../images/s2.jpg";
import s3 from "../../images/s3.jpg";
import s4 from "../../images/s4.jpg";
import { ChevronRightIcon } from "@heroicons/react/solid";

const ShowCase = () => {
  return (
    <div className="bg1 p-5 text-white">
      <p className="text-center text-xl py-5">OUR POPULAR COURSES</p>
      <div className="grid space-y-5  sm:space-x-5  sm:grid-cols-2 md:grid-cols-4 ">
        <Box text="BBS" full="Bachelors Of Arts" image={s2} adj />
        <Box text="BA" full="Bachelors Of Business Study" image={s1} />
        <Box text="MBS" full="Bachelors Of Business Study" image={s3} />
        <Box text="BED" full="Bachelors Of Education" image={s4} />
      </div>
    </div>
  );
};

export default ShowCase;

export const Box = ({ text, image, adj, full }) => {
  return (
    <div
      className={`${adj ? "self-end" : ""}
    relative
    group
    cursor-pointer
    `}
    >
      <img
        src={image}
        alt="err"
        className="w-full h-[180px] object-cover     
"
      />
      <p className="bg3 pl-4 py-2 flex cursor-pointer w-full z-10">
        <span className="flex-grow">{text}</span>
        <span>
          <ChevronRightIcon className="h-5 pr-2" />
        </span>
      </p>
      <div className="absolute hidden top-0  h-[82%] w-full over group-hover:flex">
        <p className="pl-4  pt-3 anime2">{full}</p>
      </div>
    </div>
  );
};
