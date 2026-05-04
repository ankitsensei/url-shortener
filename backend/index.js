import express from "express";
import urlRoute from "./routes/url";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();

const PORT = process.env.PORT;
app.urlRoute("/url", urlRoute);

app.listen(PORT, () => {
  console.log("App is running on port:", PORT);
});
