const mongoose = require("mongoose");

const catSchema = mongoose.Schema({
    breed:{
        type: String,
        required: true,
        unique: true
    },
    adoptionCost:{
        type: Number,
        required: true
    },
    numbers:{
        type:Number,
        default: 0
    }


});

const Cat = mongoose.model("Cat", catSchema);

module.exports = Cat;