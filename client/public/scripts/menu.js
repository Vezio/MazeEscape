// Menu Selector
document.body.addEventListener("keyup", function(e) {
  switch (e.key) {
    case "1":
      newGame();
      break;
    case "2":
      launchSavedGame();
      break;
    case "3":
      howToPlay();
      break;
    case "4":
      leaderboard();
      break;
    case "5":
      togglePlay();
      break;
    case "6":
      credits();
      break;
  }
});

//Creates a new player based on the user name the user gives at start.
function newGame() {
  let userName = " ";
  let playerId = "";
  let player; //all players
  let found = false;
  var letters = /^[a-zA-Z]+$/;
  userName = prompt("What would you like as your user name? Please only use letters!");
  //Check for user name with all spaces
  if(!userName.match(letters)){
    alert("You can only create a user name with letters!")
  //Check for user name with numbers, I would prefer users to have only letters, but the
  //the game can work with numbers in username if another person wanted it as such.
  }else if (!userName.replace(/\s/g, '').length) {
    alert("Your user name only contained spaces! Please enter a valid user name.");
    //Check for nulls
  } else if (userName !== null) {
    fetch("http://localhost:3000/api/players")
      .then((res) => res.json())
      .then(function(json) {
        player = json;
        //Check if the name is available
        for (let i = 0; i < player.length; i++) {
          if (player[i]["name"] === userName.toString()) {
            found = true;
          }
        }
        //If the name is available, create the account and pass to maze.
        if (found === false) {
          alert("Good luck to you, " + userName);
          fetch("http://localhost:3000/api/players", {
              method: "POST",
              body: '{"name":"' + userName + '"}',
              headers: {
                "Content-type": "application/json"
              }
            })
            .then(function(res) {
              console.log(res.status);
              sessionStorage.setItem("playerName", userName);
              window.location.href = "maze";
            });
        } else {
          alert(userName + ", has been taken already!");
        }
      });
    //Feedback for all other uncaught exceptions, if any
  } else {
    alert("Please enter a valid user name.");
  }
}

function launchSavedGame() {
  let userName = " ";
  let playerId = "";
  let player; //all players
  let found = false;
  userName = prompt("Back for more huh? Enter your user name to continue where you left off!");
  //Get all players, compare the username the user has provided with the existing players
  fetch("http://localhost:3000/api/players")
    .then((res) => res.json())
    .then(function(json) {
      player = json;
      //Check if the name exists
      for (let i = 0; i < player.length; i++) {
        if (player[i]["name"] === userName.toString()) {
          found = true;
        }
      }
      //If the name is available, create the account and pass to maze.
      if (found === true) {
        alert("Good luck to you, " + userName);
        sessionStorage.setItem("playerName", userName);
        window.location.href = "maze";
      } else {
        alert("You entered: " + userName + ". Sorry, we couldn't find you. Double check your spelling!");
      }
    });
}

function howToPlay() {
  window.location.href = "about";
}

function leaderboard() {
  window.location.href = "leaders";
}

//Grab audio element, if it is clicked and is paused, then play.
//If it is clicked and is playing, then pause
function togglePlay() {
  var myAudio = document.getElementById("myAudio");

  function on() {
    document.getElementById("Off").style.color = "White";
    document.getElementById("On").style.color = "Red";
    myAudio.play()
  }

  function off() {
    document.getElementById("On").style.color = "White";
    document.getElementById("Off").style.color = "Red";
    myAudio.pause();
  }
  return myAudio.paused ? on() : off();
}

function credits() {
  window.location.href = "credits";
}
