---
date: '2012-10-07'
title: C-c ' 在 org-mode 中的妙用
tags:
- emacs
- org-mode
categories:
- tools
postid: '1092'
guid: http://josephpan.net/blog/?p=1092
---

1 用途一：编辑代码
-----------------

在org-mode中可以通过键入 `<s` 快速输入代码引用段，得到下面的内容：

``` 
#+BEGIN_SRC

#+END_SRC
```

但当我们在里面编辑的时候，会发现tab无法缩进。一种解决方法是通过键入
`C-q <Tab>`
缩进，但如果整份文档都需要重排，一行一行的敲肯定很费力。这时候可以在代码段中键入
`C-c '`
，此时Emacs会新建一个buffer，原来代码段的内容会自动粘贴到这个buffer里，此时会发现这个buffer的Minor
Mode刚好是相应语言的Mode，所以可以很自在的完成各种熟悉的代码编辑工作。完成后再次按
`C-c '` 返回。

2 用途二：绘制ASCII图
--------------------

如果要绘制ASCII图，可以直接在一个空行中键入
`C-c '`，此时Emacs会新建一个空白的buffer，并且自动打开了Artist-mode，可以使用鼠标或键盘绘制ASCII图。如 [图1]({{urls.media}}/figures/c-c-1.png) 所示。

绘制完成后，再次按 `C-c '` 返回，可以发现ASCII图的左边多了一些冒号 `:`
，这表示这是一副等宽ASCII图。如[图2]({{urls.media}}/figures/c-c-1.png)所示。

