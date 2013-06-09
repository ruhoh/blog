---
date: '2011-11-14'
title: PGF/TikZ资源汇总
tags:
- CLI
- Drawing
- Graphics
- PGF
- TikZ
categories:
- tools
postid: '459'
guid: http://josephpan.net/blog/?p=459
---

什么是TikZ和PGF？
----------------

Ti*k*Z和PGF是一种用在TeX上的CLI绘图工具。CLI和GUI是两种常见的绘图方式，前者是所想即所得（WYTIWYG）的，通过类编程的思想实现绘图，这种方式往往能够生成精确控制的函数图，常见的有PostScript、PGF、Asymptote、PSTricks等。后者则是所见即所得（WYSIWYG）的，常见的有CorelDraw、Illustrator、Photoshop、GIMP、Office、Visio等。
Ti*k*Z和PGF的关系则是高层和底层的关系，简单说来，Ti*k*Z基于PGF，它可以帮助我们用更易于理解的方式创建复杂的图形。PGF的全名是“portable
graphics format”，或者“pretty, good,
functional”，Ti*k*Z的命名更有趣，采用的是递归式的取名：“TikZ ist kein
Zeichenprogramm”(TikZ is not a drawing
program)，类似的取名最出名的恐怕就是GNU（GNU is Not Unix）了。

教程
----

