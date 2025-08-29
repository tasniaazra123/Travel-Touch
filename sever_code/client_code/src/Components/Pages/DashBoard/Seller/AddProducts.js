import React, { useContext } from "react";
import toast from "react-hot-toast";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
const AddProduct = () => {
    const { user } = useContext(AuthContext);
    const date = format(new Date(), "PP");
    const navigate = useNavigate();
    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const categoryName = form.categoryName.value;
        const Seller = form.name.value;
        const img = form.img.value;
        const Price = form.Price.value;
        const sellerMail = form.email.value;
        const sold = false;
        const advertised = false;
        const reported = false;
        const description = form.description.value;

        const product = {
            productName,
            categoryName,
            img,
           
            Price,
          
            sellerMail,
            sold,
            advertised,
            reported,
            description,
            Seller
        };

        console.log(product);

        fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.acknowledged) {
                    toast.success("Product Added Successfully");
                    navigate("/dashboard/myproducts");
                } else {
                    toast.error(data.message);
                }
            });
    };
    return (
        <>
            <div className="">
                <h2 className="my-5 text-center text-3xl font-semibold">
                    Add a Place
                </h2>
                <div className="card rounded-lg">
                    <form
                        onSubmit={handleAddProduct}
                        className="grid grid-cols-1 gap-3 mt-10 w-96 ml-56"
                    >
                        <input
                            name="productName"
                            type="text"
                            placeholder="Place Name"
                            className="input w-full input-bordered px-2 rounded-md py-1 bg-white"
                        />
                        <select
                            className="select select-bordered w-full px-2 rounded-md py-1 bg-white"
                            defaultValue={"Category"}
                            name="categoryName"
                        >
                            <option disabled value="Category">
                                Category
                            </option>
                           
                            <option value="Beach Destinations">Beach Destinations</option>
                            <option value="Mountain Retreats">Mountain Retreats</option>
                            <option value="City Escapes">City Escapes</option>
                            <option value="Island Getaways">Island Getaways</option>
                            <option value="Historic Marvels">Historic Marvels</option>
                            <option value="Wildlife Expeditions">Wildlife Expeditions</option>
                            <option value="Nature Escapes">Nature Escapes</option>
                        </select>

                        <input
                            name="img"
                            type="text"
                            placeholder="Image URL"
                            className="input w-full input-bordered px-2 rounded-md py-1 bg-white"
                        />

                       

                       
                        <input
                            name="Price"
                            type="text"
                            placeholder=" Price"
                            className="input w-full input-bordered px-2 rounded-md py-1 bg-white"
                        />
                       
                        
                        <input
                            name="email"
                            type="email"
                            defaultValue={user?.email}
                            disabled
                            placeholder="Email Address"
                            className="input w-full input-bordered px-2 rounded-md py-1 bg-white"
                        />
                        <input
                            name="name"
                            type="name"
                            defaultValue={user?.displayName}
                            disabled
                            placeholder="Email Address"
                            className="input w-full input-bordered px-2 rounded-md py-1 bg-white"
                        />
                    
                        <input
                            name="description"
                            type="text"
                            placeholder="Description"
                            className="input w-full input-bordered px-2 rounded-md py-1 bg-white"
                        />

                        <input
                            className="bg-emerald-800 px-4 text-white rounded-md py-2 mb-12"
                            type="submit"
                            value="Submit"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddProduct;