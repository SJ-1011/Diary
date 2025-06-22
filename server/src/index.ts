import express from "express";
import cors from "cors";
import postRoutes from "./routes/posts";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/posts", postRoutes);

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
