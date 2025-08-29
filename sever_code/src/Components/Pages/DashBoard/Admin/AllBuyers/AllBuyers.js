import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AllBuyers = () => {
    const [buyers, setBuyers] = useState([]);
    const [postReviewChange, setpostReviewChnage] = useState({});
    useEffect(() => {
        axios
            .get("http://localhost:5000/lists/buyer")
            .then((res) => setBuyers(res.data));
    }, [postReviewChange]);

    //deleting user
    const handleDeleteBuyer = (buyer) => {
        const confirmDelete = window.confirm(`Delete ${buyer.name} ??`);
        if (!confirmDelete) {
            toast.error("Deletion process canceled by Admin");
            return;
        }
        fetch(
            `http://localhost:5000/users/${buyer._id}`,
            {
                method: "DELETE",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    setpostReviewChnage(Math.floor(Math.random() * 10));
                    toast.success(`Buyer ${buyer.name} deleted successfully`);
                }
            });
    };
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Tourist Name</th>
                            <th>Email</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buyers.map((buyer, i) => (
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{buyer?.name}</td>
                                <td>{buyer?.email}</td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteBuyer(buyer)}
                                        className="px-4 py-2 bg-red-500 text-white hover:bg-red-600"
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

export default AllBuyers;