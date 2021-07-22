const { events } = require("./data.json");

export default function handler(req, res) {
  const evt = events.filter((event) => event.slug === req.query.slug);

  if (req.method === "GET") {
    res.status(200).json(evt);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Methos ${req.method} is not allowed` });
  }
}
