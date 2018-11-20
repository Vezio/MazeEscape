var playerName = sessionStorage.getItem("playerName"); //player name
var playerId; //the target player location in the array of players
var player; //the target player
var cell;
var items;
var inventory;
var allPlayers; // all players in the game

window.onload = function() {
  fetch("http://localhost:3000/api/players/")
    .then((res) => res.json())
    .then(function(json) {
      allPlayers = json;
      for (let i = 0; i < allPlayers.length; i++) {
        if (allPlayers[i]["name"] === playerName.toString()) {
          playerId = i;
        }
      }
      fetch("http://localhost:3000/api/players/" + playerId)
        .then((res) => res.json())
        .then(function(json) {
          player = json;
          console.log(playerId);
          fetch("http://localhost:3000/api/" + player.loc)
            .then((res) => res.json())
            .then(loadCell);
        });
    });
}

function loadCell(json) {
  // console.log("TE")
  cell = json;
  renderCell(cell);
}

function renderCell(cell) {
  // console.log("TE")
  let walls = document.querySelectorAll("main img");
  switch (player.dir) {
    case "north":
      walls[0].src = cell.west ? "images/no-wall.png" : "images/wall-left.png";
      walls[1].src = cell.north ? "images/no-wall.png" : "images/wall-ahead.png";
      walls[2].src = cell.east ? "images/no-wall.png" : "images/wall-right.png";
      break;
    case "south":
      walls[0].src = cell.east ? "images/no-wall.png" : "images/wall-left.png";
      walls[1].src = cell.south ? "images/no-wall.png" : "images/wall-ahead.png";
      walls[2].src = cell.west ? "images/no-wall.png" : "images/wall-right.png";
      break;
    case "east":
      walls[0].src = cell.north ? "images/no-wall.png" : "images/wall-left.png";
      walls[1].src = cell.east ? "images/no-wall.png" : "images/wall-ahead.png";
      walls[2].src = cell.south ? "images/no-wall.png" : "images/wall-right.png";
      break;
    case "west":
      walls[0].src = cell.south ? "images/no-wall.png" : "images/wall-left.png";
      walls[1].src = cell.west ? "images/no-wall.png" : "images/wall-ahead.png";
      walls[2].src = cell.north ? "images/no-wall.png" : "images/wall-right.png";
      break;
  }
}

function turnLeft() {
  switch (player.dir) {
    case "north":
      player.dir = "west";
      break;
    case "west":
      player.dir = "south";
      break;
    case "south":
      player.dir = "east";
      break;
    case "east":
      player.dir = "north";
      break;
  }
  fetch("http://localhost:3000/api/players/" + playerId, {
      method: "PATCH",
      body: '{"attrib":"dir","value":"' + player.dir + '"}',
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(function(res) {
      console.log(res.status);
    });
  renderCell(cell);
}

function turnRight() {
  switch (player.dir) {
    case "north":
      player.dir = "east";
      break;
    case "east":
      player.dir = "south";
      break;
    case "south":
      player.dir = "west";
      break;
    case "west":
      player.dir = "north";
      break;
  }
  fetch("http://localhost:3000/api/players/" + playerId, {
      method: "PATCH",
      body: '{"attrib":"dir","value":"' + player.dir + '"}',
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(function(res) {
      console.log(res.status);
    });
  renderCell(cell);
}

function turnAround() {
  switch (player.dir) {
    case "north":
      player.dir = "south";
      break;
    case "south":
      player.dir = "north";
      break;
    case "east":
      player.dir = "west";
      break;
    case "west":
      player.dir = "east";
      break;
  }
  fetch("http://localhost:3000/api/players/" + playerId, {
      method: "PATCH",
      body: '{"attrib":"dir","value":"' + player.dir + '"}',
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(function(res) {
      console.log(res.status);
    });
  renderCell(cell);
}

function moveFwd() {
  switch (player.dir) {
    case "north":
      if (cell.north) {
        console.log(player.loc + "HERE");
        let newY = cell.y + 1;
        let currentX = cell.x;
        player.loc = "/cells/" + currentX + "/" + newY;
        console.log(player.loc + "HERE");
      } else
        alert("There's a wall, you cannot go this way!");
      break;
    case "south":
      if (cell.south) {
        let newY = cell.y - 1;
        let currentX = cell.x;
        player.loc = "/cells/" + currentX + "/" + newY;
      } else
        alert("There's a wall, you cannot go this way!");
      break;
    case "west":
      if (cell.west) {
        // console.log(player.loc + "HERE");
        let currentY = cell.y;
        let newX = cell.x - 1;
        player.loc = "/cells/" + newX + "/" + currentY;
        console.log(player.loc + "HERE");
      } else
        alert("There's a wall, you cannot go this way!");
      break;
    case "east":
      if (cell.east) {
        // console.log(player.loc + "HERE");
        let currentY = cell.y;
        let newX = cell.x + 1;
        player.loc = "/cells/" + newX + "/" + currentY;
        console.log(player.loc + "HERE");
      } else
        alert("There's a wall, you cannot go this way!");
      break;
  }

  fetch("http://localhost:3000/api/players/" + playerId, {
      method: "PATCH",
      body: '{"attrib":"loc","value":"' + player.loc + '"}',
      headers: {
        "Content-type": "application/json"
      }
    })

    .then(function(res) {
      console.log(res.status);
    });

  fetch("http://localhost:3000/api/" + player.loc)
    .then((res) => res.json())
    .then(loadCell);

  renderCell(cell);
}


//Return to title screen
function exitGame() {
  window.location.href = "menu";
}

//Mouse actions: fwd, bwd, lft, rht
var fwd = document.getElementById("forward").addEventListener("click", function() {
  moveFwd();
});

var bwd = document.getElementById("backward").addEventListener("click", function() {
  turnAround();
});

var lft = document.getElementById("left").addEventListener("click", function() {
  turnLeft();
});

var rht = document.getElementById("right").addEventListener("click", function() {
  turnRight();
});

//Keyboard actions: fwd, bwd, lft, rht
document.body.addEventListener("keyup", function(e) {
  switch (e.key) {
    case "Escape":
    case " ":
      exitGame();
      break;
    case "ArrowLeft":
      turnLeft();
      break;
    case "ArrowUp":
      moveFwd();
      break;
    case "ArrowRight":
      turnRight();
      break;
    case "ArrowDown":
      turnAround();
      break;
  }
});

//Use item in game and remove from list of items
function useItem(e) {
  var item = e.target;
  inventory.removeChild(item);
  console.log("use", item.name);
}

//Get the item in inventory that the user requested and pass it to useItem()
var inventory = document.querySelector("#inventory fieldset");
var myItems = inventory.querySelectorAll("input");
myItems.forEach(function(item) {
  item.addEventListener("click", useItem);
});

//Take item from main screen and pass it to the inventory
function takeItem(e) {
  var item = e.target;
  console.log("take", item.name)
  inventory.appendChild(item);
  item.addEventListener("click", useItem);
}

//Select the item on the main screen and pass it to takeItem()
var mainItem = document.querySelector("main");
var mainTotItems = mainItem.querySelectorAll("input");
mainTotItems.forEach(function(item) {
  item.addEventListener("click", takeItem);
});
