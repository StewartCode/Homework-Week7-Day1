const PubSub = require('../helpers/pub_sub.js');

const FormView = function() {

};

FormView.prototype.bindEvents = function() {
  const form = document.querySelector('#prime-checker-form')
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event);
    const inputtedNumber = event.target.number.value;
    console.log('inputted text', inputtedNumber);
    event.target.reset();
    PubSub.publish('FormView:text-submitted', inputtedNumber)
  });
}




module.exports = FormView;
