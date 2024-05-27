// Create web server
// This file is a web server that listens on port 8080 and serves a page with a button. When the button is clicked, an AJAX request is made to the server to fetch comments.

const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/comments.html');
});

app.get('/comments', (req, res) => {
  fs.readFile(__dirname + '/comments.json', (err, data) => {
    if (err) {
      res.status(500).send('Error reading comments.json');
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});