1.  TikZ and pgf Manual：官方指导教程。
2.  Graphics with Tikz：一份简单的Ti*k*Z教程slide。
3.  例学Tikz & PGF：从具体例子入手学习Ti*k*Z和PGF。
4.  [A TikZ mini
    course](http://automatica.dei.unipd.it/people/varagnolo/tikz.html)：一份介绍Ti*k*Z的简短的slide。
5.  [A TikZ tutorial: Generating graphics in the spirit of
    TeX](http://river-valley.tv/a-tikz-tutorial-generating-graphics-in-the-spirit-of-tex/)：TUG
    2009视频教程。
6.  [Commutative Diagrams using
    TikZ](http://www.felixl.de/commu.pdf)：一份介绍如何在( )中应用Ti*k*Z绘制交换图的教程。
7.  [Graphics in
    LaTeX](http://www.tug.org/pracjourn/2007-1/beccari/)：一份对( )常见画图工具的综述，包含了对Ti*k*Z的有用的介绍。
8.  [Graphics with PGF and
    TikZ](http://www.tug.org/pracjourn/2007-1/mertz/)：一篇发表在PracTeX杂志上的文章，包含了许多有用的图例。还有它的[演示视频](http://www.river-valley.tv/conferences/practex2006/entries/william-com.html)。
9.  [Including TikZ
    pictures](http://kogs-www.informatik.uni-hamburg.de/~meine/tikz/process/)：介绍如何导入外部Ti*k*Z图案的文章。
10. [LaTeX Figures with PGF and
    TikZ](http://particlephd.wordpress.com/2009/01/02/latex-figures-with-pgf-and-tikz/)：一份关于使用PGF和Ti*k*Z的利弊的讨论，发表于[High
    Energy PhDs weblog](http://particlephd.wordpress.com/)。
11. [Statistiker-wg.de
    tutorials](http://www.statistiker-wg.de/pgf/tutorials.htm)：收集了很多PP的Ti*k*Z实例，不过是德文的。
12. [Trace Diagram Codes &
    Examples](http://elishapeterson.wikidot.com/tikz:diagrams)：展示如何绘制[trance图](http://en.wikipedia.org/wiki/Trace_diagram)。

相关论坛、博客以及邮件列表
--------------------------

1.  [comp.text.tex](http://groups.google.com/group/comp.text.tex/topics)：最大并且是最活跃的( )相关的论坛。
2.  [LaTeX-Community.org](http://www.latex-community.org/index.php)：一个相对比较新的不过发展很迅速的( )论坛/社区。拥有很多友善并且活跃的用户，可以帮忙解决大部分( )相关的问题。
3.  [Beamer forums on
    SF](http://sourceforge.net/forum/?group_id=92412)：Beamer和PGF都是由同个作者写的，所以Sourceforge上的Beamer论坛上也有专门讨论PGF/Tikz的版块。
4.  [PGF and TikZ forums on
    Sourceforge](http://sourceforge.net/forum/?group_id=142562)：Sourceforge上的PGF/TikZ论坛。活跃度比较低。但如果你向PGF用户邮件列表提交问题，获取帮助的机会比较大。
5.  [LaTeX\_Fun](http://blog.sina.com.cn/s/articlelist_1578561911_6_1.html)：介绍( )技术的博客。
6.  [The latex-beamer-users mailing list on
    SF](http://sourceforge.net/mailarchive/forum.php?forum_name=latex-beamer-users)：Sourceforge上的( )-Beamer用户邮件列表。在这个邮件列表中也能够找到关于PGF/TikZ的讨论。
7.  [CTeX论坛](http://bbs.ctex.org/)：里面有专门的( )绘图专区版块，不过介绍的内容比较杂，还可以找到Asymptote、PostScript等的资源。

实例
----

1.  [TeXample.net](http://www.texample.net/)：PGF/TikZ的官方gallery，要检索全部实例可以访问[这里](http://www.texample.net/tikz/examples/all/)。
2.  [Graph Theory in
    LaTeX](http://graphtheoryinlatex.blogspot.com/)：收集( )下的绘图工具绘制的图案；
3.  [Altermundus.com](http://altermundus.com/)：介绍Ti*k*Z相关的包和绘制出来的实例。
4.  [简单流图](http://www.fauskes.net/pgftikzexamples/simple-flow-chart/)（Simple
    flow chart）
5.  [工作流图](http://www.texample.net/tikz/examples/tex-workflow/)（The
    TeX work flow）
6.  [UML时序图](http://www.fauskes.net/pgftikzexamples/pgf-umlsd/)（UML
    sequence diagrams）
7.  [类图](http://www.texample.net/tikz/examples/class-diagram/)（Class diagram）
8.  [ER图](http://www.texample.net/tikz/examples/entity-relationship-diagram/)（Entity-Relationship
    diagram）
9.  [系统架构图](http://www.texample.net/tikz/examples/system-combination/)（System Combination）
10. [基于数据流的系统架构图](http://www.fauskes.net/pgftikzexamples/inertial-navigation-system/)（Inertial
    navigation system）
11. [归并树](http://www.texample.net/tikz/examples/merge-sort-recursion-tree/)（Merge
    sort recursion tree）
12. [Prim算法](http://www.texample.net/tikz/examples/intersecting-lines/)（Prim's
    algorithm，用于生成最小生成树）
13. [神经网络](http://www.texample.net/tikz/examples/neural-network/)（Neural
    network）
14. [有限状态机](http://www.texample.net/tikz/examples/state-machine/)（state
    machine）
15. [正则表达式图](http://www.texample.net/tikz/examples/diagram-chains/)（Putting
    a diagrams in chains）
16. [便签条图](http://www.texample.net/tikz/examples/boxes-with-text-and-math/)（Boxes
    with text and math）
17. [公式说明](http://www.texample.net/tikz/examples/beamer-arrows/)（Beamer
    Arrows）
18. [负反馈系统控制图](http://www.fauskes.net/pgftikzexamples/control-system-principles/)（Control
    system principles）
19. [直线相交](http://www.texample.net/tikz/examples/intersecting-lines/)（Intersecting
    lines）
20. [函数图](http://www.texample.net/tikz/examples/parabola-plot/)（Parabola
    plot）
21. [波形图](http://www.texample.net/tikz/examples/parameterized-plots/)（Parameterized
    plots）
22. [节点形状](http://www.texample.net/tikz/examples/node-shapes/)（Node
    shapes）
23. [连接文字和图形](http://media.texample.net/tikz/examples/thumbs/connecting-text-and-graphics.jpg)（Connecting
    text and graphics）
24. [韦恩图](http://www.texample.net/tikz/examples/set-operations-illustrated-with-venn-diagrams/)（Set
    operations illustrated with Venn diagrams）
25. [心智图](http://www.texample.net/tikz/examples/computer-science-mindmap/)（Computer
    science mindmap）
26. [太极图](http://www.texample.net/tikz/examples/yin-and-yang/)（Yin
    and yang）
27. [蛛网图](http://www.texample.net/tikz/examples/spiderweb-diagram/)（Spiderweb
    diagram）
28. [分散的点](http://www.texample.net/tikz/examples/scatterplot/)（Scatterplot）

扩展宏包
--------

1.  [bclogo](http://www.ctan.org/tex-archive/help/Catalogue/entries/bclogo.html)：一个用于创建带标题和logo的彩色盒子的宏包。支持Ti*k*Z和PSTricks。
2.  [Beamer](http://latex-beamer.sourceforge.net/)：用来创建精美的幻灯片的宏包，可能是( )下最简单易用的幻灯片制作工具了。它和PGF/Ti*k*Z出自同一个作者。
3.  [Bodegraph](http://www.sciences-indus-cpge.apinc.org/Bode-Black-et-Nyquist-avec-Tikz)：一个用来绘制Bode图、Nichols-Black图和Nyquist图的宏包。
4.  [CircuiTikz for drawing electrical
    networks](http://home.dei.polimi.it/mredaelli/circuitikz/index.html)：一套用来在科学刊物中绘制电路图的( )宏包。PGF的电路图库就是根据这个包开发出来的。
5.  [Pgfplots](http://www.ctan.org/tex-archive/help/Catalogue/entries/pgfplots.html)：提供一个非常友好的接口，用来完成普通或者对数尺度函数图的绘制。
6.  [prerex](http://www.ctan.org/tex-archive/help/Catalogue/entries/prerex.html)：一个基于PGF的用来创建有节点相连的图表的工具。
7.  [Schéma-blocs avec
    PGF/TIKZ](http://www.papanicola.info/post-it/spip.php?article53)：用于绘制block。
8.  [sparklines](http://www.ctan.org/tex-archive/help/Catalogue/entries/sparklines.html)：用于绘制波形图。
9.  [tikz-qtree: Simple syntax and smarter layout for
    trees](http://www.ctan.org/tex-archive/help/Catalogue/entries/tikz-qtree.html)：用于在Ti*k*Z中绘制树，使用的是Alexis
    Dimitriadis'[Qtree](http://www.ctan.org/tex-archive/help/Catalogue/entries/qtree.html)的创建语法。使用它绘制出来的树不会有树节点的碰撞问题，相比Ti*k*Z的标准绘制树的功能而言有了较大的改进。
10. [tikz-timing](http://www.ctan.org/tex-archive/help/Catalogue/entries/tikz-timing.html)：用于绘制时序图。
11. [tkz-berge](http://altermundus.com/pages/graphtheory.html)：一组用于绘制多种图形的宏包。
12. [tkz-graph](http://altermundus.com/pages/graph.html)：用于绘制基本图形。
13. [tkz-linknodes](http://www.ctan.org/tex-archive/help/Catalogue/entries/tkz-linknodes.html)：用于连接两个节点元素。
14. [tkz-tab](http://www.ctan.org/tex-archive/help/Catalogue/entries/tkz-tab.html)：用于绘制复杂的表格图案。

实用工具
--------

1.  [extractpgf](http://cse.unl.edu/~cbourke/latex/extractpgf)：一个perl脚本，可以直接由tikzpicture环境里的内容生成pdf文件。
2.  [ktikz](http://www.kde-apps.org/content/show.php/ktikz?content=63188)：一个小巧的KDE工具，可以可视化生成Ti*k*Z图表。
3.  [TikZ2PDF](http://kogs-www.informatik.uni-hamburg.de/~meine/tikz/process/#tikz2pdf)：一个Python脚本工具，可以自动检测文件的改动并预览生成的图案效果。
4.  [TikZIT](http://sourceforge.net/projects/tikzit/)：一个基于Ti*k*Z的跨平台GUI绘图工具。最初是针对Ti*k*Z快速绘制点状图而开发，现在也可以用来进行常规的图形绘制。
5.  [Webgen::Tag::TikZ](http://webgen.rubyforge.org/documentation/tag/tikz.html)：一个用于生成静态的网站的工具。它支持使用TikZ标签直接在网页中自动生成基于Ti*k*Z的图形。
6.  [Blend2TikZ](http://www.fauskes.net/code/blend2tikz/)：一个支持将blender曲线转换为Ti*k*Z路径的脚本。
7.  [Convert Your VYM Mindmap to
    PGF/TikZ](http://blog.lindoze.net/software/convert-vym-mindmap-pgftikz/)：一个小巧的C语言程序，可以将 [VYM](http://sourceforge.net/projects/vym/) (View
    Your
    Mind)的Mindmap图导出的XML文件转换为Ti*k*Z的Mindmap图（[查看示例文件](http://www.fauskes.net/pgftikzexamples/computer-science-mindmap/ "PGF/TikZ mind mapping example")）。
8.  [Dia](http://live.gnome.org/Dia)：基于GTK+的图形绘制程序。能够将图形保存成PGF代码。
9.  [Dot2TeX](http://www.fauskes.net/code/dot2tex/)：Graphviz转( )。
10. [dpic](http://ece.uwaterloo.ca/~aplevich/dpic/)：一个类PIC语言的解释器，可以导出成PGF/TikZ等多种格式。它与[circuit-macros](http://www.ctan.org/tex-archive/help/Catalogue/entries/circuit-macros.html)一起使用，可以生成电路图。
11. [ePIX](http://mathcs.holycross.edu/~ahwang/epix/ePiX.html)：一组命令行工具，能够生成精确控制的函数图，并支持TikZ、PSTricks、EEPIC等多种导出格式。
12. [Eps2pgf](http://sourceforge.net/projects/eps2pgf/)：将Eps图形转换为PGF/TikZ命令
    。
13. [fig2tikz](http://kogs-www.informatik.uni-hamburg.de/~meine/software/figpy/#fig2tikz)：一个优雅的工具，可以将XFig文件转换为TikZ命令。
14. [GeoGebra](http://www.geogebra.org/cms/)：一个支持几何、线性代数、微积分的数学图像软件，最新的预览版本[pre-release
    version](http://www.geogebra.org/en/wiki/index.php/Release_Notes_GeoGebra_Pre-Release)已经支持TikZ格式命令的导出。
15. [Gnuplot TikZ
    terminal](http://peter.affenbande.org/gnuplot/)：一个用Lua编写的Gnuplot终端。能够生成PGF和TikZ代码。
16. [Inkscape TikZ
    exporter](http://code.google.com/p/inkscape2tikz/)：[Inkscape](http://www.inkscape.org/)的一个扩展工具，可以导出TikZ格式的SVG路径。目前还处在开发阶段。
17. [JFlap2TikZ](http://tug.ctan.org/pkg/jflap2tikz)：[JFlap](http://www.jflap.org/)是一个用于有限状态机、图灵机和计算机理论探索实验的工具。JFlap2TikZ则是一个非常有用的脚本，用它可以将JFlap生成的包含图形信息的jff文件转换为包含了TikZ代码的( )文件。
18. [JpgfDraw](http://theoval.cmp.uea.ac.uk/~nlct/jpgfdraw/)：一个使用Java编写的线性图形工具。可以将插画导出为PGF格式命令、PNG以及SVG文件。一个有趣的特性是它可以生成[flowfram](http://www.ctan.org/tex-archive/help/Catalogue/entries/flowfram.html)和[shapepar](http://www.ctan.org/tex-archive/help/Catalogue/entries/shapepar.html)包需要的帧序列和图形信息
19. [JTikZ](http://jtikz.sourceforge.net/)：一个基于Java
    AWT/Swing的PGF/TikZ可视化绘制工具。
20. [LaTeXPiX](http://www.beurden.cjb.net/latexpix.htm)：一个GUI绘制工具，支持导出EEPIC和PGF代码，不过只支持Windows。
21. [Matfig2PGF](http://www.mathworks.com/matlabcentral/fileexchange/loadFile.do?objectId=12962)：一个能够将Matlab图形脚本转换为PGF代码的工具。
22. [matlab2tikz](http://www.win.ua.ac.be/~nschloe/content/matlab2tikz)：基于上面的[Matfig2PGF](http://www.mathworks.com/matlabcentral/fileexchange/loadFile.do?objectId=12962)，也是一个能将Matlab的图形转换为Ti*k*Z格式命令的工具。
23. [QtiPlot](http://soft.proindependent.com/qtiplot.html)：一个用于二维/三维数据可视化及数据分析的程序。
24. [Sketch - A 3D Scene Description
    Translator](http://www.frontiernet.net/~eugene.ressler/)：一个小巧而简单的系统，可以生成二维/三维的物体和场景草图。Sketch可生成PSTricks或者PGF/TikZ代码，并允许对绘制出来的三维物体进行标注。
25. [tikzDevice - TikZ output from
    R](http://r-forge.r-project.org/projects/tikzdevice/)：提供一个针对[R](http://www.r-project.org/)[项目](http://www.r-project.org/)的全新的图形引擎，支持直接输出为TikZ命令。
26. [TpX drawing
    tool](http://tpx.sourceforge.net/TpX.htm)：一个轻量级的GUI图形绘制工具，可以绘制矢量图形。只支持Windows。

