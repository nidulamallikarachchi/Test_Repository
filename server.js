const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Allow requests from any origin
app.use(express.json());

app.get('/api/greet', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.post('/api/echo', (req, res) => {
    const { name, email } = req.body;
    res.json({ message: `Received data for ${name} (${email})` });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
