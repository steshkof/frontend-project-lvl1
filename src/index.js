import readlineSync from 'readline-sync';

const startGame = (gameDescription, generateRound) => {
    // greeting
    console.log('Welcome to the Brain Games!');
    const playersName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${playersName}`);
    console.log(gameDescription);

    // GAME
    // number of games
    const numberOfCorrectAnswersToWin = 3;  

    // game rounds
    for (let i = 0; i < numberOfCorrectAnswersToWin; i++) { 
        // get round question and answer
        const [question, correctAnswer] = generateRound();

        // print question and get answer
        console.log(`Question: ${question}`)
        const playersAnswer = readlineSync.question('Your answer: ');
    
        // Answer responses
        const correctAnswerResponse = "Correct!";
        const incorrectAnswerResponse = `${playersAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${playersName}!`
        
        // print answers
        if (playersAnswer == correctAnswer) {
            console.log(correctAnswerResponse)
        } else {
            console.log(incorrectAnswerResponse)
            break;
        }
        // last step, show congrats if passed
        if (i == numberOfCorrectAnswersToWin - 1) console.log(`Congratulations, ${playersName}!`)
    }
}

export default startGame;