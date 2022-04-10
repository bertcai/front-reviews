# HTML入门笔记

## HTML 是谁发明的？
HTML（超文本标记语言——HyperText Markup Language）是构成 Web 世界的一砖一瓦。它定义了网页内容的含义和结构。1989年，伯纳斯-李在一份备忘录中提出一个基于互联网的超文本系统。

## HTML 起手应该写什么

以vscode为例，新建一个html文件后，在第一行输入`!`并按回车键，即可生成一个如下的html模板：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

## 常用的表章节的标签有哪些，分别是什么意思

+ h1-h6
  + 标题
+ section
  + 章节
+ article
  + 文档，页面，文章等
+ main
  + 主要内容块
+ aside
  +  参考内容块，侧边栏目等
+ p
  + 段落
+ div
  + 块

## 全局属性有哪些

+ class
  + 类 用来选择某一类元素
+ contenteditable 
  + 可编辑的
+ hidden
  + 使对应元素隐藏
+ id 
  + 即使有两个id，浏览器也不会报错，没有特殊需要，不建议使用id
+ style
  + 样式属性，用来设置元素的样式
+ tabindex  
  + 标记tab选择的顺序 tab=0是最后一个 tab=-1表示永远不回被tab选择到
+ title 
  + 鼠标悬浮过去后显示的内容，一般用于表示完整的内容

## 常用的内容标签有哪些，分别是什么意思
+ ol 
  + 有序列表
+ ul 
  + 无序列表
+ dl,dt,dd
  + 一个包含术语以及描述的列表（键-值）
+ pre
  + pre表示预定义格式文本。在该元素中的文本通常按照原文件中的编排，以等宽字体的形式展现出来，文本中的空白符（比如空格和换行符）都会显示出来。
+ hr
  + 分割线
+ code 
  + 代码片段
+ em
  + 语音强调
+ strong
  + 表示内容文本很重要
+ quote
  + 表示一段引用
+ blockquote
  + 是块级引用
