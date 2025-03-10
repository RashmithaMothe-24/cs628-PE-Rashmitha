import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./db/conn.mjs";
import recipesRouter from "./routes/recipes.mjs";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/recipes", recipesRouter);

app.get("/", (req, res) => {
    res.send("Welcome to the Recipe Finder API!");
});

app.listen(PORT, () => {
    console.log(`✅ Server is running on port: ${PORT}`);
});
