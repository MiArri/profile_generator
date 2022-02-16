const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answers = {};

rl.question(`What's your name? Nicknames are also acceptable`, (answer) => {
  answers.name = answer;
  console.log(`Thank you for your answer: ${answer}`);

  rl.question(`What's an activity you like doing?`, (answer) => {
    answers.activity = answer;
    console.log(`Thank you for your answer: ${answer}`);

    rl.question(`What do you listen to while doing that?`, (answer) => {
      answers.music = answer;
      console.log(`Thank you for your answer: ${answer}`);

      rl.question(`Which meal is your favourite?`, (answer) => {
        answers.meal = answer;
        console.log(`Thank you for your answer: ${answer}`);

        rl.question(`What's your favourite thing to eat for that meal?`, (answer) => {
          answers.mealPart = answer;
          console.log(`Thank you for your answer: ${answer}`);

          rl.question(`Which sport is your absolute favourite?`, (answer) => {
            answers.sport = answer;
            console.log(`Thank you for your answer: ${answer}`);

            rl.question(`What is your superpower?`, (answer) => {
              answers.superpower = answer;
              console.log(`Thank you for your answer: ${answer}`);

              console.log(`${answers.name} loves listening to ${answers.music} while ${answers.activity}, devouring ${answers.mealPart} for ${answers.meal}, prefers ${answers.sport} over any other sport, and is amazing at ${answers.superpower}`);

              rl.close();
            });
          });
        });
      });
    });
  });
});
