import React from "react";
import './WineDetails.css'

const WineDetails = ({wine}) => {
    if (!wine) return null;

    return (
        <div className="wine-details">
            <h2>{wine.name}</h2>
            <p><strong>Регион:</strong> {wine.region}</p>
            <p><strong>Описание:</strong> {wine.description}</p>
        </div>
    );
}
export default WineDetails;
