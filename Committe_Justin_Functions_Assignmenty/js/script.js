/**
Justin Committe
 February 26th, 2015
 SDI Section1
 Functions Assignment
 */
var kind = prompt('Please type a 6 for florida lottery or a 5 for powerball');
var amount;
while(kind == ''){
    kind= prompt('Please enter a 6 for florida lottery or a 5 for powerball');
}
if(kind == 5){
    amount = 59
}else{
    amount = 53;
}

function lottery(kin,amt) {
    var balls = [];
    for (var i=1; i<=kin; i++) {

        var lottery = Math.floor(Math.random() * amt);
        balls.push(lottery)


    }
    return(balls);

}
console.log(lottery(kind,amount));
