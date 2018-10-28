express  = require("express");
gameCtlr  = require("./controllers/gameController");
playCtlr = require("./controllers/playController");
accCtlr = require("./controllers/accountController");

router = express.Router();

router.route("/players")
  .get(accCtlr.listPlayers)
  .post(accCtlr.createPlayer);

router.route("/players/:id")
  .get(accCtlr.getPlayer)
  .patch(accCtlr.updatePlayer)
  .delete(accCtlr.deletePlayer);

router.route("/items")
  .get(playCtlr.listItems)
  .post(playCtlr.createItem);

router.route('/items/:id')
  .get(playCtlr.getItem)
  .patch(playCtlr.updateItem)
  // .patch(playCtlr.takeItem)
  .delete(playCtlr.deleteItem);

router.route("/cells")
  .get(gameCtlr.listCells);

router.route('/cells/:id')
  .get(gameCtlr.getCell);


module.exports = router;
