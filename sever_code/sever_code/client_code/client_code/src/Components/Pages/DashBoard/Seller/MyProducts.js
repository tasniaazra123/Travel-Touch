import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import Loading from "../../../Others/Loading/Loading";
import { AuthContext } from "../../Context/AuthProvider";


const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const {
        data: myProducts = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await fetch(
                `http://localhost:5000/products/${user?.email}`
            );
            const data = await res.json();
            return data;
        },
    });

    //deleting product
    const handleDeleteProduct = (myProduct) => {
        const confirmDelete = window.confirm(`Delete ${myProduct.productName} ??`);
        if (!confirmDelete) {
            toast.error("Deletion process canceled by seller");
            return;
        }
        fetch(
            `http://localhost:5000/products/${myProduct._id}`,
            {
                method: "DELETE",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(
                        `Product ${myProduct.productName} deleted successfully`
                    );
                }
            });
    };

    //advertise product
    const handleAdvertiseProduct = (myProduct) => {
        const confirmAdvertise = window.confirm(
            `Advertise ${myProduct.productName} ??`
        );
        if (!confirmAdvertise) {
            toast.error("Advertise process canceled by seller");
            return;
        }
        fetch(
            `http://localhost:5000/products/${myProduct._id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ advertised: true }),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success("Advertisement done Successfully");
                }
            });
    };

    if (isLoading) {
        return <Loading></Loading>
    }

    // console.log(myProducts);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Sales Status</th>
                            <th>Advertise</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myProducts.map((myProduct, i) => (
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <img src={myProduct?.img} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{myProduct?.productName}</td>
                                <td>{myProduct?.Price} Taka</td>
                                <td>
                                    {myProduct.sold ? (
                                        <button className="bg-green-600 px-4 text-white  py-2">Sold</button>
                                    ) : (
                                            <button className="bg-yellow-500 text-black px-4 py-2">Unsold</button>
                                    )}
                                </td>
                                <td>
                                    {myProduct.advertised ? (
                                        <button
                                            className={`bg-emerald-800 px-4 text-white rounded-md py-2 ${myProduct.sold && "btn-disabled"
                                                }`}
                                        >
                                            Advertising Now
                                        </button>
                                    ) : (
                                        <button
                                                className={`bg-green-500 px-4 text-black py-2 ${myProduct.sold && "disabled bg-gray-300 text-black pointer-events-none"
                                                    }`}
                                                onClick={() => handleAdvertiseProduct(myProduct)}
                                            >
                                                Make Advertise
                                            </button>

                                    )}
                                </td>
                                <td>
                                    <button
                                        className="bg-red-600 px-4 text-white rounded-md py-2"
                                        onClick={() => handleDeleteProduct(myProduct)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;