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
    new Cell(0, 0, false, true, true, true, "Hole", "Think about who you are", "Chalk")
  , new Cell(1, 0, true, true, true, true, "No light", "WHAT HAVE YOU DONE", "Chalk")
  , new Cell(2, 0, true, true, true, true, "Bees", "Lets see if you can hang", "Rope")
  , new Cell(3, 1, true, true, true, true, "Poison", "Only the brave can make accross" ,"plank")
];


let exists = (x) => typeof x !== 'undefined'

//List all cells
exports.list = ()  => cells;

//List a specific cell
exports.read = (i) => cells[i];

//List all items in a specific cell
exports.readItems = (i) => cells[i].items;

//Delete a cell
exports.delete = (i) => exists(cells[i]) ? delete cells[i] : undefined;

//Add an item to a cell
exports.addItems = (i, name) => cells[i]["items"].push(name);

//Remove an item from a cell
exports.take = (i, name) =>{
  let item = name.toLowerCase();
  // console.log(item);
  for(let j = 0; j < cells[i]["items"].length; j++){
    if(cells[i].items[j].toLowerCase() === item)
      cells[i]["items"][j] = " ";
  }
}
