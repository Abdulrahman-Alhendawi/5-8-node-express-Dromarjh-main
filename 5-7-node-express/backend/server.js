import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

// Initialize Express app (TODO 1)
const app = express();
const PORT = 3000;

// Note: CORS and routes are implemented in later TODOs

// Start the server
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});

