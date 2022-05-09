#!/usr/bin/env node
import startGame from '../../src/index.js';
import generateRandomNumber from '../common.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  // check is number prime function
  const isPrime = (num) => {
    let result = 'yes';
    for (let i = 2; i <= num / 2; i += 1) {
      if (num % i === 0) {
        result = 'no';
        break;
      }
    }
    return result;
  };

  const question = generateRandomNumber(1, 20);
  const correctAnswer = isPrime(question);

  return [question, correctAnswer];
};

startGame(gameDescription, generateRound);
