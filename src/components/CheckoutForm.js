import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const appearance = {
  theme: "night", // Theme options: 'stripe', 'night', 'flat', 'none'
  variables: {
    colorText: "#ffffff", // Change text color
    colorPrimary: "#ff5733", // Change primary button color
    fontFamily: "Courier New, monospace", // Change font
    borderRadius: "8px",
  },
  rules: {
    ".Input": {
      color: "#ff5733", // Change input text color
      fontSize: "16px",
    },
    ".Label": {
      color: "#ff5733", // Change label color
    },
  },
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!stripe || !elements) return;

    try {
      // Call AWS API Gateway to create a PaymentIntent
      const response = await fetch("https://re15jsf2k2.execute-api.us-east-2.amazonaws.com/prod", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 1000, currency: "usd" }), // Amount in cents
      });

      const { clientSecret } = await response.json();

      // Confirm payment using clientSecret from AWS API Gateway
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (error) {
        setError(error.message);
      } else if (paymentIntent.status === "succeeded") {
        setSuccess(true);
      }
    } catch (err) {
      setError("Payment failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={{ style: appearance }} />
      <button
        type="submit"
        disabled={!stripe || loading}
        style={{ backgroundColor: "#ff5733", color: "#fff", padding: "10px", borderRadius: "8px", border: "none" }}
      >
        {loading ? "Processing..." : "Proceed to Checkout"}
      </button>
      {error && <div style={{ color: "red" }}>{error}</div>}
      {success && <div style={{ color: "green" }}>Payment Successful!</div>}
    </form>
  );
};

export default CheckoutForm;



