// models/Message.js
const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    name: String,
    email: String
})

module.exports = mongoose.model('Message', MessageSchema)
