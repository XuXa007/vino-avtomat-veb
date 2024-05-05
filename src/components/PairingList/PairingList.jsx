import React from "react";
import './PairingList.css'

const PairingList = ({pairings}) => {
    return (
        <div className="pairing-list">
            <h3>Рекомендации по сочетанию</h3>
            <ul>
                {pairings.map(pairing => (
                    <li key={pairing.id}>
                        <strong>{pairing.wine}</strong> - {pairing.food}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PairingList
