const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns_number = Math.pow(2, disksNumber) - 1;
  let seconds_number = Math.floor((3600 / turnsSpeed) * turns_number);
  return {
    turns: turns_number,
    seconds: seconds_number
  }
};
