---
date: '2012-08-31'
title: org-mode的中文beamer幻灯片模板
tags:
- Beamer
- emacs
- org-mode
categories:
- tools
postid: '1072'
guid: http://josephpan.net/blog/?p=1072
---
org-mode 是 Emacs
的杀手级应用，使用它可以用来做很多事情，如GTD、做笔记等。它可以导出多种格式的文件，包括HTML、LaTeX、Freemind、DocBook等，因此，通过定制之后，编写一份org文件就等于同时编写（或者排版）了多种格式文件，而且每种格式的文件又可以各自拥有不同的排版效果。这正是
org-mode 精妙之处。

比如，我最喜欢的做法是先在 Emacs 里打开 evernote-mode 写一份 org-mode
的笔记，然后 `C-c C-e H` 导出成 HTML
代码，并发布到我的博客中或者加入到我的 wiki 里。如果有需要，我还可以
`C-c C-e l` 生成 LaTeX 代码并编译成 PDF 文件。

用 org-mode 制作 Beamer 幻灯片也很简单，官方已经给出了
[详细的教程](http://orgmode.org/worg/org-tutorials/org-beamer/tutorial.html)
，照着一步步做即可。官方的教程并没有针对中文进行定制，因此笔者写了一个org-mode的Beamer中文模板，这是在
[Carsten
Dominik的例子](http://orgmode.org/manual/Beamer-class-export.html#Beamer-class-export)
的基础上修改得到的。

1 截图预览
----------

[猛戳这里](http://i.imgur.com/FyUXC.png) 看截图预览。

2 环境要求
----------

1.  Emacs
2.  org-mode
3.  TeXLive 或其他带有 Beamer 宏包的 LaTeX 系统
4.  Adobe 字体
    -   Adobe Heiti Std
    -   Adobe Kaiti Std

3 特点
------

1.  使用 “Darmstadt” 主题及 “Firebrick”配色方案；
2.  使用 listings
    宏包实现代码框。如果有中文内容，你可能需要使用逃逸字串(\`')括住两边，否则会出现错位；
3.  使用xeCJK来处理中文，并使用 Adobe
    字体（[字体下载](http://ishare.iask.sina.com.cn/f/23186570.html)）。

4 下载
------

-   Github主页：[http://wzpan.github.com/org-beamer-cn/](http://wzpan.github.com/org-beamer-cn/)
-   克隆git仓库：git clone https://github.com/wzpan/org-beamer-cn.git
-   zip压缩包：[https://github.com/wzpan/org-beamer-cn/zipball/master](https://github.com/wzpan/org-beamer-cn/zipball/master)
-   tar.gz压缩包：[https://github.com/wzpan/org-beamer-cn/tarball/master](https://github.com/wzpan/org-beamer-cn/tarball/master)

5 使用方法
----------

-   用 Emacs 打开 **beamer.org** 文件， `M-x org-mode` 打开 org-mode；
-   `C-c C-e l` 生成 beamer.tex 文件；
-   打开 **beamer.tex** 文件， `C-c C-c (M-x TeX-command-master)`
    并选择使用 **XeLaTeX** 编译。完成后就可以得到幻灯片了。

6 F&Q
-----

- 两个"@"不能生成alert效果？

这个可能是 org-mode 本身的 bug，但可以通过修改 Emacs里的设置来解决。在 `(require 'org-latex)` 前加入这一段设置：

``` lisp
    (setq org-emphasis-alist (quote (("*" bold "<b>" "</b>") 
                                     ("/" italic "<i>" "</i>")
                                     ("_" underline "<span 
    style=\"text-decoration:underline;\">" "</span>")
                                     ("=" org-code "<code>" "</code>" verbatim)
                                     ("~" org-verbatim "<code>" "</code>" verbatim)
                                     ("+" (:strike-through t) "<del>" "</del>")
                                     ("@" org-warning "<b>" "</b>")))
          org-export-latex-emphasis-alist (quote 
                                           (("*" "\\textbf{%s}" nil)
                                            ("/" "\\emph{%s}" nil) 
                                            ("_" "\\underline{%s}" nil)
                                            ("+" "\\texttt{%s}" nil)
                                            ("=" "\\verb=%s=" nil)
                                            ("~" "\\verb~%s~" t)
                                            ("@" "\\alert{%s}" nil)))
          )
```


