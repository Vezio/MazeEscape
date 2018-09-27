//Detials about the web server
const express = require('express')
const app = express()
const port = 3000

//Serves static files like images
app.use(express.static('client/public'));

//Route landing page to index.html
app.get('/', function (req, res) {
   res.sendFile('index.html', { root: './client/views' });
});

app.get('/menu', function (req, res) {
   res.sendFile('menu.html', { root: './client/views' });
});

app.get('/maze', function (req, res) {
   res.sendFile('maze.html', { root: './client/views' });
});

app.get('/about', function (req, res) {
   res.sendFile('index.html', { root: './client/views' });
});

app.get('/leaders', function (req, res) {
   res.sendFile('index.html', { root: './client/views' });
});

app.get('/credits', function (req, res) {
   res.sendFile('index.html', { root: './client/views' });
});

//Listen on specified port
app.listen(port, () => console.log(`Maze Escape is running on port: ${port}`))
