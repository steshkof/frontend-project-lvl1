#!/usr/bin/env node
import startGame from '../../src/index.js';
import generateRandomNumber from '../common.js';

let gameDescription = 'What is the result of the expression?'

const generateRound = () => {
  const minNumberToShow = 1;
  const maxNumberToShow = 10;
  
  const firstNumber = generateRandomNumber(minNumberToShow, maxNumberToShow);
  const secondNumber = generateRandomNumber(minNumberToShow, maxNumberToShow);

  const operator = ['+','-','*'][generateRandomNumber(0,2)];

  const expression = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = function() {
    if (operator == '+') return firstNumber + secondNumber;
    else if (operator == '-') return firstNumber - secondNumber;
    else if (operator == '*') return firstNumber * secondNumber;
  }();
    
  return [expression, correctAnswer];
}

startGame(gameDescription, generateRound);