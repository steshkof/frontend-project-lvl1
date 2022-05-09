#!/usr/bin/env node

import startGame from '../../src/index.js';
import generateRandomNumber from '../common.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const minNumberToShow = 1;
  const maxNumberToShow = 100;

  const numberToShow = generateRandomNumber(minNumberToShow, maxNumberToShow);
  const correctAnswer = numberToShow % 2 === 0 ? 'yes' : 'no'; // yes or no

  return [numberToShow, correctAnswer];
};

startGame(gameDescription, generateRound);
