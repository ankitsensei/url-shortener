import shortid from "shortid";
import URL from "../models/url.js";

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortId = shortid();

  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitedHistory: [],
  });

  return res.json({ id: shortId });
}
export { handleGenerateNewShortUrl };
