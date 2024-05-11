import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import authRoute from "./routes/auth.routes.js";

dotenv.config();

// console.log(process.env.MONGO);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to Mongodb");
  })
  .catch((err) => console.log(err));

const app = express();
app.use(express.json()); // this will allow input to be json
app.get("/", (req, res) => {
  res.send("All Good");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoute);
