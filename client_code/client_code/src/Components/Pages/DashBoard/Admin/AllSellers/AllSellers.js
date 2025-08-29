import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { FaTimes } from "react-icons/fa";
import useAdmin from "../../../Hooks/UseAdmin";
import Loading from "../../../../Others/Loading/Loading";

const AllSellers = () => {
    const [sellers, setSellers] = useState([]);
    const [postReviewChange, setpostReviewChnage] = useState({});
    useEffect(() => {
        axios
            .get("http://localhost:5000/lists/seller")
            .then((res) => setSellers(res.data));
    }, [postReviewChange]);

    //deleting user
    const handleDeleteSeller = (seller) => {
        const confirmDelete = window.confirm(`Delete ${seller.name} ??`);
        if (!confirmDelete) {
            toast.error("Deletion process canceled by Admin");
            return;
        }
        fetch(
            `http://localhost:5000/users/${seller._id}`,
            {
                method: "DELETE",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    setpostReviewChnage(Math.floor(Math.random() * 10));
                    toast.success(`Seller ${seller.name} deleted successfully`);
                }
            });
    };

    //deleting user
    const handleVerifySeller = (seller) => {
        const confirmVerify = window.confirm(`Verify ${seller.name} ??`);
        if (!confirmVerify) {
            toast.error("Verification process canceled by Admin");
            return;
        }
        fetch(
            `http://localhost:5000/sellers/${seller._id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    setpostReviewChnage(Math.floor(Math.random() * 100));
                    toast.success("Verfication done Successfully");
                }
            });
    };
    const [isAdminLoading] = useAdmin();
    if (isAdminLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Seller Name</th>
                            <th>Email</th>
                            <th>Verify Status</th>
                            <th>Make Verify</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {sellers.map((seller, i) => (
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{seller?.name}</td>
                                <td>{seller?.email}</td>
                                <td>
                                    {seller?.sellerVerified ? (
                                        <button className="px-4 py-1 bg-green-600 text-white">Yes</button>
                                    ) : (
                                            <button className="px-4 py-1 bg-yellow-400">No</button>
                                    )}
                                </td>
                                <td>
                                    {seller?.sellerVerified ? (
                                        <button className="px-4 py-1 bg-gray-400 text-white disabled">
                                            Verified
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => handleVerifySeller(seller)}
                                                className="px-4 py-1 bg-yellow-400 hover:bg-yellow-500"
                                        >
                                            Make Verify
                                        </button>
                                    )}
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteSeller(seller)}
                                        className="px-4 py-1 bg-red-600 hover:bg-red-700 text-white"
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

export default AllSellers;