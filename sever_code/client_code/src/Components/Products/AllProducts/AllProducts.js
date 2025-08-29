import React from "react";
import useAdmin from "../../Pages/Hooks/UseAdmin";
import { toast } from "react-hot-toast";
import Loading from "../../Others/Loading/Loading";
const AllServices = ({ product, setProductItem }) => {
    const {
        img,
        productName,
        Price,
        description,
        sellerMail,
    } = product;

    const [userInfo, isAdminLoading] = useAdmin(sellerMail);
    // if (isAdminLoading) {
    //     return <Loading></Loading>
    // }

    const truncateDescription = (desc) => {
        const words = desc.split(" ");
        return words.length > 7 ? words.slice(0, 7).join(" ") + "..." : desc;
    };
    //Report product
    const handleReportProduct = (product) => {
        const confirmReport = window.confirm(`Report ${product.productName} ??`);
        if (!confirmReport) {
            toast.error("Report process canceled by seller");
            return;
        }
        fetch(
            `http://localhost:5000/report/${product._id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ reported: true }),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    // refetch();
                    toast.success("Report done Successfully");
                }
            });
    };
    return (
        <div>
            <div>
                <div className="card w-96 h-96 bg-base-100 shadow-xl">
                    <figure><img className="w-80" src={img} alt="Product" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {productName}
                            {/* <div className="badge badge-secondary">NEW</div> */}
                        </h2>
                        <p>{truncateDescription(description)}</p>
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

                   <div className="flex justify-between">
                   <div className="mx-4">
                        <label
                            htmlFor="bookingModal"
                            onClick={() => setProductItem(product)}
                            className=" click text-center px-4 py-2 rounded-md text-white hover:bg-gray-800 font-semibold">Book Now</label>
                    </div>
                    <div>  <button onClick={() => handleReportProduct(product)}
                        className="border-b border-gray-500 mb-6 mr-4 hover:text-white hover:px-2 hover:bg-gray-600">
                        Report
                    </button>
                    </div>
                   </div>

                </div>

            </div>

        </div>
    );
};

export default AllServices;