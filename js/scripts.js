// Business Logic for AddressBook ---------
//creates empty contacts array and initialize current id at 0
function PiggyDice(player) {
  this.players = [],
  this.currentId = -1
}

PiggyDice.prototype.addPlayer = function(player) {
  player.id = this.assignId(),
  this.players.push(player)
}

PiggyDice.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

// Business Logic for Players ---------
function Player(playerName) {
  this.playerName = playerName,
  this.currentScore = 0,
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
  if (activeIndex === 0){
    this.players[0].isActive = false;
    this.players[1].isActive = true;
  } else {
    this.players[0].isActive = true;
    this.players[1].isActive = false;
  }
}

PiggyDice.prototype.holdSwitch = function(){
  this.switchActive();
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
        $("#die").text(1);
        // alert("Womp womp. You rolled a 1. Your turn is over.");
        game.switchActive();
      } else {
        playerOne.currentScore += result;
        $("#playerOneScore").text(playerOne.currentScore);
        $("#die").text(result);
      if (playerOne.currentScore >= 10) {
        $("#winner").show();
        $(".row").hide();
        }
      }
      return false;
    }
    if (playerTwo.isActive) {
      if (result === 1) {
        playerTwo.currentScore = 0;
        $("#playerTwoScore").text(playerTwo.currentScore);
        $("#die").text(1);
        // alert("Womp womp. You rolled a 1. Your turn is over.");8888
        game.switchActive();
      } else {
        playerTwo.currentScore += result;
        $("#playerTwoScore").text(playerTwo.currentScore);
        $("#die").text(result);
      if (playerTwo.currentScore >= 10) {
        $("#winner").show();
        $(".row").hide();
      }
      return false;
    }

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
    currentRoll();
  });
  $("button#holdButton").click(function(event){
    event.preventDefault();
    game.holdSwitch();
  });

  // $("#winner").hide();

});
