//challenge one in days

function ageindays() {
    var birthyear = prompt("what year were you born?");
    var ageindayss = (2020 - birthyear) * 365;
    var h1 = document.createElement("h1");
    var textanswer = document.createTextNode("you are" + ageindayss + "days old");
    h1.setAttribute("id", "ageindays");
    h1.appendChild(textanswer);
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
    document.getElementById("ageindays").remove();
}

//Challenge 2

function generateCat() {
    var Image = document.createElement("img");
    var div = document.getElementById("flex-cat-gen");
    Image.src =
        "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(Image);
}

//Challenge 3

function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log("Computer choice", botChoice);

    results = decideWinner(humanChoice, botChoice); // [0,1] human lost | bot won
    console.log(results);

    message = finalMessage(results);
    console.log(message); //you won

    rpsfrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ["rock", "paper", "scissors"][number];
}

function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        rock: { scissors: 1, rock: 0.5, paper: 0 },
        paper: { rock: 1, paper: 0.5, scissors: 0 },
        scissors: { paper: 1, scissors: 0.5, rock: 0 },
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerChoice = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerChoice];
}

function finalMessage([yourScore, computerChoice]) {
    if (yourScore === 0) {
        return { message: "you lost!", color: "red" };
    } else if (yourScore === 0.5) {
        return { message: "You Tied!", color: "yellow" };
    } else {
        return { message: "you won!", color: "green" };
    }
}

function rpsfrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        rock: document.getElementById("rock").src,
        paper: document.getElementById("paper").src,
        scissors: document.getElementById("scissors").src,
    };
    //removing all the images
    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    var humanDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var messageDiv = document.createElement("div");

    humanDiv.innerHTML =
        "<img src='" +
        imagesDatabase[humanImageChoice] +
        "'  height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24,1):'>";
    messageDiv.innerHTML =
        "<h1 style='color:" +
        finalMessage["color"] +
        "; font-size: 60px; padding: 30px ; '>" +
        finalMessage["message"] +
        "</h1>";
    botDiv.innerHTML =
        "<img src='" +
        imagesDatabase[botImageChoice] +
        "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24,1):'>";

    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(messageDiv);
    document.getElementById("flex-box-rps-div").appendChild(botDiv);
}

//Challenge 4:

var all_buttons = document.getElementsByTagName("button");

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1]);
}

console.log(copyAllButtons);

function buttonsColorChange(buttonThingy) {
    if (buttonThingy.value === "red") {
        buttonsRed();
    } else if (buttonThingy.value === "green") {
        buttonsGreen();
    } else if (buttonThingy.value === "reset") {
        buttonsColorReset();
    } else if (buttonThingy.value === "random") {
        randomColors();
    }
}

function buttonsRed() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add("btn-danger");
    }
}

function buttonsGreen() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add("btn-success");
    }
}

function buttonsColorReset() {
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors() {
    var choices = ["btn-danger", "btn-warning", "btn-success", "btn-primary"]
    for (let i = 0; i < all_buttons.length; i++) {
        var randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}