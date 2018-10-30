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

### /player/:player/item/:item

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

POST - Add an item to the game and to a specific cell

	Request Body Example:

		`{`

			"name":"value"

			,"uses": Integer Denoting Uses

			,"description": "brief description of item"

		`}`

PATCH - User may store an item from that cell

	Request Body Example:

		`{`

			"atrib":"owner"

			"value":"UserName"

		`}`

DELETE - Delete an item from a specific cell

	Request Body Example:

		`{`

			"name":"value"

		`}`

### /cells/:id/items

GET - Get all items in a specific cell

### /cells/:id/item/:name

DELETE - Grab a specific item from a specific cell and remove it

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




