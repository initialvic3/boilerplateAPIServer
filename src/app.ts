require("dotenv").config({ path: __dirname + "/.env" });
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rootRouter from "./resources";

console.log("NODE_ENV:" + process.env.NODE_ENV);
const app = express();
const PORT = process.env.PORT || 8080;

//Setup global config and middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(rootRouter);

//Listen to incoming requests
app.listen(PORT, () =>
  console.log(`App listening on port:${PORT}, press Ctrl + C to exit.`)
);
