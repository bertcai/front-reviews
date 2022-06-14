# JS对象的基本用法

## 声明对象的两种语法

```js
let obj = {
    a: 'a',
    b: 'b'
}

let obj = new Object({a: 'a', b: 'b'})
```

## 如何删除对象的属性

```js
let obj = {
    a: 'a',
    b: 'b'
}

delete obj.a

console.log(obj) // {b:'b'}
'a' in obj // false
obj.hasOwnProperty('a') // false

obj.a = undefined

console.log(obj)// {a:undefined, b:'b'}
```

## 如何查看对象的属性

```js
let obj = {
    a: 'a',
    b: 'b'
}

Object.keys(obj) // ['a','b']
Object.values(obj) // ['a','b']

// 查看对象所有属性，包括原型属性
console.dir(obj)
// Object
// a: "a"
// b: "b"
//     [[Prototype]]: Object
// constructor: ƒ Object()
// hasOwnProperty: ƒ hasOwnProperty()
// isPrototypeOf: ƒ isPrototypeOf()
// propertyIsEnumerable: ƒ propertyIsEnumerable()
// toLocaleString: ƒ toLocaleString()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// __defineGetter__: ƒ __defineGetter__()
// __defineSetter__: ƒ __defineSetter__()
// __lookupGetter__: ƒ __lookupGetter__()
// __lookupSetter__: ƒ __lookupSetter__()
// __proto__: (...)
// get __proto__: ƒ __proto__()
// set __proto__: ƒ __proto__()
```

## 如何修改或增加对象的属性

```js
// 直接操作对象的属性
let obj = {
    a: 'a',
    b: 'b'
}
obj.a = 'aaa'
obj.c = 'c'
console.log(obj)
// {
//     a:'aaa',
//     b:'b',
//     c:'c'
// }

//增加或修改原型属性
Object.prototype['toString'] = 'xxx'
Object.prototype['newproto'] = 'new proto'

```

## `'name' in obj` 和 `obj.hasOwnProperty('name')` 的区别

如果指定的属性在指定的对象或其原型链中，则 `in` 运算符返回 `true` ,而 `hasOwnProperty()` 方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性。

```js
let obj = {
    a: 'a',
    b: 'b'
}
'toString' in obj // true
obj.hasOwnProperty('toString') // false
```


