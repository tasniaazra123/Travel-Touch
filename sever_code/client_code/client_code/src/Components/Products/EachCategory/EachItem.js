import React from "react";
import Loading from "../../Others/Loading/Loading";
import useAdmin from "../../Pages/Hooks/UseAdmin";

const EachItem = ({ product, setProductItem }) => {
  const { img, productName, sellerMail, Price } = product;

  const [userInfo, isAdminLoading] = useAdmin(sellerMail);

  if (isAdminLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
            <div>
                <div className="card w-96 h-96 mt-8 shadow-xl">
                    <figure><img className="h-72" src={img} alt="Product" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {productName}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                       <div className="flex">
                       <p className="font-bold">Price: {Price} TK</p>
                        <div className="card-actions justify-end">
        
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default EachItem;
