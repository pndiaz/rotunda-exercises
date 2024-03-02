
const Lion = require('./animals/lion.js');
const Tiger = require('./animals/tiger.js')

const lion = new Lion();
const tiger = new Tiger();

console.log(lion.speak("I'm a lion"));  // Output: "roar I'm a lion roar"
console.log(tiger.speak("Lions suck")); 