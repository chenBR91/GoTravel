import mongoose from "mongoose";

const Hotel = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    rating: {
        type: Number,
        default: 3,
        enum: [3, 4, 5]
    },
    pricePerNight: {
        type: Number,
        require: true,
        default: 0,
    },
    servalNight: {
        type: Number,
        default: 1
    },
    startDate: {
        type: Date,
        require: 'Please fill from date'
    },
    untilDate: {
        type: Date,
        require: 'Please fill from date'
    }
})