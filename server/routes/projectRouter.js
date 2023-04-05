const express = require("express");
const { uploadProjects, getTworandomProjects } = require("../controllers/project");
const projectRoute = express.Router();

projectRoute.post("/uploadProject", uploadProjects);
projectRoute.get("/gettwoRandomProjects", getTworandomProjects);

module.exports = projectRoute;