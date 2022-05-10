import startGame from '../index.js';
import generateRandomNumber from '../common.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const getGCD = (number1, number2) => {
    let result = 1;
    let num1 = number1;
    let num2 = number2;
    while (num1 !== num2) {
      if (num1 > num2) {
        num1 -= num2;
      } else {
        num2 -= num1;
      }
    }
    result = num1;
    return result;
  };

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
