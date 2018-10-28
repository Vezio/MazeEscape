item = require("../models/items.js");
acc = require("../models/player.js");
cell = require("../models/cell.js");

//-----------------Item------------------------------------------------------------------
//Retrieve a list of all items in the game
exports.listItems = (req, res) => res.send(item.list());

//Retrieve an Item
exports.getItem = (req, res) => {
  let data = item.read(req.params.id);
  if (typeof data === 'undefined')
    res.sendStatus(404);
  else
    res.send(data);
};

//Create an Item
exports.createItem = (req,res) => {
  console.log(req.body);
  if (req.body)
    res.status(201).send(item.create(req.body.name, req.body.owner).toString());
  else
    res.status(400).send("Item name may not be empty.");
};

//Update a single attribute within an item
exports.updateItem = (req, res) => {
  // let num = req.params.id;
  // // let atrib = {theThing: req.body.atrib};
  // let value = req.body.value;
  // console.log(atrib.theThing);
  // console.log(value);
  if (req.body){
    if (typeof item.update(req.params.id, req.body.atrib, req.body.value) === 'undefined'){
      res.sendStatus(404);
    }
    else
      res.sendStatus(204);
  }
  else
    res.status(400).send("Atribute name may not be empty.");
};

//Delete an Item
exports.deleteItem = (req, res) => {
  if (typeof item.delete(req.params.id) === 'undefined')
    res.sendStatus(404);
  else
    res.sendStatus(204);
};
//---------Player------------------------------------------------------------------------

// Player can take an item, item needs location updated
// exports.takeItem = (req,res) => {
//   let data = item[1].inventory;
//   player.update(0, inventory, data);
// }

// Player can remove an item, item needs location updated

// Player can use an item (same as remove, but slightly difference -- I suppose), item location is "null"

// Player can walk around,

























//---------------------------------------------------------------------------------------
//update entire item works
// exports.updateItem = (req,res) => {
//     // console.log(req.body);
//   if (req.body){
//     if (typeof item.update(req.params.id, req.body.name, req.body.owner) === 'undefined'){
//         res.sendStatus(404);
//     }
//     else
//       res.sendStatus(204);
//   }
//   else
//     res.status(400).send("Item name may not be empty.");
// };
