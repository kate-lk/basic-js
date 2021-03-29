const CustomError = require("../extensions/custom-error");

const sortString = str => str.split('').sort((a, b) => a.localeCompare(b)).join('');

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  if (members.length == 0) {
    return false;
  }

  let str = "";
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] !== "string") {
      continue;
    }

    let name = members[i];
    name = name.replace(/\s/g, '');
    name = name.toUpperCase();
    str += name[0];
  }

  return sortString(str);

};
