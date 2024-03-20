import React from 'react';
import { Link } from 'react-router-dom';

import "./css/header.css"
function Header(){
    return(
        <header>
            <nav>
                <li><Link to="/">Top Products</Link></li>
            </nav>
        </header>
    )
}
export default Header;