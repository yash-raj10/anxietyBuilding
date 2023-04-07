const express = require("express");
const { uploadProjects, getTworandomProjects, rateProject } = require("../controllers/project");
const projectRoute = express.Router();

projectRoute.post("/uploadProject", uploadProjects);
projectRoute.get("/gettwoRandomProjects", getTworandomProjects);
projectRoute.put("/rateProject/:id", rateProject)

module.exports = projectRoute;