item = require("../models/items.js");
acc  = require("../models/player.js");
cell = require("../models/cell.js");
obs  = require("../models/obstacles.js");

//Retrieve a list of all items in the game
exports.listItems = (req, res) => res.send(item.list());

//Retrieve an Item
exports.getItem = (req, res) => {
  let data = item.read(req.params.id);
  if (typeof data === 'undefined')
    res.sendStatus(404);
  else
    res.send(data);
};

//Update an attribute within an item
exports.updateItem = (req, res) => {
  if (req.body){
    if (typeof item.update(req.params.id, req.body.atrib, req.body.value) === 'undefined'){
      res.sendStatus(404);
    }
    else
      res.sendStatus(204);
  }
  else
    res.status(400).send("Atribute name may not be empty.");
};

//Delete an entire item
exports.deleteItem = (req, res) => {
  if (item.delete(req.params.id))
    res.sendStatus(204);
  else
    res.sendStatus(404);
};

//Take Item from the maze
exports.grabItem = (req, res) => {
  res.send(cell.delete(req.params.id, req.params.name));
};

//store the item in a player
exports.storeItem = (req, res) => {
  if (req.body){
    if (typeof item.take(req.params.id, req.body.atrib, req.body.value) === 'undefined'){
      res.sendStatus(404);
    }
    else
      res.sendStatus(204);
  }
  else
    res.status(400).send("Atribute name may not be empty.");
};

//Use the item in game
exports.useItem = (req, res) => {
  if (req.body){
    if (typeof item.use(req.params.player, req.params.item) === 'undefined'){
      res.sendStatus(404);
    }
    else
      res.sendStatus(204);
  }
  else
    res.status(400).send("Item name may not be empty");
};

//Retrieve a list of all obstacles in the game
exports.listObstacles = (req, res) => res.send(obs.list());

//Retrieve an obstacle
exports.getObstacle = (req, res) => {
  let data = obs.read(req.params.id);
  if (typeof data === 'undefined')
    res.sendStatus(404);
  else
    res.send(data);
};

//Update an attribute within an obstacle
exports.updateObstacle= (req, res) => {
  if (req.body){
    if (typeof obs.update(req.params.id, req.body.atrib, req.body.value) === 'undefined'){
      res.sendStatus(404);
    }
    else
      res.sendStatus(204);
  }
  else
    res.status(400).send("Atribute name may not be empty.");
};

//Delete an entire obstacle
exports.deleteObstacle = (req, res) => {
  if (obs.delete(req.params.id))
    res.sendStatus(204);
  else
    res.sendStatus(404);
};


/*

Player moevements
 --> base on boolean values
Random obstacles
  --> Use math.random(1-10) to decide "randomness"

*/


//---------------------------------------------------------------------------------------
//update entire item works
// exports.updateItem = (req,res) => {
//     // console.log(req.body);
//   if (req.body){
//     if (typeof item.update(req.params.id, req.body.name, req.body.owner) === 'undefined'){
//         res.sendStatus(404);
//     }
//     else
//       res.sendStatus(204);
//   }
//   else
//     res.status(400).send("Item name may not be empty.");
// };


// //Create an Item
// exports.createItem = (req,res) => {
//   console.log(req.body);
//   if (req.body)
//     res.status(201).send(item.create(req.body.name, req.body.owner).toString());
//   else
//     res.status(400).send("Item name may not be empty.");
// };
