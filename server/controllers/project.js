const express = require("express");
const mongoose = require("mongoose");
const { Project } = require("../models/projects");

exports.uploadProjects = async (req, res, next) => {
    try {
        const project = new Project({
            name: req.body.name,
            Url: req.body.Url,
            videoUrl: req.body.videoUrl,
            user: req.body.user
        });
        await project.save();
        res.status(201).json({
            status: "success",
            data: {
                project
            }
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: "fail",
            message: err.message
        })
    }
}


exports.getTworandomProjects = async (req, res) => {
    try {
        const projects = await Project.aggregate([{ $sample: { size: 2 } }]);
        res.status(200).json({
            status: "success",
            data: {
                projects
            }
        });
    } catch(err) {
        res.status(400).json({status: "fail", message: err.message});
    }
}