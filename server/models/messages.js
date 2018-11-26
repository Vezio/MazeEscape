function Message(owner, location, content) {
  this.owner       = owner; //what wall (north wall, south wall etc)
  this.location    = location; //what cell
  this.content     = content; //what message says
}

let messages = [
    new Message("east", "/cells/0/1", "Test message info")
];

let exists = (x) => typeof x !== 'undefined'

// messages.forEach((msg, idx) => msg.id = idx);

//List all items in the game
exports.list = () => messages;

//List a specific item in the game
exports.read = (i) => messages[i];

exports.create = (owner, location, content) => messages.push(new Message(owner, location, content)) - 1;
