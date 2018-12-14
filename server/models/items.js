var Sequelize = require("sequelize");
var sequelize = new Sequelize("database", "username", "password", { dialect: "sqlite", storage: "server/db/items.sqlite" } );

var Item = sequelize.define("item", {
         name: { type: Sequelize.STRING,
                 allowNull: false,
                 unique: true},
        owner: { type: Sequelize.STRING  },
         uses: { type: Sequelize.INTEGER },
  description: { type: Sequelize.STRING  }
})

sequelize.sync().then(function() {
  Item.create({ name: "Chalk",     owner: "/cells/0/1", uses: 1, description: "a piece of chalk"          }),
  Item.create({ name: "Rope",      owner: "/cells/1/0", uses: 1, description: "a piece of chalk"          }),
  Item.create({ name: "Plank",     owner: "/cells/1/1", uses: 1, description: "a piece of chalk"          }),
  Item.create({ name: "Water",     owner: "/cells/2/0", uses: 1, description: "a canteen"                 }),
  Item.create({ name: "Anvil",     owner: "/cells/2/1", uses: 1, description: "an anvil for crafting"     }),
  Item.create({ name: "Hammer",    owner: "/cells/2/2", uses: 1, description: "a hammer for crafting"     }),
  Item.create({ name: "Workbench", owner: "/cells/0/0", uses: 1, description: "a work bench for crafting" }),
  Item.create({ name: "Metal",     owner: "/cells/0/2", uses: 1, description: "metal ingots for crafting" }),
  Item.create({ name: "Key",       owner: "EndGame",    uses: 1, description: "the key to end the game"   })
})

module.exports = Item;
