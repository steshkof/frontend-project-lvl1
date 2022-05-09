#!/usr/bin/env node
import startGame from '../../src/index.js';
import generateRandomNumber from '../common.js';

let gameDescription = 'Find the greatest common divisor of given numbers.'

const generateRound = () => {
  let getGCD = (num1, num2) => {
    let result = 1;;
    while (num1!=num2) {
      if (num1>num2) {
        num1 = num1 -num2;
      }
      else {
        num2 = num2 - num1;
      }
    }
    result = num1;
    return result;
  }

  const minNumberToShow = 1;
  const maxNumberToShow = 20;
  
  const firstNumber = generateRandomNumber(minNumberToShow, maxNumberToShow);
  const secondNumber = generateRandomNumber(minNumberToShow, maxNumberToShow);

  const question = `${firstNumber} ${secondNumber}`
  const correctAnswer = getGCD(firstNumber, secondNumber);
  
  return [question, correctAnswer];
}

startGame(gameDescription, generateRound);