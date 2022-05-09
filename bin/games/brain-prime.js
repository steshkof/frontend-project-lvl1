#!/usr/bin/env node
import startGame from '../../src/index.js';
import generateRandomNumber from '../common.js';

let gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const generateRound = () => {
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