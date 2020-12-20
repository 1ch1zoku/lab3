import express from "express";
import mongoose from "mongoose";
import apiRouter from "./api/gasStation";
import controller from "./api/gasStation/controler";

const server = new express();

server.use(express.urlencoded({extended: true}));
server.use(express.json());
server.use("/api/gasStation", apiRouter);


mongoose.connect("mongodb://localhost:27017/usersdb", { useNewUrlParser: true,  useUnifiedTopology: true }).then(() => {
    try {
        server.listen(3000);
        console.log("http://localhost:3000");
    } catch (e) {
        console.error(e);
    }
})
.catch(error => {
    console.error(error);
});

export default controller;