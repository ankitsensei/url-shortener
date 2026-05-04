import { nanoid } from "nanoid";
import URL from "../models/url";

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortId = nanoid(8);

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitedHistory: [],
  });

  return res.json({ id: shortId });
}

module.exports = {
  handleGenerateNewShortUrl,
};
