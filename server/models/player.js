function Player(name) {
  this.name = name;
  this.thirst = 100;
  this.loc = "/rooms/0/1";
  this.dir = "north";
  // this.inventory.push(this.inventory); //We are going to need to make this an array
}

let players = [
    new Player("Tyler")
  , new Player("Nicholas")
  , new Player("Vezio")
  , new Player("John")
];

//
// players.forEach((pla, idx) => pla.id = idx);


let exists = (x) => typeof x !== 'undefined'

//List all players in the game
exports.list = () => players;

//List a specific player in the game
exports.read = (i) => players[i];

//Create a new player
exports.create = (name) => players.push(new Player(name)) - 1;

//Update a single attribute of the player
exports.update = (i, atrib, value) =>
 exists(players[i]) && exists(players[i][atrib]) ? (players[i][atrib] = value) : undefined;

//Delete an entire player
exports.delete = (i) => exists(i) ? delete players[i] : undefined;
