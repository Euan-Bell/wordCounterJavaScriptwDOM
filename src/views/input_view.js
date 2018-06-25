const PubSub = require("../helpers/pub_sub.js");
const InputView = function () {

};

InputView.prototype.bindEvents = function () {
  const input = document.querySelector('wordcounter-form');
  input.addEventListener('submit', (event) => {
    const inputtedWords = event.target.value;
    PubSub.publish('InputView:word-inputted', inputtedWords)
  })
};
module.exports = InputView;
