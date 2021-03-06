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
          playerId = i + 1;
        }
      }
      fetch("http://localhost:3000/api/players/" + playerId)
        .then((res) => res.json())
        .then(function(json) {
          player = json;
          fetch("http://localhost:3000/api/" + player.loc)
            .then((res) => res.json())
            .then(function(json) {
              cell = json
              renderCell(cell);
              if (player.loc === "/cells/2/2") {
                window.location.href = "victory";
                fetch("http://localhost:3000/api/players/" + playerId, {
                  method: "PATCH",
                  body: '{"attrib":"progress","value":"Escaped"}',
                  headers: {
                    "Content-type": "application/json"
                  }
                })
              }
            });
          fetch("http://localhost:3000/api/items?owner=" + player.loc)
            .then((res) => res.json())
            .then(loadItems);
          fetch("http://localhost:3000/api/items?owner=/players/" + playerId)
            .then((res) => res.json())
            .then(function(json) {
              items = json;
              loadInventory(items);
            });

          //Load user name into info pop up (modal) and Load user location on game screen
          loadUserNameAndLoc();
        });
    });
}

function loadCell(json) {
  cell = json;
  renderCell(cell);
}

function renderCell(cell) {
  console.log(cell)
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

  // If a player spends more than 10 Seconds in a cell, they will be "killed",
  // all items will be dropped in that room and they will be taken to the main menu
  // if they wish to play again, they will start from the beginning
  var seconds = 0;
  var counterTag = document.getElementById('seconds');

  function clock() {
    seconds += 1;
    counterTag.innerText = seconds;
  }

  var increment = setInterval(clock, 1000);

  setTimeout(function() {
    fetch("http://localhost:3000/api/items?owner=/players/" + playerId)
      .then((res) => res.json())
      .then(function(json) {
        let dropItems = json;
        for (let j = 0; j < dropItems.length; j++) {
          fetch("http://localhost:3000/api/items/" + dropItems[j].id, {
            method: "PATCH",
            body: '{"attrib":"owner","value":"' + player.loc + '"}',
            headers: {
              "Content-type": "application/json"
            }
          })
        }
      });
    fetch("http://localhost:3000/api/players/" + playerId, {
      method: "PATCH",
      body: '{"attrib":"loc","value":"cells/0/1"}',
      headers: {
        "Content-type": "application/json"
      }
    })

    //Death message
    let choice = Math.floor(Math.random() * Math.floor(3))
    switch (choice) {
      case 0:
        alert("Too slow, you were captured!");
        break;
      case 1:
        alert("You took too long! They caught up to you and stripped you of your belongings! Better luck next time!");
        break;
      case 2:
        alert("You didn't move fast enough! A giant goblin mouse ate you!");
        break;
      default:
        alert("Ahhh! You died!");
    }
    window.location.href = "menu";
  }, 15000);
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
  loadUserNameAndLoc();
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
  loadUserNameAndLoc();
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
  loadUserNameAndLoc();
}

