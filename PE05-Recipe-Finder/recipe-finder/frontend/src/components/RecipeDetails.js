import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const RecipeDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`https://animated-trout-r4g9pvg49pr7hx96q-5000.app.github.dev/recipes/${id}`)
            .then((res) => res.json())
            .then((data) => setRecipe(data))
            .catch((error) => console.error("Error fetching recipe:", error));
    }, [id]);

    const handleDelete = () => {
        fetch(`https://animated-trout-r4g9pvg49pr7hx96q-5000.app.github.dev/recipes/${id}`, { method: "DELETE" })
            .then(() => navigate("/"))
            .catch((error) => console.error("Error deleting recipe:", error));
    };

    if (!recipe) return <p>Loading...</p>;

    return (
        <div className="recipe-container">
            <h2>{recipe.name}</h2>
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <button className="edit" onClick={() => alert("Edit feature coming soon!")}>Edit</button>
            <button className="delete" onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default RecipeDetails;
