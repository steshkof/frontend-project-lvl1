#!/usr/bin/env node
import startGame from '../../src/index.js';

let gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const generateRound = () => {
  // generate random number
  const generateRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // check is number prime function
  let isPrime = (num) => {
    let result = 'yes';
    for (let i = 2; i <= num/2; i++) {
      if (num % i == 0) {
        result = 'no';
        break;
      }
    }
    return result;
  }

  const question = generateRandomNumber(1,20);
  const correctAnswer = isPrime(question);

  return [question, correctAnswer];
}

startGame(gameDescription, generateRound);