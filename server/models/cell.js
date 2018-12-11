var Sequelize = require("sequelize");
var sequelize = new Sequelize("database", "username", "password", {dialect: "sqlite", storage: "server/db/cells.sqlite"});

var Cell = sequelize.define("cell", {
  x: { type: Sequelize.INTEGER, allowNull: false},
  y: { type: Sequelize.INTEGER, allowNull: false},
  north: { type: Sequelize.BOOLEAN},
  south: { type: Sequelize.BOOLEAN},
  east: { type: Sequelize.BOOLEAN},
  west: { type: Sequelize.BOOLEAN},

  //Temp fix for uniquness issue
  description: {type: Sequelize.STRING, unique: true}
});

sequelize.sync().then(function() {
  Cell.create({ x: 0, y: 0, north: false, south: false, east:  true, west: false, description:"1"});
  Cell.create({ x: 0, y: 1, north: true, south: false, east:  false, west: false, description:"2" });
  Cell.create({ x: 0, y: 2, north: false, south: true, east:  true, west: false, description:"3" });

  Cell.create({ x: 1, y: 0, north: true, south: false, east:  false, west: true, description:"4" });
  Cell.create({ x: 1, y: 1, north: true, south: true, east:  true, west: false, description:"5" });
  Cell.create({ x: 1, y: 2, north: false, south: true, east:  false, west: false, description:"6" });

  Cell.create({ x: 2, y: 0, north: true, south: false, east:  false, west: false, description:"7" });
  Cell.create({ x: 2, y: 1, north: true, south: true, east:  false, west: true, description:"8"});
  Cell.create({ x: 2, y: 2, north: false, south: true, east:  false, west: false, description:"9" });
});

module.exports = Cell;


//
// Cell.findOrCreate({where:{ x: 0, y: 0, north: false, south: false, east:  true, west: false}, defaults: {}});
// Cell.findOrCreate({where:{ x: 1, y: 1, north: true, south: false, east:  false, west: false }, defaults: {}});
// // Cell.findOrCreate({where:{ x: 0, y: 2, north: false, south: true, east:  true, west: false }, default: null});
// //
// // Cell.findOrCreate({where:{ x: 1, y: 0, north: true, south: false, east:  false, west: true }, default: null});
// // Cell.findOrCreate({where:{ x: 1, y: 1, north: true, south: true, east:  true, west: false }, default: null});
// // Cell.findOrCreate({where:{ x: 1, y: 2, north: false, south: true, east:  false, west: false }, default: null});
// //
// // Cell.findOrCreate({where:{ x: 2, y: 0, north: true, south: false, east:  false, west: false }, default: null});
// // Cell.findOrCreate({where:{ x: 2, y: 1, north: true, south: true, east:  false, west: true }, default: null});
// // Cell.findOrCreate({where:{ x: 2, y: 2, north: false, south: true, east:  false, west: false }, default: null});
// });
