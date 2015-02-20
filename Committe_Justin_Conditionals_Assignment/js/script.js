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
var english = prompt('What grade did you get in English Class?', '90');
var spanish = prompt('What grade did you get in Spanish Class?', '80');
var math = prompt("What grade did you get in Math Class?", "70");
var history = prompt('What grade did you get in History Class?', "60");
var science = prompt("What grade did you get in Science Class?", "50");
var passing;
var oneA;

english = parseFloat(english);
spanish = parseFloat(spanish);
math = parseFloat(math);
history = parseFloat(history);
science = parseFloat(science);
var ct = [english,spanish,math,history,science];

var average = (ct[0] + ct[1] + ct[2] +ct[3] +ct[4]) / 5;
if (english < 90 && spanish < 90 && math <90 && history<90 && science <90){
    oneA = false;
}else{
    oneA = true;
}
passing = average >= 70 ? true:false;
console.log(passing);


