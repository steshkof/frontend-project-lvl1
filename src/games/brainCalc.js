import startGame from '../index.js';
import generateRandomNumber from '../common.js';

const gameDescription = 'What is the result of the expression?';

const generateRound = () => {
  const minNumberToShow = 1;
  const maxNumberToShow = 10;

  const firstNumber = generateRandomNumber(minNumberToShow, maxNumberToShow);
  const secondNumber = generateRandomNumber(minNumberToShow, maxNumberToShow);

  const operator = ['+', '-', '*'][generateRandomNumber(0, 2)];

  const expression = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = () => {
    if (operator === '+') return firstNumber + secondNumber;
    if (operator === '-') return firstNumber - secondNumber;
    if (operator === '*') return firstNumber * secondNumber;
    throw new Error('Unknown operator');
  };

  return [expression, correctAnswer()];
};

const brainCalc = () => startGame(gameDescription, generateRound);
export default brainCalc;
