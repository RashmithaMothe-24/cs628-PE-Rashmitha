import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
    const [name, setName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecipe = {
            name,
            ingredients: ingredients.split(",").map((item) => item.trim()),
            instructions,
        };

        fetch("https://animated-trout-r4g9pvg49pr7hx96q-5000.app.github.dev/recipes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newRecipe),
        })
            .then(() => navigate("/"))
            .catch((error) => console.error("Error adding recipe:", error));
    };

    return (
        <div className="recipe-container">
            <h2>Add Recipe</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Recipe Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <textarea placeholder="Ingredients (comma-separated)" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
                <textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
                <button type="submit" className="add">Add Recipe</button>
            </form>
        </div>
    );
};

export default AddRecipe;
