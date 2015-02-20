/**
 Justin Committe
 February 19 2015
 Conditionals Assignment
 **/
//add the scores from all of the classes together
//use result to get the average of all of them
//find out if he is passing or not. 70 or above is passing.
//if he is passing and he has at least one A then he is eligible for AP Classes

var name = prompt('What is your name?');
var math = prompt("What grade did you get in Math Class?");
if(math == ''){
    prompt("Please enter your grade for math.");
}
var history = prompt('What grade did you get in History Class?');
if(history == ''){
    prompt("Please enter a grade for history.");
}
var science = prompt("What grade did you get in Science Class?");
if(science == ''){
    prompt("Please enter a grade for science.");
}
math = parseFloat(math);
history = parseFloat(history);
science = parseFloat(science);
if (english < 90 && spanish < 90 && math <90 && history<90 && science <90){
    oneA = false;
}else{
    oneA = true;
}
passing = average >= 70 ? "you passed":"you failed";
console.log(passing);


