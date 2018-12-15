var Sequelize = require("sequelize");
var sequelize = new Sequelize("database", "username", "password", { dialect: "sqlite", storage: "server/db/items.sqlite" } );

var Item = sequelize.define("item", {
         name: { type: Sequelize.STRING,
                 allowNull: false, },
        owner: { type: Sequelize.STRING  },
         uses: { type: Sequelize.INTEGER },
  description: { type: Sequelize.STRING, unique: true  }
})

sequelize.sync().then(function() {
  Item.create({ name: "Hint1",     owner: "/cells/0/1", uses: 1, description: "a message describing hint 1" }),
  Item.create({ name: "Hint2",     owner: "/cells/1/1", uses: 1, description: "a message describing hint 2" }),
  Item.create({ name: "Hint3",     owner: "/cells/1/2", uses: 1, description: "a message describing hint 3" }),
  Item.create({ name: "Hint4",     owner: "/cells/2/0", uses: 1, description: "a message describing hint 4" }),
  Item.create({ name: "Chalk",     owner: "/cells/0/0", uses: 1, description: "a piece of chalk in room 0/0"}),
  Item.create({ name: "Chalk",     owner: "/cells/0/1", uses: 1, description: "a piece of chalk in room 0/1"}),
  Item.create({ name: "Chalk",     owner: "/cells/0/2", uses: 1, description: "a piece of chalk in room 0/2"}),
  Item.create({ name: "Chalk",     owner: "/cells/1/0", uses: 1, description: "a piece of chalk in room 1/0"}),
  Item.create({ name: "Chalk",     owner: "/cells/1/1", uses: 1, description: "a piece of chalk in room 1/1"}),
  Item.create({ name: "Chalk",     owner: "/cells/1/2", uses: 1, description: "a piece of chalk in room 1/2"}),
  Item.create({ name: "Anvil",     owner: "/cells/2/2", uses: 1, description: "an anvil for crafting"       }),
  Item.create({ name: "Hammer",    owner: "/cells/0/0", uses: 1, description: "a hammer for crafting"       }),
  Item.create({ name: "Workbench", owner: "/cells/0/2", uses: 1, description: "a work bench for crafting"   }),
  Item.create({ name: "Metal",     owner: "/cells/1/0", uses: 1, description: "metal ingots for crafting"   }),
  Item.create({ name: "Key",       owner: "EndGame",    uses: 1, description: "the key to end the game"     })
})

module.exports = Item;
