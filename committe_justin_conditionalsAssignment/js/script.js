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
var english;
english = prompt('What grade did you get in English Class?');
if(english == ''){
    prompt("Please enter a grade for english.");
}
var science = prompt("What grade did you get in Science Class?");
if(science == ''){
    prompt("Please enter a grade for science.");
}
math = parseInt(math);
english = parseInt(english);
science = parseInt(science);
var oneA;
var average = math + english + science;
passing = average >= 70 ? "you passed":"you failed";
if(passing == "you failed"){
    console.log('You Failed');
}else{
    if (math <90 && english<90 && science <90){
        oneA = false;
    }else{
        oneA = true;
    }
    if(oneA == true && passing == 'you passed'){
        console.log("Congratulations " + name + " ,You're Eligible for AP Classes")
    }
    else{
        console.log("Good Job "+ name +" ,you passed, but you are not eligible for AP classes!")
    }
}






