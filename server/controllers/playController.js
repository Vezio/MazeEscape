item = require("../models/items.js");
acc  = require("../models/player.js");
cell = require("../models/cell.js");
obs  = require("../models/obstacles.js");
msg = require("../models/messages.js");

//Retrieve a list of all items in the game
exports.listItems = (req, res) => {
  let items = item.list();
  console.log(items);
  if (req.query.owner)
    items = items.filter((i) => i.owner == req.query.owner);
  res.send(items);
}

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
    res.status(400).send("Atribute may not be empty.");
};

//Delete an entire item
exports.deleteItem = (req, res) => {
  if (item.delete(req.params.id))
    res.sendStatus(204);
  else
    res.sendStatus(404);
};


//Get an item from a specific cell, then change the owner to the item to the player
//that is making the request. Then make sure that the cell no longer has the item
//by setting the item value to null
exports.takeItem = (req, res) => {
  try {
    let cellResult = cell.take(req.params.id, req.params.name);
    let itemResult = item.take(req.params.id, req.params.name, req.body.owner);
    if (cellResult === 'undefined' && itemResult === 'undefined')
      res.sendStatus(404);
    else
      res.sendStatus(204);
  } catch(e) {
    res.status(400).send("Invalid instructions.");
  }
};


//Use the item in game
exports.useItem = (req, res) => {
  try {
    let result = item.use(req.params.player, req.params.item);
    if (result === 'undefined')
      res.sendStatus(404);
    else
      res.sendStatus(204);
  } catch(e) {
    res.status(400).send("Invalid use");
  }
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


exports.listMessages = (req, res) => {
  let messages = msg.list();
  console.log(messages);
  if (req.query.messages)
    messages = messages.filter((i) => i.location == req.query.location);
  res.send(messages);
};

exports.getMessage = (req, res) => {
  let data = msg.read(req.params.id);
  if (typeof data === 'undefined')
    res.sendStatus(404);
  else
    res.send(data);
};
exports.createMessage = (req, res) => {
  try {
    res.status(201).send(
      msg.create(req.body.owner, req.body.location, req.body.content).toString()
    );
  } catch(e) {
    res.status(400).send("Invalid message data.");
  }
};



/*
Player movements
 --> base on boolean values


Random obstacles
  --> Use math.random(1-10) to decide "randomness"
*/
