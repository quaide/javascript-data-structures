function QuaideArray () {
    let array = Object.create(QuaideArray.prototype)
    array.length = 0

    Object.defineProperty(array, 'length', {
        value: 0,
        enumerable: false,
        writable: true,
      })

    for (key in arguments) {
        array[key] = arguments[key] //arguments passed to function, array-like object
        array.length += 1
    }

    return array
}

QuaideArray.prototype.push = function (element) {
    this[this.length] = element
    this.length++
    return this.length
}

QuaideArray.prototype.pop = function () {
    if(this.length === 0) {
        return undefined
    }
    else{
        const element = this[this.length - 1]
        delete this[this.length] 
        this.length--
        return element
    }
}

QuaideArray.prototype.filter =  function (cb) {
    var filtered = [];
    for(let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) filtered.push(this[i]);
    }
    return filtered;
}

// QuaideArray.prototype.length = function (index) {

// }

const test = QuaideArray('Quaide', 'Kelsey')
test.push('Tyler')

const test2 = QuaideArray()

console.log(test)
console.log(test.pop())
test.pop()
console.log(test)
console.log(test2.pop())

console.log(test.filter((roomy) => roomy.charAt(0) != 'Q'))