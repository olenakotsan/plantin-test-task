const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/weather", (req, res) => {
  const temperature = Math.floor(Math.random() * 41) - 5;
  res.json({ temperature });
});

app.listen(PORT, () => {
  console.log(`Weather server running on http://localhost:${PORT}`);
});
