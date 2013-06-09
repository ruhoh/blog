---
date: '2012-07-11'
title: Hacking Logitech K350 Keyboard
tags:
- Awesome
- emacs
- K350
- linux
- Logitech
categories:
- tools
description: 介绍在Linux下通过一些hacking，让罗技K350键盘的部分功能键恢复工作的方法。
postid: '1000'
guid: http://josephpan.net/blog/?p=1000
---
1 前言
------

作为一个重度Emacs使用者，我使用电脑的大部分时间都在用键盘。“工欲善其事，必先利其器”，为了避免患上RSI，我用上了罗技K350键盘。


<img class="img-polaroid" title="罗技K350" src="http://i.imgur.com/nwtP5.png" alt="http://i41.servimg.com/u/f41/16/31/59/00/eao_0210.png" width="320" height="225" />

罗技K350是一款不错的人体工学键盘，它具有下面几个优点：

1.  人体工学键盘。采用曲形键盘设计，因此手可以很自然的放在键盘上面。具有较大的掌托，有助于减少手腕的疲劳。提供两段式可调节键盘支架，可以按照喜好调整键盘高度；
2.  极尽奢华的功能键。K350具有16颗独立的功能键，可以实现vista3D浏览（在XP系统下为应用程序切换键）、vista照片库（在XP系统下为我的图片）、媒体播放器、计算器、计算机休眠等功能。另外，通过右手侧的“Fn”键与F1-F12键组合，还可以实现快速启动word文档程序、excel表格程序、日历、IE、浏览器、MSN、电源状态检测以及光盘弹出开关。并且，这些功能键都是可编程的，通过使用官方的SetPoint工具，可以定制这些按键对应的功能；
3.  Unifying无线优联技术，通过简单的设置，可以和其他支持Unifying的外设共用一个接收器，因此和我的M505鼠标可以天衣无缝的配合；
4.  Ctrl、Alt键都较大，适合Emacser使用。

尽管如此，它也具有以下几个不足：

1.  F1-F12功能区是三个一组，与标准键盘四个一组的设计不同，因此需要适应。但适应了这样的键盘安排后，又会对标准的键盘产生不适应；`=.=bb`
2.  作为薄膜键盘，手感当然比不上机械键盘，有时候会出现按键卡槽的情况。但在薄膜键盘中，K350算是手感最好的键盘之一了；
3.  最大的问题在于，K350是针对Windows设计的，如果在Linux下使用，会发现很多功能键都没有反应。这是因为X11目前只能够处理不大于255的键码（Key
    Code），而这些功能键的键码都超出了X11的处理范围。这个问题一直让我感到很无趣。

