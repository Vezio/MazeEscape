# Lights Out
Mechanics:
  -Clicking on a door will advance the page to the door’s room or reply with locked if player does not have access.

STORY BOARD:
  You wake up on the floor of a dark cellar. You don't remember your name, where you are, or how you got there.

Objective:
  Escape alive 
    -don't get killed by any of the traps or monsters
  find out who you are

  Turns out that you are the owner of the maze
    -you are a mad scientist who created the maze for the monster but it turned against you and trapped you
     in your own maze. 

TIMELINE:
  -CELLAR F0-R1
    -dark, cold, grimey, musty
  Events:
    -stairs lead up to a metal door with a simple key lock, the only exit.
    -a gross toilet in the corner, no water in it. looks like it hasn't been used in years.
    -large blood stain on the ground, a couple sets of metal shackles are looped around a support beam.
    -A rotting workbench in the corner
      -upon inspection: Junk: a rusty screw driver, a flashlight with no batteries, 2 paperclips, some string.
      -option to take any of these items.
  ROOM SOLUTION:
    -Player must possess 2 paperclips from workbench, use on metal door to pick lock.
      -RNG to determine how many times it takes to open the door with paperclips.
  
    -2 paperclips break. (Unable to repossess in inventory)
    -PROMPT: Use paperclips to pick door lock? (yes/no)
      -YES: RNG to determine how many times it takes to open the door with paperclips.
        -Success: Door is unlocked. Paper clips break.
        -Fail: If it was easy anyone could do it...
    -PROMPT: Use rusty screwdriver to pry open door? (yes/no)
      -YES: Screwdriver snapped. It was very brittle.
      -NO: *return*
    -PROMPT: Use string to open door? (yes/no)
      -YES: string snaps.
      -NO: *return*
    -Use flashlight to open door? (yes/no)
      -YES: flashlight smashes to pieces.
      -NO: *return*










  -Common Room (F1-R1)
    -Dimly lit. A rug in the middle of the room. Room has 4 rooms branching off of it via wooden doors.
      Door 1 leads to F1-R2, Door 2 leads to F1-R3, Door 3 leads to F1-R4, Door 4 leads to F1-R5,
      Doors 1 and 2 are on the light side of the room. Doors 3 and 4 are on the right side of the room.
    Events:
      -Doors 1, 2, and 3 are all unlocked. Door 4 remains unlocked. 
      -Door 4 has a picture of an eagle above it. (EAGLE’S NEST)
        -Only the eagle key can unlock this door.
        -Door 4 leads to the laboratory where the player uncovers all secrets and WINS
      -Door 1 leads to Dining room (F1-R2)
      -Door 2 leads to Kitchen (F1-R3)
      -Door 3 leads to Hallway (F1-R4)

Dining Room (F1-R2):
  -Only illumination are 3 centerpiece candles (almost burned up) on an old dining table in the middle of the room surrounded by chairs.
  -All windows are boarded up.
  -China cabinet displays fine china in glass doors.
    -3 drawers in bottom of china cabinet.
  Events:
    -Table: A dining room table. It is hard to move.
      -interaction with candles will be available later in the game.
    -Chairs: A dining room chair. They are hard to move.
    -China cabinet: The cabinet is filled with fine china plates. There are 3 drawers underneath. Inspect?
      -Which drawer would you like (1, 2, or 3 labeled from top to bottom)?
        -Drawer 1: Filled with papers and parchments. Most are severely faded or in a foreign text.
        -Drawer 2: Flashlight batteries. 
        -Drawer 3:

Kitchen (F1-R3):
  -A blinking dim bulb over the sink.
  -All windows are boarded up.
  -Sink is filled with dark red liquid. Unidentifiable chucks float around aimlessly.
  -Counters are disgusting but empty except for the occasional roach.
  -all the cupboard doors have been smashed in or are gone. The cupboards are empty.
  Events:
    -In random cupboard is a plastic spoon, covered in dust.
    -Sink:
      -Prompt: Search liquid with bare hands? (yes/no)
        -YES: You put both hands in sink. Arms start melting off. (DEAD)
        -NO: *return*
      -Second Prompt (if plastic spoon is in inventory): Search liquid with plastic spoon? (yes/no)
        -YES: …  …  ...you found a key! 
        -NO: *return*
      -Dark red liquid is hydrochloric acid mixed with dissolved flesh.
      -A key(1) obscured in the sink. (Player doesn’t know.)




Hallway (F1-R5):
  -Long hallway with door 1 (F1-R6) and door 2 (F1-R7) on the left and right respectfully.
  -doorway to staircase (F1-R8) at the end of hallway.
  -Both door 1 and door 2 are locked. 

Staircase (F1-R8):
  -Starting on F1 and proceeds to F2 and F3. 
  -Doors to second floor hallway (F2-R1) and third floor hallway (F3-R1) are both locked. 
  -Floor 2 Door requires the KITCHEN_KEY to unlock.

Second Floor Hallway (F2-R1):
  -Straight ahead leads into the common room (F2-R2) via open doorway.
  -One door on side leads to bathroom (F2-R3)

2nd Floor Common Room (F2-R2): 
  -A coffee table surrounded by a sofa and 2 chairs.
  -A fireplace (not lit) (contains key upon inspection)
  -Paintings (faded) 



