function Cell(x, y, n, s, e, w) {
  this.x = x;
  this.y = y;
  this.north = n;
  this.south = s;
  this.east = e;
  this.west = w;
}

let cells = [
  [ new Cell(0, 0, false, false,  true, false),
    new Cell(0, 1,  true, false, false, false),
    new Cell(0, 2, false,  true,  true, false)
  ],
  [ new Cell(1, 0,  true, false, false,  true),
    new Cell(1, 1,  true,  true,  true, false),
    new Cell(1, 2, false,  true, false,  true)
  ],
  [ new Cell(2, 0,  true, false, false, false),
    new Cell(2, 1,  true,  true, false,  true),
    new Cell(2, 2, false,  true, false, false)
  ]
];

let exists = (x) => typeof x !== 'undefined'

//List all cells
exports.list = ()  => cells;

//List a specific cell
exports.read = (x,y) => cells[x][y];

// Delete a cell
exports.delete = (x,y) => exists(cells[x][y]) ? delete cells[x][y] : undefined;


//------------------------------------------------------------------------------
// These need to be modified to be compatible to the new version

// Add an item to a cell
// exports.addItems = (i, name) => cells[i]["items"].push(name);
//
// Remove an item from a cell
// exports.take = (i, name) =>{
//   let item = name.toLowerCase();
//   // console.log(item);
//   for(let j = 0; j < cells[i]["items"].length; j++){
//     if(cells[i].items[j].toLowerCase() === item)
//       cells[i]["items"][j] = " ";
//   }
// }
