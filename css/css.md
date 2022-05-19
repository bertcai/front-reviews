# CSS 笔记

## 需要记住的原则

永远不要个元素设置宽度`width:100%`,会导致宽度错乱。

## 盒模型

CSS盒模型指浏览器会将元素根据标准渲染成一个个矩形的盒子，每个盒子由四个边界组成，content edge、padding edge、border edge和margin edge 组成。

CSS盒模型分为border-box和content-box两种，border-box的width = content-width + padding-width +
border-width，content-box的width与内容宽度相等。

## 消除margin合并

+ 父子合并使用`padding/border`挡住
+ 使用`overflow:hidden`
+ 使用`display:flex`
+ 兄弟合并可以使用`display:inline-block`

## 布局

永远不要把 width 和 height 写死，除非特殊说明
用 min-width / max-width / min-height / max-height
flex 可以基本满足所有需求
flex 和 margin-xxx: auto 配合有意外的效果

### flex

```
display: flex
display: flex
flex-direction: row / column
flex-wrap: wrap
justify-content: center / space-between
align-items: center
```

### grid

https://cssgridgarden.com/#zh-cn

## 浏览器渲染过程

1. 根据HTML创建HTML DOM树
2. 根据CSS创建CSSOM树
3. 合并上述创建渲染树Render Tree
4. Layout布局（文档流、盒模型 、计算大小和位置）
5. Paint绘制（把边框颜色、文字颜色、阴影等画出来）
6. Compose合成（根据层叠关系展示画面）

## CSS动画的两种做法

### transition

1. 编写动画的初始状态CSS
2. 编写动画的结束状态CSS
3. 使用JS添加结束状态CSS类到指定元素
4. 在动画元素上添加transition属性，进行过渡效果设置

```html
<div id="blow-up"></div>
<button id="start">start</button>
```

```css
#blow-up {
    width: 10px;
    height: 10px;
    border: 1px solid red;
    transition: all linear 1s;
}

#blow-up.end {
    transform: scale(1.25);
}
```

```js
let blow_up = document.getElementById('blow-up')
let start = document.getElementById('start')
start.onclick = ()=>{
    blow_up.classList.add('end')
}
```

### animation

1. 使用`@keyframe`设置动画的关键帧状态
2. 在动画元素中设置animation属性

```html
<div id="blow-up"></div>
```

```css
#blow-up {
    width: 10px;
    height: 10px;
    border: 1px solid red;
    animation: 1s blowup alternate infinite;
}

@keyframes blowup {
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(1.25);
    }
}
```


