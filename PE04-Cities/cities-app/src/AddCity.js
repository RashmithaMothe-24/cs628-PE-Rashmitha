import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddCity({ setCities }) {
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [population, setPopulation] = useState("");
    const navigate = useNavigate();

    const handleAddCity = () => {
        if (!name || !country || !population) {
            alert("Please fill out all fields");
            return;
        }

        const newCity = {
            id: Date.now(),
            name,
            country,
            population,
        };

        setCities((prevCities) => [...prevCities, newCity]);
        navigate("/cities"); // Redirects after adding city
    };

    return (
        <div className="add-city-container">
            <h2>Add City</h2>
            <input
                type="text"
                placeholder="City Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
            />
            <input
                type="number"
                placeholder="Population"
                value={population}
                onChange={(e) => setPopulation(e.target.value)}
            />
            <button onClick={handleAddCity}>Add City</button>
        </div>
    );
}

export default AddCity;
