const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

 if (!Array.isArray(arr)) {
  throw new Error("undefined type");
}

const deleted_value = "DELETED-VALUE";

let newArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === '--discard-next') {
    newArr.push(deleted_value);
    i++;
  } else if (arr[i] === '--discard-prev') {
    if ((newArr.length > 0) && (newArr[newArr.length - 1] !== deleted_value)) {
      newArr.pop();
    }
  } else if (arr[i] === '--double-next') {
    if (i !== arr.length - 1) {
      newArr.push(arr[i + 1]);
    }
  } else if (arr[i] === '--double-prev') {
    if ((i !== 0) && (newArr[newArr.length - 1] !== deleted_value)) {
      newArr.push(arr[i - 1]);
    }
  } else {
    newArr.push(arr[i]);
  }
}

let result = [];
for (let i = 0; i < newArr.length; i++) {
    if(newArr[i] !== deleted_value){
      result.push(newArr[i]);
    }
}

return result;
};
