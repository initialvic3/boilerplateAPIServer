import { Router } from "express";
const rootRouter = Router();

rootRouter.get("/", function(req, res) {
  res.send("API Server");
});

export default rootRouter;
