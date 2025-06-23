import express from "express";
import cors from "cors";
import postRoutes from "./routes/posts";
import commentRoutes from "./routes/comments";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});
