import React from "react";

const PriceGridDetail = () =>
    <div className="price-grid__detail" data-testid='price-grid__detail'>
        <span className="price-grid__detail-title">Monthly Subscription</span>
        <div className="price-grid__detail-price">
            <span className="price-grid__detail-price-amount">$29 </span>
            <span className="price-grid__detail-price-period">per month</span>
        </div>
        <span className="price-grid__detail-text">Full access for less than $1 a day</span>
        <button className="price-grid__sign-up">Sign Up</button>
    </div>

export default PriceGridDetail