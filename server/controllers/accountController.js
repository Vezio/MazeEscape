Player = require("../models/player.js");

//Retrieve a list of all players
// exports.listPlayers = (req, res) => res.send(acc.list());
exports.listPlayers = function(req, res) {
  let options = { attributes: ["name", "steps", "loc", "dir"] };
  if (req.query.loc) options.where = { loc: req.query.loc};
  Player.findAll(options)
    .then((players) => res.send(players))
    .catch((err) => res.status(400).send(err.message));
}

//Retrieves a specific player
// exports.getPlayer = (req, res) => { //works
//   let data = acc.read(req.params.id);
//   if (typeof data === 'undefined')
//     res.sendStatus(404);
//   else
//     res.send(data);
// };

exports.getPlayer = (req,res) => {
  Player.findById(req.params.id)
    .then((player) => player ? res.send(player) : res.sendStatus(404));
};

//Creates a player
// exports.createPlayer = (req, res) => {
//   console.log(req.body);
//   if (req.body)
//     res.status(201).send(acc.create(req.body.name, req.body.thirst, req.body.steps).toString());
//   else
//     res.status(400).send("Incorrect Instructions");
// };
exports.createPlayer = (req, res) => {
  Player.create({ name:req.body.name, steps: 0, loc: "/cells/0/1", dir: "north"})
    .then((player) => res.status(201).send(player.id.toString()))
    .catch((err) => res.status(400).send(err.message))
}

//Updates a single attribute of a specific player
// exports.updatePlayer = (req, res) => {
//   if (req.body) {
//     if (typeof acc.update(req.params.id, req.body.attrib, req.body.value) === 'undefined')
//       res.sendStatus(404)
//     else
//       res.sendStatus(204)
//   } else
//     res.status(400).send("Atribute name may not be empty.");
// };

exports.updatePlayer = (req, res) => {
  try {
      Player.findById(req.params.id).then((player) => {
        if (player) {
          if (typeof player[req.body.attrib] !== "undefined") {
            if (req.body.attrib === "steps"){
              req.body.value = parseInt(player["steps"] +1)
            }
            player[req.body.attrib] = req.body.value;
            player.save()
              .then(() => res.sendStatus(204))
              .catch((err) => res.sendStatus(500));
          } else res.sendStatus(400);
        } else res.sendStatus(404);
      });
  } catch(e) {
    res.status(400).send("Invalid update instructions.");
  }
};

// / exports.update = (i, atrib, value) =>{
// //  if (atrib === "steps"){
// //    value = parseInt(players[i].steps +1);
// //  }
// //  exists(players[i]) && exists(players[i][atrib]) ? (players[i][atrib] = value) : undefined;
// // }

//Deletes a single player
exports.deletePlayer = function(req, res) {
  Player.findById(req.params.id)
    .then((player) => player ? player.destroy().then(res.sendStatus(204)) : res.sendStatus(404));
};
