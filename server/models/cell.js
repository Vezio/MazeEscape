function Cell(x, y, items) {
  this.x     = x;
  this.y     = y;
  this.items = items;
  // this.fWall = fWall;
  // this.bWall = bWall;
  // this.lWall = lWall;
  // this.rWall = rWall;
  // this.items = items;
  // this.obstacles = obstacles
}

let cells = [
    new Cell(0,0, "chalk")
  , new Cell(1,0, "chalk")
  , new Cell(2,0, "rope")
  , new Cell(1,1, "plank")
  , new Cell(1,2, "rope")
  , new Cell(2,2, "chalk")
];

exports.list = ()  => cells;
exports.read = (i) => cells[i];
