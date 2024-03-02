const Animal = require('./animal.js')

class Lion extends Animal {

    animalSound() {
        return 'roar';
    }

    speak(message) {
        return message.split(" ")
        .map((word) => `${word} ${this.animalSound()}`)
        .join(" ");
    }
}
  
module.exports = Lion;