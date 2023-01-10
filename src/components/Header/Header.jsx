import "./header.css"

export function Header () {


return (
    <header className="header">
        <div className="container header__container">
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <a className="header__nav-link" href="#">Блог</a>
                    </li>

                    <li className="header__nav-item">
                        <a className="header__nav-link" href="#">Работы</a>
                    </li>

                    <li className="header__nav-item">
                        <a className="header__nav-link" href="#">Контакты</a>
                    </li>
                </ul>
            </nav>

            <input className="header__search-input" type="text" placeholder="Поиск"/>
        </div>
    </header>
)
}

