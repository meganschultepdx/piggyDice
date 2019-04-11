// Business Logic for AddressBook ---------
//creates empty contacts array and initialize current id at 0
function PiggyDice(player) {
  this.players = [],
  this.currentId = -1
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
function Player(playerName) {
  this.playerName = playerName,
  this.currentScore = 0,
  this.totalScore = 0,
  this.currentId = 0,
  this.isActive = false
}

//very helpful!! to find which player is active.
PiggyDice.prototype.getActiveIndex = function(){
  for (i=0; i < this.players.length; i++){
    if (this.players[i].isActive){
      return i;
    }
  }
}

PiggyDice.prototype.switchActive = function() {
  var activeIndex = this.getActiveIndex();
  console.log(activeIndex);
  if (activeIndex === 0){
    this.players[0].isActive = false;
    this.players[1].isActive = true;
  } else {
    this.players[0].isActive = true;
    this.players[1].isActive = false;
  }
}
var playerOne = new Player();
var playerTwo = new Player();
var game = new PiggyDice();
game.addPlayer(playerOne);
game.addPlayer(playerTwo);
playerOne.isActive = true;

var currentScore = 0;
function currentRoll() {
  var result = (Math.floor(Math.random() * 6) +1);
    if (playerOne.isActive) {
      if (result === 1) {
        playerOne.currentScore = 0;
        $("#playerOneScore").text(playerOne.currentScore);
        alert("Womp womp. You rolled a 1. Your turn is over.");
        game.switchActive();
      } else {
        playerOne.currentScore += result;
        console.log(playerOne.currentScore);
        $("#playerOneScore").text(playerOne.currentScore);
        $("#die").text(result);
      }
      return false;
    }
    if (playerTwo.isActive) {
      if (result === 1) {
        playerTwo.currentScore = 0;
        $("#playerTwoScore").text(playerTwo.currentScore);
        alert("Womp womp. You rolled a 1. Your turn is over.");
        game.switchActive();
      } else {
        playerTwo.currentScore += result;
        $("#playerTwoScore").text(playerTwo.currentScore);
        $("#die").text(result);
      }
      return false;
    }
};

// UI Logic

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
    // console.log("sdfs");
    currentRoll();
    // var current = currentScore += result;

  });
});
