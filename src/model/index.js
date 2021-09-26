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

const userSchema = mongoose.Schema({
    username:{
        type: String,
        default: "admin"
    },
    password:{
        type:String,
        required: true
    }
});


const Cat = mongoose.model("Cat", catSchema);
const User = mongoose.model("User", userSchema)

module.exports = {
    Cat,
    User
}