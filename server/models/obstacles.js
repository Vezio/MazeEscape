function Obstacle(owner, name, damage, description) {
  this.owner   = owner;
  this.name    = name;
  this.damage    = uses;
  this.description = description;
}

let obstacles = [
    new Obstacle(0, "hole", 100, "Hole of emptyness -- you're dead")
  , new Obstacle(1, "No light", 0, "Ridicoulessly hard to see")
  , new Obstacle(2, "Bees", 2, "Stinging Bee")
  , new Obstacle(3, "Poison", 25, "Poison is in the air")
];

/*
    - Need an obstacle for each room
    - Each obstacle has a random spawn time
    - Each obstacle can be defeated
*/

//List Obstacles
exports.list = ()  => obstacles;

//List a specific obstacle
exports.read = (i) => obstacles[i];

//Add an obstacle to the game
exports.addObstacle = (owner, name, damage, description) => obstacles.push(new Obstacle(owner, name, damage, description)) - 1;

//Update a single attribute of the obstacle
exports.update = (i, atrib, value) =>
 exists(obstacles[i]) && exists(obstacles[i][atrib]) ? (obstacles[i][atrib] = value) : undefined;

//Delete an entire obstacle
exports.delete = (i) => exists(i) ? delete obstacles[i] : undefined;
