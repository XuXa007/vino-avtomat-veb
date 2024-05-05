import React, {useState} from "react";
import './App.css';
import WineCatalog from './components/WineCatalog/WineCatalog'
import SearchForm from "./components/SearchForm/SearchForm";
import Menu from "./components/Menu/Menu";
import RegionComponent from "./components/RegionComponent/RegionComponent";
import PairingList from "./components/PairingList/PairingList";

function App() {

    const [activeMenu, setActiveMenu] = useState('catalog');
    const [selectedRegion, setSelectedRegion ] = useState(null)

    const regions = ['Кахетия', 'Имеретия', 'Рача', 'Кутаиси', 'Сванетия'];

    const pairings = [
        { id: 1, wine: 'Саперави', food: 'Жареная баранина' },
        { id: 2, wine: 'Ркацители', food: 'Сыр сулугуни' },
        { id: 3, wine: 'Хванчкара', food: 'Шашлык из свинины' },
        // Добавьте здесь другие рекомендации по сочетанию
    ];

    const handleRegionSelect = (region) => {
        setSelectedRegion(region);
        setActiveMenu('catalog');
    }

    return (
        <div className="app">
            <h1>Приложение о грузинском вине</h1>
            <Menu setActiveMenu={setActiveMenu} />
            {activeMenu === 'catalog' && (
                <>
                    <RegionComponent regions={regions} onSelectRegion={handleRegionSelect} />
                    <WineCatalog region={selectedRegion} />
                </>
            )}
            {activeMenu === 'search' && <SearchForm />}
            <PairingList pairings={pairings} /> {/* Передача данных в компонент "Список рекомендаций по сочетанию" */}
        </div>
    );
}

export default App;
