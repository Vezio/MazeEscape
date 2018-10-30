function Item(owner, name, uses, description) {
  this.owner   = owner;
  this.name    = name;
  this.uses    = uses;
  this.description = description;
}

let items = [
    new Item(0, "chalk", 5, "Leave messages on walls")
  , new Item(2, "rope", 1, "Tie, swing uses")
  , new Item(3, "plank", 1, "Place down to cross")
];

let exists = (x) => typeof x !== 'undefined'

//List all items in the game
exports.list = () => items;

//List a specific item in the game
exports.read = (i) => items[i];

//Create an item
exports.create = (owner, name, uses, description) => items.push(new Item(owner, name, uses, description)) - 1;

//Updates Single Attribute
exports.update = (i, atrib, value) =>
  exists(items[i]) && exists(items[i][atrib]) ? (items[i][atrib] = value) : undefined;

//Delete an entire item from the game
exports.delete = (i) => exists(i) ? delete items[i] : undefined

//Give Item to some player
exports.take = (i, atrib, value) => {
  let location = parseInt(i)
  console.log(i);
  for(let j = 0; j < items.length; j++){
    if(items[j][atrib] === (location))
      items[j][atrib] = value.toString();
  }
}

//Utlize the item by updating and expressing how much usage is left
exports.use = (player, item) => {
  for (let j = 0; j < items.length; j++){
    if(items[j].owner === parseInt(player) && items[j].name === item.toString())
      var loc = j;
   }
  if(items[loc].uses > 0)
    items[loc].uses = items[loc].uses - 1;
  else
    console.log("You are out of uses for this item");
}
