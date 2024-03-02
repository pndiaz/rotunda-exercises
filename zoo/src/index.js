
const Lion = require('./animals/lion.js');
const Tiger = require('./animals/tiger.js')

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function promptUser() {
  rl.question('Enter your message: ', (message) => {
    rl.question('Choose an animal (1 for Lion, 2 for Tiger): ', (animalChoice) => {
      let animal;
      switch (animalChoice) {
        case '1':
          animal = new Lion();
          break;
        case '2':
          animal = new Tiger();
          break;
        default:
          console.log('Invalid choice. Please choose 1 or 2.');
          rl.close();
          return;
      }

      const result = animal.speak(message);
      console.log('Result:', result);

      rl.close();
    });
  });
}

promptUser();
