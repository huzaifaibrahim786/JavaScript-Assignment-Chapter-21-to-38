/*-----------------------------------------CHAPTER 26-30 ------------------------------------------ */

/* ------- QUESTION 1 ------- */

var value = prompt("Enter positive Integer ");
if (value > 0) {
    document.write("Number = " + value + "<br>");
    document.write("Round = " + Math.round(value) + "<br>");
    document.write("Floor = " + Math.floor(value) + "<br>");
    document.write("Ceil = " + Math.ceil(value) + "<br>");
} else {
    document.write("Please Enter Positive Integer" + "<br>")
}


/* ------- QUESTION 2 ------- */

var value = prompt("Enter positive Integer ");
if (value < 0) {
    document.write("Number = " + value + "<br>");
    document.write("Round = " + Math.round(value) + "<br>");
    document.write("Floor = " + Math.floor(value) + "<br>");
    document.write("Ceil = " + Math.ceil(value) + "<br>");
} else {
    document.write("Please Enter Negative Integer" + "<br>")
}


/* ------- QUESTION 3 ------- */

var value = prompt("Enter Integer ");

document.write("The absolute value of " + value + " is " + Math.abs(value) + "<br>");

/* ------- QUESTION 4 ------- */

var diceRoll = Math.floor(Math.random() * 6) + 1;
document.write('Random Dice Value ' + diceRoll + "<br>");


/* ------- QUESTION 5 ------- */

var value = Math.floor(Math.random() * 2)
if (value < 0.5) {
    document.write("Coin Value = " + value + " You Got Heads"+"<br>");
} else {
    document.write("Coin Value = " + value + " You Got Tails"+"<br>")
};


/* ------- QUESTION 6 ------- */


var random = Math.floor(Math.random() * (100 - 1) + 1);
document.write("Random Number between 1 and 100: " + random + "<br>")


/* ------- QUESTION 7 ------- */

var weight = prompt("Enter your weight ");
if (weight > 0) {
    document.write("The weight of user is " + weight + " Kilograms" + "<br>");
} else {
    document.write("Please Enter Correct Weight" + "<br>")
}


/* ------- QUESTION 8 ------- */

var random = Math.floor(Math.random() * (10 - 1) + 1);
var secretNumber = prompt("Enter Secret Number between 1 and 10 ");

if (secretNumber === random) {
    document.write("Congratulations"+"<br>")
} else {
    document.write("Try Again"+"<br>")
}