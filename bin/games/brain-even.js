#!/usr/bin/env node

import startGame from '../../src/index.js';
import generateRandomNumber from '../common.js';

let gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".'

const generateRound = () => {
  // generate random number
  const generateRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const minNumberToShow = 1;
  const maxNumberToShow = 100;
  
  const numberToShow = generateRandomNumber(minNumberToShow,maxNumberToShow);
  const correctAnswer = numberToShow % 2 === 0 ? 'yes' : 'no'; // yes or no
  
  return [numberToShow, correctAnswer];
}

startGame(gameDescription, generateRound);