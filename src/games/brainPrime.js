import startGame from '../index.js';
import generateRandomNumber from '../common.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const isPrime = (num) => {
    for (let i = 2; i <= num / 2; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const question = generateRandomNumber(2, 20);
  const correctAnswer = isPrime(question);

  return [question, correctAnswer];
};

const brainPrime = () => startGame(gameDescription, generateRound);
export default brainPrime;
