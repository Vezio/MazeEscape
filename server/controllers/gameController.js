cell = require("../models/cell.js");

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
