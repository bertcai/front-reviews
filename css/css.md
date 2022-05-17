# CSS 笔记

## 需要记住的原则
永远不要个元素设置宽度`width:100%`,会导致宽度错乱。

## 盒模型

CSS盒模型指浏览器会将元素根据标准渲染成一个个矩形的盒子，每个盒子由四个边界组成，content edge、padding edge、border edge和margin edge 组成。

CSS盒模型分为border-box和content-box两种，border-box的width = content-width + padding-width + border-width，content-box的width与内容宽度相等。

## 消除margin合并

+ 父子合并使用`padding/border`挡住
+ 使用`overflow:hidden`
+ 使用`display:flex`
+ 兄弟合并可以使用`display:inline-block`