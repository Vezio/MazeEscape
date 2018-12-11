Item = require("../models/items.js");
acc = require("../models/player.js");
cell = require("../models/cell.js");
obs = require("../models/obstacles.js");
msg = require("../models/messages.js");

exports.listItems = function(req, res) {
  let options = { attributes: ["id", "name", "owner", "uses", "description"] };
  if (req.query.owner) options.where = { owner: req.query.owner};
  Item.findAll(options)
    .then((items) => res.send(items))
    .catch((err) => res.status(400).send(err.message));
}

exports.getItem = (req,res) => {
  Item.findByPk(req.params.id)
    .then((item) => item ? res.send(item) : res.sendStatus(404));
};

exports.updateItem = (req, res) => {
  try {
      Item.findByPk(req.params.id).then((item) => {
        if (item) {
          if (typeof item[req.body.attrib] !== "undefined") {
            // if (req.body.attrib === "uses"){
            //   req.body.value = parseInt(item["uses"] -1)
            // }
            item[req.body.attrib] = req.body.value;
            item.save()
              .then(() => res.sendStatus(204))
              .catch((err) => res.sendStatus(500));
          } else res.sendStatus(400);
        } else res.sendStatus(404);
      });
  } catch(e) {
    res.status(400).send("Invalid update instructions.");
  }
};

exports.deleteItem = function(req, res) {
  Item.findByPk(req.params.id)
    .then((item) => item ? item.destroy().then(res.sendStatus(204)) : res.sendStatus(404));
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
exports.updateObstacle = (req, res) => {
  if (req.body) {
    if (typeof obs.update(req.params.id, req.body.atrib, req.body.value) === 'undefined') {
      res.sendStatus(404);
    } else
      res.sendStatus(204);
  } else
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
  } catch (e) {
    res.status(400).send("Invalid message data.");
  }
};



/*
Random obstacles
  --> Use math.random(1-10) to decide "randomness"
*/
