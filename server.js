const express = require('express');
const path = require('path');
const PORT = process.env.port || 3004;

const app = express();
const noteData = require('./db/db.json');
console.log(noteData)

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('.', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });

// GET request for ALL reviews
app.get('/api/notes', (req, res) => {
    // Log our request to the terminal
    console.info(`${req.method} request received to get notes`);
  
    // Sending all reviews to the client
    return res.status(200).json(noteData);
  });



app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });