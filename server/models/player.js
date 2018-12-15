var Sequelize = require("sequelize");
var sequelize = new Sequelize("database", "username", "password", {dialect: "sqlite", storage: "server/db/players.sqlite"});

var Player = sequelize.define("player", {
      name: { type: Sequelize.STRING, allowNull: false, unique: true },
     steps: { type: Sequelize.INTEGER },
       loc: { type: Sequelize.STRING  },
       dir: { type: Sequelize.STRING  },
  progress: { type: Sequelize.STRING  },
  attempt:  { type: Sequelize.INTEGER  }
});

sequelize.sync().then(function() {
  Player.create({ name: "Nicholas", steps: 10,  loc: "/cells/0/1", dir: "north", progress: "Escaped" });
  Player.create({ name: "John",     steps: 110, loc: "/cells/2/2", dir: "north", progress: "Escaped" });
  Player.create({ name: "Tyler",    steps: 120, loc: "/cells/2/2", dir: "north", progress: "Escaped" });
  Player.create({ name: "Charles",  steps: 10,  loc: "/cells/2/2", dir: "north", progress: "Escaped" });
  Player.create({ name: "Andrew",   steps: 210, loc: "/cells/2/2", dir: "north", progress: "Escaped" });
  Player.create({ name: "Philips",  steps: 130, loc: "/cells/2/2", dir: "north", progress: "Escaped" });
  Player.create({ name: "Vezio",    steps: 15,  loc: "/cells/2/2", dir: "north", progress: "Escaped" });
  Player.create({ name: "Jeff",     steps: 132, loc: "/cells/2/2", dir: "north", progress: "Escaped" });
  Player.create({ name: "Henry",    steps: 18,  loc: "/cells/2/2", dir: "north", progress: "Escaped" });
  Player.create({ name: "Bobby",    steps: 190, loc: "/cells/2/2", dir: "north", progress: "Escaped" });
  Player.create({ name: "Howard",   steps: 0,   loc: "/cells/0/1", dir: "north", progress: "In Progress" });
});

module.exports = Player;
