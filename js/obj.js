// function Person(name, age) {
//     this.name = name
//     this.age = age
// }
//
// Person.prototype.sayHi = function () {
//     console.log('你好，我叫', this.name)
// }

// let person = new Person('frank', 18)
// console.log(person.name === 'frank') // true
// console.log(person.age === 18) // true
// person.sayHi() // 打印出「你好，我叫 frank」
//
// let person2 = new Person('jack', 19)
// console.log(person2.name === 'jack') // true
// console.log(person2.age === 19) // true
// person2.sayHi() // 打印出「你好，我叫 jack」

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sayHi(){
        console.log('你好，我叫',this.name)
    }

}

let person = new Person('frank', 18)
console.log(person.name === 'frank') // true
console.log(person.age === 18) // true
person.sayHi() // 打印出「你好，我叫 frank」

let person2 = new Person('jack', 19)
console.log(person2.name === 'jack') // true
console.log(person2.age === 19) // true
person2.sayHi() // 打印出「你好，我叫 jack」