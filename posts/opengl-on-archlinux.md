---
date: '2012-10-07'
title: ArchLinux安装配置OpenGL
tags:
- Arch
- OpenGL
categories:
- projects
postid: '1100'
guid: http://josephpan.net/blog/?p=1100
---

1 前言
------

<!-- <div class="wp-caption alignright" style="width: 200px"><img src="http://i.imgur.com/oRkhn.jpg" alt="http://i.imgur.com/oRkhn.jpg" width="219" height="272" /><p class="wp-caption-text">OpenGL SuperBible 5th Edition</p></div> -->

在Linux安装配置OpenGL理论上是一件非常轻松的事情，因为OpenGL本身就是跨平台的东西。但我在看
OpenGL SuperBible 4th Edition
的时候，却总是遇到一些让我郁闷的事情：自带的GLTools类包只能在Windows和Mac
OSX下使用，而且还得自己写Makefile。后来到网上找解决方法，才发现 SuperBible
已经早已经出到了 5th Edition，并且加入了对Linux的支持。 `--bbb`
这给我两大教训：

1.  当书中的内容有所欠缺的时候，应该及时去看官网，看看有没有发布新的版本，而不是自己在一旁摸索解决方法。
2.  不要总指望网上能够下载到电子版本，能够下载的大多数是Out of
    Date的。索性网购了一本纸质版:sigh。

2 安装 OpenGL
-------------

将第五版书中的代码下载下来：

``` bash
$ svn checkout http://oglsuperbible5.googlecode.com/svn/trunk/ oglsuperbible5-read-only
```

得到如下的目录树：

```
      
   oglsuperbible5-read-only/    # OpenGL SuperBible 5th Edition 代码包
   |                                                                  
   +--  freeglut-2.6.0/         # freeglut 安装包                     
   |                                                                  
   +--  Linux/                  # Linux Makefile 工程文件
   |     |                                               
   |     +----  Chap01/                                  
   |     |        |                                      
   |     |        +---- Block/                           
   |     |                |                              
   |     |                +---- Makefile # Block 程序的Makefile
   |     |                                                     
   |     +----  ...                                            
   |     |                                                     
   |                                                           
   +--  Src/                   # 源代码                                                
   |     |                                                     
   |     +----  Chap01/                                        
   |     |        |                                            
   |     |        +---- Block/                                 
   |     |                |                                    
   |     |                +---- Block.cpp # Block 程序源文件
   |     |                                                  
   |     +----  ...                                         
   |     |                                                  
   |     |                                                  
   |     +----  GLTools/      # GLTools工具包               
   |     |        |                                         
   |     |        +---- include/  # 头文件                  
   |     |        |      |                                  
   |     |        |      +----  GL/                         
   |     |        |      |                                  
   |     |        |      +----  GLTools.h # GLTools头文件   
   |     |        |      |                                  
   |     |        |      +----  math3d.h  # 矩阵类头文件    
   |     |        |      |                                  
   |     |        |      +----  ...                         
   |     |        |                                         
   |     |        +---- src/     # 源文件                   
   |     |               |                                  
   |     |               +---- GLTools.cpp # GLTools头文件  
   |     |               |                                
   |     |               +---- math3d.cpp  # 矩阵类源文件
   |     |               |                               
   |     |               +---- ...                       
   |     |                                               
   |     +----  Models/                                  
   |     |                                               
   |     +----  OpenEXR/                                 
   |                                                     
   +--  VisualStudio2008/    # VisualStudio 2008 工程文件
   |                                                     
   +--  VisualStudio2010/    # VisualStudio 2010 工程文件
   |                                                     
   +--  XCode/               # XCode 工程文件
```

可以看到开发OpenGL必须的freeglut包已经给出，进入该目录内安装freeglut：

``` shell
$ cd oglsuperbible5-read-only/freeglut-2.6.0
$ ./autogen.sh
$ ./configure
$ make
```

完成后，建议把帮助文档也装上：

``` shell
$ pacman -S opengl-man-pages # 可能需要root权限
```

这样，当需要获取帮助的时候，可以直接使用man查询，例如要查看 `glVertex`
函数的帮助，可以：

``` shell
$ man glvertex
```

3 编译示例程序
--------------

