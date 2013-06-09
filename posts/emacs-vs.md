---
date: '2012-12-31'
title: Emacs 编译 Visual Studio (C++) 工程项目
tags:
- emacs
- VS
categories:
- tools
postid: '1132'
guid: http://josephpan.net/blog/?p=1132
---

在 Windows 开发比较大型的 C/C++ 项目，往往还是得借助微软的 Visual Studio
(C++)，但对于重度 Emacs 使用者，离开了用起 VC 来总是各种蹩脚。关于如何在
Emacs 中搭建 VC
的开发环境，[fangzhzh](http://emacser.com/author/fangzhzh/) 的一篇博文
《[Emacs 中开发 VC 程序](http://emacser.com/dev-vc.htm)》
已经做了比较好的讨论。唯一不足的地方是对 Emacs 调用 VC
编译缺乏更深入的探讨。编译 VC
基本上还是要靠微软自家的工具，经过我的摸索，一共有三种不同的方案，针对不同的需要，用户可以自行选择。

总体说来，这三种方案各自的特点比较如下：

<table class="table table-striped">
<thead>
<tr>
<th class="right" scope="col">序号</th>
<th class="left" scope="col">调用工具</th>
<th class="left" scope="col">读取文件格式</th>
<th class="left" scope="col">特点</th>
</tr>
</thead>
<tbody>
<tr>
<td class="right">1</td>
<td class="left">envdev</td>
<td class="left">*.sln</td>
<td class="left">可以编译整个VS的解决方案。缺点在于编译后没有给出错误提示。</td>
</tr>
<tr>
<td class="right">2</td>
<td class="left">nmake</td>
<td class="left">*.mak</td>
<td class="left">使用微软自家的 make 工具来编译单个工程。缺点在于生成 *.mak 文件比较麻烦。</td>
</tr>
<tr>
<td class="right">3</td>
<td class="left">msdev</td>
<td class="left">*.dsw</td>
<td class="left">VC 6.0 提供的单个工程编译工具。在VS 2005之后就被 envdev 取代了。</td>
</tr>
</tbody>
</table>

现在就让我们来深入探讨一下如何在 Emacs 中编译 Visual Studio (C++)
的项目。

1 方案一：envdev + .sln
----------------------

在Visual Studio中，可以把所有的项目看作一个解决方案，这个解决方案就用
\*.sln 文件来记录，并通过 devenv 工具来读取、分析和编译。它位于VS目录下的
`Common7IDE` 目录中。

为了方便直接在Emacs下调用envdev，可以先把devenv所在的目录加进系统环境变量。例如，我的devenv所在的目录为“D:/Program
Files/Microsoft Visual Studio
9.0/Common7/IDE”，则可以将该路径添加到PATH环境变量中。

完成后，打开cmd，执行

``` bash
$ devenv -h
```

将可以看到如下的提示：

``` bash
e:josephcodesCV_01CV_01>devenv -h
devenv -h

Microsoft (R) Visual Studio Version 9.0.30729.1.
Copyright (C) Microsoft Corp. All rights reserved.

Invalid Command Line. Unknown Switch : h.

Use:
devenv  [solutionfile | projectfile | anyfile.ext]  [switches]

The first argument for devenv is usually a solution file or project file.
You can also use any other file as the first argument if you want to have the
file open automatically in an editor. When you enter a project file, the IDE
looks for an .sln file with the same base name as the project file in the
parent directory for the project file. If no such .sln file exists, then the
IDE looks for a single .sln file that references the project. If no such single
.sln file exists, then the IDE creates an unsaved solution with a default .sln
file name that has the same base name as the project file.

Command line builds:
devenv solutionfile.sln /build [ solutionconfig ] [ /project projectnameorfile [ /projectconfig name ] ]
Available command line switches:

/Build          Builds the solution or project with the specified solution
                configuration. For example "Debug". If multiple platforms
                are possible, the configuration name must be enclosed in quotes
                and contain platform name. For example: "Debug|Win32".
/Clean          Deletes build outputs.
/Command        Starts the IDE and executes the command.
/Deploy         Builds and then deploys the specified build configuration.
/Edit           Opens the specified files in a running instance of this
                application. If there are no running instances, it will
                start a new instance with a simplified window layout.
/LCID           Sets the default language in the IDE for the UI.
/Log            Logs IDE activity to the specified file for troubleshooting.
/NoVSIP         Disables the VSIP developer's license key for VSIP testing.
/Out            Appends the build log to a specified file.
/Project        Specifies the project to build, clean, or deploy.
                Must be used with /Build, /Rebuild, /Clean, or /Deploy.
/ProjectConfig  Overrides the project configuration specified in the solution
                configuration. For example "Debug". If multiple platforms are
                possible, the configuration name must be enclosed in quotes
                and contain platform name. For example: "Debug|Win32".
                Must be used with /Project.
/Rebuild        Cleans and then builds the solution or project with the
                specified configuration.
/ResetAddin     Removes commands and command UI associated with the specified Add-in.
/ResetSettings  Restores the IDE's default settings, optionally resets to
                the specified VSSettings file.
/ResetSkipPkgs  Clears all SkipLoading tags added to VSPackages.
/Run            Compiles and runs the specified solution.
/RunExit        Compiles and runs the specified solution then closes the IDE.
/SafeMode       Launches the IDE in safe mode loading minimal windows.
/Upgrade        Upgrades the project or the solution and all projects in it.
                A backup of these files will be created as appropriate.  Please
                see Help on 'Visual Studio Conversion Wizard' for more
                information on the backup process.

Product-specific switches:

/debugexe       Open the specified executable to be debugged. The
                remainder of the command line is passed to this
                executable as its arguments.
/useenv         Use PATH, INCLUDE, LIBPATH, and LIB environment variables
                instead of IDE paths for VC++ builds.

To attach the debugger from the command line, use:
        VsJITDebugger.exe -p <pid>
```

按照提示，在VS中创建一个sln工程文件后，使用devenv编译的命令为：

``` bash
$ devenv solutionfile.sln /build [ solutionconfig ] [ /project projectnameorfile [ /projectconfig name ] ]
```

其中的 `/build` 等选项可以替换成 `/run` 等其他选项。

之后可以配置 Emacs，让我们在按下 `F7`
键后选择各种编译选项。在.emacs文件中加入以下内容：

``` commonlisp
(defun is-devstudio-solution (filename)
  (or 
   (null (file-name-extension filename))
   (string= (file-name-extension filename) "sln")))

(read-file-name "Solution: " nil nil t nil 'is-devstudio-solution) 

(defun extract-projects (sln-file)
  (save-excursion
    (with-temp-buffer
      (insert-file sln-file)
      (goto-char (point-min))
      (let ((result nil)
            (index 0))
        (while
            (re-search-forward
             "Project("{[-A-Z0-9]+}")[        ]+=[    ]+"([A-Za-z0-9_]+)"[      ]*,[    ]+"([A-Za-z0-9_.]+)""
             (point-max)
         t) 
    (add-to-list 'result (cons (match-string-no-properties 1) (match-string-no-properties 2))))
    result))))

(defun dev-studio-build ()
  (interactive)
  (let*
      ((solution-name
        (read-file-name "Solution: " nil nil t))
       (projects
        (extract-projects solution-name))
       (action
        (completing-read "Action: " '(("Build" . 0) ("Clean" . 1) ("Run" . 2) ("RunExit" . 3))
                         nil t "Build"))
       (configuration
        (completing-read "Configuration: " '(("Debug" . 0) ("Release" . 1) ("Hybrid" . 2))
                         nil t "Debug"))
       (platform
        (completing-read "Platform: " '(("Win32" .0) ("x86" . 1))
                         nil t "Win32"))
       (project
        (completing-read "Project " projects
                         nil t (caar projects))))
    (compile
     (concat "Devenv "" solution-name "" /" action " ""  (concat configuration "|" platform) "" /project "" (cdr (assoc project projects)) """))))
```

然后将 `dev-studio-build` 绑定到 `F7` 键上，例如：

``` commonlisp
(defun my-c-mode-common-hook()
    (define-key c-mode-base-map [(f7)] 'dev-studio-build)

(add-hook 'c-mode-common-hook 'my-c-mode-common-hook)
```

2 方案二：nmake + .mak
---------------------

直接编译\*.sln文件的缺点在于编译后只会给出结果，而没有错误提示，这样不利于调试。除了直接编译\*.sln文件之外，另外的选择是使用微软自家的
make 工具 —— nmake 来编译 Makefile ^[1](#fn-.1)^ 或者 .mak 文件。但 VS
使用 \*.sln 和 \*.vcproj 来管理工程项目，并不提供 .mak
文件。为了得到这个文件，可以使用一个 python 脚本
[vcproj2mak.py](http://inet-lab.googlecode.com/svn/trunk/utils/Misc/vcproj2mak.py)
。使用命令为：

``` bash
$ python vcproj2mak.py 工程文件.vcproj -O makefile文件.mak
```

执行这个脚本需要满足两个条件：

1.  [Python](http://www.python.org/) 2.x 或
    3.x，安装的时候注意选择注册环境变量，省得自己添加；
2.  生成的 .mak 文件需要调用 mkdir 指令来创建文件夹，而这个指令是 Unix
    下的工具。所以建议装一个
    [GnuWin](https://sourceforge.net/projects/gnuwin32/)
    套件，这个套件提供了大量有用的 Unix 工具。

在脚本执行过程中可能会报“unknown encoding”错误，这个原因是 vcproj 文件在
Windows 下的默认编码是 gb2312 的，而 python 似乎不支持 gb2312
。解决的方法是使用 Emacs 打开那个 vcproj 文件，然后 `C-x Ret r` ，选择
`UTF-8` 将文件编码改为 UTF-8 格式，并将第一行

``` html
<?xml version="1.0" encoding="gb2312"?>
```

中的 "gb2312" 改为 "utf-8" 即可。完成后可以调用 nmake
来执行编译，调用格式为：

``` bash
$ nmake -f mak文件名 编译选项
```

其中 `编译选项` 是你的编译方案，一般可以选择 `Debug` 或者 `Release` 。

另外一个问题是当调用过一次 nmake 后，nmake 就会在当前目录下创建 Debug
或者 Release 目录，此时再调用一次 nmake 会提示文件夹创建错误。例如：

``` bash
$ mkdir Debug
"d:/Program Files/Git/bin/mkdir.EXE": cannot create directory `Debug': File exists
```

解决这个问题的方法是修改生成的 .mak 文件，在其中的 "mkdir Debug" 和
"mkdir Release" 两行语句的前面加一个减号 "-" ，表示无论 mkdir
过程中出现什么错误，都不要报错继续执行。更一劳永逸的做法是修改那个 python
脚本，将第207行

``` python
mkwrite ( fh, "tmkdir %s" % cfname )
```

改为

``` python
mkwrite ( fh, "t-mkdir %s" % cfname )
```

即可。

到这里还没结束，为了让 Emacs 更方便的调用 nmake，可以将 nmake
作为主要的编译工具。在 .emacs 文件中加入这一行：

``` commonlisp
;; Set up for Visual C++ compiling
(setq compile-command "nmake -f ")
```

还有一个更好的做法是再写一个总的 Makefile ，以便于选择编译选项：

``` makefile
PROJECT=MyProject
all: debug
debug: FORCE
nmake /f $(PROJECT).mak CFG="$(PROJECT) - Win32 Debug"
release: FORCE
nmake /f $(PROJECT).mak CFG="$(PROJECT) - Win32 Release"
FORCE:
```

3 方案三：msdev + .dsw
---------------------

VC 6.0 使用一个更古老的工具 msdev.exe
来编译VC的工程文件。直接调用msdev.exe，即启动Visual
studio的UI界面，同时msdev.exe也接受命令行调用。我们看其帮助。

```
msdev /?
msdev /?
Usage:
MSDEV [myprj.dsp|mywksp.dsw]    - load project/workspace
[]        - load source file
/?            - display usage information
/EX         - execute a VBScript macro
/OUT         - redirect command line output to a file
/USEENV            - ignore tools.options.directories settings
/MAKE [] [...]    - build specified target(s)
[
-
]
[[
|ALL] - [DEBUG|RELEASE|ALL]]
/CLEAN        - delete intermediate files but don't build
/REBUILD        - clean and build
/NORECURSE    - don't build dependent projects
```

示例语句：

``` bash
C:Program Files/Microsoft Visual Studio/VC98binmsdev.exe test2.dsw /Make  /NORECURSE
```

同样，使用clean，rebuild可以清除、重编译该工程。将test2
改为test21，test23，即改变编译对象。
总这样写也很麻烦，而且为了在Emacs中调用 ，我们将其写成一个批处理。

``` bash
d:
cd d:Mydocumentsworkbench
set project=%1
set target=%2
if project == set project=test2
    if target == set target=/NORECURSE
        msdev test2.dsw /Make %target%
```

保存为makTest2.bat。调用方式为：

``` bash
$ makeTest2 [工程 [目标]]
```

默认为编译test2 的 /NORECURSE。如果要编译test23的rebuild，调用方式为：

``` bash
$ makeTest2 test23 /REBUILD
```

Footnotes:
----------

^[1](#fnr-.1)^ 这里指的 Makefile 是指适用于微软的 nmake 的 Makefile
文件。微软的 nmake 使用了自己的一套标准（原因你懂的）。如果需要得到适用于
GNU Linux 的 Makefile，可以试试
[sln2mak](http://www.codeproject.com/Articles/28908/Tool-for-Converting-VC-2005-Project-to-Linux-Makef)
工具。
