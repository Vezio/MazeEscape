Item = require("../models/items.js");

//List all items
exports.listItems = function(req, res) {
  let options = {
    attributes: ["id", "name", "owner", "uses", "description"]
  };
  if (req.query.owner) options.where = {
    owner: req.query.owner
  };
  Item.findAll(options)
    .then((items) => res.send(items))
    .catch((err) => res.status(400).send(err.message));
}

//Get a specific item
exports.getItem = (req, res) => {
  Item.findByPk(req.params.id)
    .then((item) => item ? res.send(item) : res.sendStatus(404));
};

//Update a specific attribute of an item
exports.updateItem = (req, res) => {
  try {
    Item.findByPk(req.params.id).then((item) => {
      if (item) {
        if (typeof item[req.body.attrib] !== "undefined") {
          item[req.body.attrib] = req.body.value;
          item.save()
            .then(() => res.sendStatus(204))
            .catch((err) => res.sendStatus(500));
        } else res.sendStatus(400);
      } else res.sendStatus(404);
    });
  } catch (e) {
    res.status(400).send("Invalid update instructions.");
  }
};

//Create an item
exports.createItem = (req, res) => {
  Item.create({
      name: req.body.name,
      owner: req.body.owner,
      description: req.body.description,
      uses: 1
    })
    .then((item) => res.status(201).send(item.id.toString()))
    .catch((err) => res.status(400).send(err.message))
};

//Delete an Item
exports.deleteItem = function(req, res) {
  Item.findByPk(req.params.id)
    .then((item) => item ? item.destroy().then(res.sendStatus(204)) : res.sendStatus(404));
};
