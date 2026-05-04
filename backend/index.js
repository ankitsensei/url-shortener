import express from "express";
import shorturl from "shorturl";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("App is running on port:", PORT);
});
