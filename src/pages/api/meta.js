// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { url } = req.query;
  if (url) {
    try {
      const webpage = await fetch(url);
      const source = await webpage.text();
      res.status(200).json({ source });
    } catch (err) {
      res.status(200).json({ error: err.message });
    }
  } else {
    res.status(200).json({ error: "Please provide url" });
  }
}
