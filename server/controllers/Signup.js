const express = require("express");
const jwt = require("jsonwebtoken");
const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const CryptoJS = require("crypto-js");

exports.register = async (req, res) => {
    try {
        const { name, email } = req.body;
        let user = new User({ name, email, password: CryptoJS.AES.encrypt(req.body.password, "secret123").toString() });
        await user.save();
        res.status(200).json({ success: "success" });
    } catch (err) {
        console.log(err);
    }
};



exports.sign_in = async (req, res) => {
    let user = await User.findOne({ email: req.body.email });
    const bytes = CryptoJS.AES.decrypt(user.password, "secret123")
    let decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (user) {
        if (req.body.email == user.email && req.body.password == decryptedPassword) {
            var token = jwt.sign({ email: user.email, name: user.name }, 'jwtsecret', { expiresIn: '30d' });
            res.status(200).json({ success: true, token });
        }
        else {
            res.status(200).json({ success: false, error: "invalid credentials" })
        }
    }
};

exports.requireauth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'jwtsecret');
        req.userData = { email: decodedToken.email, name: decodedToken.name };
        next();
    } catch (err) {
        res.status(401).json({ message: 'Authentication failed.' });
    }
};
