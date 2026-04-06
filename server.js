import express from "express";
import { configDotenv } from "dotenv";

const app = express();
app.use(express.json());

app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/records", require("./src/routes/recordRoutes"));
app.use("/api/dashboard", require("./src/routes/dashboardRoutes"));

app.listen(3000, () => console.log("Server running on port 3000"));