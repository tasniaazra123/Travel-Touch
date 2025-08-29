import React from "react";
import { Link } from "react-router-dom";
import Categories from "./Categories";

const EachCategory = ({ category }) => {
    console.log(category)
    const { categoryName,productName,Price, img } = category;
    return (
        <div>
            <div>
                <div className="card w-72 h-80 mt-8 shadow-xl ml-20">
                    <figure><img src={img} alt="Product" /></figure>
                    <div className="card-body">
                       
                        <Link to="/Allproducts"  className=" px-4  py-1 lg:py-2 text-sm lg:text-xl font-bold rounded-sm">
                        {categoryName}
            </Link>

                       </div>
                    </div>
                </div>
            </div>
               
    );
};

export default EachCategory;
