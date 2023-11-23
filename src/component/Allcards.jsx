import React from "react";
import { NavLink } from "react-router-dom";

const Allcards = ({ image, name, id }) => {
    return (
        <li className="all-cards">
            <NavLink to={`/character/${id}`}>
                <img src={image} />
                <p>{name}</p>
            </NavLink>
        </li>
    );
};

export default Allcards;