function moveFwd() {
  switch (player.dir) {
    case "north":
      if (cell.north) {
        location.reload(false);
        let newY = cell.y + 1;
        let currentX = cell.x;
        player.loc = "/cells/" + currentX + "/" + newY;
      } else
        alert("There's a wall, you cannot go this way!");
      break;
    case "south":
      if (cell.south) {
        location.reload(false);
        let newY = cell.y - 1;
        let currentX = cell.x;
        player.loc = "/cells/" + currentX + "/" + newY;
      } else
        alert("There's a wall, you cannot go this way!");
      break;
    case "west":
      if (cell.west) {
        location.reload(false);
        let currentY = cell.y;
        let newX = cell.x - 1;
        player.loc = "/cells/" + newX + "/" + currentY;
      } else
        alert("There's a wall, you cannot go this way!");
      break;
    case "east":
      if (cell.east) {
        location.reload(false);
        let currentY = cell.y;
        let newX = cell.x + 1;
        player.loc = "/cells/" + newX + "/" + currentY;
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
  fetch("http://localhost:3000/api/items/" + item.json.id, {
      method: "PATCH",
      body: '{"attrib":"owner","value":"/players/' + playerId + '"}',
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
      }
    });
}

function useItem(e) {
  var item = e.target;
  var inventory = document.querySelector("#inventory");
  var work;
  var wall;
  if (item.name === "Chalk") {
    wall = prompt("Enter a wall (north, south, east, west)").toString();
    work = false;
    while (work === false) {
      if (wall.toLowerCase() === "south" && cell.south === false) {
        work = true;
      } else if (wall.toLowerCase() === "north" && cell.north === false) {
        work = true;
      } else if (wall.toLowerCase() === "west" && cell.west === false) {
        work = true;
      } else if (wall.toLowerCase() === "east" && cell.east === false) {
        work = true;
      } else if (wall.toLowerCase() !== "north" || wall.toLowerCase() !== "south" || wall.toLowerCase() !== "east" || wall.toLowerCase() !== "west") {
        wall = prompt("Your wall is not present! Use the direction to help assist which wall to write on. (North, South, East, West)");
        if (wall === null) {
          work = true; //user clicked cancel
        }
      }
    }

    let input = prompt("Enter a message within 60 characters!");
    //Check for message with all spaces
    if (!input.replace(/\s/g, '').length) {
      alert("Your message must contain information!");
      //Check for message longer than 60 characters
    } else if (input.length >= 60) {
      alert("Please enter a message within 60 characters." +
        "Your message, \"" + input + "\" contained " + input.length + " characters");
    } else {
      fetch("http://localhost:3000/api/messages", {
          method: "POST",
          body: '{"owner":"' + wall.toLowerCase() + '","location":"' + player.loc + '","content":"' + input + '"}',
          headers: {
            "Content-type": "application/json"
          }
        })
        .then(function(res) {
          console.log(res.status);
        })
      //Keep this at the end so the item is actually used once all conditions are met
      fetch("http://localhost:3000/api/items/" + item.json.id, {
          method: "PATCH",
          body: '{"attrib":"owner","value":"used"}',
          headers: {
            "Content-type": "application/json"
          }
        })
        .then(function(res) {
          console.log(res.status);
          inventory.removeChild(item);
        })
    }
  } else if (item.name === "Workbench") {
    let hammer = document.getElementsByName("Hammer");
    let metal = document.getElementsByName("Metal");
    let anvil = document.getElementsByName("Anvil");
    var allItems;
    var keyId;
    var key;
    var metalId;
    var hammerId;
    var anvilId;
    if (hammer.length !== 0 && metal.length !== 0 && anvil.length !== 0) {
      alert("You crafted the key!!")
      fetch("http://localhost:3000/api/items/")
        .then((res) => res.json())
        .then(function(json) {
          allItems = json;
          for (let i = 0; i < allItems.length; i++) {
            //get key and its location
            if (allItems[i]["name"] === "Key") {
              keyId = i + 1;
              key = allItems[i];
            }
            //get the locations of such
            if (allItems[i]["name"] === "Metal") {
              metalId = i + 1;
            } else if (allItems[i]["name"] === "Hammer") {
              hammerId = i + 1;
            } else if (allItems[i]["name"] === "Anvil") {
              anvilId = i + 1;
            }
          }
          //update items
          fetch("http://localhost:3000/api/items/" + item.json.id, {
            method: "PATCH",
            body: '{"attrib":"owner","value":"used"}',
            headers: {
              "Content-type": "application/json"
            }
          })
          fetch("http://localhost:3000/api/items/" + metalId, {
            method: "PATCH",
            body: '{"attrib":"owner","value":"used"}',
            headers: {
              "Content-type": "application/json"
            }
          })
          fetch("http://localhost:3000/api/items/" + anvilId, {
            method: "PATCH",
            body: '{"attrib":"owner","value":"used"}',
            headers: {
              "Content-type": "application/json"
            }
          })
          fetch("http://localhost:3000/api/items/" + hammerId, {
            method: "PATCH",
            body: '{"attrib":"owner","value":"used"}',
            headers: {
              "Content-type": "application/json"
            }
          })
          //Bring key to inv
          fetch("http://localhost:3000/api/items/" + keyId, {
              method: "PATCH",
              body: '{"attrib":"owner","value":"/players/' + playerId + '"}',
              headers: {
                "Content-type": "application/json"
              }
            })
            .then(function(res) {
              console.log(res.status);
              inventory.removeChild(item);
              location.reload();
            });
        });
    } else {
      alert("You are missing a tool!");
    }
  } else if (item.name === "Key") {
    window.location.href = "victory";
    fetch("http://localhost:3000/api/items/" + item.json.id, {
        method: "PATCH",
        body: '{"attrib":"owner","value":"used"}',
        headers: {
          "Content-type": "application/json"
        }
      })
      .then(function(res) {
        console.log(res.status);
        inventory.removeChild(item);
      })
    fetch("http://localhost:3000/api/players/" + playerId, {
      method: "PATCH",
      body: '{"attrib":"progress","value":"Escaped"}',
      headers: {
        "Content-type": "application/json"
      }
    })
    let hammer = document.getElementsByName("Hammer");
    let metal = document.getElementsByName("Metal");
    let anvil = document.getElementsByName("Anvil");
  } else if (item.name === "Hammer" || item.name === "Metal" || item.name === "Anvil") {
    alert("You need to find another item to use this!");
  } else if (item.name === "Hint1") {
    alert("Find a piece of metal! You might need it...")
    fetch("http://localhost:3000/api/items/" + item.json.id, {
        method: "PATCH",
        body: '{"attrib":"owner","value":"used"}',
        headers: {
          "Content-type": "application/json"
        }
      })
      .then(function(res) {
        console.log(res.status);
        inventory.removeChild(item);
      });
  } else if (item.name === "Hint2") {
    alert("Have you seen the anvil yet? It might be useful to you.")
    fetch("http://localhost:3000/api/items/" + item.json.id, {
        method: "PATCH",
        body: '{"attrib":"owner","value":"used"}',
        headers: {
          "Content-type": "application/json"
        }
      })
      .then(function(res) {
        console.log(res.status);
        inventory.removeChild(item);
      });
  } else if (item.name === "Hint3") {
    alert("FIND THE HAMMER!")
    fetch("http://localhost:3000/api/items/" + item.json.id, {
        method: "PATCH",
        body: '{"attrib":"owner","value":"used"}',
        headers: {
          "Content-type": "application/json"
        }
      })
      .then(function(res) {
        console.log(res.status);
        inventory.removeChild(item);
      });
  } else if (item.name === "Hint4") {
    alert("Get some kind of workbench to help you make a special tool!")
    fetch("http://localhost:3000/api/items/" + item.json.id, {
        method: "PATCH",
        body: '{"attrib":"owner","value":"used"}',
        headers: {
          "Content-type": "application/json"
        }
      })
      .then(function(res) {
        console.log(res.status);
        inventory.removeChild(item);
      });
  }
}

function message() {
  let messages;
  fetch("http://localhost:3000/api/messages/")
    .then((res) => res.json())
    .then(function(json) {
      messages = json;
      for (let i = 0; i < messages.length; i++) {
        if (messages[i]["location"] === player.loc) {
          if (player.dir === messages[i]["owner"]) {
            alert(messages[i].content);
          }
        }
      }
    });
}

// Loads in player name and location onto the information modal
function loadUserNameAndLoc() {
  document.getElementById("userName").innerHTML = "Hi, " + player.name + ". You are in " + player.loc.split('s/', ).join(' ').slice(1);
  document.getElementById("steps").innerHTML = player.steps;
  document.getElementById("direction").innerHTML = player.dir;
}

// Modal information box (Assisted by W3 School examples)
var information = document.getElementById('information');
var infoButton = document.getElementById("infoButton");
var span = document.getElementsByClassName("close")[0];

infoButton.onclick = function() {
  information.style.display = "block";
}

span.onclick = function() {
  information.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == information) {
    information.style.display = "none";
  }
}
