import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditRecipe() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({ name: "", ingredients: "", instructions: "" });

    useEffect(() => {
        fetch(`http://localhost:5000/recipes/${id}`)
            .then((res) => res.json())
            .then((data) => setRecipe(data));
    }, [id]);

    const handleChange = (e) => {
        setRecipe({ ...recipe, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch(`http://localhost:5000/recipes/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(recipe),
            });
            navigate("/");
        } catch (error) {
            console.error("Error updating recipe:", error);
        }
    };

    return (
        <div>
            <h2>Edit Recipe</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={recipe.name} onChange={handleChange} required />
                <textarea name="ingredients" value={recipe.ingredients} onChange={handleChange} required />
                <textarea name="instructions" value={recipe.instructions} onChange={handleChange} required />
                <button type="submit">Update Recipe</button>
            </form>
        </div>
    );
}

export default EditRecipe;
