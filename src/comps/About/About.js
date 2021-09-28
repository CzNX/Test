import a1 from "../../images/a1.png";
import { FiCheckCircle } from "react-icons/fi";
const About = () => {
  return (
    <div
      className="bg2 p-5 lg:flex
    lg:justify-evenly
    "
    >
      {/* part1 */}
      <div
        className="section1 bg-white shadow-2xl p-5
      lg:w-[40%]
      "
      >
        <p className="text-2xl font-bold mb-5">What Our Students Say? </p>

        <small className="italic text-gray-500">
          Adarsha Saula College teaches students in a very creative way and
          encourages them to achieve their dream. However, the college not only
          helps me to excel in the academic field but also teaches me a lot
          about different cultures and how to appreciate them.
        </small>
        <div className="flex space-x-3 mt-5 p-5">
          <img src={a1} alt="person1" className="h-14" />
          <div className="info">
            <p className="font-semibold">Kushal Shrestha</p>
            <small className="">
              Student <span className="italic ml-3 text-green-500">BSW</span>
            </small>
          </div>
        </div>
      </div>
      {/* part 2 */}
      <div className="section2 lg:w-[50%]">
        <p className="font-bold text-2xl my-5 ">Why Choose Us?</p>
        <div className="sm:grid sm:grid-cols-2 flex-1">
          <div className="italic space-y-4 mb-4 text-sm text-gray-600 font-semibold">
            {LabelGenerator("Low fee structure")}
            {LabelGenerator("Student centered methodology")}
            {LabelGenerator("Regular formative assessment")}
            {LabelGenerator("Student centered methodology")}
            {LabelGenerator("Quality education with better results")}
            {LabelGenerator(
              "Dedicated, qualified and renowned faculty members"
            )}
          </div>
          <div className="italic space-y-4 text-sm text-gray-600 font-semibold">
            {LabelGenerator("Guest lecturers")}
            {LabelGenerator("Well-managed library")}
            {LabelGenerator("Internal assessment system")}
            {LabelGenerator("Audio Visual teaching learning activities")}
            {LabelGenerator("Located in the center of the famous deities")}
            {LabelGenerator(
              "Green, fresh,quiet, and pleasant academic environment"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

export const LabelGenerator = (text) => {
  return (
    <p className="flex items-center gap-2 group">
      <span>
        <FiCheckCircle className="text-xl group-hover:text-green-700" />
      </span>
      {text}
    </p>
  );
};
