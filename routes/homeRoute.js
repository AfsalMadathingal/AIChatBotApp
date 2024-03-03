const express = require("express");
const homeRoute = express();




homeRoute.get("/", (req, res) => {


    try {
        
        return res.render("home");

    } catch (error) {

        console.log(error);
        res.send("Internal Error Occured");
        
    }

})



module.exports = homeRoute