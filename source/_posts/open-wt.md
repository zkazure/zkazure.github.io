---
title: how to shortcuts of windows termianl
categories: [software]
tags: [terminal]
---

## install and set hotkeys

1. turn on a windows termianl
2. open tasks manager
3. click on the terminal to unfold the programme
4. right click on programme with the correct picture, open the path of the file
5. find "wt.exe" and create a shortcuts of it
6. right click on the shorcuts, open the attributes. 
7. set hotkey and click yes

## better work with autohotkey

when we press hotkeys, no matter whether there is a running termianl, system always open a new terminal. To solve this, we can use autohokey

1. install ![here](https://www.autohotkey.com/)
2. create a script and name as terminal_open.ahk
3. change the content
```
#SingleInstance force
; 假设你的终端快捷键是Ctrl + Alt + T，你可以修改下面的热键
^!t::
    WinGet, count, Count, ahk_class ConsoleWindowClass
    if (count = 0)
    {
        ; 这里需要替换为你实际打开终端的命令，例如对于Windows Terminal是wt.exe
        Run, wt.exe
    }
    else
    {
        WinActivate, ahk_class ConsoleWindowClass
    }
return
```
4. set the script start with system, the same as before. 
5. if it didn't work, it probably because of the ahk_class was different. We could use a script named window spy to find the correct ahk_class
