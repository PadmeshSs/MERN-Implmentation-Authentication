const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const usermodel = mongoose.model("Users", userschema)

module.exports = usermodel