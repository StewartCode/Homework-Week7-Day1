const PubSub = require('../helpers/pub_sub.js')
const ResultView = require('../views/result_view.js')

const Calc = function() {};

Calc.prototype.primeNumberChecker = function(number) {
  const prime = new Audio();
  prime.src = 'primeNumber.mp3';
  const primeNot = new Audio();
  primeNot.src = 'notAPrimeNumber.mp3';

  let counter = number;
  let result = 0;
  let primeCheck;
  counter -= 1;
  while (counter > 1)
    if (number % counter === 0) {
      counter -= 1;
      result += 1;
    }
  else {
    counter -= 1;
  }
  if (result === 0) {
    primeCheck = "PRIME NUMBER";
    prime.play();
  } else {
    primeCheck = "NOT A PRIME NUMBER";
    primeNot.play();
  }
  if (number < 2) {
    primeCheck = "NOT A PRIME NUMBER";
    primeNot.play();
  };

  return primeCheck;
};

Calc.prototype.bindEvents = function() {
  PubSub.subscribe('FormView:text-submitted', (event) => {
    const inputtedText = event.detail;
    console.log('payload recieved in Calc', inputtedText);
    const result = this.primeNumberChecker(inputtedText);
    console.log('Prime Number Or Not:', result);
    PubSub.publish('primeNumber:result', result)
  });

};

module.exports = Calc;
