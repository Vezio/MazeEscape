Cell = require("../models/cell.js");
obstacle = require("../models/obstacles.js")


//List all Cells
exports.listCells = function(req, res) {
  Cell.findAll()
    .then((cells) => res.send(cells))
    .catch((err) => res.status(400).send(err.message));
}

//Retrieve a specific cell
exports.getCell = (req,res) => {
  let options = { attributes: ["id", "x", "y", "north", "south", "east", "west"] };
  options.where = {x: req.params.x, y: req.params.y};
  Cell.findAll(options)
    .then((cell) => cell ? res.send(cell[0]) : res.sendStatus(404));
};

//Create a new Obstacle in a cell
// exports.createObstacle = (req, res) => {
//   if (req.body) {
//     if (typeof obstacle.addObstacle(req.body.owner, req.body.name, req.body.damage, req.body.onCourse, req.body.icon, req.body.description) === 'undefined') {
//       res.sendStatus(404);
//     } else
//       res.sendStatus(204);
//   } else
//     res.status(400).send("Obstacle information may not be empty");
// };

// Remove a cell --> Need to also add remove all items from the cell in the future
exports.deleteCell = function(req, res) {
  Cell.findByPk(req.params.x, req.params.y)
    .then((cell) => cell ? cell.destroy().then(res.sendStatus(204)) : res.sendStatus(404));
};
