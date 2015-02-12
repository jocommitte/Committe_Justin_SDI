/*
 Justin Committe
 February 11, 2015
 Expressions Assignment
 */
alert("find the third side and area of a right triangle")
var side1 = prompt("Short Side",2); //initiating my side1 variable and prompting user to enter the length of short side of triangle
var side2 = prompt("Middle Side",3);//initiating side2 variable and prompt user to enter length of middle side of triangle
var side4,side5;
side4=parseFloat(side1);
side5=parseFloat(side2);
var side3 = Math.pow(side4,2) + Math.pow(side5,2);//Math.pow squares the side1 and side2 variables and adds them together
var hello = Math.sqrt(side3);//hello variable is the square root of the side3 variable
var final = money_round(hello);//final variable is calling the function money_round and inputting hello into the function

var p = (side4 + side5 + final)/2;
var p2 = Math.sqrt(p*(p-side4)*(p-side5)*(p-final));
console.log(p2);
var finalArea = area_round(p2);
function area_round(p2) {//this is my function money_round and I input the third side unrounded
    return Math.ceil(p2 * 100) / 100;//function returns the highest decimal place of hello taken down to 2 decimals
}

function money_round(hello) {//this is my function money_round and I input the third side unrounded
    return Math.ceil(hello * 100) / 100;//function returns the highest decimal place of hello taken down to 2 decimals
}
console.log("Congratulations " +final+ " is the length of your long side")//writing out the answer in console
console.log(finalArea+" is the area of your Triangle")
document.getElementById("p1").innerHTML = "Congratulations "+ final + " is the length of your long side in your right triangle";
document.getElementById("p3").innerHTML = p2+" is the area of your right triangle!!"
//this allows the JavaScript to be accessed by the HTML through the id.  innerHTML is the text inside the html tag.
