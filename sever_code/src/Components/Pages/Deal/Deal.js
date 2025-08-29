import React from "react";
import sales from "../../../Assets/Backpacking-in-Bangladesh-00009.jpg";
import Timer from "./Timer";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const Deal = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-0 bg-[#F3F2EE] py-14 md:py-32 px-5">
      <div className="md:pl-20 my-auto flex flex-col text-3xl font-semibold gap-8 cursor-pointer">
        <div className="text-[#B7B7B7] font-normal"><Link to='/allproducts/clothing'> "Unlock Today's Hottest Bargains Now!"</Link></div>
        <div><Link to='/allproducts'>"Get It Now: Today's Deals Are On Fire!"</Link></div>
        <div className="text-[#B7B7B7] font-normal"><Link to='/allproducts/earphone'>"Hurry! Today's Hot Offers Are Melting Away!"</Link></div>
      </div>
      <div className="relative mt-10">
        <img src={sales} alt="" />
        
      </div>
      <div className="mt-20 ml-12">
        <div className="text-red-600 font-bold">DEAL OF THE WEEK</div>
        <br />
        <div className="text-3xl font-semibold">
        Exclusive offer! <span className="text-red-500 font-bold">25% OFF</span>
        </div>
        <br />
        <div>
          <Timer givenTime={1814400000}></Timer>
        </div>
        <div><br />
  <Link to='/allproducts'>
  <button className="btn click rounded-none shop-btn text-black bg-transparent hover:bg-transparent z-[100]">
            More Details  &nbsp;<BsArrowRight />
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Deal;