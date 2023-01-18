import "./header.css";
import { NavLink } from "react-router-dom";

export function Header () {


return (
    <header className="header">
        <div className="container header__container">
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <NavLink to="/home" className={({isActive}) => isActive ? "header__nav-link-active header__nav-link" : "header__nav-link"}>Главная</NavLink>
                    </li>

                    <li className="header__nav-item">
                        <NavLink to="/blog" className={({isActive}) => isActive ? "header__nav-link-active header__nav-link" : "header__nav-link"}>Блог</NavLink>
                    </li>

                    <li className="header__nav-item">
                        <NavLink to="/projects" className={({isActive}) => isActive ? "header__nav-link-active header__nav-link" : "header__nav-link"}>Проекты</NavLink>
                    </li>

                    <li className="header__nav-item">
                        <NavLink to="/contacts" className={({isActive}) => isActive ? "header__nav-link-active header__nav-link" : "header__nav-link"}>Контакты</NavLink>
                    </li>
                </ul>
            </nav>

            <input className="header__search-input" type="text" placeholder="Поиск"/>
        </div>
    </header>
)
}

