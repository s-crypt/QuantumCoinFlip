let heads_wins = [];
let tails_wins = [];

function play() {
	let audio = document.getElementById("audio");
	audio.play();
}

const flip = async () => {
	let qrn;
	const response = await fetch("https://www.random.org/integers/?num=1&min=0&max=255&col=1&base=10&format=plain&rnd=new")
		.then(data => data.text())
	const data = response;
	qrn = data;
	console.log(data);
	return qrn;
};

const coinFlip = async () => {
	let result = await flip();
	if (result <= 127) {
		document.getElementById("coin").src = "images/heads.png";
		winner = `HEADS`;
		console.log("Heads");
		head_win = heads_wins.push(1);
		document.getElementById("head_win").innerText = head_win;
	} else if (result >= 128) {
		document.getElementById("coin").src = "images/tails.png";
		winner = `TAILS`;
		console.log("Tails");
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
