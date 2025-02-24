import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CitiesList from "./CitiesList";
import AddCity from "./AddCity";
import CityDetails from "./CityDetails";

function App() {
    const [cities, setCities] = useState([]);

    return (
        <Router>
            <div className="app-container">
                <h1>Cities Application</h1>
                <nav>
                    <ul>
                        <li><Link to="/cities">Cities List</Link></li>
                        <li><Link to="/add-city">Add City</Link></li>
                    </ul>
                </nav>

                <div className="content">
                    <Routes>
                        <Route path="/cities" element={<CitiesList cities={cities} />} >
                            <Route path=":id" element={<CityDetails cities={cities} />} />
                        </Route>
                        <Route path="/add-city" element={<AddCity setCities={setCities} />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
