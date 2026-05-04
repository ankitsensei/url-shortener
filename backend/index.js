import express from "express";
import urlRoute from "./routes/url.js";
import { connectToMongoDB } from "./connect.js";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();

const PORT = process.env.PORT;

connectToMongoDB("mongodb://127.0.0.1:27017/url-shortener ").then(() =>
  console.log("MongoDB Connected"),
);

app.use(express.json());

app.use("/url", urlRoute);

app.listen(PORT, () => {
  console.log("App is running on port:", PORT);
});
