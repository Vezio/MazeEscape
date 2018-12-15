Cell = require("../models/cell.js");


//List all cells
exports.listCells = function(req, res) {
  Cell.findAll()
    .then((cells) => res.send(cells))
    .catch((err) => res.status(400).send(err.message));
}

//Retrieve a specific cell
exports.getCell = (req, res) => {
  let options = {
    attributes: ["id", "x", "y", "north", "south", "east", "west"]
  };
  options.where = {
    x: req.params.x,
    y: req.params.y
  };
  Cell.findAll(options)
    .then((cell) => cell ? res.send(cell[0]) : res.sendStatus(404));
};

//Create a cell
exports.createCell = (req, res) => {
  Cell.create({
      x: req.body.x,
      y: req.body.y,
      north: req.body.north,
      south: req.body.south,
      east: req.body.east,
      west: req.body.west,
      description: req.body.description
    })
    .then((cell) => res.status(201).send(cell.id.toString()))
    .catch((err) => res.status(400).send(err.message))
}

//Delete a cell
exports.deleteCell = function(req, res) {
  let options = {
    attributes: ["id", "x", "y", "north", "south", "east", "west", "description"]
  };
  options.where = {
    x: req.params.x,
    y: req.params.y
  };
  Cell.findAll(options)
    .then((cell) => cell ? cell[0].destroy().then(res.sendStatus(204)) : res.sendStatus(404));
};

//Update an attribute in a cell
exports.updateCell = (req, res) => {
  try {
    let options = {
      attributes: ["id", "x", "y", "north", "south", "east", "west", "description"]
    };
    options.where = {
      x: req.params.x,
      y: req.params.y
    };
    Cell.findAll(options).then((cell) => {
      if (cell) {
        if (typeof cell[0][req.body.attrib] !== "undefined") {
          cell[0][req.body.attrib] = req.body.value;
          cell[0].save()
            .then(() => res.sendStatus(204))
            .catch((err) => res.sendStatus(500));
        } else res.sendStatus(400);
      } else res.sendStatus(404);
    });
  } catch (e) {
    res.status(400).send("Invalid update instructions.");
  }
};
