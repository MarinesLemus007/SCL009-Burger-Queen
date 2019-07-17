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
            <li><a href="http://index.js">ORDENES</a></li>
            <li><a href="http://index.js">HISTORIAL</a></li>
        </ul>
    </nav>
</header>

)

export default Navbar