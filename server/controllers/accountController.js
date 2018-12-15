Player = require("../models/player.js");

//List all players
exports.listPlayers = function(req, res) {
  let options = {
    attributes: ["id", "name", "steps", "loc", "dir", "progress"]
  };
  if (req.query.loc) options.where = {
    loc: req.query.loc
  };
  Player.findAll(options)
    .then((players) => res.send(players))
    .catch((err) => res.status(400).send(err.message));
}

//Get a specific player
exports.getPlayer = (req, res) => {
  Player.findByPk(req.params.id)
    .then((player) => player ? res.send(player) : res.sendStatus(404));
};

//Create a player
exports.createPlayer = (req, res) => {
  Player.create({
      name: req.body.name,
      steps: 0,
      loc: "/cells/0/1",
      dir: "north",
      progress: "In progress"
    })
    .then((player) => res.status(201).send(player.id.toString()))
    .catch((err) => res.status(400).send(err.message))
}

//Update an attribute of a player
exports.updatePlayer = (req, res) => {
  try {
    Player.findByPk(req.params.id).then((player) => {
      if (player) {
        if (typeof player[req.body.attrib] !== "undefined") {
          if (req.body.attrib === "steps") {
            req.body.value = parseInt(player["steps"] + 1)
          }
          player[req.body.attrib] = req.body.value;
          player.save()
            .then(() => res.sendStatus(204))
            .catch((err) => res.sendStatus(500));
        } else res.sendStatus(400);
      } else res.sendStatus(404);
    });
  } catch (e) {
    res.status(400).send("Invalid update instructions.");
  }
};

//Deletes a single player
exports.deletePlayer = function(req, res) {
  Player.findByPk(req.params.id)
    .then((player) => player ? player.destroy().then(res.sendStatus(204)) : res.sendStatus(404));
};
