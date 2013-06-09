---
date: '2011-12-25'
title: Emacs的缩写补全
tags:
- emacs
categories:
- tools
postid: '812'
guid: http://josephpan.net/blog/?p=812
---
有些编辑器（比如Edit
Plus）可以实现缩写补全，允许我们把经常要输入一大段相同的文本或者代码用简单的文本代替，这样可以大大提高我们的编辑效率。Emacs也提供了单词简写（word
abbreviation）的支持。

## 动态简写（Dynamic Abbreviations） ## 

如果你经常要拼写一个很长的词汇，比如“abbreviation”，你可以在**输入一遍**这个单词之后，在碰到要拼写这个单词的时候使用动态简写功能来偷懒：先给出单词的前面几个字母，然后使用Emacs的动态简写功能来帮助我们把它补全。

要注意的是，这个动态的简写功能和前篇博文提到的[Ispell单词补全](./ispell-and-flyspell-on-emacs)原理不一样，Ispell的单词补全功能依据的是Ispell的辞典，而动态简写的功能依据的是在Emacs本次运行期间的所有缓存中查找位置最靠近的一个单词。

```
M-/ 动态简写
```

## 单词简写模式（Word Abbreviation Mode） ##

动态简写使用方便，但它的功能也很有限——比如，它只能根据最近的输入情况来补全一个单词，碰上短语就无能为力了。

相比动态简写，单词简写模式就显得强大很多了。在单词简写模式下，你可以事先自定义好简写单词和补全短语的对应词汇表，当你输入简写单词后，Emacs会帮你自动补全成短语。

这种先根据自己定义的词汇表来补全的方式有以下几个优点和用途：

1.  你可以快速的输入一大段文本，而不只是一个单词；
2.  告诉Emacs哪些词你经常拼错，当你又不小心拼错了这个词，让Emacs自动帮你纠正过来；
3.  你还可以将这些词汇设定为永久有效，而不只是依赖于你这次运行Emacs的输入情况，做到一劳永逸。

```
M-x abbrev-mode <Return>
```

进入单词简写模式，“Abbrev”字样将出现在状态行上。

### 快速输入一大段文本

单词简写模式可以帮助你快速的输入一大段文本，而不只是一个单词。在使用这个功能之前，你需要先定义好简写词汇。要定义临时性的（只在本次Emacs运行期间有效的）简写词汇，最方便的做法是使用先输入简写词，再输入补全词的方法：

```
C-x a i g   （命令名是add-inverse-global）将刚输入的单词定义为全局简写（所有主模式都有效），输入补全词后回车
C-x a i l   （命令名是add-inverse-local）将刚输入的单词定义为局部简写（当前所用的主模式有效），输入补全词后回车
```

这种定义方法称为“逆方法”，因为还有一种“正方法”是先输入补全词，再输入简写词，但这种方法使用起来比较麻烦，因此没有多少人喜欢用。

举个例子，假如你需要经常输入“Shenzhen Institute of Advanced
Technology”，重复输入这么长的短语不但费时，也很容易拼错，为了省点力气，可以专门定义一个简写词“siat”。先输入“siat”，然后按下C-x
a i
g来定义一个在所有模式下都有效的临时词汇，Emacs会要求你输入它的补全词汇，输入“Shenzhen
Institute of Advanced
Technology”后回车，你就有了“siat”的定义，此时“siat”会变成“Shenzhen
Institute of Advanced
Technology”。以后只要输入“siat”加一个空格或者标点符号，Emacs就会把那个短语完整的插入到文本里。Emacs会密切关注你输入的内容，一旦输入了一个简写词，并按下了空格键或者某个标点符号键，它就会立刻自动地将此简写词展开为其对应的短语。

