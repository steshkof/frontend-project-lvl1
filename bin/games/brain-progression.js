#!/usr/bin/env node
import startGame from '../../src/index.js';

let gameDescription = 'What number is missing in the progression?'

const generateRound = () => {
  // generate random number
  const generateRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // generate progression step
  const progressionStep = generateRandomNumber(2,6);
  // generate grogression length
  const minProgressionLength = 5;
  const maxProgressionLength = 15;
  const progressionLength = generateRandomNumber(minProgressionLength,maxProgressionLength);
  // generate number of missing element
  const missingProgressionElementIndex = generateRandomNumber(minProgressionLength - 1,progressionLength - 1);

  // generate progression
  const progressionStartNumber = generateRandomNumber(1,50)
  let progressionArray = [progressionStartNumber];
  for (let i = 0; i < progressionLength; i++) {
    progressionArray.push(progressionArray[i] + progressionStep);
  }

  //remove missing element from array and add it as a correct answer
  const correctAnswer = progressionArray[missingProgressionElementIndex];
  progressionArray[missingProgressionElementIndex] = "..";

  let progressionString = progressionArray.join(' ');
  const question = `${progressionString}`  
  
  return [question, correctAnswer];
}

startGame(gameDescription, generateRound);