import React, { useEffect, useState } from "react";

const RecordList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://animated-trout-r4g9pvg49pr7hx96q-5000.app.github.dev/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error("Error fetching recipes:", error));
  }, []);

  return (
    <div>
      <h1>Recipe List</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecordList;
