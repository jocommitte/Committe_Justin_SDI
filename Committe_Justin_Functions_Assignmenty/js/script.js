/**
Justin Committe
 February 26th, 2015
 SDI Section1
 Functions Assignment
 */
var kind = prompt('Please type a 6 for Florida Lottery or a 5 for Powerball');//finding and saving type of lottery
var amount;//initializing the amount variable
while(kind != "6" && kind !='5'){//making sure the answer is either 5 or 6
    kind= prompt('Please enter a 6 for Florida Lottery or a 5 for Powerball');//if it's not one of those, then prompt them again
}
if(kind == 5){//if the number is 5 then it's powerball
    amount = 59//powerball numbers are between 1 and 59
}else{//if not powerball number which is 5 then any other number will run this, but the only possible other option is 6
    amount = 53;//florida lottery is between 1 and 53
}
function powerBall(){//my function powerball
    var pb = Math.floor(Math.random()*35);//use math.random times 35 to get a number between one and 35, math.floor is to round it to whole number
    return(pb);//returning this when the function is called
}
//function lottery(kin,amt) {
//    var balls = [];
//    for (var i=1; i<=kin; i++) {
//
//        var lottery = Math.floor(Math.random() * amt);
//        balls.push(lottery)
//
//
//    }
//    return(balls);
//
//}
function lottery(kin,amt) {//my function lottery, with the parameters kin, and amt, which input the amount of numbers and the range
    var balls = []; //initializing the balls array

    for (var i = 1; i < amt; i++) {//for loop which gets all the numbers that amt tells it to
        balls.push(i);//then pushes all of these numbers into the balls array one at a time until it reaches the amount..amt it needs
    }
            //this is where we take the numbers out
    while (balls.length > kin) {//while the length of the balls array is greater than the parameter kin which will be 5 or 6
        balls.splice(Math.floor(Math.random() * balls.length), 1);//take one out of the array.  we find that by multiplying math.random by the length of the balls array
    }

    return balls;//return the array as the answer
};
if(kind == 5){//this is how we do the right output.  using if kind = 5, which means it's a powerball number then
    console.log("Here are your Powerball Lottery Numbers "+lottery(kind,amount)+" and here is your Powerball number: "+ powerBall()+" Yaaay!");//print out the answer and the powerball answer

}else{//the only other else is 6 so this will run the Florida lottery numbers with no duplicates
    console.log("Here are your Florida Lottery Numbers "+lottery(kind,amount)+"!!");

}


