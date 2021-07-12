'use strict';

//Random no. between 1 and 100
let secretNumber = Math.trunc(Math.random() * 100) + 1;
//score
let score = 100;
let highscore = 0;

const validateScore = function (score) {
	if (score >= 5) {
		return true;
	}
	return false;
}

const setHighscore = function (score) {
	if (score > highscore) {
		highscore = score;
		document.querySelector('.highscore').textContent = highscore;
	}
}

const resetGame = function () {
	score = 100;
	secretNumber = Math.trunc(Math.random() * 100) + 1;
	document.querySelector('.score').textContent = 100;
	document.querySelector('.message').textContent = 'Start Guessing...';
	document.querySelector('.number').textContent = '?';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('.guess').value = "";
}

const checkNumber = function () {
	const guess = Number(document.querySelector('.guess').value);
	let message = document.querySelector('.message');
	const scoreElement = document.querySelector('.score');

	if (!guess) {
		message.textContent = '😢 No Number!';
	}
	else if (guess === secretNumber) {
		message.textContent = '🎉 Correct Number!';
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('body').style.backgroundColor = '#60b347'
		document.querySelector('.number').style.width = '30rem';
		setHighscore(score);


	}
	else if (guess > secretNumber) {
		if (validateScore(score)) {
			message.textContent = '📈 Too High!';
			score -= 5;
			scoreElement.textContent = score;
		}
		else {
			scoreElement.textContent = score;
			message.textContent = '😔 Game Over'
		}

	}
	else if (guess < secretNumber) {
		if (validateScore(score)) {
			message.textContent = '📉 Too Low!';
			score -= 5;
			scoreElement.textContent = score;
		}
		else {
			scoreElement.textContent = score;
			message.textContent = '😔 Game Over'
		}

	}
}

document.querySelector('.check').addEventListener('click', checkNumber);
document.querySelector('.again').addEventListener('click', resetGame);