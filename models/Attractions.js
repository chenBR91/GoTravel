import mongoose from "mongoose"

const Attractions = new mongoose.Schema({
    attractionsName: {
        type: String,
        require: true,
        default: ''
    },
    attractionsCategory: {
        type: [String],
        enum: ["hiking", "beach", "pool", "extreme"],
        require: "please fill from enum"
    },
    attractionsPrice: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        require: "Please fill from date"
    }
})