var Sequelize = require("sequelize");
var sequelize = new Sequelize("database", "username", "password", {dialect: "sqlite", storage: "server/db/messages.sqlite"});

var Message = sequelize.define("player", {
  owner: { type: Sequelize.STRING, }, //what wall (north wall, south wall etc)
  location: { type: Sequelize.STRING}, //what cell

  //need to think about the uniqueness here
  content: { type: Sequelize.STRING, unique: true} //what message says
});

sequelize.sync().then(function() {
  Message.create({ owner: "east", location: "/cells/0/1", content: "You have begun" });
});

module.exports = Message;
