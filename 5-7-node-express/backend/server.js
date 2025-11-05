import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

// Initialize Express app (TODO 1)
const app = express();
const PORT = 3000;

// Enable CORS so the frontend (running on a different port) can call this API
app.use(cors());

// Define routes
app.get("/", (req, res) => {
	res.send("Welcome to the Quote Generator API");
});

app.get("/api/quote", (req, res) => {
	const quote = getRandomQuote();
	res.json({ quote });
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});

