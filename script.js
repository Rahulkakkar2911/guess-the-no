'use strict';

//Random no. between 1 and 100
const secretNumber = Math.trunc(Math.random() * 100) + 1;
//score
let score = 100;
//TODO delete this line after development
document.querySelector('.number').textContent = secretNumber;

const validateScore = function (score) {
	if (score > 5) {
		return true;
	}
	return false;
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
	}
	else if (guess > secretNumber) {
		if (validateScore(score)) {
			message.textContent = '📈 Too High!';
			score -= 5;
			scoreElement.textContent = score;
		}
		else {
			score -= 5;
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
			score -= 5;
			scoreElement.textContent = score;
			message.textContent = '😔 Game Over'
		}

	}
}

document.querySelector('.check').addEventListener('click', checkNumber);