要编译代码包提供的示例程序，直接在 **Linux**
目录下找到相应的工程Makefile，然后 `make`
编译即可。关于Makefile的规则，推荐阅读陈皓编写的《[跟我一起写Makefile](http://wiki.ubuntu.org.cn/%E8%B7%9F%E6%88%91%E4%B8%80%E8%B5%B7%E5%86%99Makefile)》。

4 不用写Makefile也能编译
------------------------

如果是自己编写的源文件，每次都要写一个Makefile显得太过繁琐^[](#fn-.2)2^，这里给出一个方法^[](#fn-.3)3^，可以让你不用编写Makefile即可直接编译程序。

将下面的代码保存为一个脚本 **opengl** ：

``` 
 #!/bin/sh
 g++ $1 -I GLTools/include/GL -I GLTools/include/ -I GLTools/src/ -I /usr/include -I /usr/local/include -I /usr/include -L /usr/X11R6/lib -L /usr/X11R6/lib64 -L /usr/local/lib -lX11 -lglut -lGL -lGLU -lm -o ${1%.*}
```

保存后，赋予它执行权限：

``` shell
$ sudo chmod +x opengl
```

可以看到脚本中引用了几个目录中的文件，所以需要将代码包中的 **Src**
目录下的 **GLTools** 目录拷贝到这个文件夹中来，即保证你的目录树是这样的：

```
    program
       |
       +---- GLTools/      # GLTools工具包
       |       |
       |       +---- include/  # 头文件
       |       |      |
       |       |      +----  GL/
       |       |      |
       |       |      +----  GLTools.h # GLTools头文件
       |       |      |
       |       |      +----  math3d.h  # 矩阵类头文件
       |       |      |
       |       |      +----  ...
       |       |
       |       +---- src/     # 源文件
       |              |
       |              +---- GLTools.cpp # GLTools头文件
       |              |
       |              +---- math3d.cpp  # 矩阵类源文件
       |              |
       |              +---- ...
       |
       +---- opengl     # opengl脚本
       |                            
       +---- ...        # 你编写的源文件（*.cpp）
```

然后就可以同个文件夹下编写程序，要保证每个程序的头部引入必要的头文件：

```
 #include <GLTools.h>
 #include <GLShaderManager.h>
 #include <GLFrustum.h>
 #include <GLBatch.h>
 #include <GLMatrixStack.h>
 #include <GLGeometryTransform.h>
 #include <StopWatch.h>
 #include <glew.c>
 #include <GLTools.cpp>
 #include <GLShaderManager.cpp>
 #include <GLBatch.cpp>
 #include <GLTriangleBatch.cpp>
 #include <math3d.cpp>
 #include <math.h>
 #include <stdio.h>
 #include <StopWatch.h>
 #ifdef __APPLE__
 #include <glut/glut.h>
 #else
 #define FREEGLUT_STATIC
 #include <GL/glut.h>
 #endif
```

编写完后，使用下面的命令编译程序：

``` shell
$ ./opengl 文件名.cpp
```

5 glut弹出菜单无法显示？
-----------------------

如果遇到 `glutCreateMenu`
函数生成的弹出菜单无法显示的问题，可能是freeglut的版本太高的原因。我一开始是使用yaourt命令安装freeglut的，安装的版本是2.8.0，就存在这个问题。

解决的方法就是downgrade之：

``` shell
$ wget http://arm.konnichi.com/extra/os/{i686|x86_64}/freeglut-2.6.0-1-{i686|x86_64}.pkg.tar.gz
$ pacman -U ./freeglut-2.6.0-1-{i686|x86_64}.pkg.tar.gz # 可能需要root权限
```

Footnotes:
----------

^[](#fnr-.1)1^
其实我喜欢电子版本的原因是可以方便的复制书中的内容，这对我做笔记很有用。另外由于电脑屏幕够大，所以在Awesome下可以直接开Emacs和evince两个窗口，一边看书一边动手，非常顺手。

^[](#fnr-.2)2^
当然，编写一个通用的Makefile不是不可能，但对于新手来说要花费不少时间。

^[](#fnr-.3)3^
出自：[http://www.jayrambhia.com/geek/article.php/GLtools\_for\_OpenGL](http://www.jayrambhia.com/geek/article.php/GLtools_for_OpenGL)
