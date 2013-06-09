---
date: '2013-01-05'
title: Son of Obsidian Theme for Emacs
tags:
- emacs
categories:
- tools
postid: '1169'
guid: http://josephpan.net/blog/?p=1169
---
Visual Studio下有一个非常流行的主题，叫做 Son of
Obsidian（黑曜石之子），如果你没见过，可以到
[这个下载页面](http://studiostyl.es/schemes/son-of-obsidian)
里一睹庐山真面目。

用了一段时间之后，我不禁也开始觉得 Emacs 下的 Black on White
主题实在有点老古董了，于是就请教谷歌大神有没有哪位好心人将它 port 到
Emacs 下，否则我就得自己写一个了。一问之下，果然在
[这个人](https://github.com/troydm) 的 Github
主页上找到了一份主题。于是我兴奋地 clone 下来，自己也进行一番调教，将 Son
of Obsidian 和 Black on White 两个主题进行了整合，
最后得到了一个比较满意的 color theme 。先放 [主题截图]({{urls.media}}/figures/emacs-son-of-obsidian.png)

-   主题页面：[https://github.com/wzpan/emacs-stuff/blob/master/color-theme-sons-of-obsidian.el](https://github.com/wzpan/emacs-stuff/blob/master/color-theme-sons-of-obsidian.el)
-   使用方法：下载完成后放到 load-path ，然后在你的 init
    文件中添加下面几句：

``` commonlisp
;; 加入color-theme插件
(require 'color-theme-sons-of-obsidian)
(color-theme-sons-of-obsidian)
```

enjoy it！
