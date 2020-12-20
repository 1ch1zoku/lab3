import {Router} from "express";
import auctionRouter from "./auction";

const apiRouter = new Router();

apiRouter.use("/auction", auctionRouter);

export default apiRouter;