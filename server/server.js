const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public/');
// console.log(`publicPath: ${publicPath}`);
const port = process.env.PATH || 3000;
var app = express();

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//   res.sendFile(publicPath + '/index.html');
//   console.log('app.get called');
// });

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};


// CHALLENGE
// Create a brand new express app
// Configure to serve up the public folder
// Call app.listen on port 3000
// Provide callback function to terminal to confirm server is up

// localhost:3000 should serve up index.html
