const express = require("express");
const { register, sign_in } = require("../controllers/Signup");
const userRouter = express.Router();

userRouter.post("/signup", register);
userRouter.post("/login", sign_in);

module.exports = userRouter;