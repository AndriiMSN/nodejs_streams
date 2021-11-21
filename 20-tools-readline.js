const { createInterface } = require('readline');

const questionnaire = createInterface(process.stdin, process.stdout);

const questions = [
    'What is your name?',
    'How old are you?',
    'What are your hobbies?',
    'Do you like Node.js?',
    'Where were you last night?'
];

const answers = [

];

const questionsPromises = questions.map(question => () => new Promise((res, _) => {
    questionnaire.question(`${question}\n`, (answer) => {
        answers.push(answer);
        res();
    });
}));

questionnaire.on('close', () => {
    console.log(answers);
});

const askQuestions = async () => {
    for (const question of questionsPromises) {
        await question();
    }

    questionnaire.close();
};

askQuestions();
