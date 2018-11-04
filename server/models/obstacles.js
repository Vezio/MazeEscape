function Obstacle(owner, name, damage, onCourse, icon, description) {
  this.owner       = owner;
  this.name        = name;
  this.damage      = damage;
  this.onCourse    = onCourse;
  this.icon        = icon;
  this.description = description;
}

let obstacles = [
    new Obstacle(0, "hole", 100, false,"/hole.jpg", "Hole of emptyness -- you're dead")
  , new Obstacle(1, "No light", 0, false, "/darknessoverlay.jpg", "Ridicoulessly hard to see")
  , new Obstacle(2, "Bees", 2, false, "/bee.jpg", "Stinging Bee")
  , new Obstacle(3, "Poison", 25, false,"/fog.jpg", "Poison is in the air")
];

/*
    - Need an obstacle for each room
    - Each obstacle has a random spawn time
    - Each obstacle can be defeated
*/

let exists = (x) => x !== 'undefined'

//List Obstacles
exports.list = ()  => obstacles;

//List a specific obstacle
exports.read = (i) => obstacles[i];

//Add an obstacle to the game
exports.addObstacle = (owner, name, damage, onCourse, icon, description) => obstacles.push(new Obstacle(owner, name, damage, onCourse, icon, description)) - 1;

//Update a single attribute of the obstacle
exports.update = (i, atrib, value) =>
 exists(obstacles[i]) && exists(obstacles[i][atrib]) ? (obstacles[i][atrib] = value) : undefined;

//Delete an entire obstacle
exports.delete = (i) => exists(i) ? delete obstacles[i] : undefined;

//Random occurence of an object being on course --> Need to implement
// exports.randomSpawn = (i, atrib, value) => {
//   let chance = Math.floor(Math.random() * 10) + 1;
//   let occur  = 5;
//   if(chance === occur){
//     //obstacle in some room will be turned on or continue
//     //to be off on random number selector 1-10
//     obstacles[i][atrib] = value;
//   }
// }
