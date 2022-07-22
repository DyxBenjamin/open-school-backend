import express from "express";
import teachers from "./routes/teachers.routes";

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use('/api/teachers', teachers);

app.get("/", (req, res) => {
  res.send("Welcome to open school api!");
});

app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}!`);
});
