/*-----------------------------------------CHAPTER 31-34 ------------------------------------------ */

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