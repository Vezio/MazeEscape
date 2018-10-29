cell = require("../models/cell.js");
item = require("../models/items.js");

//Works
exports.listCells = (req,res) => res.send(cell.list());

//Works
exports.getCell = (req,res) => {
  let data = cell.read(req.params.id);
  if (typeof data === 'undefined')
    res.sendStatus(404);
  else
    res.send(data);
};

//List the items in the cell
exports.seeItems = (req,res) => {
  res.send(cell.readItems(req.params.id))
}

//Create a new item in the cell
// exports.createItem = (req,res) => {
//   console.log(req.body);
//   if (req.body)
//     res.status(201).send(item.create(req.body.name, req.body.owner).toString());
//   else
//     res.status(400).send("Item name may not be empty.");
// };

//Create a new item in the cell and add it to the list of items
exports.addAnItem = (req, res) => {
  if (req.body){
      // res.status(201).send(item.create(req.params.id, req.body.name, req.params.id).toString());
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

//   // cell/id:/take/name


//This works, it deletes an item from the cell, but for somereason says not found in body of response
exports.deleteItem = (req, res) => {
  if (typeof cell.delete(req.params.id, req.body.name) === 'undefined')
    res.sendStatus(404);
  else
    res.sendStatus(204);
};
