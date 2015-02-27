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
    amount = 59;
}else{
    amount = 53;
}
function powerBall(){
    var pb = Math.floor(Math.random()*35);
    return(pb);
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
function lottery(kin,amt) {
    var balls = [];

    for (var i = 1; i < amt; i++) {
        balls.push(i);
    }

    while (balls.length > kin) {
        balls.splice(Math.floor(Math.random() * balls.length), 1);
    }

    return balls;
};
if(kind == 5){
    console.log("Here are your Lottery Numbers "+lottery(kind,amount)+" and here is your powerball number: "+ powerBall()+" Yaaay!");

}else{
    console.log("Here are your Florida Lottery Numbers "+lottery(kind,amount)+"!!");

}


