var players;
var info

//Load Leaderboard
function populateLeaders() {
  fetch("http://localhost:3000/api/players/")
    .then((res) => res.json())
    .then(function(json) {
      players = json;
      var table = document.getElementById("table");
      for (var i = 0; i < players.length; i++) {
        if (players[i].progress === "Escaped") {
          var newRow = table.insertRow(table.length);
          for (var j = 0; j < 2; j++) {
            if (j === 0) {
              info = players[i].name;
            } else if (j === 1) {
              info = players[i].steps;
            }
            var cell = newRow.insertCell(j);
            cell.innerHTML = info;
          }
        }
      }
      sortTable();
    });
}

//Sort the table by lowest amount of steps in ascending order
//Note: will only show a maximum of 10 players... look at css to see why :)
function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("table");
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length); i++) {
      shouldSwitch = false;
      x = rows[i].cells.item(1).innerHTML
      y = rows[i + 1].cells.item(1).innerHTML
      if (Number(x) > Number(y)) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

//Go back to main menu
function goToMenu() {
  window.location.href = "menu";
}

//Spacebar trigger the above function
document.body.addEventListener("keyup", function(e) {
  if (e.key == " ")
    goToMenu();
});
