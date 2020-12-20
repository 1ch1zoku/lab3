import {Router} from "express";
import auctionControler from "./controler";

const auctionRouter = new Router();
auctionRouter.get("/", auctionControler.get);
auctionRouter.get("/:id", auctionControler.getById);
auctionRouter.post("/", auctionControler.post);
auctionRouter.delete("/:id",auctionControler.delete);
auctionRouter.patch("/:id", auctionControler.patch);

export default auctionRouter;