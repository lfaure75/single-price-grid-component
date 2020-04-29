import React from "react";
import PriceGridDescription from "./PriceGridDescription";
import PriceGridDetail from "./PriceGridDetail";
import PriceGridCommercial from "./PriceGridCommercial";
import "./PriceGrid.scss"

const PriceGrid = () =>
    <div className="price-grid">
        <PriceGridDescription />
        <PriceGridDetail />
        <PriceGridCommercial />
    </div>;

export default PriceGrid;