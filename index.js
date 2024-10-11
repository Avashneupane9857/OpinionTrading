import express from "express";
import route  from "./routes/route";

const app = express();
const port = 3001;
app.use("/app/v0", route);
app.use(express.json());
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
