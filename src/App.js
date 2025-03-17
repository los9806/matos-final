import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booklist from "./gridlist";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./components/CheckoutForm";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

const stripePromise = loadStripe("pk_test_51QxLkFBw7L9cARkCAmGcDpqO7bIwuM1ZbLCMXmlBGeIKXq1U6UeZrGsPs0TtRc552ZgrulOXFgSMY8EVzBslZu7600FPp1EMWG");

function App() {
    return (
        <Router>
            <Elements stripe={stripePromise}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <div className="greeting">
                                    <h1>Welcome to Denji's Dojo</h1>
                                    <p>
                                        My name is Carlos Matos and this is my domain.<br />
                                        Feel free to look around and snag something you like.
                                    </p>
                                </div>
                                <div className="list">
                                    <ul>
                                        <li><a href="https://example.com/music">Music</a></li>
                                        <li><a href="https://example.com/games">Games</a></li>
                                        <li><a href="https://example.com/programming">Programming</a></li>
                                    </ul>
                                </div>
                                <div className="booklist">
                                    <Booklist />
                                </div>
                                {/* Stripe Checkout Section */}
                                <div className="checkout">
                                    <h2>Complete Your Purchase</h2>
                                    <CheckoutForm />
                                </div>
                            </div>
                        }
                    />
                    <Route path="/success" element={<Success />} />
                    <Route path="/cancel" element={<Cancel />} />
                </Routes>
            </Elements>
        </Router>
    );
}

export default App;
