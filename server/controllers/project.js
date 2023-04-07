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
    } catch (err) {
        res.status(400).json({ status: "fail", message: err.message });
    }
}



exports.rateProject = async (req, res) => {
    const { userId, rating } = req.body;
    const projectId = req.params.id;

    console.log(req.body)

    try {
        const project = await Project.findOneAndUpdate(
            { _id: projectId },
            { $push: { total_rating: { user: userId, total_rating: rating } } },
            { new: true }
        );

        res.status(200).json({
            status: "success",
            message: "Rated successfully",
            data: {
                project
            }
        })
    } catch (err) {
        res.status(400).json({ status: "fail", message: err.message });
    }
}