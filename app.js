/*----------------------------------------------CHAPTER 21-25---------------------------------------------------*/
/*----------------------------------------------CHAPTER 21-25---------------------------------------------------*/
/*----------------------------------------------CHAPTER 21-25---------------------------------------------------*/



/* ------- QUESTION 1 ------- */

var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");

var fullName = firstName + " " + lastName;

alert("Welcome " + fullName)

/* ------- QUESTION 2 ------- */

var favPhone = prompt("Enter Your Favorite Mobile hone Model")

document.write("My Favourite Mobile Phone Model Is " + favPhone + "<br>");
var length = favPhone.length;
document.write("Length Of String: " + length + "<br>");

/* ------- QUESTION 3 ------- */

var string = "Pakistani"
var index = string.indexOf("n");
document.write("String Is " + string + "<br>");
document.write("Index of n is: " + index + "<br>");

/* ------- QUESTION 4 ------- */

var string = "Hello World"
var index = string.lastIndexOf("l")
document.write("String Is " + string + "<br>");
document.write("Index of l is: " + index + "<br>");

/* ------- QUESTION 5 ------- */

var string = "Pakistani"
var index = string.charAt(3);
document.write("String Is " + string + "<br>");
document.write("Character at Index 3 is: " + index + "<br>");

/* ------- QUESTION 6 ------- */

var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");

var fullName = firstName.concat(" " + lastName);

alert("Welcome " + fullName)

/* ------- QUESTION 7 ------- */

var city = "Hyderabad"

for (var i = 0; i < city.length; i++) {
    if (city.slice(i, i + 5) === "Hyder") {
        var newCity = city.slice(0, i) + "Islam" + city.slice(i + 5);
    }
}

document.write("City Is " + city + "<br>");
document.write("City after Replacement is: " + newCity + "<br>");



/* ------- QUESTION 8 ------- */

var message = "Ali and Sami are best friends. They play cricket and football together."

var newStr = message.replace(/and/g, "or");

alert(newStr)


/* ------- QUESTION 9 ------- */

var value = "472"
document.write("Value = " + value + "<br>");
document.write("Type = " + typeof (value) + "<br>");
var num = parseInt(value);
document.write("Value = " + num + "<br>");
document.write("Type = " + typeof (num) + "<br>");


/* ------- QUESTION 10 ------- */

var dryFruit = prompt("Enter Your Dry Fruit ");
var upper = dryFruit.toUpperCase();

document.write("User Input = " + dryFruit + "<br>");
document.write("Upper Case = " + upper + "<br>");


/* ------- QUESTION 11 ------- */

var str = "javascript";
var res = str.charAt(0).toUpperCase() + str.slice(1);
document.write("User Input = " + str + "<br>");
document.write("Title Case = " + res + "<br>");


/* ------- QUESTION 12 ------- */


var num = 35.36;
var newStr = num.toString();
var str = newStr.replace(".", "");


document.write("Number = " + num + "<br>");
document.write("Result = " + str + "<br>");



/* ------- QUESTION 13 ------- */

const checkValidName = (username) => username.match(/[\@\.\,\!]/) === null;

var userName = prompt("Enter your Input: ");
while (!checkValidName(userName)) {
    alert("please enter a valid userName");
    userName = prompt("Enter your Input: ");
};


/* ------- QUESTION 14 ------- */

var A = ['cake', 'applepie', 'cookie', 'chips', 'patties']

var search = prompt("Search Here");

var search = search.toLowerCase();

if (A.indexOf(search) !== -1) {
    document.write(search + " is available in our bakery");
} else {
    document.write("We Are sorry, " + search + " is not available in our bakery"+"<br>");
}




/* ------- QUESTION 15 ------- */

