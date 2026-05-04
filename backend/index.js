import express from "express";
import urlRoute from "./routes/url.js";
import { connectToMongoDB } from "./connect.js";
import URL from "./models/url.js";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();

const PORT = process.env.PORT;

connectToMongoDB("mongodb://127.0.0.1:27017/url-shortener ").then(() =>
  console.log("MongoDB Connected"),
);

app.use(express.json());

app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitedHistory: { timestamp: Date.now() },
      },
    },
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
  console.log("App is running on port:", PORT);
});
