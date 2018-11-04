acc = require("../models/player.js");

//Retrieve a list of all players
exports.listPlayers = (req, res) => res.send(acc.list());

//Retrieves a specific player
exports.getPlayer = (req, res) => { //works
  let data = acc.read(req.params.id);
  if (typeof data === 'undefined')
    res.sendStatus(404);
  else
    res.send(data);
};

//Creates a player
exports.createPlayer = (req, res) => {
  console.log(req.body);
  if (req.body)
    res.status(201).send(acc.create(req.body.name, req.body.thirst, req.body.steps).toString());
  else
    res.status(400).send("Incorrect Instructions");
};

//Updates a single attribute of a specific player
exports.updatePlayer = (req, res) => {
  if (req.body){
    if (typeof acc.update(req.params.id, req.body.atrib, req.body.value) === 'undefined')
      res.sendStatus(404)
    else
      res.sendStatus(204)
  }
  else
    res.status(400).send("Atribute name may not be empty.");
};

//Deletes a single player
exports.deletePlayer = (req, res) => {
  if (typeof acc.delete(req.params.id) === 'undefined')
    res.sendStatus(404);
  else
    res.sendStatus(204);
};
