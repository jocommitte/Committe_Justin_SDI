/*
 Justin Committe
 February 11, 2015
 Expressions Assignment
 */

var side1 = prompt("Short Side");
var side2 = prompt("Middle Side");
var side3 = Math.pow(side1,2) + Math.pow(side2,2);
var final = Math.sqrt(side3);
alert(final);
document.getElementById("p1").innerHTML = final + " is the length of your long side";

