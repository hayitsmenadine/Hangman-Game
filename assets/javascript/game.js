
var wordsList =["gnarly", "epic", "dude", "shark", "barrel", 
"beach", "tide", "hangten", "longboard"];

var pickedWord = "";
var letterInWord = [];
var numBlank = 0;
var blanksNSuccess = 0;
var wrongGuess = [];
var numGuess = 9;
var win = 0;
var lose = 0;



function playGame() {

	wrongGuess = [];
	document.getElementById("wrongGuess").innerHTML = "";
	numGuess = 9;
	var solution = wordsList[Math.floor(Math.random()*wordsList.length)];
	
	blanksNSuccess =[];
	pickedWord = solution;
	numBlank = blanksNSuccess.length;
	for(var i = 0; i<solution.length; i++) {
		blanksNSuccess[i] = "_";
	}
		console.log(blanksNSuccess);
		solution = blanksNSuccess.join(" ");
		document.getElementById("word-blank").innerHTML = String(blanksNSuccess);
		document.getElementById("guesses-left").innerHTML = String(numGuess);
		document.getElementById("win").innerHTML = String(win);
		document.getElementById("lose").innerHTML = String(lose);
	
}

function checkLetters (letter) {

	var userInput = false;
		for (var i = 0; i < numBlank; i++) {
			if(pickedWord[i] === letter) {
				userInput = true;
			}
		}

		if(userInput) {
			for ( i = 0; i < numBlank; i++) {
				if (pickedWord[i] === letter) {
					blanksNSuccess[i] === letter;
				}
			}
		}
		else {
			if(wrongGuess.length === 0) {
				wrongGuess.push(letter);
				numGuess--;
			}
			else if(wrongGuess.indexOf(letter) < 0) {
				wrongGuess.push(letter);
				numBlank--;
			}
			else {
				alert("Dude, you've already used this letter")
				document.getElementById("wrong").innerHTML = String("Dude, you've already used this letter");

			}
		}
	}

	function winOrLose() {
		document.getElementById("word-blank").innerHTML = blanksNSuccess.join(" ");
		document.getElementById("guesses-left").innerHTML = numGuess;
		document.getElementById("wrongGuess").innerHTML = wrongGuess.join(" ");

		if(letterInWord.join(" ") === blanksNSuccess.join(" ")) {
			win++;
			document.getElementById("win").innerHTML = win;
			alert("Totally Rad you win, the word is " +letterInWord.join(""));
			playGame();
		}
		else if(numGuess === 0){
			lose++;
			document.getElementById("lose").innerHTML = String(lose);
			alert("Oh no you got served, the word was "+ pickedWord);
			playGame();
		}
	}
	


playGame ();

document.onkeyup = function(event) {
	var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuess);
	winOrLose();
};

