/**
Justin Committe
 February 26th, 2015
 SDI Section1
 Functions Assignment
 */
var kind = prompt('Please type a 1 for florida lottery and a 2 for powerball')

function lottery() {
    var balls = [];
    for (var i=1; i<=6; i++) {

        var lottery = Math.floor(Math.random() * 59);
        balls.push(lottery)
      return(balls);


    }
}
lottery();