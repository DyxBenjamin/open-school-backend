import express from "express";
import teachers from "./routes/teachers.routes";


const app = express();
app.use(express.json());
app.use('/api/teachers', teachers);

app.get("/", (req, res) => {
  res.send("Welcome to open school api!");
});

app.listen(3000, () => {
  console.log("Backend listening on port 3000!");
});
