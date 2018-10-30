# Lights Out

A semester project designed to piece together the skills acquired throughout the learning process.

### Authors

**Tyler Rimaldi** - *All current work* - [vezio](https://github.com/vezio)

## Project Description

You wake up on the floor of a dark cellar. You don't remember your name, where you are, or how you got there.  The main objected of the game is to escape the maze without getting eliminated by any of the traps or monsters. If you so choose to play, you will be challenged, and maybe even have a hard time sleeping at night. If you lose, that is unfortunate and better look next time. However, if you win... the prize is that of a mind blowing fortune that will add confusion, but understanding to your interpretation of the game -- Lights Out.

## Getting Started

Start by cloning this repository and by setting up Node Express / ExpressJS. Install the necessary dependencies. Once these steps have been completed, from the command prompt, run node `server/lightsout.js`. Be sure to be in the **root directory.** For example, C:\Users\Tyler Rimaldi\Documents\SD2SemesterProj> would be where I would run: `server/lightsout.js`

From there you will be able to access the web application via `localhost:3000`. 

## Developing

Development should proceed as normal, commit often. 

REST API Documentation

/players

GET - Returns a list of a players

POST - Creates a player 

	Request Body Example:

		{

			"Name":"Example"

			,"Thirst": Some Integer

			,"Steps":Some Integer

		}

/players/:id

GET - Return a specific player

PATCH - Update a player attribute 

	Request Body Example:

		{

			"atrib":"value"

		}

DELETE - Delete a specific player



/items

GET - Return a list of all items in the game

/items/:id

GET - Return a specific item

PATCH  - Update an item attribute

	Request Body Example:

		{

			"atrib":"value"

		}

DELETE - Delete a specific item 



/cells

GET - Return a list of all cells in the game

/cells/:id

GET - Return a specific cell

POST - Add an item to the game and to a specific cell

	Request Body Example:

		{

			"name":"value"

			,"uses": Integer Denoting Uses

			,"description": "brief description of item"

		}

PATCH - User may store an item from that cell

	Request Body Example:

		{

			"atrib":"owner"

			"value":"UserName"

		}

DELETE - Delete an item from a specific cell

	Request Body Example:

		{

			"name":"value"

		}

### /cells/:id/items

GET - Get all items in a specific cell

### /cells/:id/item/:name

DELETE - Grab a specific item from a specific cell and remove it
