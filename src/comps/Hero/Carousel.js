import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as Ca } from "react-responsive-carousel";

import i1 from "../../images/i1.jpg";
import i2 from "../../images/i2.jpg";
import i3 from "../../images/i3.jpg";

const Carousel = () => {
  const ovelayer = (text) => {
    return (
      <div
        className="hidden md:flex absolute label px-32 py-7 
    top-80
    left-10
    z-50
  text-white
  anime"
      >
        <p>{text}</p>
      </div>
    );
  };
  return (
    // <div className="relative">
    <Ca
      autoPlay
      emulateTouch
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      // showArrows={false}
      dynamicHeight
      autoFocus
      useKeyboardArrows
      className=" mb-10 "
    >
      <div className="relative ">
        <img src={i1} className="object-cover  h-60 md:h-full" />
        {ovelayer("Cultural Programme ")}
      </div>
      <div className="relative">
        <img src={i2} className="object-cover h-60 md:h-full" />
        {ovelayer("Welcome To Adarsha Saula College")}
      </div>
      <div className="relative ">
        <img src={i3} className="object-cover h-60 md:h-full" />
        {ovelayer("Prize Distribution")}
      </div>
    </Ca>
    // </div>
  );
};

export default Carousel;
