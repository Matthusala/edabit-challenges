function calculatePoints(wins, draws, losses) {
  var totalPoints = wins * 3 + draws * 1 + losses * 0;
  return totalPoints;
}

var numberOfWins = 5;
var numberOfDraws = 2;
var numberOfLosses = 3;

var totalPoints = calculatePoints(numberOfWins, numberOfDraws, numberOfLosses);
console.log("The football team has " + totalPoints + " points.");
