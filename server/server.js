import "dotenv/config";
import express from "express";
const port = process.env.PORT || 5001;
const app = express();

app.get("/", (req, res) => {
  res.send("API | TICKET");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
