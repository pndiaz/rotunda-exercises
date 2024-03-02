const Animal = require('./animal.js')

class Tiger extends Animal {

    animalSound() {
        return 'grrr';
    }

    speak(message) {
        return message.split(" ")
        .map((word) => `${word} ${this.animalSound()}`)
        .join(" ");
    }
}

module.exports = Tiger;