import React from 'react';
import logo from './logo4.png';

const Navbar = () => (

<header>
    <nav className="menu">
        <ul>
            <li><img src={logo} alt="" /></li>
            <li><a href="http://index.js">MENÚ</a></li>
            <li><a href="http://index.js">COCINA</a></li>
            <li><a href="http://index.js">ORDENES</a></li>
            <li><a href="http://index.js">HISTORIAL</a></li>
        </ul>
    </nav>
</header>

)

export default Navbar