//Reasoning for message array: users may want to use their chalk to add a message
function Cell(x, y, fwd, bwd, lft, rht, obstacles, messages, items) {
  this.x         = x;
  this.y         = y;
  this.fwd       = fwd;
  this.bwd       = bwd;
  this.lft       = lft;
  this.rht       = rht;
  this.obstacles = obstacles
  this.messages  = new Array(messages);
  this.items     = new Array (items);
}

let cells = [
    new Cell(0,0, false, true, true, true, "Hole", "Think about who you are", "Chalk")
  , new Cell(1,0, true, true, true, true, "No light", "WHAT HAVE YOU DONE", "Chalk")
  , new Cell(2,0, true, true, true, true, "Bees", "Lets see if you can hang", "Rope")
  , new Cell(1,1, true, true, true, true, "Posion", "Only the brave can make accross" ,"plank")
];

exports.list = ()  => cells;
exports.read = (i) => cells[i];
exports.readItems = (i) => cells[i].items;
exports.addItems = (i, name) => cells[i]["items"].push(name);
exports.delete = (i, name) =>{
  for(let j = 0; j < cells[i]["items"].length; j++){
    if (cells[i]["items"][j].toLowerCase() === name.toLowerCase())
      cells[i]["items"][j] = null;
  }
}
