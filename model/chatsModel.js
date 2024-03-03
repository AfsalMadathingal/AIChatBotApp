const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
    },
    message: {
        type: String,
        required: true,
    },


});