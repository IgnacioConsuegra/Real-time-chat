import express from "express";
import authRoutes from "../routes/auth.route.js";
import dotenv from "dotenv";
import { connectDB } from "../lib/db.js";
const app = express();

dotenv.config();

// Use PORT from environment, fallback to 5000
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("HI there");
});

app.listen(PORT, () => {
  console.log("Listening on port:", PORT);

  connectDB();
});
