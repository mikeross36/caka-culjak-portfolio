import React, {useState, useEffect} from "react";
import logo from "../../images/portfolio-logo.svg"
import { links } from "./data"
import closeBtn from "../../images/close-icon.svg"
import menuBtn from "../../images/menu-icon.svg"

const Header = () => {
    const [showMobMenu, setShowMobMenu] = useState(false)
    const [scrollHeader, setScrollHeader] = useState(false)

    useEffect(() => {
        window.onscroll = () => {
            if (window.scrollY >= 40) {
                setScrollHeader(true)
            }
            else {
                setScrollHeader(false)
            }
        }
    },[])

    const toggleMobMenu = () => {
        setShowMobMenu(!showMobMenu)
    }

    const closeMobMenu = () => {
        setShowMobMenu(false)
    }
    return (
        <header className={`header ${scrollHeader && "scroll-header"}`} id="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo">
                    <img src={logo} alt="logo icon" width="50px"height="50px"/>
                </a>
                <div className={`nav__menu ${showMobMenu && "show-menu"}`}>
                    <ul className="nav__list">
                        {links.map(link => {
                            const { id, url, text } = link;
                            return (
                                <li key={id} className="nav__item" onClick={closeMobMenu}>
                                    <a href={url} className="nav__link">{text}</a>
                                </li>
                            )
                        })}
                    </ul>
                    <button className="nav__close" onClick={closeMobMenu}>
                        <img src={closeBtn} alt="close btn" width="50px" height="50px"/>
                    </button>
                </div>
                <button className="nav__toggle" onClick={toggleMobMenu}>
                    <img src={menuBtn} alt="menu toggle btn" width="40px" height="40px"/>
                </button>
            </nav>
        </header>
    )
}

export default Header;