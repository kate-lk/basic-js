const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let x = 1; 
    if (!Array.isArray(arr)) {
      return 0;
    }
    for (let i= 0; i<arr.length; i++) {
      if (Array.isArray(arr[i])) {
        x = Math.max(this.calculateDepth(arr[i]) +1, x);
      }
  }
  return x;
}
};