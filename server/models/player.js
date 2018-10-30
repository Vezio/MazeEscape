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

     exports.list = () => players;
     exports.read = (i) => players[i];
     exports.create = (name, thirst, steps) => players.push(new Player(name, thirst, steps)) - 1;
     exports.update = (i, atrib, value) =>
       exists(players[i]) && exists(players[i][atrib]) ? (players[i][atrib] = value) : undefined;
     exports.delete = (i) => exists(i) ? delete players[i] : undefined;
