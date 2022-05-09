#!/usr/bin/env node
import startGame from '../../src/index.js';

let gameDescription = 'What is the result of the expression?'

const generateRound = () => {
  // generate random number
  const generateRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

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