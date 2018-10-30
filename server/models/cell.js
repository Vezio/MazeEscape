function Cell(x, y, items) {
  this.x     = x;
  this.y     = y;
  this.items = new Array (items);
  // this.fWall = fWall;
  // this.bWall = bWall;
  // this.lWall = lWall;
  // this.rWall = rWall;
  // this.items = items;
  // this.obstacles = obstacles
}

let cells = [
    new Cell(0,0, "Chalk")
  , new Cell(1,0, "Chalk")
  , new Cell(2,0, "Rope")
  , new Cell(1,1, "plank")
];

exports.list = ()  => cells;
exports.read = (i) => cells[i];
exports.readItems = (i, name) => cells[i].items;
exports.addItems = (i, name) => cells[i]["items"].push(name);
exports.delete = (i, name) =>{
  for(var j = 0; j < cells[i]["items"].length; j++){
    if (cells[i]["items"][j].toLowerCase() === name.toLowerCase())
      cells[i]["items"][j] = null;
  }
}



// delete items[i]["items"].name : undefined
// exports.readSpecItem = (i,name) => cells[i][name];
// exports.placeItems = (i, atrib, value) =>
//
//
// exports.update = (i, atrib, value) =>
//   exists(players[i]) && exists(players[i][atrib]) ? (players[i][atrib] = value) : undefined;
//
//
//   items.push(new Item(name, owner, uses, descript)) - 1;
