import React from "react";
import './RegionComponent.css'

const RegionComponent = ({regions, onSelectRegion}) => {

    return (
        <div className="region-component">
            <h3>Регионы</h3>
            <ul>
                {regions.map(region => (
                    <li key={region} onClick={() => onSelectRegion(region)}>
                        {region}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RegionComponent