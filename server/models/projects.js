const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
    },
    Url: {
        type: String,
        // required: true
    },
    videoUrl: {
        type: String,
        // required: true
    },
    total_rating: {
        type: Number,
        default: 0,
    },
    rating_count: {
        type: Number,
        default: 0,
    },
},
    { timestamps: true }
)

const Project = mongoose.model("Project", projectSchema);
exports.Project = Project;