/*
 Justin Committe
 February 11, 2015
 Expressions Assignment
 */

var side1 = prompt("Short Side");
var side2 = prompt("Middle Side");
var side3 = Math.pow(side1,2) + Math.pow(side2,2);
var hello = Math.sqrt(side3);
var final = money_round(hello);
function money_round(hello) {
    return Math.ceil(hello * 100) / 100;
}
console.log(final)

document.getElementById("p1").innerHTML = "Congratulations "+ final + " is the length of your long side";

