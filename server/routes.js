express  = require("express");
gameCtlr  = require("./controllers/gameController");
playCtlr = require("./controllers/playController");
accCtlr = require("./controllers/accountController");

router = express.Router();

//--Player Routes--\\
router.route('/players')
  .get(accCtlr.listPlayers)
  .post(accCtlr.createPlayer);

router.route('/players/:id')
  .get(accCtlr.getPlayer)
  .patch(accCtlr.updatePlayer)
  .delete(accCtlr.deletePlayer);

router.route('/player/:player/item/:item')
  .post(playCtlr.useItem);

//--Item Routes--\\
router.route('/items')
  .get(playCtlr.listItems)

router.route('/items/:id')
  .get(playCtlr.getItem)
  .patch(playCtlr.updateItem)
  .delete(playCtlr.deleteItem);

//--Obstacle Routes--\\
router.route('/obstacles')
  .get(playCtlr.listObstacles)
  .post(gameCtlr.createObstacle)

router.route('/obstacles/:id')
  .get(playCtlr.getObstacle)
  .patch(playCtlr.updateObstacle)
  .delete(playCtlr.deleteObstacle);

//--Cell Routes--\\
router.route("/cells")
  .get(gameCtlr.listCells);

router.route('/cells/:x/:y')
  .get(gameCtlr.getCell);

// router.route('/cells/:id/item/:name')
//   .patch(playCtlr.takeItem)
//
// router.route('/cells/:id/items')
//   .get(gameCtlr.seeAllCellItems);
//
// router.route('/cells')
//   .get(gameCtlr.listCells);
//
// router.route('/cells/:id')
//   .get(gameCtlr.getCell)
//   .post(gameCtlr.addAnItem)
//   .delete(gameCtlr.deleteCell);

module.exports = router;
