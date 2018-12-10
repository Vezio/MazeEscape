var Sequelize = require("sequelize");
var sequelize = new Sequelize("database", "username", "password", {dialect: "sqlite", storage: "server/db/players.sqlite"});

var Player = sequelize.define("player", {
  name: { type: Sequelize.STRING, allowNull: false },
  steps: { type: Sequelize.INTEGER},
  loc: { type: Sequelize.STRING},
  dir: { type: Sequelize.STRING}
});


// sequelize.sync().then(function() {
//   Player.create({ name: "Tyler",    steps: 0, loc: "/cells/0/1", dir: "north" });
//   Player.create({ name: "Nicholas", steps: 0, loc: "/cells/0/1", dir: "north" });
//   Player.create({ name: "Vezio",    steps: 0, loc: "/cells/0/1", dir: "north" });
//   Player.create({ name: "John",     steps: 0, loc: "/cells/0/1", dir: "north" });
// });

module.exports = Player;




//
// function Player(name) {
//   this.name = name;
//   this.steps = 0;
//   this.loc = "/cells/0/1";
//   this.dir = "north";
// }
//
// let players = [
//     new Player("Tyler")
//   , new Player("Nicholas")
//   , new Player("Vezio")
//   , new Player("John")
// ];
//
// let exists = (x) => typeof x !== 'undefined'
//
// //List all players in the game
// exports.list = () => players;
//
// //List a specific player in the game
// exports.read = (i) => players[i];
//
// //Create a new player
// exports.create = (name) => players.push(new Player(name)) - 1;
//
// //Update a single attribute of the player
// exports.update = (i, atrib, value) =>{
//  if (atrib === "steps"){
//    value = parseInt(players[i].steps +1);
//  }
//  exists(players[i]) && exists(players[i][atrib]) ? (players[i][atrib] = value) : undefined;
// }
//
// //Delete an entire player
// exports.delete = (i) => exists(i) ? delete players[i] : undefined;
//
// // exports.read = (name) => {
// //   for(let i = 0; i<players.length; i++){
// //     if (players[i].name === name.toString())
// //       players[i];
// //   }
// // }
