import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";
import img1 from "../../../Assets/slider-4.jpg";
import img2 from "../../../Assets/slider-2.jpg";
import img4 from "../../../Assets/slider-1.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="-mt-16 text-center">
      <Carousel autoPlay infiniteLoop >
        <div className="relative">
          <img src={img1} />
          <h1 className="absolute top-12 md:top-32 px-4 py-3 md:pl-36 banner md:font-extrabold font-semibold text-3xl md:text-4xl text-white">
          Discover Your Next <br /> Adventure <br />
            <div className="mt-10">
            <Link to="/Allproducts"  className="click lg:mt-12 mt-4 px-4 lg:px-6 py-1 lg:py-2 text-sm lg:text-xl rounded-sm">
              See Details 
            </Link>
            </div>
          </h1>
        </div>
        <div className="relative">
          <img src={img2} />
          <h1 className="absolute top-12 md:top-32 px-24 py-3 md:ml-96  banner md:font-extrabold font-bold text-3xl md:text-4xl text-white">
            {" "}
            Explore the World with 
            <br /> Travel Touch <br />
            <div className="mt-10">
            <Link to="/Allproducts"  className="click lg:mt-12 mt-4 px-4 lg:px-6 py-1 lg:py-2 text-sm lg:text-xl rounded-sm">
            See Details
            </Link>
            </div>
          </h1>
        </div>

        <div className="relative">
          <img src={img4} />
          <h1 className="absolute top-12 md:top-32 px-4 py-3 md:pl-36 banner md:font-extrabold font-semibold text-3xl md:text-4xl text-white">
          Where Dreams Take <br /> Flight <br />
            <div className="mt-10">
            <Link to="/Allproducts"  className="click lg:mt-12 mt-4 px-4 lg:px-6 py-1 lg:py-2 text-sm lg:text-xl rounded-sm">
            See Details
            </Link>
            </div>
          </h1>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
