const PubSub = require('../helpers/pub_sub.js');

const ResultView = function() {

}

ResultView.prototype.displayResult = function(result) {
  const resultElement = document.querySelector('#result')
  resultElement.textContent = `${result}!!!`;
};

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe('primeNumber:result', (event) => {
    const primeNumberResult = event.detail;
    console.log('payload received', primeNumberResult);
    this.displayResult(primeNumberResult);
  })
}

module.exports = ResultView;