通过数次折腾，我终于在[Daniel
Klaffenbach](http://www-user.tu-chemnitz.de/~klada/?site=projects&id=logitechkbd)的主页上找到了对K350的hacking方法，能够让K350的一部分功能键在Linux里正常工作。这篇文章将对Daniel的方法进行补充说明，并结合[Awesome](http://josephpan.net/blog/?p=992)
、Emacs等工具，让K350在Linux上最大程度的发挥自己的威力。

先放一张hack前后键盘所有功能键的工作情况对比表格：

<table class="table table-striped">
<thead>
<tr>
<th scope="col">按键</th>
<th scope="col">hack前</th>
<th scope="col">hack后</th>
</thead>
</tr>
<tr>
<td>多媒体键 (Play, Stop, Previous, Next, Volume Up, Volume Down, Mute)</td>
<td>可以工作</td>
<td>可以工作</td>
</tr>
<tr>
<td>Music、Media Center</td>
<td>可以工作（产生一样的键码）</td>
<td>可以工作（产生一样的键码）</td>
</tr>
<tr>
<td>HomePage</td>
<td>可以工作</td>
<td>可以工作</td>
</tr>
<tr>
<td>Email</td>
<td>可以工作</td>
<td>可以工作</td>
</tr>
<tr>
<td>Search</td>
<td>可以工作</td>
<td>可以工作</td>
</tr>
<tr>
<td>Eject</td>
<td>可以工作</td>
<td>可以工作</td>
</tr>
<tr>
<td>Calculator</td>
<td>可以工作</td>
<td>可以工作</td>
</tr>
<tr>
<td>Sleep</td>
<td>可以工作</td>
<td>可以工作</td>
</tr>
<tr>
<td>ZoomIn</td>
<td>不能工作</td>
<td>可以工作</td>
</tr>
<tr>
<td>ZoomOut</td>
<td>不能工作</td>
<td>可以工作</td>
</tr>
<tr>
<td>Camera</td>
<td>不能工作</td>
<td>可以工作</td>
</tr>
<tr>
<td>Messenger</td>
<td>不能工作</td>
<td>可以工作</td>
</tr>
<tr>
<td>Word</td>
<td>不能工作</td>
<td>可以工作</td>
</tr>
<tr>
<td>Excel</td>
<td>不能工作</td>
<td>可以工作</td>
</tr>
<tr>
<td>Calendar</td>
<td>不能工作</td>
<td>可以工作</td>
</tr>
<tr>
<td>Flip</td>
<td>不能工作</td>
<td>不能工作</td>
</tr>
<tr>
<td>Gadget</td>
<td>不能工作</td>
<td>不能工作</td>
</tr>
<tr>
<td>A/B/C功能键</td>
<td>不能工作</td>
<td>不能工作</td>
</tr>
</table>

由表可见，除了Flip、Gadget、A、B、C几个功能键之外，其他的功能键经过hack之后都可以正常工作。

2 所需环境和工具
----------------

-   Linux内核要求支持evdev和HID，这在比较新的Linux内核版本都已经得到满足；
-   [evrouter](http://www.bedroomlan.org/projects/evrouter)
    ，用于捕获鼠标和键盘产生的键码；
-   xmodmap，用于按键映射。

3 配置xmodmap
-------------

首先先使用xmodmap为几个原本不能工作的按键分配一个keycode不大于255的值，并取一个名字。名字可以随意，但建议和功能键本身功能相同。将下面这段文本保存为
*\$HOME/.xmodmap*：

~~~~ {.example}
keycode 234 = XF86Camera
keycode 250 = XF86ZoomIn
keycode 251 = XF86ZoomOut
keycode 252 = XF86Messenger
keycode 253 = XF86Word
keycode 254 = XF86Excel
~~~~

4 安装并配置evrouter
--------------------

之后，可以使用evrouter将捕捉到的按键event映射到xmodmap分配的keycode上。

首先到[evrouter的官方主页](http://www.bedroomlan.org/projects/evrouter)
下载evrouter并安装evrouter。

安装完成后，在终端中使用`evrouter --dump`选项捕获键码：

~~~~ {.example}
evrouter --dump /dev/input/event*
~~~~

之后可以试着按一下那些不工作的按键，例如ZoomIn键，你将会看到屏幕打印出类似下面这样的信息：

~~~~ {.example}
Window "(null)": # Window title
# Window "(null)": # Resource name
# Window "(null)": # Class name
"Logitech Unifying Device. Wireless PID:200a" "/dev/input/event8" none key/418 "fill this in!"
~~~~

复制最下面这条信息，然后打开一个编辑器，把这条信息粘贴进去，并去掉`event`后面跟着的那个阿拉伯数字，例如上面这条语句中的`8`
，然后将`fill this in`改为`XKey/XF86ZoomIn`，`XKey/`字段的作用是告诉evrouter这是个按键事件（event），而
`XF86`后跟着的名字可以随意取，但建议和功能键的名字相同。

按照这样的方法添加编辑器里内容。最后编辑器里的内容应该是类似这样的形式：

~~~~ {.example}
#Zoom In
"Logitech Unifying Device. Wireless PID:200a" "/dev/input/event" none key/418 "XKey/XF86ZoomIn"
#Zoom Out
"Logitech Unifying Device. Wireless PID:200a" "/dev/input/event" none key/419 "XKey/XF86ZoomOut"
#Word
"Logitech Unifying Device. Wireless PID:200a" "/dev/input/event" none key/421 "XKey/XF86Word"
#Excel
"Logitech Unifying Device. Wireless PID:200a" "/dev/input/event" none key/423 "XKey/XF86Excel"
#Calendar
"Logitech Unifying Device. Wireless PID:200a" "/dev/input/event" none key/397 "XKey/XF86Calendar"
#Messenger
"Logitech Unifying Device. Wireless PID:200a" "/dev/input/event" none key/430 "XKey/XF86Messenger"
#Pictures
"Logitech Unifying Device. Wireless PID:200a" "/dev/input/event" none key/442 "XKey/XF86Camera"
~~~~

将这段文本保存为 **\$HOME/.evrouterrc**

5 测试结果
----------

完成后就可以进行一下测试，在终端中分别敲入下面三句代码：

~~~~ {.example}
$ xmodmap $HOME/.xmodmap
$ sudo evrouter /dev/input/event*
$ xev
~~~~

第三句代码会运行一个命令行的按键检测工具，此时你可以试试按ZoomIn、Zoomout、Camera按键。如果有输出结果，那么恭喜你，你已经hack成功了。但到这里还不完美，因为还没有进行按键绑定，所以这些功能键还没有什么真正的用途。此外，上面这几条命令只在本次开机有效，如果不想每次开机都输入前面两条命令，你还需要设置一下自启动。

6 按键绑定
----------

可以使用以下几个工具来实现按键绑定：

### 6.1 KDE/GNome按键绑定

KDE和Gnome都提供了按键绑定的工具，例如，Gnome的按键绑定位于`Gnome设置中心`-\>`键盘`-\>`快捷键`选项。

### 6.2 xbindkeys

X11本身就自带了按键绑定工具xbindkeys，你可以编写`.xbindkeysrc`文件来实现按键绑定，如果有需要，可以参考Daniel给出的一份[.xbindkeysrc](http://www-user.tu-chemnitz.de/~klada/sites/projects/xbindkeysrc)
文件。

### 6.3 Awesome

如果使用Awesome，也可以通过配置`rc.lua`文件来进行按键绑定。这是我的绑定代码：

~~~~ {.example}
-- Volume Control
awful.key({ }, "XF86AudioRaiseVolume", function ()
             awful.util.spawn("amixer set Master 9%+") end),
awful.key({ }, "XF86AudioLowerVolume", function ()
             awful.util.spawn("amixer set Master 9%-") end),
awful.key({ }, "XF86AudioMute", function ()
             awful.util.spawn("amixer sset Master toggle") end),

-- Tools
awful.key({ }, "XF86Calculator", function ()
             awful.util.spawn("gnome-calculator") end),
awful.key({ }, "XF86Sleep", function ()
             awful.util.spawn("/usr/local/shutdown.sh") end),
awful.key({ }, "XF86Tools", function ()
             awful.util.spawn("rhythmbox") end),
awful.key({ }, "XF86HomePage", function ()
             awful.util.spawn("google-chrome") end),
awful.key({ }, "XF86Search", function ()
             awful.util.spawn("firefox") end),
awful.key({ }, "XF86Camera", function ()
             awful.util.spawn("cheese") end),
awful.key({ }, "XF86Word", function ()
             awful.util.spawn("emacs") end),
awful.key({ }, "XF86Excel", function ()
             awful.util.spawn("wps") end),
awful.key({ }, "XF86Calendar", function ()
             awful.util.spawn("/usr/local/xmind/xmind") end),
awful.key({ }, "XF86Messenger", function ()
             awful.util.spawn("pidgin") end),

-- Flipping
awful.key({ }, "XF86ZoomIn",
          function ()
             awful.client.focus.byidx( 1)
             if client.focus then client.focus:raise() end
          end),
awful.key({ }, "XF86ZoomOut",
          function ()
             awful.client.focus.byidx(-1)
             if client.focus then client.focus:raise() end
          end),
~~~~

其中：

-   音量控制绑定到了一个叫做[amixer](http://awesome.naquadah.org/wiki/Volume_control_and_display)
    的widget；
-   Sleep键绑定到了一个[可视化的关机脚本](http://awesome.naquadah.org/wiki/ShutdownDialog)
    ；
-   Music/Media Center键绑定到了媒体播放器Rhythmbox；
-   Camera键绑定到了摄像工具茄子大头贴；
-   HomePage键绑定到了Google Chrome上；
-   Search键绑定到了Firefox上；
-   我比较少用类Office排版工具，所以把Word键分给了Emacs，把Excel键分给了WPS；
-   Calendar键绑定到了XMind；
-   Messenger键绑定到了Pidgin，不过我比较少使用；
-   ZoomIn和ZoomOut用来做窗口切换。

### 6.4 Emacs

在Emacs中也可以专门做一些定制，让一些功能键为Emacs服务。由于我喜欢在Emacs中配合emms播放本地音乐，所以我的设置如下：

~~~~ {.example}
;; 配置多功能键
(global-set-key (kbd "M-<XF86Tools>") 'emms)
(global-set-key (kbd "<XF86AudioNext>") 'emms-next)
(global-set-key (kbd "<XF86AudioPrev>") 'emms-previous)
(global-set-key (kbd "<XF86AudioStop>") 'emms-stop)
(global-set-key (kbd "<XF86AudioPlay>") 'emms-pause)
~~~~

7 设置自启动
------------

最后一步是设置自启动，在这之前需要先获取对 **/dev/input/event\***
的访问权限，否则即使设置了自启动，每次启动仍然需要手动输入密码，对于像我这样的懒人而言是不可接受的。

可以通过创建一条udev规则来获取访问权限，将这面这句话保存为
**/etc/udev/rules.d/80-evrouter.rules** :

~~~~ {.example}
KERNEL=="event*", NAME="input/%k", GROUP="input"
~~~~

你需要确保当前用户属于input用户组中。可以直接在终端中敲入如下代码：

~~~~ {.example}
$ sudo groupadd input  增加一个名为input的组
$ sudo gpasswd -a USER input  添加用户USER到input组中
~~~~

**注意**把第二句代码中的`USER`改为你当前的用户名称。

完成后可以选择以下几种方法设置自启动：

### 7.1 KDE

如果使用KDE，可以将下面这段代码保存到**\~/.kde4/Autostart/autostart**：

~~~~ {.example}
#!/bin/sh
xmodmap ~/.xmodmap
evrouter /dev/input/event*
~~~~

之后为这个文件添加可执行权限：

~~~~ {.example}
$ chmod a+x ~/.kde4/Autostart/autostart
~~~~

### 7.2 Gnome

Gnome使用`session`来管理自启动，因此，可以通过gnome-session-properties(System-\>Preferences-\>Sessions)来实现自启动。方法和KDE类似：

1.  将上面的那段shell脚本保存为一个文件，例如\~/keyboard.sh；
2.  使用chmod命令添加可执行权限

    ~~~~ {.example}
    $ chmod a+x ~/keyboard.sh
    ~~~~

3.  然后在gnome-session-properties里添加这个脚本即可。

### 7.3 Awesome

Awesome的自启动可以通过设置`rc.lua`来实现，在`rc.lua`里添加这段内容：

~~~~ {.example}
-- Autorun programs
function run_once(cmd)
   findme = cmd
   firstspace = cmd:find(" ")
   if firstspace then
      findme = cmd:sub(0, firstspace-1)
   end
   awful.util.spawn_with_shell("pgrep -u $USER -x " .. findme .. " > /dev/null || (" .. cmd .. ")")
end

run_once("sh $HOME/keyboard.sh")
~~~~

如果要添加其他自启动程序，同样也只需要添加一条`run_once`命令即可。
