function Item(owner, name, uses, descript) {
  this.owner   = owner;
  this.name    = name;
  this.uses    = uses;
  this.description = descript;
}

let items = [
    new Item(0, "chalk", 5, "Leave messages on walls")
  , new Item(2, "rope", 1, "Tie, swing uses")
  , new Item(3, "plank", 1, "Place down to cross")
];

let exists = (x) => typeof x !== 'undefined'

exports.list = () => items;
exports.read = (i) => items[i];
exports.create = (owner, name, uses, description) => items.push(new Item(owner, name, uses, description)) - 1;
//Updates Single Attribute
exports.update = (i, atrib, value) =>
  exists(items[i]) && exists(items[i][atrib]) ? (items[i][atrib] = value) : undefined;
exports.delete = (i) => exists(i) ? delete items[i] : undefined





// exports.take = (cell,name,newowner) => {
//   for(let x = 0; x < items.length; x++){
//     if (items[x].owner === cell && items[x].name === name)
//       items[x].owner = newowner;
//   }
// }
