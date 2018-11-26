var playerName = sessionStorage.getItem("playerName"); //player name
var playerId; //the target player location in the array of players
var player; //the target player
var cell;
var items;
var lcell;
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
            .then(function(json) {
              cell = json
              renderCell(cell);
            });
            // console.log(player.loc);
          fetch("http://localhost:3000/api/items?owner=" + player.loc)
            .then((res) => res.json())
            .then(loadItems);
          fetch("http://localhost:3000/api/items?owner=/players/" + playerId)
            .then((res) => res.json())
            .then(loadInventory);
          //Load user name into info pop up (modal) and Load user location on game screen
          loadUserNameAndLoc(player);
        });
    });
}

function loadCell(json) {
  cell = json;
  console.log(cell);
  renderCell(cell);
  console.log(cell);
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
  fetch("http://localhost:3000/api/items?owner=" + player.loc)
    .then((res) => res.json())
    .then(loadItems);

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
  fetch("http://localhost:3000/api/items?owner=" + player.loc)
    .then((res) => res.json())
    .then(loadItems);

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
  fetch("http://localhost:3000/api/items?owner=" + player.loc)
    .then((res) => res.json())
    .then(loadItems);

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
  fetch("http://localhost:3000/api/items?owner=" + player.loc)
    .then((res) => res.json())
    .then(loadItems);
  fetch("http://localhost:3000/api/players/" + playerId, {
      method: "PATCH",
      //Increase player steps by 1 is (having hard time passing numbers through json)
      //Works, but I will find a better fix soon.
      body: '{"attrib":"steps","value":" "}',
      headers: {
        "Content-type": "application/json"
      }
    })

  renderCell(cell);
  //update player location and steps
  loadUserNameAndLoc(player);
}

//Return to title screen
function exitGame() {
  window.location.href = "menu";
}

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

function loadItems(json) {
  populateItems(json, document.querySelector("#items"), takeItem);
}

function loadInventory(json) {
  populateItems(json, document.querySelector("#inventory"), useItem);
}

function populateItems(items, container, listener) {
  // remove all existing children
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  // add new children for each item
  items.forEach(function(itm) {
    var elem = document.createElement("input");
    elem.type = "image";
    elem.name = itm.name;
    elem.src = "/images/" + itm.name + ".png"
    elem.alt = itm.description;
    elem.json = itm;
    elem.addEventListener("click", listener);
    container.appendChild(elem);
  });
}

function takeItem(e) {
  var item = e.target;
  var inventory = document.querySelector("#inventory");
  console.log("taking item", item.name);
  console.log("http://localhost:3000/api/items/" + item.json.id);
  fetch("http://localhost:3000/api/items/" + item.json.id, {
      method: "PATCH",
      body: '{"atrib":"owner","value":"/players/' + playerId + '"}',
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(function(res) {
      console.log(res.status);
      if (res.status == 204) {
        inventory.appendChild(item);
        item.removeEventListener("click", takeItem);
        item.addEventListener("click", useItem);
        console.log("took", item.name);
      }
    });
}

function useItem(e) {
  var item = e.target;
  var inventory = document.querySelector("#inventory");
  //Use below as a template:
  //----
  if (item.name === "Chalk"){
    let wall = prompt("Enter a wall (north, south, east, west)");
    let input = prompt("Enter a message!");
    fetch("http://localhost:3000/api/messages", {
      method: "POST",
      body: '{"owner":"' + wall + '","location":"' + player.loc + '","content":"' + input + '"}',
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(function(res) {
        console.log(res.status);
      })
      // console.log("fef");
      // console.log(cell);
      // console.log(cell.north);
      // console.log(wall);
      if(wall === "south"){
        if(cell.south === false){
          alert("Worked");
        }
      }
      if(wall === "north"){
        if(cell.north === false){
          alert("Worked");
        }
      }
      if(wall === "west"){
        if(cell.west === false){
          alert("Worked");
        }
      }
      if(wall === "east"){
        if(cell.east === false){
          alert("Worked");
        }
      }

    }
  //----

  //Keep this at the end
  fetch("http://localhost:3000/api/items/" + item.json.id, {
      method: "PATCH",
      body: '{"atrib":"owner","value":"used"}',
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(function(res) {
      console.log(res.status);
      inventory.removeChild(item);
      console.log("used", item.name);
    })
}

function message() {
  let messages;
  fetch("http://localhost:3000/api/messages/")
    .then((res) => res.json())
    .then(function(json) {
      messages = json;

      for (let i = 0; i < messages.length; i++) {
        if (messages[i]["location"] === player.loc) {
          if (player.dir === messages[i]["owner"]){
            alert(messages[i].content);
          }
        }
      }
    });

// MODAL

// Get the modal
var information = document.getElementById('information');

// Get the button that opens the modal
var infoButton = document.getElementById("infoButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
infoButton.onclick = function() {
  information.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  information.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == information) {
    information.style.display = "none";
  }
}

// Loads in player name and location onto the information modal
function loadUserNameAndLoc(player) {
  document.getElementById("userName").innerHTML = "Hi, " + player.name + ". You are in " + player.loc;
  document.getElementById("steps").innerHTML = player.steps;
}
