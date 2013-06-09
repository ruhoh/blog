---
date: '2012-01-07'
title: ubuntu下安装配置free-pascal
tags:
- Pascal
categories:
- projects
postid: '848'
guid: http://josephpan.net/blog/?p=848
---
Pascal语言简介
--------------

<div class="wp-caption alignright" style="width: 161px"><img class="   " src="http://i.imgur.com/NtKqV.jpg" alt="http://i41.servimg.com/u/f41/16/31/59/00/niklau10.jpg" width="151" height="205" /><p class="wp-caption-text">Niklaus Wirth</p></div>

Pascal是一种计算机通用的高级程序设计语言，而且是第一个结构化编程语言，由瑞士Niklaus
Wirth教授于六十年代末设计并创立。Pascal的取名是为了纪念十七世纪法国著名哲学家和数学家Blaise
Pascal。Wirth还是另外几个编程语言的主设计师和发明者——Algol
W、Euler、Modula、Modula-2、Oberon等，他还有一句在计算机领域人尽皆知的名言：“算法+数据结构=程序”（Algorithm+Data
Structures=Programs），这个公式对计算机科学的影响程度足以和物理学中爱因斯坦的(E=mc\^2)相媲美。

尽管Pascal语言从诞生到现在已经经历了将近半个世纪，但凭借着自身严格的结构化形式、丰富完备的数据类型、运行效率高、查错能力强的特点，Pascal语言在现在依然具有较高的流行度，IOI(国际奥林匹克信息学竞赛)把Pascal语言作为三种程序设计语言之一，NOI(全国奥林匹克信息学竞赛)把Pascal语言和c语言、c++语言作为竞赛使用程序设计语言，在大学中Pascal语言也常常被用作学习数据结构与算法的教学语言。在TIOBE排行榜的前二十名榜单上，Pascal语言和Pascal语言分支之一的Delphi语言依然名列其中：

