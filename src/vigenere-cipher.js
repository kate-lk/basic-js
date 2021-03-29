const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(is_forward_flow) {
    if (is_forward_flow == undefined) {
      this.is_forward_flow = true;
    } else {
      this.is_forward_flow = is_forward_flow;
    }

    this.FIRST_LETTER = "A".charCodeAt(0); // 65
    this.LAST_LETTER = "Z".charCodeAt(0); // 90
    this.mod = this.LAST_LETTER - this.FIRST_LETTER + 1; // 26
  }

  reverseString(str) {
    return str.split("").reverse().join("");
  }

  encrypt(message, key) {
    if ((message == undefined) || (key == undefined)) {
      throw new Error();
    }

    let new_message = message.toUpperCase();
    let new_key = key.toUpperCase();

    let letters = [new_message.length];
    let corrector = 0;
    for (let i = 0; i < new_message.length; i++) {
      if ((new_message.charCodeAt(i) < this.FIRST_LETTER) || (new_message.charCodeAt(i) > this.LAST_LETTER)) {
        letters[i] = new_message[i];
        corrector += 1;
        continue;
      }

      let letter_code = new_message.charCodeAt(i) - this.FIRST_LETTER;
      let key_code = new_key.charCodeAt((i - corrector) % new_key.length) - this.FIRST_LETTER;
      letters[i] = String.fromCharCode(((letter_code + key_code) % this.mod) + this.FIRST_LETTER);
    }

    if (this.is_forward_flow) {
      return letters.join('');
    } else {
      return this.reverseString(letters.join(''));
    }
  }

  decrypt(message, key) {
    if ((message == undefined) || (key == undefined)) {
      throw new Error();
    }

    let new_message = message.toUpperCase();
    let new_key = key.toUpperCase();

    if (!this.is_forward_flow) {
      new_message = this.reverseString(message);
    }

    let letters = [new_message.length];
    let corrector = 0;
    for (var i = 0; i < new_message.length; i++) {
      if ((new_message.charCodeAt(i) < this.FIRST_LETTER) || (new_message.charCodeAt(i) > this.LAST_LETTER)) {
        letters[i] = new_message[i];
        corrector += 1;
        continue;
      }

      let letter_code = new_message.charCodeAt(i) - this.FIRST_LETTER;
      let key_code = new_key.charCodeAt((i - corrector) % new_key.length) - this.FIRST_LETTER;

      if (letter_code - key_code < 0) {
        letters[i] = String.fromCharCode(((letter_code - key_code) + this.mod) + this.FIRST_LETTER);
      } else {
        letters[i] = String.fromCharCode(((letter_code - key_code) % this.mod) + this.FIRST_LETTER);
      }
    }

    return letters.join('');
  }
}

module.exports = VigenereCipheringMachine;