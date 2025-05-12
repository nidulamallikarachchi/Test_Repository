// server.js
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ MongoDB connection error:', err))

// Mongoose model
const Message = require('./models/Message')

// Routes
app.get('/api/greet', (req, res) => {
    res.json({ message: 'Hello from the backend!' })
})

app.post('/api/message', async (req, res) => {
    const { name, email } = req.body
    try {
        const newMessage = await Message.create({ name, email })
        res.json({ success: true, id: newMessage._id })
    } catch (err) {
        console.error(err)
        res.status(500).json({ success: false, error: err.message })
    }
})

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`)
})
