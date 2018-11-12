const FormView = require('./views/form_view.js')
const Calc = require('./models/calc.js')
const ResultView = require('./views/result_view.js')


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const formView = new FormView();
  formView.bindEvents();
  console.log(formView);

  const calc = new Calc();
  calc.bindEvents();
  console.log(calc);

  const resultView = new ResultView();
  resultView.bindEvents();
  console.log(resultView);
});
