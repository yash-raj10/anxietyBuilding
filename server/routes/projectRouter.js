const express = require("express");
const { uploadProjects } = require("../controllers/project");
const projectRoute = express.Router();

projectRoute.post("/uploadProject", uploadProjects);

module.exports = projectRoute;