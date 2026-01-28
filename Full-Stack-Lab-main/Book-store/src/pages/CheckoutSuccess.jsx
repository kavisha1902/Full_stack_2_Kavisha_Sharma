import React from 'react';
import { Link } from 'react-router-dom';

export default function CheckoutSuccess() {
    return (
        <div className="checkout-success">
            <div className="success-container">
                <h1>Order Confirmed!</h1>
                <p>Thank you for your purchase.</p>
                <p>A confirmation email has been sent to your inbox.</p>
                <Link to="/" className="btn-primary">
                    Continue Shopping
                </Link>
            </div>
        </div>
    );
}