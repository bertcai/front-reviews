# JS 函数执行时机

## 一串代码

```js
let i = 0
for (i = 0; i < 6; i++) {
    setTimeout(() => {
        console.log(i)
    }, 0)
}
// 6 6 6 6 6 6
```
`setTimeout()` 方法设置一个定时器，该定时器在定时器到期后执行一个函数或指定的一段代码。`setTimeout` 里调用的函数会在 `js` 整个代码声明完成后才开始执行，此时六次循环已经结束，`i` 的值变成了 `6`,这个时候， `setTimeout` 调用的函数执行六次，打印出6个 `6`。

## 打印 `0、1、2、3、4、5` 的方法

### 方法一
将 `let` 关键字放到 `for` 循环循环条件上，每次循环都会创建一个局部的 `i` 保存到运行环境里，最后在执行 `setTimeout()` 设置的函数的时候使用局部的 `i`，打印 `1 2 3 4 5 6`。
```js
for (let i = 0; i < 6; i++) {
    setTimeout(() => {
        console.log(i)
    }, 0)
}
```

### 方法二
使用立即执行函数，同样是保存了局部变量 `i`。
```js
let i = 0
for (i = 0; i < 6; i++) {
    !function (i) {
        setTimeout(() => {
            console.log(i)
        }, 0)
    }()
}
```

### 方法三
使用 `setTimeout` 的第三个参数：
> `arg1, ..., argN` 可选 
> 附加参数，一旦定时器到期，它们会作为参数传递给function

```js
let i = 0
for (i = 0; i < 6; i++) {
    setTimeout(() => {
        console.log(i)
    }, 0, i)
}
```
