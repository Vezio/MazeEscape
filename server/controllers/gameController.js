cell = require("../models/cell.js");
item = require("../models/items.js");
obstacle = require("../models/obstacles.js")


//List all Cells
exports.listCells = (req, res) => res.send(cell.list());

//Retrieve a specific cell
exports.getCell = (req, res) => {
  let data = cell.read(req.params.x, req.params.y);
  if (typeof data === 'undefined')
    res.sendStatus(404);
  else
    res.send(data);
};

//Create a new Obstacle in a cell
exports.createObstacle = (req, res) => {
  if (req.body) {
    if (typeof obstacle.addObstacle(req.body.owner, req.body.name, req.body.damage, req.body.onCourse, req.body.icon, req.body.description) === 'undefined') {
      res.sendStatus(404);
    } else
      res.sendStatus(204);
  } else
    res.status(400).send("Obstacle information may not be empty");
};

// Remove a cell --> Need to also add remove all items from the cell in the future
exports.deleteCell = (req, res) => {
  if (cell.delete(req.params.x, req.params.y))
    res.sendStatus(204);
  else
    res.sendStatus(404);
}

//------------------------------------------------------------------------------
// Don't think these are needed as anymore

// //List the items in the cell
// exports.seeAllCellItems = (req, res) => {
//   res.send(cell.readItems(req.params.id))
// };

// //Create a new item in the cell and add it to the list of items
// exports.addAnItem = (req, res) => {
//   if (req.body){
//     if(typeof cell.addItems(req.params.id, req.body.name) &&
//        typeof item.create(req.params.id, req.body.name, req.body.uses, req.body.icon, req.body.description) === 'undefined'){
//       res.sendStatus(404);
//     }
//     else
//       res.sendStatus(204);
//   }
//   else
//     res.status(400).send("Item information may not be empty");
// };
