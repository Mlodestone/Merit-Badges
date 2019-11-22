/* Guess Game: Random Integer-Driven JavaScript While Loop
 * Format: while (boolean expression) {} -- indent block code 
 * PEN BY MIMI LODESTONE
 */
var game = 0;
var again = true;
var totalTurns = 0;
while (again == true) {
	var guess = 0;
	var turns = 0;
	game++;
	var answer = Math.floor(Math.random()*100)+1;
	console.log(answer);
	while (guess != answer) {
		guess = prompt("guess the number 1-100");
		if (guess == "q") {
			alert("Quitter!");
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
		gameStats(turns);
		again = newGame();
	} else {
		break;
	}

	/* Function validator
	*Checks if guess is valid integer within range (1-100 default)
	*If guess not valid return false;
	* If guess valid, return true;
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
	
	
	/* Function gameStats
	* Tells player how many turns it took them;
	* Divides the total turns of every game by the amount of games played to get the average turns;
	* Tells player the amount of games played and the average turns;
	* @param turns
	*/
	
	function gameStats(turns) {
		alert("you guessed it in "+turns+" turns!");
		totalTurns = totalTurns + turns;
		averageTurns = totalTurns/game;
		alert("you won "+game+" games with an average of "+averageTurns+" turns per game!");
	}
	
	
	/* Function newGame
	* Asks player if they want to play again;
	* If false "thanks for playing" and return false;
	* If true return true;
	* @return boolean
	*/
	
	function newGame() {
		again = confirm("play again?");
		if (again == false) {
			alert("thanks for playing!");
			return false;
		} else if (again == true) {
			return true;
		}
	}
}