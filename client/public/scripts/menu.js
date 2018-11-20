
    // Initialize Variables
    var userName = "";
    // Menu Selector
    document.body.addEventListener("keyup",function(e){
        switch(e.key ) {
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
        //TODO: Catch user mistakes
          //default:
              //alert("An invalid choice has been selected!")
        }
    });

    //Creates a new player based on the user name the user gives at start.
    function newGame() {
        userName = prompt("What would you like as your user name?");
        //Check for user name with all spaces
        if (!userName.replace(/\s/g, '').length) {
          alert("Your user name only contained spaces! Please enter a valid user name.");
          //Check for nulls, if not null then create the player
        } else if (userName !== null){
                alert("Good luck to you, " + userName);
                window.location.href = "maze";

                fetch("http://localhost:3000/api/players", {
                  method:"POST",
                  body: '{"name":"'+userName+'"}',
                  headers: {
                    "Content-type": "application/json"
                }})
                 .then(function(res){
                   console.log(res.status);
                });
          //Feedback for all other uncaught exceptions, if any
        } else {
          alert("Please enter a valid user name.")
        }
    }

    function launchSavedGame() {
        window.location.href = "maze";
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
            document.getElementById("Off").style.color="White";
            document.getElementById("On").style.color="Red";
            myAudio.play()
        }
        function off() {
            document.getElementById("On").style.color="White";
            document.getElementById("Off").style.color="Red";
            myAudio.pause();
        }
        return myAudio.paused ? on() : off();
    }

    function credits() {
        window.location.href = "credits";
    }
