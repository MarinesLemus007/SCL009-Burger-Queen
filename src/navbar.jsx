import React from 'react';
import logo from './logo4.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

const Navbar = () => (

<header>
    <nav className="menu">
        <ul>
            <li><img src={logo} alt="" /></li>
            <li><Link to="/">MENÚ</Link></li>
            <li><Link to="/Kitchen">Cocina</Link></li>
            <li><Link to="/">ORDENES</Link></li>
            <li><Link to="/">HISTORIAL</Link></li>
        </ul>
    </nav>
</header>

)

export default Navbar