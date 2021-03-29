const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let origin_str = "" + str;
  let repeat_times = 0;
  let separator = "+";
  let addition = "";
  let addition_repeat_times = 0;
  let addition_separator = "|";

  for (let key in options) {
    if (key === "repeatTimes") {
      if (options[key] !== undefined) {
        repeat_times = options[key];
      }
    } else if (key === "separator") {
      separator = "" + options[key];
    } else if (key === "addition") {
      addition = "" + options[key];
    } else if (key === "additionRepeatTimes") {
      if (options[key] !== undefined) {
        addition_repeat_times = options[key];
      }
    } else if (key === "additionSeparator") {
      addition_separator = "" + options[key];
    }
  }

  let new_string = "";
  if (repeat_times == 0){
    new_string += origin_str + addition;
  }

  for (let i = 0; i < repeat_times; i++) {
    new_string += origin_str;
    for (let j = 0; j < addition_repeat_times; j++) {
      new_string += addition;
      if (j != addition_repeat_times - 1) {
        new_string += addition_separator;;
      }
    }
    if (i != repeat_times - 1) {
      new_string += separator;
    }
  }

  return new_string;
};
  