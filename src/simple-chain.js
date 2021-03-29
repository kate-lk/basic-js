const CustomError = require("../extensions/custom-error");

 
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    let val_str = "( )";
    if (value == null) {
      val_str = "( null )";
    } else if (value != undefined) {
      val_str = "( " + value + " )";
    }

    this.chain.push(val_str);
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number') {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },

  finishChain() {
    let result_str = "";
    for (let i = 0; i < this.chain.length; i++) {
      if (i !== 0) {
        result_str += "~";
      }
      result_str += this.chain[i]
      if (i !== this.chain.length - 1) {
        result_str += "~";
      }
    }

    this.chain = [];
    return result_str;
  }
};

module.exports = chainMaker;
