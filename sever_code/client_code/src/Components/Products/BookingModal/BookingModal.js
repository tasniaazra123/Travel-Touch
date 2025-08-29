import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Pages/Context/AuthProvider";


const BookingModal = ({ productItem, setProductItem }) => {
    const { user } = useContext(AuthContext);
    const {
        _id,
        img,
        productName,
        Price,
    } = productItem;

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const Price = form.price.value;
        const email = form.email.value;
        const contact = form.phone.value;
        const date = form.meetingDate.value;
console.log(Price)
        const booking = {
            orginalProductId: _id,
            img,
            userName: name,
            email,
            productName,
            price: Price,
            contact,
            date,
            paidStatus: false,
        };

        fetch("http://localhost:5000/booking", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(booking),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                if (data.acknowledged) {
                    setProductItem(null);
                    toast.success("Booking confirmed");
                } else {
                    toast.error(data.message);
                }
            });
    };
    return (
        <>
            <input type="checkbox" id="bookingModal" className="modal-toggle" />
            <div className="modal rounded-lg">
                <div className="modal-box w-72 lg:w-full rounded-md overflow-y-hidden">
                    <label
                        onClick={() => setProductItem(null)}
                        htmlFor="bookingModal"
                        className="btn btn-sm btn-circle absolute right-2 top-2 text-white"
                    >
                        ✕
                    </label>
                    <form
                        onSubmit={handleBooking}
                        className="grid grid-cols-1 gap-3 mt-10"
                    >
                        <input
                            name="name"
                            type="text"
                            defaultValue={user?.displayName}
                            disabled
                            placeholder="Your Name"
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
                            name="itemName"
                            type="text"
                            defaultValue={productName}
                            disabled
                            placeholder="itemName"
                            className="input w-full input-bordered px-2 rounded-md py-1 bg-white"
                        />
                        <input
                            name="price"
                            type="text"
                            defaultValue={Price}
                            disabled
                            placeholder="price"
                            className="input w-full input-bordered px-2 rounded-md py-1 bg-white"
                        />
                        <input
                            name="phone"
                            type="text"
                            placeholder="Phone Number"
                            className="input w-full input-bordered px-2 rounded-md py-1 bg-white"
                        />
                        <input
                            name="meetingDate"
                            type="Date"
                            placeholder="Date of travel"
                            className="input w-full input-bordered px-2 rounded-md py-1 bg-white"
                        />

                        <div className="modal-action">
                            <label htmlFor="bookingModal" className="w-full">
                                <input
                                    className="btn w-full mb-4 bg-emerald-800 px-4 py-2 rounded-md text-white"
                                    type="submit"
                                    value="Submit"
                                />
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;