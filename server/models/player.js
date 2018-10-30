function Player(name, thirst, steps, inventory) {
  this.name = name;
  this.thirst = thirst;
  this.steps = steps;
  // this.inventory.push(this.inventory); //We are going to need to make this an array
}

let players = [
    new Player("Tyler", 98, 5)
  , new Player("Nicholas", 100, 1)
  , new Player("Vezio", 50, 20)
];

let exists = (x) => typeof x !== 'undefined'

//List all players in the game
exports.list = () => players;

//List a specific player in the game
exports.read = (i) => players[i];

//Create a new player
exports.create = (name, thirst, steps) => players.push(new Player(name, thirst, steps)) - 1;

//Update a single attribute of the player
exports.update = (i, atrib, value) =>
 exists(players[i]) && exists(players[i][atrib]) ? (players[i][atrib] = value) : undefined;

//Delete an entire player 
exports.delete = (i) => exists(i) ? delete players[i] : undefined;
