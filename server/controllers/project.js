const express = require("express");
const mongoose = require("mongoose");
const Project = require("../models/projects");

exports.uploadProjects = async(req, res, next) => {
    try {
        const project = await Project.create(req.body);
        res.status(201).json({
            status: "success",
            project
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
}