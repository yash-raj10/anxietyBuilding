const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    }
})

const User = mongoose.model("User", userSchema);