<table align="center" bgcolor="white">
<tbody>
<tr bgcolor="Silver">
<th align="center" nowrap="nowrap">Position<br />
Dec 2011</th>
<th align="center" nowrap="nowrap">Position<br />
Dec 2010</th>
<th align="center" nowrap="nowrap">Delta in Position</th>
<th align="center" nowrap="nowrap">Programming Language</th>
<th align="center" nowrap="nowrap">Ratings<br />
Dec 2011</th>
<th align="center" nowrap="nowrap">Delta<br />
Dec 2010</th>
<th align="center" nowrap="nowrap">Status</th>
</tr>
<tr>
<td align="center">1</td>
<td align="center">1</td>
<td align="center"><img src="http://www.tiobe.com/tiobe_index/images/Same.gif" alt="" border="0" /></td>
<td><a href="http://www.tiobe.com/content/paperinfo/tpci/Java.html" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.tiobe.com']);">Java</a></td>
<td align="center">17.561%</td>
<td align="center">-0.44%</td>
<td align="left">  A</td>
</tr>
<tr>
<td align="center">2</td>
<td align="center">2</td>
<td align="center"><img src="http://www.tiobe.com/tiobe_index/images/Same.gif" alt="" border="0" /></td>
<td><a href="http://www.tiobe.com/content/paperinfo/tpci/C.html" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.tiobe.com']);">C</a></td>
<td align="center">17.057%</td>
<td align="center">+0.98%</td>
<td align="left">  A</td>
</tr>
<tr>
<td align="center">3</td>
<td align="center">3</td>
<td align="center"><img src="http://www.tiobe.com/tiobe_index/images/Same.gif" alt="" border="0" /></td>
<td><a href="http://www.tiobe.com/content/paperinfo/tpci/C__.html" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.tiobe.com']);">C++</a></td>
<td align="center">8.252%</td>
<td align="center">-0.76%</td>
<td align="left">  A</td>
</tr>
<tr>
<td align="center">4</td>
<td align="center">5</td>
<td align="center"><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /></td>
<td><a href="http://www.tiobe.com/content/paperinfo/tpci/C_.html" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.tiobe.com']);">C#</a></td>
<td align="center">8.205%</td>
<td align="center">+1.52%</td>
<td align="left">  A</td>
</tr>
<tr>
<td align="center">5</td>
<td align="center">8</td>
<td align="center"><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /></td>
<td><a href="http://www.tiobe.com/content/paperinfo/tpci/Objective-C.html" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.tiobe.com']);">Objective-C</a></td>
<td align="center">6.805%</td>
<td align="center">+3.56%</td>
<td align="left">  A</td>
</tr>
<tr>
<td align="center">6</td>
<td align="center">4</td>
<td align="center"><img src="http://www.tiobe.com/tiobe_index/images/Down.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Down.gif" alt="" border="0" /></td>
<td><a href="http://www.tiobe.com/content/paperinfo/tpci/PHP.html" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.tiobe.com']);">PHP</a></td>
<td align="center">6.001%</td>
<td align="center">-1.51%</td>
<td align="left">  A</td>
</tr>
<tr>
<td align="center">7</td>
<td align="center">7</td>
<td align="center"><img src="http://www.tiobe.com/tiobe_index/images/Same.gif" alt="" border="0" /></td>
<td><a href="http://www.tiobe.com/content/paperinfo/tpci/(Visual)_Basic.html" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.tiobe.com']);">(Visual) Basic</a></td>
<td align="center">4.757%</td>
<td align="center">-0.36%</td>
<td align="left">  A</td>
</tr>
<tr>
<td align="center">8</td>
<td align="center">6</td>
<td align="center"><img src="http://www.tiobe.com/tiobe_index/images/Down.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Down.gif" alt="" border="0" /></td>
<td><a href="http://www.tiobe.com/content/paperinfo/tpci/Python.html" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.tiobe.com']);">Python</a></td>
<td align="center">3.492%</td>
<td align="center">-2.99%</td>
<td align="left">  A</td>
</tr>
<tr>
<td align="center">9</td>
<td align="center">9</td>
<td align="center"><img src="http://www.tiobe.com/tiobe_index/images/Same.gif" alt="" border="0" /></td>
<td><a href="http://www.tiobe.com/content/paperinfo/tpci/Perl.html" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.tiobe.com']);">Perl</a></td>
<td align="center">2.472%</td>
<td align="center">+0.14%</td>
<td align="left">  A</td>
</tr>
<tr>
<td align="center">10</td>
<td align="center">12</td>
<td align="center"><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /></td>
<td><a href="http://www.tiobe.com/content/paperinfo/tpci/JavaScript.html" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.tiobe.com']);">JavaScript</a></td>
<td align="center">2.199%</td>
<td align="center">+0.69%</td>
<td align="left">  A</td>
</tr>
<tr>
<td align="center">11</td>
<td align="center">11</td>
<td align="center"><img src="http://www.tiobe.com/tiobe_index/images/Same.gif" alt="" border="0" /></td>
<td><a href="http://www.tiobe.com/content/paperinfo/tpci/Ruby.html" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.tiobe.com']);">Ruby</a></td>
<td align="center">1.494%</td>
<td align="center">-0.29%</td>
<td align="left">  A</td>
</tr>
<tr>
<td align="center"><span style="color: #ff0000;"><strong>12</strong></span></td>
<td align="center"><span style="color: #ff0000;">10</span></td>
<td align="center"><span style="color: #ff0000;"><img src="http://www.tiobe.com/tiobe_index/images/Down.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Down.gif" alt="" border="0" /></span></td>
<td><span style="color: #ff0000;"><strong><a href="http://www.tiobe.com/content/paperinfo/tpci/Delphi_Object_Pascal.html" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.tiobe.com']);"><span style="color: #ff0000;">Delphi/Object Pascal</span></a></strong></span></td>
<td align="center"><span style="color: #ff0000;">1.245%</span></td>
<td align="center"><span style="color: #ff0000;">-0.93%</span></td>
<td align="left"><span style="color: #ff0000;">  A</span></td>
</tr>
<tr>
<td align="center">13</td>
<td align="center">13</td>
<td align="center"><img src="http://www.tiobe.com/tiobe_index/images/Same.gif" alt="" border="0" /></td>
<td><a href="http://www.tiobe.com/content/paperinfo/tpci/Lisp.html" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.tiobe.com']);">Lisp</a></td>
<td align="center">1.175%</td>
<td align="center">+0.11%</td>
<td align="left">  A</td>
</tr>
<tr>
<td align="center">14</td>
<td align="center">23</td>
<td align="center"><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /></td>
<td><a href="http://www.tiobe.com/content/paperinfo/tpci/PL_SQL.html" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.tiobe.com']);">PL/SQL</a></td>
<td align="center">0.803%</td>
<td align="center">+0.24%</td>
<td align="left">  A</td>
</tr>
<tr>
<td align="center">15</td>
<td align="center">14</td>
<td align="center"><img src="http://www.tiobe.com/tiobe_index/images/Down.gif" alt="" border="0" /></td>
<td><a href="http://www.tiobe.com/content/paperinfo/tpci/Transact-SQL.html" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.tiobe.com']);">Transact-SQL</a></td>
<td align="center">0.746%</td>
<td align="center">-0.03%</td>
<td align="left">  A</td>
</tr>
<tr>
<td align="center"><span style="color: #ff0000;"><strong>16</strong></span></td>
<td align="center"><span style="color: #ff0000;">16</span></td>
<td align="center"><span style="color: #ff0000;"><img src="http://www.tiobe.com/tiobe_index/images/Same.gif" alt="" border="0" /></span></td>
<td><span style="color: #ff0000;"><strong><a href="http://www.tiobe.com/content/paperinfo/tpci/Pascal.html" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.tiobe.com']);"><span style="color: #ff0000;">Pascal</span></a></strong></span></td>
<td align="center"><span style="color: #ff0000;">0.734%</span></td>
<td align="center"><span style="color: #ff0000;">-0.03%</span></td>
<td align="left"><span style="color: #ff0000;">  A</span></td>
</tr>
<tr>
<td align="center">17</td>
<td align="center">18</td>
<td align="center"><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /></td>
<td><a href="http://www.tiobe.com/content/paperinfo/tpci/Ada.html" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.tiobe.com']);">Ada</a></td>
<td align="center">0.632%</td>
<td align="center">-0.02%</td>
<td align="left">  B</td>
</tr>
<tr>
<td align="center">18</td>
<td align="center">35</td>
<td align="center"><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /></td>
<td><a href="http://www.tiobe.com/content/paperinfo/tpci/Logo.html" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.tiobe.com']);">Logo</a></td>
<td align="center">0.619%</td>
<td align="center">+0.26%</td>
<td align="left">  B</td>
</tr>
<tr>
<td align="center">19</td>
<td align="center">17</td>
<td align="center"><img src="http://www.tiobe.com/tiobe_index/images/Down.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Down.gif" alt="" border="0" /></td>
<td><a href="http://www.tiobe.com/content/paperinfo/tpci/Assembly.html" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.tiobe.com']);">Assembly</a></td>
<td align="center">0.563%</td>
<td align="center">-0.10%</td>
<td align="left">  B</td>
</tr>
<tr>
<td align="center">20</td>
<td align="center">25</td>
<td align="center"><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /><img src="http://www.tiobe.com/tiobe_index/images/Up.gif" alt="" border="0" /></td>
<td><a href="http://www.tiobe.com/content/paperinfo/tpci/ABAP.html" onclick="javascript:_gaq.push(['_trackEvent','outbound-article','http://www.tiobe.com']);">ABAP</a></td>
<td align="center">0.560%</td>
<td align="center">+0.01%</td>
<td align="left">  B</td>
</tr>
</tbody>
</table>

