'use strict';

//Random no. between 1 and 100
let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 100;
let highscore = 0;
const validateScore = function (score) {
	if (score > 5) {
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

	let guess = document.querySelector('.guess').value;
	let message = document.querySelector('.message');
	const scoreElement = document.querySelector('.score');


	if (guess === '') {
		message.textContent = '😢 Not a Number';
		return;
	}
	else if (guess > 100 || guess < 1) {
		guess = Number(guess);
		message.textContent = '🔢 Between 1 and 100! Only';
		return;
	}
	if (guess === secretNumber) {
		message.textContent = '🎉 Correct Number!';
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('body').style.backgroundColor = '#60b347'
		document.querySelector('.number').style.width = '30rem';
		setHighscore(score);
	}
	else if (guess > secretNumber) {
		if (validateScore(score)) {
			score -= 5;
			scoreElement.textContent = score;
		}
		else {
			score = 0;
			scoreElement.textContent = score;
			message.textContent = '😔 Game Over';
			return;
		}
		if ((5 <= Math.abs(guess - secretNumber) && Math.abs(guess - secretNumber) < 10)) {
			message.textContent = 'High!';
		}
		else if (1 <= Math.abs(guess - secretNumber) && Math.abs(guess - secretNumber) < 5) {
			message.textContent = '😍 Close Enough!';
		}
		else if (Math.abs(guess - secretNumber) >= 10) {
			message.textContent = '📈 Too High!';
		}

	}
	else if (guess < secretNumber) {
		if (validateScore(score)) {
			score -= 5;
			scoreElement.textContent = score;
		}
		else {
			score = 0;
			message.textContent = '😔 Game Over';
			scoreElement.textContent = score;
			return;
		}
		if ((5 <= Math.abs(guess - secretNumber) && Math.abs(guess - secretNumber) < 10)) {
			message.textContent = 'Low!';
		}
		else if (1 <= Math.abs(guess - secretNumber) && Math.abs(guess - secretNumber) < 5) {
			message.textContent = '😍 Close Enough!';
		}
		else if (Math.abs(guess - secretNumber) >= 10) {
			message.textContent = '📉 Too Low!';
		}

	}

}
document.querySelector('.check').addEventListener('click', checkNumber);
document.querySelector('.again').addEventListener('click', resetGame);