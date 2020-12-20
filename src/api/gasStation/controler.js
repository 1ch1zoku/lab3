import auction from "./model";
import mongoose from "mongoose";


const auctionControler = {
    get: async (req, res) => {
        try {
            
            const result = await auction.find({}).lean()
            let name = " ";
            let starting_price = 0;
            let end_price = 0;
            result.forEach(element => {
                if (element.firm_owner == req.query.f) {
                    name += element.name * 1;
                    starting_price+= element.starting_price * 1;
                    end_price += element.end_price * 1;
                }
            });
            var ress = " Name - " + name.toString() + ", почоткова ціна - " +  starting_price.toString() + ", кінцева ціна - " + end_price.toString();
            if (req.query.f) {
                res.send(ress)
            }
            res.send(result);
            client.close();
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    },
    getById: async (req, res) =>{
        try {
            const auctionStation = await auction.findById(req.params.id);
            if (auction) 
                res.send(auction);
            else
                res.status(404).send("Not Found");             
        }
        catch (error){
            console.error(error);
            res.status(500).send(error);
        }
    },
    delete: async (req, res) =>{
        try {
            const auction = await auction.findByIdAndDelete(req.params.id);
            if (auction) 
                res.send(auction);
            else
                res.status(404).send("Not Found");             
        }
        catch (error){
            console.error(error);
            res.status(500).send(error);
        }
    },
    post: async (req, res) =>{
        try {
            let newauction;
            let gasauction;
            if (Array.isArray(req.body)) {
                req.body.forEach(async element=>{
                    newauction = new auction(element);
                    gasauction = await newauction.save();
                })
            }
            else {
                newauction = new auction(req.body);
                gasauction = await newauction.save(); 
            }
          
            res.send("Fine :)");             
        }
        catch (error){
            console.error(error);
            res.status(500).send(error);
        }
    },
    patch: async (req, res) =>{
        try {
            const auction = await auction.findOneAndUpdate(req.params.id, req.body, {
                returnOriginal: false
            } );
            if (auctionn) 
                res.send(auction);
            else
                res.status(404).send("Not Found");             
        }
        catch (error){
            console.error(error);
            res.status(500).send(error);
        }
    }
}

export default auctionControler;