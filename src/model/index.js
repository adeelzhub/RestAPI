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

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    }
});



const User = mongoose.model("User", userSchema)

module.exports = {
    Cat,
    User
};

// module.exports = Cat;
// module.exports = User;