---
date: '2011-12-24'
title: ispell与emacs的拼写检查
tags:
- Aspell
- emacs
- Flyspell
- Ispell
categories:
- tools
postid: '738'
guid: http://josephpan.net/blog/?p=738
---
了解Ispell
----------

### Ispell vs Aspell

Ispell是Unix下的一个拼写检查工具，支持多种语言（见：[ispell
dictionaries](http://lasr.cs.ucla.edu/geoff/ispell-dictionaries.html)），并且提供很多接口，其中包括了Emacs。另外一个比较出名的拼写检查工具是Aspell，两者的区别是Aspell不仅为拼错的单词提供形近的单词列表，还同时提供读音相似的单词的建议，e.g.如果你拼了一个错词“trubble”，Ispell只会建议“rubble”，而Aspell还会建议“trouble”、"dribble"、
"rubble"之类的词。不过Aspell的这种匹配算法只能用在英语单词上，而且在速度上以及指令的简单程度上不及Ispell。我使用的是Ispell，Aspell的配置可以参考[这里](http://aspell.net/0.61/man-html/Using-Aspell-with-other-Applications.html#Using-Aspell-with-other-Applications)。

### 安装和配置Ispell

Ubuntu安装Ispell：

``` shell
$ sudo apt-get install ispell iamerican dictionaries-common
```

Arch安装Ispell：

``` shell
$ sudo pacman -S ispell aspell-en
```

你可以试着在shell里直接使用ispell命令对一份文件进行拼写检查：

``` shell
$ ispell FILE
```

注意上面的FILE得你自己指定一个文件，建议是一份有英文单词的文件。如果能输出检查结果，说明此时Ispell运作正常。

如果提示找不到default.hash，那可能是没有把iamerican设为预设辞典的原因，解决方法如下：

``` shell
$ cd /usr/lib/ispell/ sudo cp iamerican.hash default.sh
```

Emacs中的拼写检查（使用Ispell）
-----------------------------

有些编辑器可以自动对我们输入的英语单词进行拼写检查，甚至还能给出拼写建议（比如Microsoft
Word），Emacs当然也可以做到这个功能，甚至更加强大。不过，Emacs本身并不提供这个功能，幸运的是像Ispell和Aspell这样的拼写检查工具都提供了Emacs相应接口，因此，通过在Emacs中调用Ispell的命令，我们可以一边编辑文件一边进行拼写检查。

Ispell和Aspell现在在Emacs已经内置支持，通常不需要自己安装。如果你发现Emacs里确实没有Ispell的支持，或者你想升级到最新的ispell.el，那就请参见[这里](http://www.kdstevens.com/stevens/ispell-faq.html#install)。

### ispell-minor-mode：实时拼写检查

要让Flyspell随时根据你的输入提示错误拼写，可以打开**ispell-minor-mode****辅模式**。在ispell-minor-mode 模式下，
当你输完一个单词时，Ispell
会自动帮您在辞典里查询这个单词，如果找不到这个单词，它就会*哔*一声来提醒您。

要启动或关闭这模式，请键入指令：

``` shell
M-x ispell-minor-mode <Return>
```

### ispell-buffer：全文拼写检查

在emas中，可以使用**ispell-buffe**r命令，对光标之后的单词逐个进行拼写检查：

``` shell
M-x ispell-buffer <Return>
```

如果全文拼写正确，就会提示检查完成。如果发现不认识的单词，此时ispell将会把光标定在该单词的位置，在文本的上方会显示修改建议，如图1：

![http://i41.servimg.com/u/f41/16/31/59/00/112.png](http://i.imgur.com/Evrd5.png "图1 ispell拼写建议")

此时ispell会等待用户的进一步的指令：

<table cellspacing="10">
<tbody>
<tr>
<td>键盘指令</td>
<td>功能</td>
</tr>
<tr>
<td>C-h 或者 ?</td>
<td>获得进一步帮助</td>
</tr>
<tr>
<td>空格</td>
<td>忽略这个错误拼写</td>
</tr>
<tr>
<td>a/A</td>
<td>在全文中都忽略这个单词（只在这个缓冲区有效）</td>
</tr>
<tr>
<td>r/R</td>
<td>修改这个单词</td>
</tr>
<tr>
<td>i/I</td>
<td>将这个单词加入个人辞典</td>
</tr>
<tr>
<td>u</td>
<td>将这个单词以小写的形式加入个人辞典</td>
</tr>
<tr>
<td>q/Q</td>
<td>退出单词检查</td>
</tr>
</tbody>
</table>

如果文档中有多处相同的拼写错误，可以使用“R”进入查询替换，输入要替换的单词，当查找到第二个匹配的单词时，按下“!”将自动将接下来所有的单词替换成正确的单词。

![http://i41.servimg.com/u/f41/16/31/59/00/211.png](http://i.imgur.com/iqdSB.png "图2 按R后输入改正后的拼写")

![http://i41.servimg.com/u/f41/16/31/59/00/311.png](http://i.imgur.com/bmhjf.png "图3 按!后回车，全部“xmas”都被改为“Xmas”")

使用Ispell要注意以下两点：

1.  **Ispell是根据你所指定的辞典里的单词来确定这个词是否拼写正确的**。换句话说，如果某个单词没有在选定的辞典里有定义的话，即使它的拼写是正确的，Ispell也会把它当成错误的拼写。如果光标不在文章开头的第一个位置，要进行全文检查的话就得先使用M-\<将光标移动到文章开头。
2.  **同一个单词的不同形式，比如复数、过去式、过去分词等，在进行拼写检查时需要分别进行**。比如，如果你把receive拼成了“recieve”，Ispell会把“recieved”当成另外一个单词，所以这个拼写检查器会把它当作另外一个拼写错误找出来。

### C-r：递归编辑

我们经常会遇到这种情况：当我们在查找修改某段文本的时候，可能会意外发现当前的查找结果周围有个地方需要修改，但因为现在正在进行查找修改，如果不想中断当前的工作，我们就只好等着完成查找修改工作后再找到刚刚那个位置，但却记不起来在那里了。拼写检查也可以看成一类查找（对错误拼写的查找），为了解决这个问题，Emacs给我们提供了一个贴心的编辑方法——递归编辑。

什么是递归编辑呢？我们可以把递归编辑看成一种中断：当你在进行某个查找任务的时候，还能够暂时中断当前的查找工作，去进行其他的编辑工作，完成后再跑回刚刚的中断的地方，继续未完成的查找。这和“递归”有什么联系呢？这是因为，这种中断可以嵌套！你可以在查找单词A的时候中断A的查找，进入一个递归编辑，在这个位置开始对B进行查找，突然在某个B的查找位置你又看到周围有个单词C要修改，你又可以暂时中断对B的查找，而进入另一个递归编辑。等你修改完C后，你可以回到上一个查找的中断位置，继续对B进行查找。等你查找完B之后，你又可以回到再上一个查找的中断位置，继续对A进行查找。说起来很复杂，其实道理非常简单。我还是“一图以蔽之”吧：

![http://i41.servimg.com/u/f41/16/31/59/00/figure10.png](http://i.imgur.com/Gmot9.png "图4 递归编辑示意图")

使用方法：

<table cellspacing="10">
<tbody>
<tr>
<td>C-r</td>
<td>进入递归编辑</td>
</tr>
<tr>
<td>C-M-c</td>
<td>结束递归编辑并继续拼写检查</td>
</tr>
<tr>
<td>C-] (命令：top-level)</td>
<td>结束递归编辑，并退出拼写检查</td>
</tr>
</tbody>
</table>

例如，在在修改“xmas”的时候，突然发现要修改“newyear.”

![http://i41.servimg.com/u/f41/16/31/59/00/411.png](http://i.imgur.com/Y088c.png "图5 在修改“xmas”的时候发现要修改“newyear.”")

C-r进入递归编辑，使用replace-string命令将“newyear.”改成"new year!"

![http://i41.servimg.com/u/f41/16/31/59/00/511.png](http://i.imgur.com/N9Ow2.png "图6 在递归编辑下将“newyear.”改成"new year!"")

### Ispell-word：检查单个单词

有时候我们拼写某个单词脑袋壳突然卡住了：“哎，这个词怎么拼啊？”或者“我好像拼得不对”。这时，我们可以利用Ispell来单独检查光标所在的这个单词，如果想对光标位置上的单词进行检查，请按下 `M-$` （命令名是ispell-word）组合键，或者从【Spell】拼写菜单里选择执行“Check
Word”（检查单词）操作，Ispell将对那个单词进行检查，并给出检查结果。

``` shell
M-$ (M-x ispell-word <Return>)
```

![http://i41.servimg.com/u/f41/16/31/59/00/810.png](http://i.imgur.com/SltMB.png "图8 检查单词“apple”")

### ispell-complete-word：单词补全

有时我们想不起来要怎么拼一个单词，这就到Ispell的单词补全功能大展身手的时候了。敲击ESC-tab（命令名是ispell-complete-word），将获得一个可供选择的列表。

```
ESC-tab（M-x ispell-complete-word <Return>）
```

![http://i41.servimg.com/u/f41/16/31/59/00/910.png](http://i.imgur.com/gCBFZ.png "图9 让ispell给出“Christm”的补全建议“Christmas”")

### ispell-kill-ispell：终止Ispell进程

只要启用了Ispell，它就将一直在后台运行等待再次启用。如果觉得它使得系统变慢了，可以输入 `M-x ispell-kill-ispell <Return>` 杀掉这个进程，或是从“Spell”菜单里选择执行“Kill Process（终止进程）”操作。

```
M-x ispell-kill-ispell <Return>
```

Emacs中的高亮错误拼写
---------------------

### 什么是Flyspell

Flyspell是Ispell的增强工具，Ispell只能够在缓冲区里逐个提示错误的拼写，如果想要用下划线的形式标记出所有错误的拼写，可以使用Flyspell。这样的好处是你可以继续编辑你的文本，而不需要进入查找模式。很多高级的编辑器都是采用这样的方式来提醒用户可能存在的错误拼写。

### flyspell-mode：实时高亮提醒错误拼写

要让Flyspell随时根据你的输入提示错误拼写，可以打开**flyspell-mode**模式：

```
M-x flyspell-mode <Return>
```

例如，打开Flyspell辅模式后，在缓冲区中输入“applle.”之后，Flyspell将对applle高亮显示。

![http://i41.servimg.com/u/f41/16/31/59/00/1110.png](http://i.imgur.com/2Awhx.png "图11 Flyspell高亮显示拼写错误")

flyspell-mode和ispell-minor-mode的区别主要是flyspell的错误拼写提醒方式是用下划线，而ispell-minor-mode则会在消息窗口进行提示，并*哔*一声进行提醒，有时候会让人厌烦（当然，可以通过设置关闭声音提醒）。因此，flyspell显得比较“安静”，因此更受人喜欢。

### flyspell-buffer：查找错误拼写并高亮

如果只需要检查一下缓冲区现有的文本，可以使用**flyspell-buffer**：

```
M-x flyspell-buffer <Return>
```

![http://i41.servimg.com/u/f41/16/31/59/00/1210.png](http://i.imgur.com/1n2zn.png "图12 Flyspell检查缓冲区内容")

flyspell-buffer和ispell-buffer的区别：**ispell-buffer是进入对错误拼写的查找，并逐个提示错误的拼写，而flyspell-buffer会在检查完所有拼写后，一次性将所有找到的错误以下划线的形式标记出来。**

要对Flysepll高亮的文本进行修改，可以将鼠标移到该单词上，点击 **鼠标中键 **，将弹出一个菜单。（什么？没有鼠标中键？听我的，你真的需要去买一个新鼠标了
:tounge:
）如果要在当前编辑的缓冲区中接受这个拼写，可以在弹出菜单中选择Accept(session)；如果要在本次Emacs运行期间打开的所有缓冲区中接受这个拼写，可以选择Accept(buffer)；如果要永久记住这个拼写，可以选择Save
this word。

还有一种专门为程序员提供的辅模式flyspell-prog-mode，Emacs将只在注释和字符串里高亮错误的拼写。

```
M-x flyspell-prog-mode <Return>	
```

其他定制
--------

### 让Emacs自动开启flyspell-mode

对于很多打字员来说，**flyspell-mode**是一个非常实用的辅模式，如果想要让Emacs启动时自动打开flyspell-mode，可以在.emacs文件里添加这一行：

(setq-default flyspell-mode t) <Return>

### 选择Ispell预设辞典

如果你为Ispell安装了不止一个辞典，你可以设定Emacs，使之在开始载入某一文件时，便自
动选择所需的辞典（你可以选择好几个）。预设辞典(main dictionary) 即主要辞典，是与
Ispell一起发行的辞典。您可以选择您所需要的语言。第二个即是你的个人辞典(personal
dictionary)，你可以设定要 Ispell将您在主要辞典里所找不到的字放到这里。假如您要将
Ispell里的法文辞典设为预设辞典，并想用你主目录 (home directory)下的
'.ispell-dico-perso' 文档作为个人辞典，可以在 '.emacs' 文档里加入下列指令：

``` lisp
       (setq sgml-mode-hook
       '(lambda () "Defauts for SGML mode."
       (setq ispell-personal-dictionary "~/.ispell-dico-perso")
       (ispell-change-dictionary "francais")
       ))
```

### 为特定文件设定个别的辞典

在每一个文档的结尾，只要将下列指令加入作为注释，你都可以指定您现行的文档要使用哪一辞典。
Ispell 开始拼字检查时即可应用所指定的辞典：

``` js
<!-- Local IspellDict: english -->
<!-- Local IspellPersDict: ~/emacs/.ispell-english -->
```

本文参考资料
------------

1.  [Learning GNU Emacs, 3rd Edition(Debra Cameron, James Elliott, Marc
    Loy)](http://www.google.com.hk/url?sa=t&rct=j&q=Learning+GNU+Emacs&source=web&cd=1&ved=0CCwQFjAA&url=http%3A%2F%2Fbook.douban.com%2Fsubject%2F1431970%2F&ei=Npr1Ttv4OeaziQeg4KXuAw&usg=AFQjCNGR0JeJmtslTGgFcY3le75a1jIIhA&sig2=CvEr-ea6iU4hRy06oFG2Sg)
2.  [LinuxDoc+Emacs+Ispell-HOWTO中文版(Philippe MARTIN, Sébastien
    Blondeel,
    李安珊)](http://man.chinaunix.net/linux/how/LinuxDoc+Emacs+Ispell-HOWTO-5.html)

