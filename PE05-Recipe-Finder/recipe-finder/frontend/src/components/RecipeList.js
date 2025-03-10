import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("https://animated-trout-r4g9pvg49pr7hx96q-5000.app.github.dev/recipes")
            .then((res) => res.json())
            .then((data) => setRecipes(data))
            .catch((error) => console.error("Error fetching recipes:", error));
    }, []);

    return (
        <div className="recipe-container">
            <h2>Recipe List</h2>
            {recipes.length > 0 ? (
                <ul>
                    {recipes.map((recipe) => (
                        <li key={recipe._id}>
                            <Link to={`/recipe/${recipe._id}`}>{recipe.name}</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No recipes found.</p>
            )}
        </div>
    );
};

export default RecipeList;
