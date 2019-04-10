// Business Logic for AddressBook ---------
//creates empty contacts array and initialize current id at 0
function PiggyDice() {
  this.player = [],
  this.currentId = 0
}

PiggyDice.prototype.addPlayer = function(player) {
  player.id = this.assignId();
  this.players.push(player);
}

PiggyDice.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

// Business Logic for Players ---------
function Player(playerName, totalScore) {
  this.playerName = playerName;
  this.totalScore = totalScore;
}

var currentScore = 0;
function currentRoll() {
  var result = (Math.floor(Math.random() * 6) +1);
  // currentScore += result;
    if (result === 1) {
      currentScore = -1;

      alert("Womp womp. You rolled a 1. Your turn is over.");
    } else {
      currentScore;
    }
  return result;
};

var playerOne = new Player();
var playerTwo = new Player();

$(document).ready(function() {
  // attachContactListeners();
  $("form#nameInput").submit(function(event) {
    event.preventDefault();
    var player1name = $("input#playerOneName").val();
    var player2name = $("input#playerTwoName").val();
    $("#nameInput").hide();
    $("#playerOneInput").text(player1name);
    $("#playerTwoInput").text(player2name);
  });
  $("button#playButton").click(function(event) {
    event.preventDefault();
    console.log("sdfs");
    var result = currentRoll();
    $("#die").text(result);
    var current = currentScore += result;
    $("#playerOneScore").text(current);
  });
});
