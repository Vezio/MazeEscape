var Sequelize = require("sequelize");
var sequelize = new Sequelize("database", "username", "password", {dialect: "sqlite", storage: "server/db/players.sqlite"});

var Player = sequelize.define("player", {
  name: { type: Sequelize.STRING, allowNull: false, unique: true },
  steps: { type: Sequelize.INTEGER},
  loc: { type: Sequelize.STRING},
  dir: { type: Sequelize.STRING}
});

sequelize.sync().then(function() {
  Player.create({ name: "Nicholas", steps: 0, loc: "/cells/0/1", dir: "north" });
  Player.create({ name: "Vezio",    steps: 0, loc: "/cells/0/1", dir: "north" });
  Player.create({ name: "John",     steps: 0, loc: "/cells/0/1", dir: "north" });
});

module.exports = Player;
