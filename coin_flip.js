var heads_wins = [];
var tails_wins = [];

function play() {
	var audio = document.getElementById("audio");
	audio.play();
}

const flip = async () => {
	var qrn;
	const response = await fetch("https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8&size=1");
	const data = await response.json();
	qrn = data.data[0];
	console.log(data.data[0]);
	return qrn;
};

const coinFlip = async () => {
	var result = await flip();
	if (result <= 127) {
		document.getElementById("coin").src = "images/heads.png";
		winner = `HEADS`;
		head_win = heads_wins.push(1);
		document.getElementById("head_win").innerText = head_win;
	} else if (result >= 128) {
		document.getElementById("coin").src = "images/tails.png";
		winner = `TAILS`;
		tail_win = `${tails_wins.push(2)}`;
		document.getElementById("tail_win").innerText = tail_win;
	}
	document.getElementById("winner").innerText = winner;
};

function print_winner() {
	winner = "";
	document.getElementById("final_winner").innerHTML = final_winner;
	// debugger;
	fallingCoins();
	// setTimeout(playAgain, 4000);
}

function playAgain() {
	alert("Play again?");
	window["location"].reload();
}
