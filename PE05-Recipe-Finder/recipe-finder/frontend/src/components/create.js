import React, { useState } from "react";

const Create = () => {
  const [recipe, setRecipe] = useState({ name: "", ingredients: "", instructions: "" });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://animated-trout-r4g9pvg49pr7hx96q-5000.app.github.dev/recipes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(recipe),
    });
    alert("Recipe Added!");
  };

  return (
    <div>
      <h2>Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Recipe Name" onChange={handleChange} required />
        <input type="text" name="ingredients" placeholder="Ingredients" onChange={handleChange} required />
        <textarea name="instructions" placeholder="Instructions" onChange={handleChange} required />
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default Create;
