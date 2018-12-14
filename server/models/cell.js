var Sequelize = require("sequelize");
var sequelize = new Sequelize("database", "username", "password", {dialect: "sqlite", storage: "server/db/cells.sqlite"});

var Cell = sequelize.define("cell", {
            x: { type: Sequelize.INTEGER, allowNull: false},
            y: { type: Sequelize.INTEGER, allowNull: false},
        north: { type: Sequelize.BOOLEAN},
        south: { type: Sequelize.BOOLEAN},
         east: { type: Sequelize.BOOLEAN},
         west: { type: Sequelize.BOOLEAN},
  description: { type: Sequelize.STRING,  unique: true}
});

sequelize.sync().then(function() {
  Cell.create({ x: 0, y: 0, north: false, south: false, east:  true, west: false, description:"First Room"});
  Cell.create({ x: 0, y: 1, north: true, south: false, east:  false, west: false, description:"Second Room" });
  Cell.create({ x: 0, y: 2, north: false, south: true, east:  true, west: false, description:"Third Room" });

  Cell.create({ x: 1, y: 0, north: true, south: false, east:  false, west: true, description:"Fourth Room" });
  Cell.create({ x: 1, y: 1, north: true, south: true, east:  true, west: false, description:"Fifth Room" });
  Cell.create({ x: 1, y: 2, north: false, south: true, east:  false, west: false, description:"Sixth Room" });

  Cell.create({ x: 2, y: 0, north: true, south: false, east:  false, west: false, description:"Seventh Room" });
  Cell.create({ x: 2, y: 1, north: true, south: true, east:  false, west: true, description:"Eighth Room"});
  Cell.create({ x: 2, y: 2, north: false, south: true, east:  false, west: false, description:"Ninth Room" });
});

module.exports = Cell;