var password = prompt("Enter Passowrd");
var paswd =  /^(?=.*[!@#$%^&*])[!@#$%^&*]$/;

for (var i = 0; i < password.length; i++) {
    if (password.charAt(0) == "0" || password.charAt(i) == "1" || password.charAt(i) == "2" || password.charAt(i) == "3" || password.charAt(i) == "4" || password.charAt(i) == "5" || password.charAt(i) == "6" || password.charAt(i) == "7" || password.charAt(i) == "8" || password.charAt(i) == "9") {
        document.write("Password cannot be start with number!"+"<br>");
    
    }else if(password.length <= 5){
        document.write("Password has to be 6 characters long!"+"<br>");
       
    }else if(password.value.match(paswd)){
        document.write("Password must Contain number and alphabet!"+"<br>");
      
    }else{
        document.write("Correct Password"+"<br>")
    }
    
}


/* ------- QUESTION 16 ------- */

var university = "University of Karachi"; 
var ar = university.split(''); 
var array = ar.join(" <br> ");
document.write( array +"<br>");


/* ------- QUESTION 17 ------- */


var string = prompt("Enter Your Input")
var index = string.lastIndexOf(string.length - 1);
var character = string.charAt(string.length - 1);
document.write("String Is " + string + "<br>");
document.write("Character at last Index is: " + character + "<br>");


/* ------- QUESTION 18 ------- */

var str = "the quick brown fox jumped over the lazy dog.";

var count = str.split("the").length-1

document.write("There are "+count+" occurrences(s) of word 'the' "+"<br>")





/*----------------------------------------------CHAPTER 26-30---------------------------------------------------*/
/*----------------------------------------------CHAPTER 26-30---------------------------------------------------*/
/*----------------------------------------------CHAPTER 26-30---------------------------------------------------*/




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




/*----------------------------------------------CHAPTER 31-34---------------------------------------------------*/
/*----------------------------------------------CHAPTER 31-34---------------------------------------------------*/
/*----------------------------------------------CHAPTER 31-34---------------------------------------------------*/


/* ------- QUESTION 1 ------- */

var rightNow = new Date();

document.write(rightNow + "<br>");


/* ------- QUESTION 2 ------- */

var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

var d = new Date();
document.write("The current month is " + monthNames[d.getMonth()] + "<br>");


/* ------- QUESTION 3 ------- */

var d = new Date();
var day = d.getDay();


if (day == 0) {
    document.write("Today is Sun " + "<br>");
} else if (day == 1) {
    document.write("Today is Mon " + "<br>");
} else if (day == 2) {
    document.write("Today is Tue " + "<br>");
} else if (day == 3) {
    document.write("Today is Wed " + "<br>");
} else if (day == 4) {
    document.write("Today is Thu " + "<br>");
} else if (day == 5) {
    document.write("Today is Fri " + "<br>");
} else if (day == 6) {
    document.write("Today is Sat " + "<br>");
}

/* ------- QUESTION 4 ------- */

var d = new Date();
var day = d.getDay();


if (day == 0) {
    document.write("Its Fun Day " + "<br>");
} else if (day == 6) {
    document.write("Its Fun Day " + "<br>");
} else {
    document.write("Its Not Fun Day " + "<br>");
}


/* ------- QUESTION 5 ------- */

var d = new Date();
var date = d.getDate();

if (date < 16) {
    document.write("First fifteen days of the month" + "<br>")
} else {
    document.write("Last fifteen days of the month" + "<br>")
}


/* ------- QUESTION 6 ------- */

var date1, date2;
date1 = new Date();
date2 = new Date("Jan 1, 1970");
var seconds = Math.abs(date1 - date2) / 1000;


var diff = (date1.getTime() - date2.getTime()) / 1000;
diff /= 60;
var minutes = Math.abs(Math.round(diff));

document.write("Current date : "+date1+" Elapsed milliseconds since January 1, 1970 is "+seconds+" Elapsed minutes since January 1,1970 is "+minutes+"<br>")




/* ------- QUESTION 7 ------- */

var d = new Date();
var time = d.getHours();

if (time > 12) {
    document.write("Its Pm" + "<br>")
} else {
    document.write("Its Am" + "<br>")
}



/* ------- QUESTION 8 ------- */

var d = new Date();
var laterDate = new Date("Dec 31, 2020");

document.write(laterDate + "<br>")


/* ------- QUESTION 9 ------- */

var date1, date2;
date1 = new Date();
date2 = new Date("June 18, 2015");
var res = Math.abs(date1 - date2) / 1000;
var days = Math.floor(res / 86400);
document.write(days + " days have passed from June 18 2015");


/* ------- QUESTION 10 ------- */


var date1, date2;
date1 = new Date();
date2 = new Date("June 18, 2015");
var seconds = Math.abs(date1 - date2) / 1000;
document.write("<br>On reference date : " + date1 + " " + seconds + " seconds had passed since bigginning of 2015" + "<br>");


/* ------- QUESTION 11 ------- */


var currentDate = new Date();
var oneYearFromNow = new Date();
oneYearFromNow.setHours(oneYearFromNow.getHours() - 1);
document.write("Current date : " + currentDate + " 1 Hour ago it was " + oneYearFromNow + "<br>")


/* ------- QUESTION 12 ------- */
var currentDate = new Date();
var oneYearFromNow = new Date();
oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() - 100);
document.write("Current date : " + currentDate + " 100 years back it was " + oneYearFromNow + "<br>")

/* ------- QUESTION 13 ------- */

var today = new Date();
var birthDate = new Date("4/18/1999");
var age = today.getFullYear() - birthDate.getFullYear();
var m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age = age - 1;

}
document.write("Your age is " + age + "<br>")


/* ------- QUESTION 14 ------- */

var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

var d = new Date();


var customerName = "Huzaifa Ibrahim"
var currentMonth = monthNames[d.getMonth()];
var numberOfUnit = 410;
var charges = 16;
var netAmoutPayable = numberOfUnit * charges;
var lateCharges = 350;
var grossAmountPayable = netAmoutPayable + lateCharges;

document.write("Customer Name: " + customerName + "<br>")
document.write("Month: " + currentMonth + "<br>")
document.write("Number of units: " + numberOfUnit + "<br>")
document.write("Charges per unit: " + charges + "<br>")
document.write("Net Amount Payable: " + netAmoutPayable + "<br>")
document.write("Late Payment Charges: " + lateCharges + "<br>")
document.write("Gross Amount Payable: " + grossAmountPayable + "<br>")


/*----------------------------------------------CHAPTER 35-38---------------------------------------------------*/
/*----------------------------------------------CHAPTER 35-38---------------------------------------------------*/
/*----------------------------------------------CHAPTER 35-38---------------------------------------------------*/



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