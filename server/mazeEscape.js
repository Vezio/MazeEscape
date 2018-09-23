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

//Route localhost:3000/index.html to index.html
app.get('/index.html', function (req, res) {
   res.sendFile('index.html', { root: './client/views' });
});

//Listen on specified port
app.listen(port, () => console.log(`Maze Escape is running on port: ${port}`))
