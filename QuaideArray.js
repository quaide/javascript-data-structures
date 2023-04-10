class QuaideArray {
    constructor() {
      this.length = 0;
      for (let key in arguments) {
        this[key] = arguments[key];
        this.length += 1;
      }
    }

    at(index) {
        if(index < -this.length) {
            return undefined
        }
        if(index >= this.length) {
            return undefined
        }
        if(index >= 0) {
            return this[index]
        }
        else{
            return this[index + this.length]
        }
    }

    static of() {
        let result = new QuaideArray()
        for(let i = 0; i < arguments.length; i++) {
            result.push(arguments[i])
        }
        return result
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
let test5 = QuaideArray.of('Quaide', 'Kelsey', 'Tyler')
console.log(test5)
console.log(test.at(43))

