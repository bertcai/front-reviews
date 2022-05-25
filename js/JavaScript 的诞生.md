# JavaScript 的诞生

## 诞生

JavaScript 因为互联网而生，紧跟着浏览器的出现而问世。回顾它的历史，就要从浏览器的历史讲起。

1993年，国家超级电脑应用中心（NCSA）发表了NCSA Mosaic，这是最早流行的图形接口网页浏览器，它在万维网的普及上发挥了重要作用。1994年，Mosaic的主要开发人员随即创立了Netscape公司，并雇用了许多原来的NCSA
Mosaic开发者用来开发Netscape Navigator，该公司的目标是取代NCSA Mosaic成为世界第一的网页浏览器。

1995年，网景招募了布兰登·艾克，目标是把Scheme语言嵌入到Netscape Navigator浏览器当中。1995年5月，网景公司做出决策，未来的网页脚本语言必须"看上去与Java足够相似"
，但是比Java简单，使得非专业的网页作者也能很快上手。这个决策实际上将Perl、Python、Tcl、Scheme等非面向对象编程的语言都排除在外了。

微软公司于1995年首次推出Internet
Explorer，从而引发了与Netscape的浏览器大战。同时，微软通过逆向网景的浏览器的解释器创造了JScript语言，JScript也是一种JavaScript实现，这两个JavaScript语言版本在浏览器端共存意味着语言标准化的缺失，除此之外，微软也在网页技术上加入了不少专属对象，使不少网页使用非微软平台及浏览器无法正常显示。

1996年11月，网景正式向ECMA（欧洲计算机制造商协会）提交语言标准。1997年6月，ECMA以JavaScript语言为基础制定了ECMAScript标准规范ECMA-262。JavaScript成为了ECMAScript最著名的实现之一。

## 缺陷

### 产生缺陷的原因

JavaScript设计不够严谨，有很多失误，有三个客观原因导致了JavaScript产生了这些缺陷。

+ **设计阶段过于仓促**
    + Javascript的设计，其实只用了十天。而且，设计师是为了向公司交差，本人并不愿意这样设计。
+ **没有先例**
    + Javascript同时结合了函数式编程和面向对象编程的特点，这很可能是历史上的第一例。而且直到今天为止，Javascript仍然是世界上唯一使用Prototype继承模型的主要语言。这使得它没有设计先例可以参考。
+ **过早的标准化**
    +
  Javascript的发展非常快，根本没有时间调整设计。1995年5月，设计方案定稿；10月，解释器开发成功；12月，向市场推出，立刻被广泛接受，全世界的用户大量使用。Javascript缺乏一个从小到大、慢慢积累用户的过程，而是连续的爆炸式扩散增长。大量的既成网页和业余网页设计者的参与，使得调整语言规格困难重重。

### 具体缺陷

#### 1.不适合开发大型程序

Javascript没有名称空间（namespace），很难模块化；没有如何将代码分布在多个文件的规范；允许同名函数的重复定义，后面的定义可以覆盖前面的定义，很不利于模块化加载。

#### 2. 非常小的标准库

#### 3. null和undefined

null属于对象（object）的一种，意思是该对象为空；undefined则是一种数据类型，表示未定义。

两者非常容易混淆，含义完全不同。

```js
let foo;
consol.log(foo == null) // ture
consol.log(foo == undefined) // true
consol.log(foo === null) // false
consol.log(foo === undefined) // true
```

#### 4.全局变量难以控制

Javascript的全局变量，在所有模块中都是可见的；任何一个函数内部都可以生成全局变量，这大大加剧了程序的复杂性。在ES6中添加了`let`和`const`，避免了函数内部生成全局变量的现象。

```js
a = 1;
(function () {
    b = 2
    console.log(a)
})()// 1
console.log(b) // 2
```

#### 5.自动插入行尾分号

Javascript的所有语句，都必须以分号结尾。但是，如果你忘记加分号，解释器并不报错，而是为你自动加上分号。有时候，这会导致一些难以发现的错误。

```js
function a() {
    return
    {
        i = 1
    }
    ;
}

console.log(a()) // undefined
```

#### 6.加号运算符

+号作为运算符，有两个含义，可以表示数字与数字的和，也可以表示字符与字符的连接。这个设计加大了运算操作的复杂性。

#### 7.NaN

NaN是一种数字，表示超出了解释器的极限。它有一些很奇怪的特性：

```js
console.log(NaN === NaN) //false
console.log(NaN !== NaN) //true
console.log(1 + NaN) // NaN
```

#### 8. 数组和对象的区分

由于Javascript的数组也属于对象（object），所以要区分一个对象到底是不是数组，相当麻烦。

#### 9. == 和 ===

==用来判断两个值是否相等。当两个值类型不同时，会发生自动转换，得到的结果非常不符合直觉。

```js
  "" == "0" // false

0 == "" // true

0 == "0" // true

false == "false" // false

false == "0" // true

false == undefined // false

false == null // false

null == undefined // true

" \t\r\n" == 0 // true
```

#### 10. 基本类型的包装对象

Javascript有三种基本数据类型：字符串、数字和布尔值。它们都有相应的建构函数，可以生成字符串对象、数字对象和布尔值对象。

```js
new Boolean(false);

new Number(1234);

new String("Hello World");

alert(typeof 1234); // number

alert(typeof new Number(1234)); // object
```

## 小结

JavaScript从诞生至今快要30年了，发展也很迅速，虽然设计上的缺陷让JavaScript在发展路程上产生了许许多多的问题，但是标准化的完善以及强大的工程化组件让JavaScript在Web领域应用广泛。

