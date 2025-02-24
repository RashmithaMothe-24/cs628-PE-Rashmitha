import React from "react";
import { Link, Outlet } from "react-router-dom";

function CitiesList({ cities }) {
    return (
        <div className="cities-container">
            <h2>Cities List</h2>
            {cities.length > 0 ? (
                <ul>
                    {cities.map((city) => (
                        <li key={city.id}>
                            <Link to={`/cities/${city.id}`}>{city.name}</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No cities added</p>
            )}
            <Outlet />
        </div>
    );
}

export default CitiesList;
