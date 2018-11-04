# Players

### Route: /players

GET - Returns a list of a players | Success 200, lists all player objects as JSON



POST - Create a player | Success: 201, returns the id of created resource |Error: 400 explains invalid input

```
Request Body Example:

	{

		 "Name":"Example",
		 "Thirst": Some Integer,
          "Steps": Some Integer

	}
```



### Route: /players/:id  | id =[int]

GET - Return a specific player | Success: 200, return a player object as JSON|Error: 404 empty



PATCH - Update a player attribute | Success: 204 Empty|Error: 400 explains invalid input or 404 Empty

```
Request Body Example:

	{

		"atrib":"SomeAtribute",
		"value":"SomeAtribute"

	}
```



DELETE - Delete a specific player | Success: 204 Empty | Error: 404 Empty



### Route: /player/:playername/item/:itemname 

### playername = [str] itemname = [str]

POST - Use Item | Success: 204 Empty|Error: 400 explains invalid input or 404 Empty

### /player/:id/step/:direction (To Be Implemented)

------

# Items

### /items

GET - Return a list of all items in the game| Success 200, lists all player objects as JSON



### /items/:id | id=[int]

GET - Return a specific item|Success: 200, return a player object as JSON|Error: 404 empty



PATCH  - Update an item attribute| Success: 204 Empty|Error: 400 explains invalid input or 404 Empty

```
Request Body Example:

	{

		"atrib":"SomeAtribute",
		"value":"SomeAtribute"

	}
```



DELETE - Delete a specific item | Success: 204 Empty | Error: 404 Empty

------

# Cells

### /cells

GET - Return a list of all cells in the game| Success 200, lists all player objects as JSON

### /cells/:id

GET - Return a specific cell|Success: 200, return a player object as JSON|Error: 404 empty



DELETE - Removes an entire cell from the game| Success: 204 Empty | Error: 404 Empty



POST - Add an item to the game and to a specific cell|Success: 204 Empty|Error: 400 explains invalid input     or 404 Empty

```
Request Body Example:

	{

		"name":"value",

		"uses": Integer Denoting Uses,

		"description": "brief description of item"

	}
```



### /cells/:id/items

GET - Get all items in a specific cell



### /cells/:id/item/:name

PATCH  - (Take an Item) Get an item from a specific cell, then change the owner to the item to the player
         that is making the request. Then make sure that the cell no longer has the item
         by setting the item value to null
	 

```
Request Body Example:

`{`

	"owner":"playername"

`}`
```

------

# Obstacles

### /obstacles

GET - Get all obstacles in the game

POST - Add an obstacle to the game

```
Request Body Example:

	`{`

		"owner":"value"

	      , "name":"value"

	      , "damage":Integer

                  , "onCourse" :boolean

                  , "description":"value"

	`}`
```

### /obstacles/:id

GET - Get a specific obstacle

PATCH - Update a specific attribute in an obstacle

DELETE - Delete a obstacle from the entire game

### /obstacles/:id/spawn (To Be Implemented)

