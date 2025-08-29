import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Loading from "../../../Others/Loading/Loading";
import { AuthContext } from "../../Context/AuthProvider";


const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const {
        data: bookings = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["booking"],
        queryFn: async () => {
            const res = await fetch(
                `http://localhost:5000/booking/${user?.email}`
            );
            const data = await res.json();
            // console.log(data)
            return data;
        },
    });

    if (isLoading) {
        return <Loading></Loading>;
      }
      
      if (!Array.isArray(bookings)) {
        return <p>No bookings available.</p>;
      }
      

    //   console.log(bookings);

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
                            <th>Payment Status</th>
                            <th>Make Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, i) => (
                            
                            <tr key={i}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <img src={booking?.img} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{booking?.productName}</td>
                                <td>{booking?.price} Taka</td>
                                <td>
                                    {booking?.paidStatus ? (
                                        <button className="px-4 py-2 bg-green-500 text-white">Paid</button>
                                    ) : (
                                            <button className="px-4 py-2 bg-red-300">Not Paid</button>
                                    )}
                                </td>
                                <td>
                                    {booking?.paidStatus ? (
                                        <button className="px-4 py-2 text-white bg-gray-500 disabled">
                                            Done Payment
                                        </button>
                                    ) : (
                                        <Link
                                                className="px-4 py-2 hover:text-white bg-yellow-500 hover:bg-green-800 "
                                            to={`/dashboard/payment/${booking._id}`}
                                        >
                                            Make Payment
                                        </Link>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;