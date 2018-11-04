# Lights Out

A semester project designed to piece together the skills acquired throughout the learning process. 

### Author

**Tyler Rimaldi** - *All current work* - [vezio](https://github.com/vezio) 

## Project Description

You wake up on the floor of a dark cellar. You don't remember your name, where you are, or how you got there.  The main objected of the game is to escape the maze without getting eliminated by any of the traps or monsters. If you so choose to play, you will be challenged, and maybe even have a hard time sleeping at night. If you lose, that is unfortunate and better look next time. However, if you win... the prize is that of a mind blowing fortune that will add confusion, but understanding to your interpretation of the game -- Lights Out. 

## Getting Started

Start by cloning this repository and by setting up Node Express / ExpressJS. Install the necessary dependencies. Once these steps have been completed, from the command prompt, run node `server/lightsout.js`. Be sure to be in the **root directory.** For example, C:\Users\Tyler Rimaldi\Documents\SD2SemesterProj> would be where I would run: `server/lightsout.js` 

From there you will be able to access the web application via `localhost:3000`. 

## Development
### Things to be completed in the future:
- Random spawning obstacles --> already have some algorithm in mind in the obstacle.js file
- Delete an item from the ENTIRE game including removing from current player inventory or maze
- Player death & Thirst monitor to decrease
- Player spawn point
- Player direction --> currently in progress on the side

### Current State:
- Implemented a "sub resource" like routing system
- Created starting functionality 
- Created neccessary objects and data 
- File structure
- Documented
- Moving on with more advanced functionality

# REST API Documentation

## Players

#### Route: /players

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



#### Route: /players/:id  | id =[int]

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



#### Route: /player/:playername/item/:itemname 

#### playername = [str] itemname = [str]

POST - Use Item | Success: 204 Empty|Error: 400 explains invalid input or 404 Empty

#### /player/:id/step/:direction (To Be Implemented)

------

## Items

#### /items

GET - Return a list of all items in the game| Success 200, lists all items objects as JSON



#### /items/:id | id=[int]

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

## Cells

#### /cells

GET - Return a list of all cells in the game| Success 200, lists all cells objects as JSON

#### /cells/:id | id =[int]

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



#### /cells/:id/items | id = [int]

GET - Get all items in a specific cell  | Success 200, lists all cell items objects as JSON

#### /cells/:id/item/:name | id = [int], name = [str]

PATCH  - (Take an Item) Get an item from a specific cell, then change the owner to the item to the player
         that is making the request. Then make sure that the cell no longer has the item
         by setting the item value to null | Success: 204 Empty|Error: 400 explains invalid input or 404 Empty
	 

```
Request Body Example:

	{

		"owner":"playername"

	}
```

------

## Obstacles

#### /obstacles

GET - Get all obstacles in the game | Success 200, lists all obstacles objects as JSON

POST - Add an obstacle to the game | Success: 204 Empty|Error: 400 explains invalid input or 404 Empty

```
Request Body Example:

	{

		"owner":"value",

	        "name":"value",
  
	        "damage":Integer,

                "onCourse":boolean,

                "description":"value"

	}
```

#### /obstacles/:id | id = [int]

GET - Get a specific obstacle | Success: 200, return a player object as JSON|Error: 404 empty

PATCH - Update a specific attribute in an obstacle | Success: 204 Empty|Error: 400 explains invalid input or 404 Empty

DELETE - Delete a obstacle from the entire game|Success: 204 Empty | Error: 404 Empty

#### /obstacles/:id/spawn (To Be Implemented)

