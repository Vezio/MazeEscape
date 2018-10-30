function Item(owner, name, uses, descript) {
  this.owner   = owner;
  this.name    = name;
  this.uses    = uses;
  this.description = descript;
}

let items = [
    new Item("/rooms/0", "chalk", 5, "Leave messages on walls")
  , new Item("/rooms/2", "rope", 1, "Tie, swing uses")
  , new Item("/rooms/3", "plank", 1, "Place down to cross")
];

let exists = (x) => typeof x !== 'undefined'

exports.list = () => items;
exports.read = (i) => items[i];
exports.create = (owner, name, uses, description) => items.push(new Item(owner, name, uses, description)) - 1;

//, uses, descript

// exports.update = (i, name, owner) =>
//   exists(items[i]) ? (items[i].name = name) && (items[i].owner = owner) : undefined;

//Updates Single Attribute
exports.update = (i, atrib, value) =>
  exists(items[i]) && exists(items[i][atrib]) ? (items[i][atrib] = value) : undefined;
// exports.update = (i, attrib, value) =>
//   exists(items[i]) ? (items[i].attrib = value) : undefined;

exports.delete = (i) => exists(i) ? delete items[i] : undefined
