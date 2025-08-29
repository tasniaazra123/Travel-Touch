import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(
    'pk_test_51M7HhrAE9i5fcaIL5kKK9fegOzF7An7AezDA2bMOcCMTOCpBjbbdkLmxM5ct8cjHbzhBXSQ9mHRO0tRqFysgU9Kb00u9YAE2wg'
);

const Payment = () => {
    const booking = useLoaderData();
    const {
        userName,
        img,
        price,
        paidStatus,
        contact,
        orginalProductId,
        email,
        productName,
    } = booking;
    //   console.log(data);
    return (
        <div>
            
          <div className="flex justify-between">
            <div className="ml-24">
            <h3 className="text-3xl text-center">Payment for <span className="text-red-500">{productName}</span></h3>
            <p className="text-xl text-center">Please Pay {price} TK for this Item</p>
            </div>
            <img className="w-24 mr-44" src={img}></img>
          </div>
            <div className="w-96 my-12">
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;