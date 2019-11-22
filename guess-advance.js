/* Guess Game: Random Integer-Driven JavaScript While Loop
 * Format: while (boolean expression) {} -- indent block code 
 * PEN BY MIMI LODESTONE
 */

var answer = Math.floor(Math.random()*100)+1;
console.log(answer);
var guess = 0;
var turns = 0;
while (guess != answer) {
	guess = prompt("guess the number 1-100");
	if (guess == "q") {
		break;
	}
	if (validator(guess) == true) {
		turns++;
		if (guess < answer) {
			alert("too low");
		} else if (guess > answer) {
			alert("too high");
		}
	} else if (validator(guess) == false){
		alert("invalid guess!");
	}
}
if (guess == answer) {
	alert("you got it in "+turns+" turns");
} else {
	alert("Quitter!");
}

/* Function validator
*Checks if guess is valid integer within range (1-100 default)
*If guess not valid return false;
* If guess valid, return true
* @param guess
* @return boolean
*/

function validator(guess) {
	if (guess > 0 && guess < 101) {
		return true;
	} else {
		return false;
	}
}