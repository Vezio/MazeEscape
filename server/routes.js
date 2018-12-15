express   = require("express");
gameCtlr  = require("./controllers/gameController");
playCtlr  = require("./controllers/playController");
accCtlr   = require("./controllers/accountController");
msgCtlr   = require("./controllers/messageController");

router = express.Router();

//--Player Routes--\\
router.route('/players')
  .get(accCtlr.listPlayers)
  .post(accCtlr.createPlayer);

router.route('/players/:id')
  .get(accCtlr.getPlayer)
  .patch(accCtlr.updatePlayer)
  .delete(accCtlr.deletePlayer);

//--Item Routes--\\
router.route('/items')
  .get(playCtlr.listItems)
  .post(playCtlr.createItem);

router.route('/items/:id')
  .get(playCtlr.getItem)
  .patch(playCtlr.updateItem)
  .delete(playCtlr.deleteItem);

//--Cell Routes--\\
router.route("/cells")
  .get(gameCtlr.listCells)
  .post(gameCtlr.createCell);

router.route('/cells/:x/:y')
  .get(gameCtlr.getCell)
  .delete(gameCtlr.deleteCell)
  .patch(gameCtlr.updateCell);

//--Message Routes--\\
router.route("/messages")
  .get(msgCtlr.listMessages)
  .post(msgCtlr.createMessage);

router.route("/messages/:id")
  .get(msgCtlr.getMessage)
  .delete(msgCtlr.deleteMessage)
  .patch(msgCtlr.updateMessage);


module.exports = router;
