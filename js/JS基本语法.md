# JS基本语法

## 表达式和语句

+ 表达式
    + `1+2`
    + `console.log(1)`
    + `add(1+2)`
    + `console.log`
+ 语句
    + `let a = 1`

表达式一般有一个值，而语句可能有值也有可能没有值
只有函数有返回值
语句一般会改变环境（声明、赋值）

## 标识符的规则

第一个字符是Unicode字母或者$或者_或者中文
后面字符可以是上述字符或者数字

```js
// 变量名是标识符
let a = 1
let _ = 1
let 你好 = 1
let ___ = 1
```

## `if else`

```js
let a = 2
if (a > 1) {
    console.log(2)
} else {
    console.log(1)
}
```

## `while for` `break continue`

```js
let max = 10
let i = 1
let res = 0
while (i < max) {
    res += i
}
console.log(res) // 45

i = 1
res = 0

for (i = 1; i < max; i++) {
    res += i
}
console.log(res) // 45

for (i = 1, res = 0; i < max; i++) {
    if (i === 3) continue
    res += i
}
console.log(res) // 42

for (i = 1, res = 0; i < max; i++) {
    if (i === 3) break
    res += i
}
console.log(res) // 3
```

## label

可使用一个标签来唯一标记一个循环或一个语句块，然后使用 `break` 或 `continue` 语句来指示程序是否中断循环或语句块或继续执行。

```js
foo: {
  console.log(1)
  break foo
  console.log('本行不会输出')
}
console.log(2)
```


