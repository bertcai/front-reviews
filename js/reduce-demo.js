// 将二维数组转化为一维

let flattened = [[0, 1], [2, 3], [4, 5]]

flattened = flattened.reduce((previousValue, currentValue) => {
    return previousValue.concat(currentValue)
})

console.log('flattened', flattened)

// 计算数组中每个元素出现的次数

let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countNames = names.reduce((previousValue, currentValue) => {
    previousValue[currentValue] ? previousValue[currentValue]++ : previousValue[currentValue] = 1
    return previousValue
},{})

console.log('countNames: ', countNames)

// 按属性对 object 分类
let people = [
    {name: 'Alice', age: 21},
    {name: 'Max', age: 20},
    {name: 'Jane', age: 20}
]

function groupBy(objectArray, property) {
    return objectArray.reduce((acc, obj) => {
        let key = obj[property]
        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(obj)
        return acc
    }, {})
}

let groupPeople = groupBy(people, 'age')

console.log('groupPeople', groupPeople)

// 使用扩展运算符和 initialValue 绑定包含在对象数组中的数组

let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}]

let allBooks = friends.reduce((previousValue, currentValue) => {
    return [...previousValue, ...currentValue.books]
}, ['Alphabet'])

console.log('allBooks', allBooks)

// 数组去重
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']

myArray = myArray.reduce((res, cur) => {
    if (res.indexOf(cur) === -1) {
        res.push(cur)
    }
    return res
}, [])

console.log('myArray', myArray)

// 使用函数组合实现管道
const double = x => 2 * x
const triple = x => 3 * x
const quadruple = x => 4 * x

const pipe = (...functions) => initialValue => functions.reduce((acc, fn) => fn(acc), initialValue)

const multiply6 = pipe(double, triple)

console.log('multiply6', multiply6(6))

// 使用 reduce 实现 map

if (!Array.prototype.mapUsingReduce) {
    Array.prototype.mapUsingReduce = function (callback, initialValue) {
        return this.reduce(function (mappedArray, currentValue, currentIndex, array) {
            mappedArray[currentIndex] = callback.call(initialValue, currentValue, currentIndex, array)
            return mappedArray
        }, [])
    }
}

let res = [1, 2, , 3].mapUsingReduce((currentValue, currentIndex, array) => currentValue + currentIndex + array.length)
console.log('res', res)
