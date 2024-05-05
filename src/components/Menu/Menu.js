import React from "react";
import './Menu.css'

const Menu = ({setActiveMenu}) => {
    return (
        <div className="menu">
            <ul>
                <li onClick={() => setActiveMenu('catalog')}>Каталог вин</li>
                <li onClick={() => setActiveMenu('search')}>Поиск</li>
                {/* Добавьте здесь другие пункты меню по необходимости */}
            </ul>
        </div>
    );
}

export default Menu;
