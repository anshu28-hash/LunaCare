
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to LunaCare API",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    project: "LunaCare",
    message: "LunaCare backend is running!",
  });
});

app.listen(PORT, () => {
  console.log(`LunaCare backend running at http://localhost:${PORT}`);
});
