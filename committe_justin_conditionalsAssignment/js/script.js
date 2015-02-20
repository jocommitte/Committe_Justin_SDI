/**
 Justin Committe
 February 19 2015
 Conditionals Assignment
 **/
//add the scores from all of the classes together
//use result to get the average of all of them
//find out if he is passing or not. 70 or above is passing.
//if he is passing and he has at least one A then he is eligible for AP Classes

var name = prompt('What is your name?');//user input for name
var math = prompt("What grade did you get in Math Class?");//user input for math grade
if(math == ''){//if statement validates for if the information was not inputted
    prompt("Please enter your grade for math.");
}
var english = prompt('What grade did you get in English Class?');//user input for English grade
if(english == ''){//if there is an empty string then run this code
    prompt("Please enter a grade for english.");//if no input then tells user to write the grade
}
var science = prompt("What grade did you get in Science Class?");////user input for science class
if(science == ''){//if input is empty string then write the input
    prompt("Please enter a grade for science.");
}
math = parseInt(math);//turning the three strings below into numbers
english = parseInt(english);
science = parseInt(science);
var oneA;//initializing the oneA variable used to see if the user has atleast one a
var avg = (math + english + science)/3;//getting
console.log(avg);
var passing;
passing = avg >= 70 ? "you passed":"you failed";
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







