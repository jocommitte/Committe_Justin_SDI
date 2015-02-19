/**
 Justin Committe
 Conditionals Worksheet
 February 17 2015

 **/

//Heavy enough?
//Do you weight enough to wrestle
var competitorsWeight = prompt('How much do you weigh', 240);
if(competitorsWeight>=250){
    console.log("The competitor qualifies for the heavyweight division!!!");
}else{
    console.log("The competitor needs to gain more weight");
}
var fahrenheitTemp;
var celsiusTemp;
var unit = prompt('Enter F for Fahrenheit or C for Celsius', "F");
    if (unit == "C") {
        celsiusTemp = prompt("Enter Degrees in Celsius", "0");
        celsiusTemp = parseFloat(celsiusTemp);
        fahrenheitTemp = (celsiusTemp * (9 / 5)) + 32;
        console.log("The Temperature is "+fahrenheitTemp+"\xB0 Fahrenheit.");
    }
    if (unit == "F") {
        fahrenheitTemp = prompt("Enter Degrees in Fahrenheit", "32");
        fahrenheitTemp = parseFloat(fahrenheitTemp);
        celsiusTemp = (fahrenheitTemp - 32) * (5 / 9);
        console.log("The Temperature is "+celsiusTemp+"\xB0 Celsius.");

    }

var mpg=prompt("How many miles per gallon is your car?", 32);
var gas=prompt("What percentage of your gas tank is left, in %",50);
var tankCapacity=prompt("How many gallons of gas can your car hold?", 24);
mpg = parseFloat(mpg);
gas = parseFloat(gas);
tankCapacity = parseFloat(tankCapacity);
var gasPercentage = gas*.01;

var gasLeft = tankCapacity * gasPercentage;
var distance = gasLeft *mpg;
if(distance >= 200){
    console.log("Yes you can make it without stopping for gas!");
}else{
    console.log("Your car can only make it " + distance + " more miles!");
}


