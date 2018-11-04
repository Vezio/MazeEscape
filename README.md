# REST API Documentation

### /players

GET - Returns a list of a players

POST - Creates a player 

	Request Body Example:

		`{`

			"Name":"Example"

			,"Thirst": Some Integer

			,"Steps":Some Integer

		`}`

### /players/:id

GET - Return a specific player

PATCH - Update a player attribute 

	Request Body Example:

		`{`

			"atrib":"value"

		`}`

DELETE - Delete a specific player

### /player/:playername/item/:itemname

POST - Item usage --> registers item used and will deduct its usage respectively 

## /player/:id/step/:direction (To Be Implemented)

### /items

GET - Return a list of all items in the game

### /items/:id

GET - Return a specific item

PATCH  - Update an item attribute

	Request Body Example:

		`{`

			"atrib":"value"

		`}`

DELETE - Delete a specific item 

## 

### /cells

GET - Return a list of all cells in the game

### /cells/:id

GET - Return a specific cell

DELETE - Removes an entire cell from the game

POST - Add an item to the game and to a specific cell

	Request Body Example:

		`{`

			"name":"value"

			,"uses": Integer Denoting Uses

			,"description": "brief description of item"

		`}`
		
### /cells/:id/items

GET - Get all items in a specific cell

### /cells/:id/item/:name

PATCH  - (Take an Item) Get an item from a specific cell, then change the owner to the item to the player
         that is making the request. Then make sure that the cell no longer has the item
         by setting the item value to null
	 
	Request Body Example:

	`{`

		"owner":"playername"

	`}`

## 

### /obstacles

GET - Get all obstacles in the game

POST - Add an obstacle to the game

	Request Body Example:

		`{`

			"owner":"value"

		      , "name":"value"

		      , "damage":Integer

                      , "onCourse" :boolean

                      , "description":"value"

		`}`

### /obstacles/:id

GET - Get a specific obstacle

PATCH - Update a specific attribute in an obstacle

DELETE - Delete a obstacle from the entire game

### /obstacles/:id/spawn (To Be Implemented)




