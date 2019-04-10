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
function Player(playerName, playerScore) {
  this.playerName = playerName;
  this.playerScore = playerScore;
}

// Logic for playerScore
function currentRoll() {
  var rollDie = (math.floor(math.random() * 6) +1);
  return rollDie;
}

var playerOne = new Player();
var playerTwo = new Player();

function displayContactDetails(addressBookToDisplay) {  var contactsList = $("ul#contacts");
  var htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
};

function showContact(contactId) {
  var contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);
  $(".phone-number").html(contact.phoneNumber);
  $(".personal-email").html(contact.address.personalEmail);
  $(".work-email").html(contact.address.workEmail);
  $(".home-address").html(contact.address.homeAddress);
  $(".summer-home-address").html(contact.address.summerHomeAddress);
//declares a var buttons and sets it to equal the element with the id of buttons
  var buttons = $("#buttons");
//removes all child (elements) nodes of the set of matched elements from the DOM
  buttons.empty();
//adds to the top of child (li) of parent (button) a string + the id of the local object (contact) + string
  buttons.append("<button class='deleteButton' id=" +  + contact.id + ">Delete</button>");
}
//declaring function attachContactListeners that accepts no argument
function attachContactListeners() {
//when the on function is triggered by the event "click" by jq function it adds an event listener
  $("ul#contacts").on("click", "li", function() {
//this runs function showContact(passing one argument the id of il)
    showContact(this.id);
  });

  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });
};

$(document).ready(function() {
// run the function attachContactListeners with no argument
  attachContactListeners();
//when submitted run the function below with the argument event
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
  //creat a new variable called input#firstName and assign it the value jquery returned
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var inputtedPersonalEmail = $("input#new-personal-email").val();
    var inputtedWorkEmail = $("input#new-work-email").val();
    var inputtedHomeAddress = $("input#new-home-address").val();
    var inputtedSummerHomeAddress = $("input#new-summer-home-address").val();
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-phone-number").val("");
    //$("input#new-email").val("");
    $("input#new-personal-email").val("");
    $("input#new-work-email").val("");
    $("input#new-home-address").val("");
    $("input#new-summer-home-address").val("");
  //creating a variable called newContact and assigning the value to a new instance of the contact object and passing/accepting three values
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber, inputtedPersonalEmail, inputtedWorkEmail, inputtedHomeAddress, inputtedSummerHomeAddress);
//we're running the method addContact under the object addressBook and passing variable newContact
    addressBook.addContact(newContact);
//runs the displayContactDetails function passing the argument addressBook
    displayContactDetails(addressBook);
    }
  })
})


// if(".form-control" === "") {
//   $("#show-contact").hide();
