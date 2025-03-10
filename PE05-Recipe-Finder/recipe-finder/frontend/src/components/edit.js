import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({ name: "", ingredients: "", instructions: "" });

  useEffect(() => {
    fetch(`https://YOUR_BACKEND_URL/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error("Error fetching recipe:", error));
  }, [id]);

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`https://animated-trout-r4g9pvg49pr7hx96q-5000.app.github.dev/recipes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe),
    });
    alert("Recipe Updated!");
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={recipe.name} onChange={handleChange} required />
        <input type="text" name="ingredients" value={recipe.ingredients} onChange={handleChange} required />
        <textarea name="instructions" value={recipe.instructions} onChange={handleChange} required />
        <button type="submit">Update Recipe</button>
      </form>
    </div>
  );
};

export default Edit;
