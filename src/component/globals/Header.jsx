import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="topnav">
            <ul>
                <li>
                    <NavLink to="/">
                        <h2>Home</h2>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">
                        <h2>contact us</h2>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
