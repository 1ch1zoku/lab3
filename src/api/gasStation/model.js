import { Schema, model } from 'mongoose';

const auctionSchema = new Schema({
    name: {
        type: String,
        minlength: 3
    },
    data_start_of_trading: {
        type: Date,
        minlength: 3,
        required: true
    },
    data_end_of_trading: {
        type: Date,
        min: 0
    },
    starting_price: {
        type: Number,
        min: 0
    },
    end_price: {
        type: Number,
        min: 0
    },
   
});

const auction = model("auction", auctionSchema);

export default auction;