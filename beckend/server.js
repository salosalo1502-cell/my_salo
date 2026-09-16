

import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

import express from "express";
import cors from "cors";
import "dotenv/config";
import registerRoutes from "./routes/registerRoutes.js";
import emailRoutes from "./routes/emailRoutes.js";
import consultationRoutes from "./routes/consultationRoutes.js";

import connectDB from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api", emailRoutes);
app.use("/api", consultationRoutes);

app.use("/api", registerRoutes);



app.get("/test", (req, res) => {
  res.json({ ok: true });
});

connectDB();

app.listen(5000, () => {
  
});