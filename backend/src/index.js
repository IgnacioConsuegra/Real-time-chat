import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "../routes/auth.route.js";
import messageRoutes from "../routes/message.route.js";
import { connectDB } from "../lib/db.js";
import { app, server } from "../lib/socket.js";
import cors from "cors";

dotenv.config();

// Use PORT from environment, fallback to 5000
const PORT = process.env.PORT || 5000;

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ limit: "2mb", extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
  console.log("Listening on port:", PORT);

  connectDB();
});
