cell = require("../models/cell.js");
item = require("../models/items.js");

//List all Cells
exports.listCells = (req,res) => res.send(cell.list());

//Retrieve a specific cell
exports.getCell = (req,res) => {
  let data = cell.read(req.params.id);
  if (typeof data === 'undefined')
    res.sendStatus(404);
  else
    res.send(data);
};

//List the items in the cell
exports.seeAllCellItems = (req, res) => {
  res.send(cell.readItems(req.params.id))
}

//Create a new item in the cell and add it to the list of items
exports.addAnItem = (req, res) => {
  if (req.body){
    if (typeof cell.addItems(req.params.id, req.body.name)
        && typeof item.create(req.params.id, req.body.name, req.body.uses, req.body.description) === 'undefined'){
      res.sendStatus(404);
    }
    else
      res.sendStatus(204);
  }
  else
    res.status(400).send("Item name may not be empty");
};

//Remove an item from a cell. Does not remove the item from the item list
exports.deleteItem = (req, res) => {
  if (cell.delete(req.params.id, req.body.name))
    res.sendStatus(202)
  else
    res.sendStatus(404);
};
