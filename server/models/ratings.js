const mongoose = require("mongoose");

const ratings = new mongoose.Schema({
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    rate: {
        type: String,
        enum: ['like', 'dislike'],
        required: true
    },
},
    { timestamps: true }
)

const Rating = mongoose.model("Rating", ratings);