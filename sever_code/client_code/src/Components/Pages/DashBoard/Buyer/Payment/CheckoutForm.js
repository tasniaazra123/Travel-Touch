import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Cards from 'react-credit-cards';

const CheckoutForm = ({ booking }) => {
    const [cardError, setCardError] = useState("");
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");


    
    const stripe = useStripe();
    const elements = useElements();
    const { price, email, userName, _id, orginalProductId } = booking;

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch(
            "http://localhost:5000/create-payment-intent",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ price }),
            }
        )
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


    const [cardInfo, setCardInfo] = useState({
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: ''
      });
    
      const handleInputFocus = (e) => {
        setCardInfo({ ...cardInfo, focus: e.target.name });
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardInfo({ ...cardInfo, [name]: value });
      }


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        } else {
            setCardError("");
        }
        setSuccess("");
        setProcessing(true);
        const { paymentIntent, error: confirmError } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: email,
                    },
                },
            });

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            console.log("card info", card);

            const updateInfo = {
                bookingID: _id,
                productID: orginalProductId,
            };

            fetch("http://localhost:5000/payments/done", {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updateInfo),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.modifiedCount) {
                        setSuccess("Congrats! your payment completed");
                        setTransactionId(paymentIntent.id);
                    }
                });
        }
        setProcessing(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
        <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button
                    className="btn btn-sm mt-4 btn-primary"
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}
                >
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {success && (
                <div>
                    <p className="text-green-500">{success}</p>
                    <p>
                        Your transactionId:{" "}
                        <span className="font-bold">{transactionId}</span>
                    </p>
                </div>
            )}
            <div className="mt-12 italic">

                <p>Visa	4242424242424242 <br />

                    Visa (debit)	4000056655665556 <br />
                    Mastercard	5555555555554444 <br />
                    American Express	378282246310005 <br />
                </p>
            </div>
        </>
    );
};

export default CheckoutForm;