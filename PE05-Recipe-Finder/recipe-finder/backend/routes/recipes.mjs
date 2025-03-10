import express from "express";
import { db } from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// Debugging Message
console.log("📌 Recipes route is being registered!");

// Get all recipes
router.get("/", async (req, res) => {
    console.log("📌 GET request received at /recipes");
    try {
        const recipesCollection = db.collection("recipes");
        const recipes = await recipesCollection.find({}).toArray();
        res.json(recipes);
    } catch (error) {
        console.error("❌ Error retrieving recipes:", error);
        res.status(500).json({ message: "Error retrieving recipes" });
    }
});

// Add a new recipe
router.post("/", async (req, res) => {
    console.log("📌 POST request received at /recipes");
    console.log("📌 Request Body:", req.body);
    try {
        const recipesCollection = db.collection("recipes");
        const result = await recipesCollection.insertOne(req.body);
        res.status(201).json(result);
    } catch (error) {
        console.error("❌ Error inserting recipe:", error);
        res.status(500).json({ message: "Error adding recipe", error });
    }
});

// Get a recipe by ID
router.get("/:id", async (req, res) => {
    console.log(`📌 GET request for recipe ID: ${req.params.id}`);
    try {
        const recipesCollection = db.collection("recipes");
        const recipe = await recipesCollection.findOne({ _id: new ObjectId(req.params.id) });

        if (!recipe) return res.status(404).json({ message: "Recipe not found" });

        res.json(recipe);
    } catch (error) {
        console.error("❌ Error retrieving recipe:", error);
        res.status(500).json({ message: "Error retrieving recipe" });
    }
});

// Update a recipe
router.put("/:id", async (req, res) => {
    console.log(`📌 PUT request for recipe ID: ${req.params.id}`);
    try {
        const recipesCollection = db.collection("recipes");
        const result = await recipesCollection.updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        );

        if (result.matchedCount === 0) return res.status(404).json({ message: "Recipe not found" });

        res.json({ message: "Recipe updated successfully" });
    } catch (error) {
        console.error("❌ Error updating recipe:", error);
        res.status(500).json({ message: "Error updating recipe" });
    }
});

// Delete a recipe
router.delete("/:id", async (req, res) => {
    console.log(`📌 DELETE request for recipe ID: ${req.params.id}`);
    try {
        const recipesCollection = db.collection("recipes");
        const result = await recipesCollection.deleteOne({ _id: new ObjectId(req.params.id) });

        if (result.deletedCount === 0) return res.status(404).json({ message: "Recipe not found" });

        res.json({ message: "Recipe deleted successfully" });
    } catch (error) {
        console.error("❌ Error deleting recipe:", error);
        res.status(500).json({ message: "Error deleting recipe" });
    }
});

export default router;