Pascal编译工具和Free Pascal
---------------------------

### Pascal编译器编年史

Pascal是一门编程语言，而Turbo Pascal、Free
Pascal等则是这门语言的编译系统.。这两者的关系就好比C++和VC、GCC的关系。Pascal编译系统的编年史如下：

<table align="center" bgcolor="white">
<tbody>
<tr bgcolor="Silver">
<td align="left" valign="center" width="66"><strong>出版年代</strong></td>
<td align="left" valign="center" width="122"><strong>版本名称</strong></td>
<td align="left" valign="center" width="400"><strong>主要特色</strong></td>
</tr>
<tr>
<td align="left" valign="center" width="66">1983</td>
<td align="left" valign="center" width="122">Turbo Pascal 1.0</td>
<td></td>
</tr>
<tr>
<td></td>
<td align="left" valign="center" width="122">Turbo Pascal 2.0</td>
<td></td>
</tr>
<tr>
<td></td>
<td align="left" valign="center" width="122">Turbo-87 Pascal</td>
<td align="left" valign="center" width="400">提高实数运算速度并扩大值域</td>
</tr>
<tr>
<td align="left" valign="center" width="66">1985</td>
<td align="left" valign="center" width="122">Turbo Pascal 3.0</td>
<td align="left" valign="center" width="400">增加图形功能</td>
</tr>
<tr>
<td></td>
<td align="left" valign="center" width="122">Turbo BCD Pascal</td>
<td align="left" valign="center" width="400">特别适合应用于商业</td>
</tr>
<tr>
<td align="left" valign="center" width="66">1987</td>
<td align="left" valign="center" width="122">Turbo Pascal 4.0</td>
<td align="left" valign="center" width="400">提供集成开发环境(IDE)，引入单元概念</td>
</tr>
<tr>
<td align="left" valign="center" width="66">1988</td>
<td align="left" valign="center" width="122">Turbo Pascal 5.0</td>
<td align="left" valign="center" width="400">增加调试功能</td>
</tr>
<tr>
<td align="left" valign="center" width="66">1989</td>
<td align="left" valign="center" width="122">Turbo Pascal 5.5</td>
<td align="left" valign="center" width="400">支持面向对象的程序设计(OPP)</td>
</tr>
<tr>
<td align="left" valign="center" width="66">1990</td>
<td align="left" valign="center" width="122">Turbo Pascal 6.0</td>
<td align="left" valign="center" width="400">提供面向对象的应用框架和库(Turbo Vision)</td>
</tr>
<tr>
<td align="left" valign="center" width="66">1992</td>
<td align="left" valign="center" width="122">Turbo Pascal 7.0</td>
<td align="left" valign="center" width="400">面向对象的应用系统、更完善的IDE</td>
</tr>
<tr>
<td></td>
<td align="left" valign="center" width="122">Turbo Vision 2.0</td>
<td></td>
</tr>
<tr>
<td align="left" valign="center" width="66">1993</td>
<td align="left" valign="center" width="122">Borland Pascal 7.0 开发</td>
<td align="left" valign="center" width="400">Object Windows库(For Windows) 提供对OLE多媒体应用开发的支持</td>
</tr>
<tr>
<td align="left" valign="center" width="66">1995</td>
<td align="left" valign="center" width="122">Delphi (Object Pascal)</td>
<td></td>
</tr>
<tr>
<td></td>
<td align="left" valign="center" width="122">Visual Pascal</td>
<td></td>
</tr>
<tr>
<td></td>
<td align="left" valign="center" width="122">Free Pascal</td>
<td></td>
</tr>
<tr>
<td>2011</td>
<td>lazarus 0.9.31</td>
<td>图形应用程序编辑</td>
</tr>
</tbody>
</table>

