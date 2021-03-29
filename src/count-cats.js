const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let ears = '^^';
  let newBackyard = matrix.flat();
  let numberCats = '';
  for (let i = 0, len = newBackyard.length; i < len; i++) {
    if (newBackyard[i] === ears) {
      numberCats += +1;
    }
  }
  let result = numberCats.length;
  return result;
};
