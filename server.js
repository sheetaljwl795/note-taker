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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });