import startGame from '../index.js';
import generateRandomNumber from '../common.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  function getGCD(number1, number2) {
    return !number2 ? number1 : getGCD(number2, number1 % number2);
  }

  const minNumberToShow = 1;
  const maxNumberToShow = 20;
  const firstNumber = generateRandomNumber(minNumberToShow, maxNumberToShow);
  const secondNumber = generateRandomNumber(minNumberToShow, maxNumberToShow);

  const question = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGCD(firstNumber, secondNumber);
  return [question, correctAnswer];
};

const brainGcd = () => startGame(gameDescription, generateRound);
export default brainGcd;
