
var player, cell, items, inventory;
console.log(userName);
window.onload = function() {
  fetch("http://localhost:3000/api/players"+userName)
    .then((res) => res.json())
    .then(function(json){
      player = json;
      console.log(player);
      // Should be a slash after api
      fetch("http://localhost:3000/api/"+player.loc)
        .then((res) => res.json())
        .then(loadCell);
    //   fetch("http://localhost:3000/api/items?owner="+player.loc)
    //     .then((res) => res.json())
    //     .then(loadItems);
    });
    // fetch("http://localhost:3000/api/items?owner=/actors/"+playerId)
    // .then((res) => res.json())
    // .then(loadInventory);
  }



//Return to title screen
function exitGame() {
    window.location.href = "menu";
}
  function loadCell(json) {
    cell = json;
    rendercell(cell);
  }

  function rendercell(cell) {
    let walls = document.querySelectorAll("main img");
    switch (player.dir) {
    case "north":
      walls[0].src = cell.west  ? "images/no-wall.png" : "images/wall-left.png";
      walls[1].src = cell.north ? "images/no-wall.png" : "images/wall-ahead.png";
      walls[2].src = cell.east  ? "images/no-wall.png" : "images/wall-right.png";
      break;
    case "south":
      walls[0].src = cell.east  ? "images/no-wall.png" : "images/wall-left.png";
      walls[1].src = cell.south ? "images/no-wall.png" : "images/wall-ahead.png";
      walls[2].src = cell.west  ? "images/no-wall.png" : "images/wall-right.png";
      break;
    case "east":
      walls[0].src = cell.north ? "images/no-wall.png" : "images/wall-left.png";
      walls[1].src = cell.east  ? "images/no-wall.png" : "images/wall-ahead.png";
      walls[2].src = cell.south ? "images/no-wall.png" : "images/wall-right.png";
      break;
    case "west":
      walls[0].src = cell.south ? "images/no-wall.png" : "images/wall-left.png";
      walls[1].src = cell.west  ? "images/no-wall.png" : "images/wall-ahead.png";
      walls[2].src = cell.north ? "images/no-wall.png" : "images/wall-right.png";
      break;
    }
  }

//Mouse actions: fwd, bwd, lft, rht
var fwd = document.getElementById("forward").addEventListener("click",function() {
    forward();
});

var bwd = document.getElementById("backward").addEventListener("click",function() {
    backward();
});

var lft = document.getElementById("left").addEventListener("click",function() {
    left();
});

var rht = document.getElementById("right").addEventListener("click",function() {
    right();
});

//Keyboard actions: fwd, bwd, lft, rht
document.body.addEventListener("keyup",function(e){
    switch(e.key ) {
        case "Escape":
        case " ":
             exitGame();
             break;
        case "ArrowLeft":
             left();
             break;
        case "ArrowUp":
             forward();
             break;
        case "ArrowRight":
             right();
             break;
        case "ArrowDown":
             backward();
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

//Console messages
function forward() {
    console.log("Move forward");
}

function backward() {
     console.log("Move backward");
}

function right() {
     console.log("Move rightward");
}

function left() {
    console.log("Move leftward");
}
