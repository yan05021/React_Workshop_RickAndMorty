import React, { useState, useEffect } from "react";
import Allcards from "../Allcards";

const HomePage = () => {
    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState("...");
    useEffect(() => {
        //appel API avec fetch
        fetch("https://rickandmortyapi.com/api/character")
            .then((response) => response.json())
            .then((dataApi) => setData(dataApi.results))
            .catch((err) => console.log(err));
    }, []);
    console.log(data);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        console.log(event.target.value);
    };

    return (
        <>
            <div className="home-page">
                <select className="home-page_select" onChange={handleChange}>
                    <option>...</option>
                    {data.map((element) => (
                        <option key={element.id}>{element.name}</option>
                    ))}
                </select>

                <ul className="home-page_ul">
                    {data
                        .filter(
                            (element) =>
                                selectedValue === "..." ||
                                selectedValue === element.name
                        )
                        .map((element) => {
                            return (
                                <Allcards
                                    key={element.id}
                                    id={element.id}
                                    image={element.image}
                                    name={element.name}
                                />
                            );
                        })}
                </ul>
            </div>
        </>
    );
};

export default HomePage;
