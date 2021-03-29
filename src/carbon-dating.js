const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let timeCarbon;
  let kt, k;
  if (sampleActivity === undefined  || typeof sampleActivity !== 'string' || isNaN(sampleActivity) || isFinite(sampleActivity)) {
    return false;
  } else {
    kt = MODERN_ACTIVITY / +sampleActivity;
    k = 0,693 / HALF_LIFE_PERIOD;
    timeCarbon = Math.log(kt) / k;
  } 
  return timeCarbon;
};
