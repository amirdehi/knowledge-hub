const express = require('express');
const cors = require('cors');
const sequelize = require('./database'); // Import database connection
const Message = require('./models/Message'); // Import Message model

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sync database
sequelize.sync()
    .then(() => console.log('Database synchronized'))
    .catch(err => console.error('Sync error:', err));

// Get all messages or search by term
app.get('/api/messages', async (req, res) => {
    const searchTerm = req.query.search || '';
    try {
        const messages = await Message.findAll({
            where: {
                [sequelize.Op.or]: [
                    { title: { [sequelize.Op.like]: `%${searchTerm}%` } },
                    { content: { [sequelize.Op.like]: `%${searchTerm}%` } }
                ]
            }
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
        const newMessage = await Message.create({ title, content });
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding the message.' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
