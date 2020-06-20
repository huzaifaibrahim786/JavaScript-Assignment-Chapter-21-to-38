/*-----------------------------------------CHAPTER 35-38 ------------------------------------------ */

/* ------- QUESTION 1 ------- */

function date() {
    var date = new Date();
    document.write(date + "<br>")
}

date();

/* ------- QUESTION 2 ------- */


function greeting(firstname, lastname) {
    document.write("Welcome " + firstname + " " + lastname + "<br>")
}

var firstname = prompt("Enter First Name : ")
var lastname = prompt("Enter Last Nmae : ")

greeting(firstname, lastname);


/* ------- QUESTION 3 ------- */

function sum(num1, num2) {
    var result = num1 + num2;
    return result;
}

var num1 = prompt("Enter 1st Number : ")
var num2 = prompt("Enter 2nd Number : ")
var num1 = parseInt(num1)
var num2 = parseInt(num2)

document.write("The Sum Is : " + sum(num1, num2) + "<br>")


/* ------- QUESTION 4 ------- */

function calculator(num1, num2, opt) {
    if (opt === "+") {
        var result = num1 + num2;
        document.write("The Sum of " + num1 + " and " + num2 + " is " + result + "<br>")
    } else if (opt === "-") {
        var result = num1 - num2;
        document.write("The Subtraction of " + num1 + " and " + num2 + " is " + result + "<br>")
    } else if (opt === "*") {
        var result = num1 * num2;
        document.write("The Multiplication of " + num1 + " and " + num2 + " is " + result + "<br>")
    } else if (opt === "/") {
        var result = num1 / num2;
        document.write("The Division of " + num1 + " and " + num2 + " is " + result + "<br>")
    } else if (opt === "%") {
        var result = num1 / num2;
        document.write("The Modulus of " + num1 + " and " + num2 + " is " + result + "<br>")
    } else {
        document.write("Invalid Operator" + "<br>")
    }
}

var num1 = prompt("Enter 1st Number : ")
var num2 = prompt("Enter 2nd Number : ")
var opt = prompt("Enter Operator ( + , - , * , / , % ) : ")
var num1 = parseInt(num1)
var num2 = parseInt(num2)

calculator(num1, num2, opt)


/* ------- QUESTION 5 ------- */

function square(num) {
    var square = num * num;
    return square;
}

var num = prompt("Enter Number for finding square of it : ")
var num = parseInt(num)
document.write("The Square Of " + num + " is " + square(num) + "<br>")

/* ------- QUESTION 6 ------- */



function Factorial(num) {
    var ans = 1;

    for (var i = 2; i <= num; i++)
        ans = ans * i;
    return ans;
}

var num = prompt("Enter Number for finding Factorial of it : ")
var num = parseInt(num)
document.write("The Factorial Of " + num + " is " + Factorial(num) + "<br>")


/* ------- QUESTION 7 ------- */


function getNumbers(x, y) {
    var numbers = [];
    for (var i = ++x; i < y; i++) {
        numbers.push(i);
    }
    return numbers;
}

var num1 = prompt("Enter 1st Number : ")
var num2 = prompt("Enter 2nd Number : ")
var result = getNumbers(num1, num2);
document.write("The Numbers Between " + num1 + " and " + num2 + " is " + result + "<br>")


/* ------- QUESTION 8 ------- */



function calculateHypotenuse() {

    function calculateSquare(base, perpendicular) {
        var baseSquare = base * base
        var perpendicularSquare = perpendicular * perpendicular
        var result = baseSquare + perpendicularSquare;
        return result;
    }

    document.write("The Hypotenuse of base " + base + " and perpendicular " + perpendicular + " is " + calculateSquare(base, perpendicular) + "<br>")

}
var base = prompt("Enter base value : ")
var perpendicular = prompt("Enter perpendicular value : ")
var base = parseInt(base)
var perpendicular = parseInt(perpendicular)
calculateHypotenuse(base, perpendicular)


/* ------- QUESTION 9 ------- */

var length = prompt("Enter a whole number for the length of your rectangle.");
var width = prompt("Enter a whole number for the width of your rectangle.");

function area(length, width) {
    return length * width;
}


document.writeln('The area of your rectangle is ' + area(length, width) + "<br>");


/* ------- QUESTION 10 ------- */


function check_Palindrome(str_entry) {

    var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
    var ccount = 0;

    if (cstr === "") {
        document.writeln("Nothing found!" + "<br>");
        return false;
    }

    if ((cstr.length) % 2 === 0) {
        ccount = (cstr.length) / 2;
    } else {

        if (cstr.length === 1) {
            document.writeln("Entry is a palindrome." + "<br>");
            return true;
        } else {

            ccount = (cstr.length - 1) / 2;
        }
    }

    for (var x = 0; x < ccount; x++) {
        if (cstr[x] != cstr.slice(-1 - x)[0]) {
            document.writeln("Entry is not a palindrome." + "<br>");
            return false;
        }
    }
    document.writeln("The entry is a palindrome." + "<br>");
    return true;
}

var str_entry = prompt("Enter a String to check its palindrome or not.");
check_Palindrome(str_entry);


/* ------- QUESTION 11 ------- */


function uppercase(str) {
    var array1 = str.split(' ');
    var newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(' ');
}

var str = prompt("Enter a String to capatalize each word.");
document.write("The string is : " + str + "<br>")
document.write("The Upper Case Of String Is " + uppercase(str) + "<br>")


/* ------- QUESTION 12 ------- */


function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
var str = prompt("Enter a String to find longest word.");
document.write("The string is : " + str + "<br>")
document.write("The Longest Word Of String Is " + longestWord(str) + "<br>")

/* ------- QUESTION 13 ------- */


function char_count(str, letter) {
    var letter_Count = 0;
    for (var position = 0; position < str.length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}

document.write(char_count('JSResourceS.com', 'o')+"<br>");


/* ------- QUESTION 14 ------- */


function calcCircumference(){
    var circumference = Math.PI * 2 * radius;
    document.write("The circumference is " + circumference+"<br>");
}

function calcArea(){
    var area = Math.PI * radius * radius;
    document.write("The area is " + area+"<br>");
}

var radius = prompt("Enter a Radius.");
calcCircumference(radius)
calcArea(radius)