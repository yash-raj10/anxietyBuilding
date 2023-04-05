const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Url: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }
},
{timestamps: true}
)

const Project = mongoose.model("Project", projectSchema);
exports.Project = Project;