const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let result = '';

rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
  result = `Hi, my name is ${answer}. ` 
  rl.question(`What's an activity you like doing? `, (answer) => {
    result += `One of my favourite activities is ${answer}. `
    rl.question(`What do you listen to while doing that? `, (answer) => {
      result += `I usually listen to ${answer} while doing so. `
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer) => {
        result += `My favourite meal of the day is ${answer}! `
        rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
          result += `And I love having ${answer} for it! `
          rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer) => {
            result += `My super power is ${answer}! `
            console.log(result)
            rl.close()
          });
        });
      });
    });
  });
});