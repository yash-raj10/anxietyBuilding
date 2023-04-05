const express = require("express");
const { uploadProjects } = require("../controllers/project");
const projectRoute = express.Router();

projectRoute.get("/", uploadProjects);

module.exports = projectRoute;