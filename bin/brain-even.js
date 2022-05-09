#!/usr/bin/env node

import readlineSync from 'readline-sync';

// generate random number
const generateRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Greeting
const playersName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${playersName}`);
console.log('Answer "yes" if the number is even, otherwise answer "no".')

// GAME
const numberOfCorrectAnswersToWin = 3;
const minNumberToShow = 1;
const maxNumberToShow = 100;

for (let i = 0; i < numberOfCorrectAnswersToWin; i++) {  
  const numberToShow = generateRandomNumber(minNumberToShow,maxNumberToShow);
  const correctAnswer = numberToShow % 2 === 0 ? 'yes' : 'no'; // yes or no

  console.log(`Question: ${numberToShow}`)
  const playersAnswer = readlineSync.question('Your answer: ');

  const correctAnswerResponse = "Correct!";
  const incorrectAnswerResponse = `${playersAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`

  if (playersAnswer == correctAnswer) {
    console.log(correctAnswerResponse)
  } else {
    console.log(incorrectAnswerResponse)
    break;
  }

  // last step, show congrats if passed
  if (i == numberOfCorrectAnswersToWin - 1) console.log(`Congratulations, ${playersName}!`)
}


