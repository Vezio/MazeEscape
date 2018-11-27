function Item(name, owner, uses, description) {
  this.name        = name;
  this.owner       = owner;
  this.uses        = uses;
  this.description = description;
}

let items = [
   new Item("Chalk", "/cells/0/1", 1, "a piece of chalk")
  ,new Item("Rope", "/cells/0/0", 1, "a coil of rope")
  ,new Item("Plank", "/cells/2/0", 1, "a wooden plank")
  ,new Item("Water", "/cells/2/2", 1, "a canteen")
];


let exists = (x) => typeof x !== 'undefined'

items.forEach((itm, idx) => itm.id = idx);

//List all items in the game
exports.list = () => items;

//List a specific item in the game
exports.read = (i) => items[i];

//Create an item
exports.create = (name, owner, uses, icon, description) => items.push(new Item(parseInt(owner), name, uses, icon, description)) - 1;

//Updates Single Attribute
exports.update = (i, atrib, value) =>
  exists(items[i]) && exists(items[i][atrib]) ? (items[i][atrib] = value) : undefined;

//Delete an entire item from the game
exports.delete = (i) => exists(i) ? delete items[i] : undefined;

//-------------------------------------------------------------------------------------
//These are completed in the maze.js but I want to use these here in the future...

//Give Item to some player
// exports.take = (i, itemName, newOwner) => {
//   let item = itemName.toLowerCase();
//   let updateOwner = newOwner.toString();
//   currentOwner = parseInt(i);
//   console.log(i);
//   console.log(item);
//   console.log(updateOwner);
//   // let location = null;
//   for (let j = 0; j < items.length; j++) {
//     if (items[j].owner === currentOwner && items[j].name === item)
//       items[j].owner = (updateOwner);
//   }
//   // if (typeof location !== null)
//   //     items[j]["owner"] = updateOwner;
// }
//
// //Utlize the item by updating and expressing how much usage is left
// exports.use = (player, item) => {
//   for (let j = 0; j < items.length; j++) {
//     if (items[j].owner === player.toString() && items[j].name === item.toString()) {
//       if (items[j].uses > 0)
//         items[j].uses = items[j].uses - 1;
//       else {
//         console.log(item + " is out of uses");
//       }
//     }
//   }
// }
//-------------------------------------------------------------------------------------
