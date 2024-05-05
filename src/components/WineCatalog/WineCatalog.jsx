import React, {useState} from "react";
import './WineCatalog.css'
import WineDetails from "../WineDetails/WineDetails";
import PairingList from "../PairingList/PairingList";

const WineCatalog = () => {
    const wines = [
        {id: 1, name: 'Саперави', region: 'Кахетия', description: 'Красное сухое вино'},
        {id: 2, name: 'Ркацители', region: 'Кахетия', description: 'Белое сухое вино'},
        {id: 3, name: 'Хванчкара', region: 'Имеретия', description: 'Красное полусладкое вино'}
    ]

    const [selectWine, setSelectWine] = useState(null)

    const handleWineClick = (wine) => {
        setSelectWine(wine)
    }

    return (
        <div className="wine-catalog">
            <h2>Каталог вин</h2>
            <ul>
                {wines.map(wine => (
                    <li key={wine.id} onClick={() => handleWineClick(wine)}>
                        <h3>{wine.name}</h3>
                        <p><strong>Регион:</strong> {wine.region}</p>
                        <p><strong>Описание:</strong> {wine.description}</p>
                    </li>
                ))}
            </ul>
            {/*{selectWine && <WineDetails wine={selectWine}/> }*/}
            {selectWine && <WineDetails wine={selectWine}/> }
        </div>
    )
}
export default WineCatalog;
