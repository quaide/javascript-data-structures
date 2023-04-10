class QuaideArray {
    constructor() {
      this.length = 0;
      for (let key in arguments) {
        this[key] = arguments[key];
        this.length += 1;
      }
    }
  
    static isArray(value) {
      return value instanceof QuaideArray;
    }
  
    push(element) {
      this[this.length] = element;
      this.length++;
      return this.length;
    }
  
    pop() {
      if (this.length === 0) {
        return undefined;
      } else {
        const element = this[this.length - 1];
        delete this[this.length - 1];
        this.length--;
        return element;
      }
    }
  }

// QuaideArray.prototype.filter =  function (cb) {
//     var filtered = [];
//     for(let i = 0; i < this.length; i++) {
//       if (cb(this[i], i, this)) filtered.push(this[i]);
//     }
//     return filtered;
// }

// QuaideArray.prototype.length = function (index) {

// }

const test = new QuaideArray('Quaide', 'Kelsey')

console.log(test)

console.log(test instanceof QuaideArray)
console.log(QuaideArray.isArray(test))