![http://i41.servimg.com/u/f41/16/31/59/00/1311.png](http://i.imgur.com/zO3QA.png "图1 输入"siat"")

![http://i41.servimg.com/u/f41/16/31/59/00/1411.png](http://i.imgur.com/KcBFD.png "图2 空格后自动补全短语")

定义简写词汇要注意几点：

1.  尽量避免误用另一个单词作为这个单词的简写。但如果你觉得这个单词作为简写很有必要，当你遇到非得要拼这个单词的时候，可以在自动补全之后按 `C-/` 来撤销这次的补全；
2.  简写只能通过模式（mode）来限定作用范围，而不能通过针对文件或者缓冲。如果要定义一个全局的简写，可以使用global类型，如果要定义一个只作用在text模式而不在C模式下的简写，则就要在text模式下使用local类型。

### 单词自动纠错

这是一个很实用的用途。在单词简写模式下，你可以告诉Emacs哪些词你经常拼错，当你又不小心拼错了这个词，让Emacs自动帮你纠正过来。

其实原理和方法和上面的内容如出一辙，你同样也需要先定义简写词汇，只不过这次你要定义的简写词汇是你经常犯的错误拼写，而补全词汇是正确的单词。

例如，如果你总喜欢把“receive”拼成“recieve”，你可以定义一个简写词为“recieve”，补全为“receive”的简写词汇，但要注意：Emacs会严格按照你定义的简写来补全单词，这意味着当你定义receive的简写时，你也应该同时定义receives、received、receiving，尽量定义完这个词的全部形式。

### 定义永久性的简写词汇

上面我们介绍了如何定义临时的简写词汇，当你关闭Emacs后再打开就无效了。如果有些词汇你经常需要输入，要让Emacs能够永远记得这些词汇，可以按照下面几步来定义永久性的简写词汇：

1.  在.emacs设置默认打开单词简写模式

```lisp
(setq-default abbrev-mode t)
(read-abbrev-file "~/.abbrev_defs")
(setq save-abbrevs t)
```

2.  保存.emacs文件并重启Emacs。此时会看到状态行上显示“Abbrev”字样。如果提示无法读取abbrev
    文件，不要担心，那是因为你还没有创建这个文件，这将在你定义了永久性的简写词汇后不再显示。

3.  输入一个简写后，使用 `C-x a i g` 或者 `C-x a -` 组合键定义一个全局简写。也可以使用 `C-x a i l` 组合键定义一个局部性简写词。

4.  输入补全词后回车。Emacs会对简写词继续扩展，并且会在每次输入这个简写词再跟上一个空格或标点符号的时候照章行事。根据需要重复第3、4步以定义任意多个简写词。

5.  完成这些定义后，别忘了将这些定义保存到abbrev文件里，输入 `M-x write-abbrev-file <Return>`
    保存简写词汇文件。Emacs会提示输入一个文件名。

6.  输入 `~/.abbrev_defs <Return>` ，将这些定义保存为.abbrev\_defs文件。

### 查看、修改简写文件

    要对你定义的简写词汇进行查看、修改和删除，可以使用下面几个命令：

``` 
M-x list-abbrevs <Return> 查看abbrev文件（只读）
M-x edit-abbrevs <Return> 编辑abbrev文件
```

### 关闭单词简写模式

```
M-x kill-all-abbrevs <Return> 关闭当前会话的单词简写模式
```

### 简写补全和大小写的关系

Emacs对简写词所作的字母大小写设置，通常都会让人称心如意。但如果对简写词的字母大小写有特殊的要求，那么多知道些内幕往往会有很多好处。请看下面这些规则：

-   只要简写词的补全短语里有大写字母，Emacs在插入这个短语定义的时候就不会对它做任何改动。
-   如果简写词的补全短语都是小写字母，Emacs将根据以下规则对它进行字母大小写设置：
    -   如果简写词的全部字母是小写，Emacs就将以小写字母补全；
    -   只要简写词里有大写字母，Emacs就将其补全短语的第一个单词的第一个字母设为大写；
    -   如果简写词都是大写字母，并且变量“abbrev-all-caps”设置为"nil"，Emacs就把其补全短语的每一个单词的第一个字母设置为大写；如果变量“abbrev-all-caps”设置为"t"，Emacs就将把其短语定义的每一个单词的每一个字母设置为大写。

本文参考资料
------------

1.  [Learning GNU Emacs, 3rd Edition(Debra Cameron, James Elliott, Marc
    Loy)](http://www.google.com.hk/url?sa=t&rct=j&q=Learning+GNU+Emacs&source=web&cd=1&ved=0CCwQFjAA&url=http%3A%2F%2Fbook.douban.com%2Fsubject%2F1431970%2F&ei=Npr1Ttv4OeaziQeg4KXuAw&usg=AFQjCNGR0JeJmtslTGgFcY3le75a1jIIhA&sig2=CvEr-ea6iU4hRy06oFG2Sg)

