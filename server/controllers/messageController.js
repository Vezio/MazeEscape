Message = require("../models/messages.js");

//List all messages
exports.listMessages = function(req, res) {
  let options = {
    attributes: ["id", "owner", "location", "content"]
  };
  if (req.query.messages) options.where = {
    location: req.query.location
  };
  Message.findAll(options)
    .then((items) => res.send(items))
    .catch((err) => res.status(400).send(err.message));
};

//Get a specific message
exports.getMessage = (req, res) => {
  Message.findByPk(req.params.id)
    .then((message) => message ? res.send(message) : res.sendStatus(404));
};

//Update a specific attribute of a message
exports.updateMessage = (req, res) => {
  try {
    Message.findByPk(req.params.id).then((message) => {
      if (message) {
        if (typeof message[req.body.attrib] !== "undefined") {
          message[req.body.attrib] = req.body.value;
          message.save()
            .then(() => res.sendStatus(204))
            .catch((err) => res.sendStatus(500));
        } else res.sendStatus(400);
      } else res.sendStatus(404);
    });
  } catch (e) {
    res.status(400).send("Invalid update instructions.");
  }
};


//Create a new message
exports.createMessage = (req, res) => {
  Message.create({
      owner: req.body.owner,
      location: req.body.location,
      content: req.body.content
    })
    .then((message) => res.status(201).send(message.id.toString()))
    .catch((err) => res.status(400).send(err.message))
};

//Delete a message
exports.deleteMessage = function(req, res) {
  Message.findByPk(req.params.id)
    .then((message) => message ? message.destroy().then(res.sendStatus(204)) : res.sendStatus(404));
};
