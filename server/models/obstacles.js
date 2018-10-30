/*
    - Need an obstacle for each room
    - Each obstacle has a random spawn time
    - Each obstacle can be defeated
*/

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
