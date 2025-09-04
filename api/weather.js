export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "GET") {
    const temperature = Math.floor(Math.random() * 41) - 5;
    res.status(200).json({
      temperature,
      timestamp: new Date().toISOString(),
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
