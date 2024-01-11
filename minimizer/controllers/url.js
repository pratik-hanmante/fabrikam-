import nanoid from "nanoid";
import { url } from "../models/url";
import { builtinModules } from "module";

async function handleGenerateNewShortUrl(req, res) {
  const body = req.body;
  if (!URL) return res.status(400).json({ error: "url required" });
  const shortId = nanoId(8);
  await URL.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortId });
}

export { handleGenerateNewShortUrl };