### Turbo Pascal的衰落和Free Pascal的兴起

在DOS时期，Turbo Pascal（包括同个体系的Borland
Pascal）曾经独领风骚，但由于Turbo
Pascal是DOS下的16位编程工具，随着Windows和内存的增大，Turbo
Pascal已经无法适应时代的需求，其地位逐渐被Delphi和Free
Pascal取代。其中，Free
Pascal是由一个国际组织开发的32/64位Pascal编程工具，属于自由软件，可用于各种操作系统。根据编译选项的不同，它可以使用Turbo
Pascal兼容语法、Delphi
语法或者其它语法进行编写程序。由于它拥有32/64位的编译器，而且一直在更新发展中，因此它的功能比Turbo
Pascal更加强大，拥有许多现代程序设计的特征。全国信息学奥林匹克竞赛决赛（NOI）和国际信息学奥林匹克竞赛（IOI）已经指定Free
Pascal为比赛使用的Pascal编程工具。

### Free Pascal和Turbo Pascal的区别

虽然Free Pascal尽量设计得和Turbo
Pascal接近，但是由于以下的两个原因，两者之间还是有一些区别的：

1.  Free Pascal是一个32位的编译器，而Turbo Pascal只是16位编译器；
2.  Free Pascal是一个跨平台的编译器，可在linux系统应用，而Turbo
    Pascal只在windows上使用，信息竞赛中多用linux评测。
