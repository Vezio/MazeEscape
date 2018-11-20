function Item(owner, name, uses, icon, description) {
  this.owner   = owner;
  this.name    = name;
  this.uses    = uses;
  this.icon    = icon;
  this.description = description;
}

let items = [
    new Item(0, "chalk", 5, "chalk.jpg", "Chalk - Leave messages on walls")
  , new Item(1, "chalk", 5, "chalk.jpg", "Chalk - Leave messages on walls")
  , new Item(2, "rope", 1, "rope.jpg", "Rope, swing uses")
  , new Item(3, "plank", 1, "plank.jpg", "Plank, Place down to cross")
  , new Item("John", "Hat", 1, "Hat.jpg", "Hat to keep your head warm")
];

let exists = (x) => typeof x !== 'undefined'

//List all items in the game
exports.list = () => items;

//List a specific item in the game
exports.read = (i) => items[i];

//Create an item
exports.create = (owner, name, uses, icon, description) => items.push(new Item(parseInt(owner), name, uses, icon, description)) - 1;

//Updates Single Attribute
exports.update = (i, atrib, value) =>
  exists(items[i]) && exists(items[i][atrib]) ? (items[i][atrib] = value) : undefined;

//Delete an entire item from the game
exports.delete = (i) => exists(i) ? delete items[i] : undefined;

//Give Item to some player
exports.take = (i, itemName, newOwner) => {
  let item = itemName.toLowerCase();
  let updateOwner = newOwner.toString();
  currentOwner = parseInt(i);
  console.log(i);
  console.log(item);
  console.log(updateOwner);
  // let location = null;
  for(let j = 0; j < items.length; j++){
    if(items[j].owner === currentOwner && items[j].name === item)
      items[j].owner = (updateOwner);
  }
  // if (typeof location !== null)
  //     items[j]["owner"] = updateOwner;
}

//Utlize the item by updating and expressing how much usage is left
exports.use = (player, item) => {
  for (let j = 0; j < items.length; j++){
    if(items[j].owner === player.toString() && items[j].name === item.toString()){
      if(items[j].uses > 0)
        items[j].uses = items[j].uses - 1;
      else {
        console.log(item + " is out of uses");
      }
    }
   }
}
