//Information about Server
const express = require('express')
const app = express()
const port = 3000

//Serve static images stored locally
app.use(express.static('client/public'));

//On page load, load the index.html file
app.get('/', function (req, res) {
   res.sendFile('index.html', { root: './client/views' });
});


parser = require("body-parser");
routes = require("./routes.js");

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use("/api", routes);

//Get menu when localhost:3000/menu is requested
app.get('/menu', function (req, res) {
   res.sendFile('menu.html', { root: './client/views' });
});

app.get('/api', function (req, res) {
   res.sendFile('api.html', { root: './client/views' });
});
//Get maze when localhost:3000/maze is requested
app.get('/maze', function (req, res) {
   res.sendFile('maze.html', { root: './client/views' });
});

//Get about when localhost:3000/about is requested
app.get('/about', function (req, res) {
   res.sendFile('about.html', { root: './client/views' });
});

//Get leaders when localhost:3000/leaders is requested
app.get('/leaders', function (req, res) {
   res.sendFile('leaders.html', { root: './client/views' });
});

//Get credits when localhost:3000/credits is requested
app.get('/credits', function (req, res) {
   res.sendFile('credits.html', { root: './client/views' });
});

app.get('/victory', function (req, res) {
   res.sendFile('victory.html', { root: './client/views' });
});

//Listen on specified port --> ${variable} gives value of that variable in string
app.listen(port, () => console.log(`Lights Out is running on port: ${port}`))
