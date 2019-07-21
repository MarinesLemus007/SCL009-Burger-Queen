import React from 'react';
import logo from './img/logo.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const Navbar = () => (

    

<header>
    <nav className="menu-nav-row">
        <div className="menu-left-col">
            <img className="menu-icon" src={logo} alt="logo" />
        </div>
        <div className="menu-center-col">
            <ul className="menu-ul-row">
                <li className="menu-ul"><Link to="/">MENÚ</Link></li>
                <li className="menu-ul"><Link to="/Kitchen">COCINA</Link></li>
                <li className="menu-ul"><Link to="/">ORDENES</Link></li>
                <li className="menu-ul"><Link to="/">HISTORIAL</Link></li>
            </ul>
        </div>
        <div className="menu-right-col">
        </div>
    </nav>
</header>

)

export default Navbar