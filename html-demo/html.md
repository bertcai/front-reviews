# HTML 

## 所有标签都有的属性


+ class
+ contenteditable 
  + 可编辑的
+ hidden
+ id 
  + 即使有两个id，浏览器也不会报错，没有特殊需要，不建议使用id
+ style
+ tabindex  
  + 标记tab选择的顺序 tab=0是最后一个 tab=-1表示永远不回被tab选择到
+ title 
  + 鼠标悬浮过去后显示的内容，一般用于表示完整的内容

## 默认样式

### 查看默认样式
chrome->开发者工具->elements->styles->user agent stylesheet

### css reset
很多时候不需要浏览器默认样式，常见的css reset
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: normal;
}

a {
    color: inherit;
    text-decoration: none;
}

ul,
ol {
    list-style: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}
```