3.  如果你的代码是遵守ANSI Pascal的，那么代码从Turbo Pascal移植到Free
    Pascal是没有问题的。

关于Turbo Pascal和Free
Pascal在语言特性上的具体区别，别的地方已经列举得很详细，这里不做赘述，有需要请参见[http://baike.baidu.com/view/26358.htm\#2](http://baike.baidu.com/view/26358.htm#2)。

Ubuntu下安装Free Pascal编译器
-----------------------------

由于信息学奥林匹克竞赛普遍采用Linux系统作为系统平台，因此这里主要讲Ubuntu下的Free
Pascal安装配置方法。如果你没有装好Ubuntu，可以选择安装专门为竞赛提供的[NOI
Linux系统](http://www.noi.cn/noi-linux)，里面已经安装配置好Free Pascal。

### 下载Free Pascal

可以在Sourceforge上下载Free
Pascal：[http://sourceforge.net/projects/freepascal/files/Linux/](http://sourceforge.net/projects/freepascal/files/Linux/)

### 安装Free Pascal

1.  以2.6.0为例，将下载下来的文件进行解压：

``` bash
$ tar -tvf fpc-2.6.0.i386-linux.tar
```

注意把上面的"2.6.0"改成实际的文件名上的版本号。

2.  之后cd进去安装Free
    Pascal，一路y到底直到安装结束，遇到询问安装路径选择，就选择默认路径。

``` bash
$ cd fpc-2.6.0.i386-linux sudo sh install.sh
```

3.  安装完成后，可以测试一下编译官方给的例子，如果在安装过程中选择安装了系统文档，并且安装在默认路径（/usr/share/doc/fpc-2.6.0）下，可以试着编译这个路径下的例子。

``` bash
$ cd /usr/share/doc/fpc-2.6.0/examples/text fpc hello.pp ./hello
```

如果找不到这个例子，可以手动创建一个hello.pp文件并输入以下的内容：

``` pascal
program hello; begin writeln('Hello world'); end.
```

之后再使用上面的fpc命令编译这个文件，如果编译运行后成功输出“Hello
world”，说明编译器已经安装成功。

安装配置Free Pascal的IDE
------------------------

编译器装好之后，还得考虑使用什么集成开发环境（IDE）。这里介绍三种IDE，一种是官方自带的IDE，一种是专门为NOI开发的GUIDE，最后一种是Emacs的pascal-mode。

### 官方自带的IDE

如果安装Free
Pascal时选择安装IDE，则安装完后，打开终端并敲入“fp”命令将会进入Free
Pascal自带的IDE。但我在安装完成后第一次运行时提示“缺少libtinfo.so.5”错误信息，解决方法是手动为它创建一个链接：

``` bash
$ ln s /lib/libncurses.so.5 /usr/lib/libtinfo.so.5
```

再次敲入“fp”命令，进入IDE，如图1所示。

![http://i41.servimg.com/u/f41/16/31/59/00/fp110.png](http://i.imgur.com/9fHIA.png "图1 fp编辑器")

为了方便键盘操作，可以点击终端菜单栏上的【查看】-\>【显示菜单栏】选项，取消菜单栏，如果需要菜单栏时可以在终端窗口中点击右键，重新勾选“显示菜单栏"。

按“Alt+F”键或者“File”菜单，选择“new”可以新建一个pas文件，在这里可以敲入代码，如图2所示。

![http://i41.servimg.com/u/f41/16/31/59/00/fp210.png](http://i.imgur.com/gCZjK.png "图2 新建文件")

个人认为这个编辑器设计得很简单易用，符合KISS原则。具体的使用方法交给读者去尝试，这里不花篇幅去一一介绍。值得一提的是，这个IDE也支持多窗口和窗口大小调整的操作，如果窗口布局错乱，可以删除fp同一目录下的fp.dsk文件，回复默认的窗口布局。

### GUIDE编辑器

如果离不开GUI界面，可以使用GUIDE。GUIDE(GAIT Universal IDE)是由北航GAIT研究组开发的、专门为NOI选手设计的轻型集成开发环境。GUIDE具有跨平台、操作简单、支持C/C++/Pascal三种语言和单文件编译调试等优点。这个编辑器的界面如图3所示。看起来是不是很亲切呢？

![http://i41.servimg.com/u/f41/16/31/59/00/screen10.png](http://i.imgur.com/gkGSB.png "图3 GUIDE界面")

安装GUIDE的方法也非常简单，首先到[http://gait.buaa.edu.cn/\~zjb/](http://gait.buaa.edu.cn/~zjb/)下载GUIDE的安装包，注意选择Ubuntu版本。目前最新的版本是1.02，即GUIDE-1.0.2-ubuntu。

下载完成后，cd进去安装。

``` bash
$ sudo sh install.sh
```      

完成后，打开一个终端敲入“GUIDE”命令，即可启动GUIDE。

### Emacs下的Pascal Mode

作为一个Emacser，最关心的当然就是Emacs对Pascal的支持情况。Emacs为Pascal提供了一个pascal-mode环境，它包含以下一些特性：

1.  **缩进重排。**Emacs可以根据Pascal的语法规则对缓冲区的代码进行缩进重排。也可以手动缩进进行调整：行内缩进可以使用“TAB”键，缩进句子可以使用“C-M-q”组合键，缩进选区可以使用“C-M-”组合键，缩进整个缓冲可以使用“M-x
    indent-buffer”命令。
2.  **按过程、语句、表达式进行移动、删除、标记和置换。**例如，按表达式移动可以使用“C-M-f”和“C-M-b”，按句子移动可以使用“M-a”和“M-e”，按过程移动可以使用“C-M-a”和“C-M-e”，跳转到某个程序体可以使用“C-c
    C-”；标记表达式可以使用“C-M-@”，标记语句可以使用“C-x
    @”，标记过程可以使用“C-M-h”；删除从光标所在的位置到表达式的结束可以使用“C-M-k”，删除从光标所在的位置到句子的结束可以使用“M-k”，删除从光标所在的位置到句子的开头可以使用“C-x
    DEL”；置换两个表达式可以使用“C-M-t”，置换两个句子可以使用“C-x t”。
3.  **拼写补全**。“M-TAB”可以补全光标所在的拼写，“M-?”可以给出当前光标处所在的拼写的建议。
4.  **从模板插入特定程序段。**“C-c
    C-b”插入“begin...end”；“M-*”插入(*...\*)。
5.  **注释。**“C-c C-c”将选中的区域注释。“C-c C-u”取消使用“C-c
    C-c”的注释
6.  **大纲模式。**“C-c C-o”进入大纲模式。

另外，还可以修改几个变量来定制pascal-mode的风格：

-   pascal-indent-level (默认值为3)：pascal语句的缩进长度；
-   pascal-case-indent (默认值为2)：case语句的缩进长度；
-   pascal-auto-newline
    (默认值为nil)：如果值设为非nil，则在输入分号后自动换行；
-   pascal-indent-nested-functions
    (默认值为t)：如果值为nil，则嵌套的函数将缩进；
-   pascal-tab-always-indent
    (默认值为t)：如果值为非nil，则按下TAB键后将再次将当前行往前缩进一个单位，而不考虑当前光标在这一行中的位置；
-   pascal-auto-endcomments
    (默认值为t)：如果值为非nil，则每个分支和函数结束后都将自动产生一个注释对{
    ... }，注释对里的内容是这个函数或者分支的名字；

要让Emacs在打开\*.pas文件后自动开启pascal-mode，可以在.emacs中添加以下内容：

``` lisp
(add-to-list 'auto-mode-alist '("\\.pas\\'" . pascal-mode))
```

要修改pascal-mode下的默认编译方式为fpc，可以继续添加下面的代码：

``` lisp
(add-hook 'pascal-mode-hook
   (lambda ()
     (set (make-local-variable 'compile-command)
       (concat "fpc " (file-name-nondirectory (buffer-file-name)))
     )
   )
   t)
```

