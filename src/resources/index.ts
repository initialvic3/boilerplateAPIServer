import { Router } from "express";
const rootRouter = Router();

rootRouter.get("/", (req, res) => {
  res.send("API Server");
});

export default rootRouter;
