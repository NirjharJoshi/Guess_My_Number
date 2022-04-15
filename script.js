'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let scoreValue = 20;
let highscoreValue = 0;

let message = document.querySelector(`.message`);
let score = document.querySelector(`.score`);
let highscore = document.querySelector(`.highscore`);
let body = document.querySelector(`body`);
let number = document.querySelector(`.number`);
let inputGuess = document.querySelector(`.guess`);

const again = document.querySelector(`.again`);
const check = document.querySelector(`.check`);
const plusone = document.querySelector(`.plusone`);
const plusfive = document.querySelector(`.plusfive`);
const minusone = document.querySelector(`.minusone`);
const minusfive = document.querySelector(`.minusfive`);

const fAgain = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreValue = 20;
  score.textContent = scoreValue;
  message.textContent = `Start guessing...`;
  number.textContent = `?`;
  body.style.backgroundColor = `#222`;
  inputGuess.value = ``;
  check.disabled = false;
  inputGuess.disabled = false;
};

const fScoreUpdate = function () {
  scoreValue--;
  score.textContent = scoreValue;
};

const fHighscoreUpdate = function () {
  highscoreValue = scoreValue > highscoreValue ? scoreValue : highscoreValue;
  highscore.textContent = highscoreValue;
};

const fGetInput = function () {
  return Number(inputGuess.value);
};

const fWins = function (wins) {
  if (wins) {
    body.style.backgroundColor = `#60b347`;
    message.textContent = `🎉 Correct Number!`;
    fScoreUpdate();
    fHighscoreUpdate();
  } else {
    body.style.backgroundColor = `#e7642c`;
    message.textContent = `🚽 You lost the game!`;
  }
  number.style.width = `30rem`;
  number.textContent = secretNumber;
  check.disabled = true;
  inputGuess.disabled = true;
};

const fGuessHigh = function (high) {
  if (high) message.textContent = `📈 Too High!`;
  else message.textContent = `📉 Too Low!`;
};

const fPlayContinues = function (guess) {
  if (guess > secretNumber) fGuessHigh(true);
  else fGuessHigh(false);
};

const fCanContinuePlaying = function (guess) {
  fScoreUpdate();
  if (scoreValue > 0) fPlayContinues(guess);
  else fWins(false);
};

const fGameBegins = function () {
  let guess = fGetInput();

  if (!guess) message.textContent = `❌ No Number!`;
  else if (guess === secretNumber) fWins(true);
  else if (guess !== secretNumber) fCanContinuePlaying(guess);
};

const fPlusOne = function () {
  let temp = fGetInput();
  temp++;
  inputGuess.value = temp;
};

const fPlusFive = function () {
  let temp = fGetInput();
  temp += 5;
  inputGuess.value = temp;
};

const fMinusOne = function () {
  let temp = fGetInput();
  temp--;
  inputGuess.value = temp;
};

const fMinusFive = function () {
  let temp = fGetInput();
  temp -= 5;
  inputGuess.value = temp;
};

check.addEventListener(`click`, fGameBegins);

plusone.addEventListener(`click`, fPlusOne);
plusfive.addEventListener(`click`, fPlusFive);

minusone.addEventListener(`click`, fMinusOne);
minusfive.addEventListener(`click`, fMinusFive);

again.addEventListener(`click`, fAgain);
