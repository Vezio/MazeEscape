function Item(name, owner, uses, descript) {
  this.name    = name;
  this.owner   = owner;
  this.uses    = uses;
  this.descrip = descript;
}

let items = [
    new Item("chalk", "/rooms/0", 5, "Leave messages on walls")
  , new Item("rope",  "/rooms/2", 1, "Tie, swing uses")
  , new Item("plank", "/rooms/3", 1, "Place down to cross")
];

let exists = (x) => typeof x !== 'undefined'

exports.list = () => items;
exports.read = (i) => items[i];
exports.create = (name, owner) => items.push(new Item(name, owner, uses, descript)) - 1;


// exports.update = (i, name, owner) =>
//   exists(items[i]) ? (items[i].name = name) && (items[i].owner = owner) : undefined;

//Updates Single Attribute
exports.update = (i, atrib, value) =>
  exists(items[i]) && exists(items[i][atrib]) ? (items[i][atrib] = value) : undefined;



// exports.update = (i, attrib, value) =>
//   exists(items[i]) ? (items[i].attrib = value) : undefined;

exports.delete = (i) => exists(i) ? delete items[i] : undefined
