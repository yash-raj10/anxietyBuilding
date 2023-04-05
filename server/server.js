const express = require("express");
const app = express();
const mongoose = require("mongoose");
const projectRoute = require("./routes/projectRouter");

try {
    mongoose.connect("mongodb://127.0.0.1:27017/anxietyBuilding", { useUnifiedTopology: true })
        .then(() => console.log("Connected to MongoDB"))
        .catch(err => console.log(err));
} catch (err) {
    console.log(err);
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/projects", projectRoute);

const PORT = 3001 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})