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
if(name == ''){//validating that something is entered into the name category
    name = prompt("Please enter your name.");
}
var math = prompt("What grade did you get in Math Class?");//user input for math grade
if(math == ''){//if statement validates for if the information was not inputted
   math =  prompt("Please enter your grade for math.");
}
var english = prompt('What grade did you get in English Class?');//user input for English grade
if(english == ''){//if there is an empty string then run this code
    english = prompt("Please enter a grade for english.");//if no input then tells user to write the grade
}
var science = prompt("What grade did you get in Science Class?");////user input for science class
if(science == ''){//if input is empty string then write the input
    science = prompt("Please enter a grade for science.");
}
math = parseInt(math);//turning the three strings below into numbers
english = parseInt(english);
science = parseInt(science);
var oneA;//initializing the oneA variable used to see if the user has at least one it's a boolean
var avg = (math + english + science)/3;//getting the average of all the classes
var passing;//initializing the passing variable used to tell if the average grade is 70 or above
passing = avg >= 70 ? "you passed":"you failed";//ternary statement returning you passed if the average is above or equal to 70
if(passing == "you failed"){//if statement returning you failed if passing equals you failed.
    console.log('You Failed');
}else{//if you did not fail then do the rest of the code
    if (math <90 && english<90 && science <90){//if each individual grade is less than 90 then there are no A's
        oneA = false;//means oneA is false and there are no A's
    }else{
        oneA = true;//means there is at least one a and oneA is true
    }
    if(oneA == true && passing == 'you passed'){//if there is one a and you've passed and are eligible for AP
        console.log("Congratulations " + name + ", You're Eligible for AP Classes!")
    }
    else{// if you make it to this point then you've automatically passed but you are not eligible for AP classes.
        console.log("Good Job "+ name +", you passed, but you are not eligible for AP classes!")
    }
}

// I used 0 for math, 0 for english, and 0 for science and got 'you failed'
//I used 70 for math, 70 for english, and 70 for science and got "Good Job jo, you passed, but you are not eligible for AP classes!"
//I used 70 for math, 55 for english, and 99 for science and got "Congratulations jo, You're Eligible for AP Classes!"





