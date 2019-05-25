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
- Overcame Challenge of implementing a "sub resource" like routing system
- Created starting functionality 
- Created neccessary objects and data 
- File structure
- Documented
- Moving on with more advanced functionality

#### /obstacles/:id/spawn (To Be Implemented)
--------------------------------------------------------------------------------------------------------------------------------
## Using items:
### Essentially, a player can use the chalk by picking up the item. Then selecting the chalk in their iventory, they will be brought a prompt screen. Here they can enter the wall (direction) where they want their message posted. Then after they input that information, another prompt screen appears and asks for a message. The user will then enter a message. To access the message in game, the user must be facing the wall in which they want to read, then they will click on the wall. An alert will appear and they can read the message.

### Players can use the anvil, hammer, metal, and the workbench together. If a player collects all 4 items, they may click on the workbench and craft a key. This will use the anvil, hammer, metal, and workbench all at once and spawn a key in the players inventory. To use the key, the player must be in the starting cell. Once they're in the starting cell, they may click the key and escape the maze! I will be working on other things like this in the future. The other items not mentioned currently have no function other than take.

