
const express = require("express");
const chatRoute = express();
const chatBot = require("../utils/chatBot");



chatRoute.post("/", async (req, res) => {
    
    const message = req.body.message;


     await  chatBot(message, (response) => {

        console.log(response);

        return res.json({response});
        
    })

})



module.exports = chatRoute