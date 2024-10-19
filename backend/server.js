const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/knowledgehub')
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Routes
const Message = require('./models/Message');

// Get all messages or search by term
app.get('/api/messages', async (req, res) => {
    const searchTerm = req.query.search || '';
    try {
        const messages = await Message.find({
            $or: [
                { title: { $regex: searchTerm, $options: 'i' } },
                { content: { $regex: searchTerm, $options: 'i' } },
            ],
        });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching messages.' });
    }
});

// Add a new message
app.post('/api/messages', async (req, res) => {
    const { title, content } = req.body;
    try {
        const newMessage = new Message({ title, content });
        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding the message.' });
    }
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
