/*side
 Justin Committe
 February 11, 2015
 Expressions Assignment
 */
alert("find the third side and area of a right triangle");//telling the user what the program is about
var units = prompt("What Units are you using", "inches");//initiating the variable with the unit of measurement
var side1 = prompt("Short Side",6); //initiating my side1 variable and prompting user to enter the length of short side of triangle
var side2 = prompt("Middle Side",8);//initiating side2 variable and prompt user to enter length of middle side of triangle
var side4,side5;//variables to store the prompt strings as numbers
side4=parseFloat(side1);//creating a number out of a string
side5=parseFloat(side2);//creating a number out of a string
var side3 = Math.pow(side4,2) + Math.pow(side5,2);//Math.pow squares the side1 and side2 variables and adds them together
var hello = Math.sqrt(side3);//hello variable is the square root of the side3 variable
var final = money_round(hello);//final variable is calling the function money_round and inputting hello into the function
var sides = [side4,side5, final];//my array of the three sides
var p = (side4 + side5 + final)/2;//finding half of the perimeter for Herons Formula
var p2 = Math.sqrt(p*(p-sides[0])*(p-sides[1])*(p-sides[2]));//equation for area of a triangle..Herons Formula
var finalArea = area_round(p2);//calling the function that will round the number to a whole number
function area_round(p2) {//This function returns a whole number rounded down
    return Math.floor(p2);//function returns the highest decimal place of hello taken down to 2 decimals
}

function money_round(hello) {//this is my function money_round and I input the third side unrounded
    return Math.ceil(hello * 100) / 100;//function returns the highest decimal place of hello taken down to 2 decimals
}
console.log("Congratulations " +final+' '+units+ " is the length of the hypotenuse of your triangle!!");//writing out the answer in console
console.log(finalArea+ '\xB2 '+units+ " is the area of your right triangle!!");//printing out the area of the right triangle and the units inputed by user
document.getElementById("p1").innerHTML = "Congratulations "+ final+' '+ units + " is the length of the hypotenuse in your right triangle!!";//sending the variables to HTML
document.getElementById("p3").innerHTML = finalArea+"\xB2 " +units+ " is the area of your right triangle!!";
//this allows the JavaScript to be accessed by the HTML through the id.  innerHTML is the text inside the html tag.
