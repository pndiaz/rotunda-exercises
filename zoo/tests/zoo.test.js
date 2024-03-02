
const Lion = require('../src/animals/lion.js'); 
const Tiger = require('../src/animals/tiger.js'); 

test('Should speak like a lion', async () => {
    const lion = new Lion();
    const message = "I'm a lion";
    const expectedOutput = "I'm roar a roar lion roar";
    const result = lion.speak(message);
    expect(result).toBe(expectedOutput);
})

test('Should speak like a tiger', async () => {
    const tiger = new Tiger();
    const message = "Lions suck";
    const expectedOutput = "Lions grrr suck grrr";
    const result = tiger.speak(message);
    expect(result).toBe(expectedOutput);
})