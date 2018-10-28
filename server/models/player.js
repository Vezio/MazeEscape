function Player(name, thirst, steps, inventory) {
  this.name = name;
  this.thirst = thirst;
  this.steps = steps;
  this.inventory = inventory; //We are going to need to make this an array
}

let players = [
    new Player("Tyler", 98, 5, "Hammer, Nail")
  , new Player("Nicholas", 100, 1, "Axe")
  , new Player("Vezio", 50, 20, "Paper")
];

let exists = (x) => typeof x !== 'undefined'

// We need to see how we want to update the Players

     exports.list = () => players;
     exports.read = (i) => players[i];
     exports.create = (name, thirst, steps, inventory) => players.push(new Player(name, thirst, steps, inventory)) - 1;
     // exports.update = (i, name, thirst, steps, inventory) =>
     //    exists(players[i]) && exists(players[i][name]) && exists(players[i][thirst]) && exists(players[i][name])
     //    && exists(players[i][steps])  && exists(players[i][inventory]) ? players[i][prop] = val : undefined
     exports.update = (name, atrib, value) =>
       exists(players[i]) && exists(players[i][atrib]) ? (players[i][atrib] = value) : undefined;
     exports.delete = (i) => exists(i) ? delete players[i] : undefined;
