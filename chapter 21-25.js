/*-----------------------------------------CHAPTER 21-25 ------------------------------------------ */

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