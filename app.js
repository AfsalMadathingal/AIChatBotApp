const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const hbs = require("hbs");
const nocache = require("nocache");
const chatRoute = require("./routes/chatRoute");
const homeRoute = require("./routes/homeRoute");
require("dotenv").config();
const PORT =  process.env.PORT || 3074;

mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/insight-ai",);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(nocache())
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true
    
}))

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


app.use("/", homeRoute)
app.use("/prompt", chatRoute)





app.listen(PORT, () => {
    console.log(`server is running on port 
    http://localhost:${PORT}`);
})