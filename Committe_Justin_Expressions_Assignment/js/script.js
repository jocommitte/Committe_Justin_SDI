/*
 Justin Committe
 February 11, 2015
 Expressions Assignment
 */

var side1 = prompt("Short Side"); //initiating my side1 variable and prompting user to enter the length of short side of triangle
var side2 = prompt("Middle Side");//initiating side2 variable and prompt user to enter length of middle side of triangle
var side3 = Math.pow(side1,2) + Math.pow(side2,2);//Math.pow squares the side1 and side2 variables and adds them together
var hello = Math.sqrt(side3);//hello variable is the square root of the side3 variable
var final = money_round(hello);//final variable is calling the function money_round and inputting hello into the function
function money_round(hello) {//this is my function money_round and I input the third side unrounded
    return Math.ceil(hello * 100) / 100;//function returns the highest decimal place of hello taken down to 2 decimals
}
console.log(final)//writing out the answer in console

document.getElementById("p1").innerHTML = "Congratulations "+ final + " is the length of your long side";
//this allows the JavaScript to be accessed by the HTML through the id.  innerHTML is the text inside the html tag.
