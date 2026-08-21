const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors()); // Front-end እና Back-end እንዲነጋገሩ ይፈቅዳል
app.use(express.json()); // የJSON ዳታ ለመቀበል ይረዳል

// የሙከራ API Route (GET Request)
app.get('/', (req, res) => {
    res.send("Back-end Server በትክክል እየሰራ ነው!");
});

// ከFront-end የሚመጣ ዳታ መቀበያ API Route (POST Request)
app.post('/api/message', (req, res) => {
    const userMessage = req.body.message;
    console.log("ከFront-end የደረሰ መልእክት:", userMessage);
    
    res.json({
        success: true,
        reply: `መልእክትህ በትክክል ደርሷል: "${userMessage}"`
    });
});

// Server ማስነሻ Port
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server በ Port ${PORT} ላይ እየሰራ ነው...`);
});