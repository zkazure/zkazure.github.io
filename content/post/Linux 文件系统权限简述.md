+++
title = "Linux 文件系统权限简述"
author = ["Kazure Zheng"]
date = 2026-06-05T00:00:00+08:00
tags = ["tools", "linux", "blog"]
draft = false
+++

## Preface {#preface}

使用 Linux 系统的使用常常会用到一个命令 `chmod +x <file>`, 赋予某个文件的执行权限。
或许有些终端默认会通过颜色区分一个文件是否具有可执行权限。
我们如何真正查看一个文件本身具有什么权限呢？
我们可以使用一个常用的命令加上一个特别的参数： `ls -l`.


## Main {#main}

```text
~
❯ ls -l
total 3
-rw-r--r--  1  kazure  kazure  5720  May  31  10:40  .bashrc
drwxrwxr-x  5  kazure  kazure  4096  May  31  08:30  Desktop
-rwxrwxr-x  1  kazure  kazure    15  Jun   5  10:23  run.sh
```

前面列出的 10 个字符，表示了这个文件的属性。
第一个字符表示这个文件是文件夹 `d` ，还是普通文件 `-` 。
其他：

-   `l`: 符号链接 (Symbolic link，类似于快捷方式)
-   `c`: 字符设备文件 (Character device，如终端、串口)
-   `b`: 块设备文件 (Block device，如硬盘驱动器)
-   `s`: 套接字 (Socket，用于进程间通信)
-   `p`: 命名管道 (Named pipe)

剩下的 9 个字符，三个一组，
分别表示不同所有者的可读(r)、可写(w)、可执行属性(x)：user, group, others.


### 背后的数据 {#背后的数据}

在一些教程里面会出现这个命令 `chmod 777 <file>`, 里面的数字代表什么意思呢？

这是因为权限 `rwx` 是八进制的。

| permission | number | binary |
|------------|--------|--------|
| r/read     | 4      | 100    |
| w/write    | 2      | 010    |
| x/execute  | 1      | 001    |
| -/none     | 0      | 000    |

每一个权限都是使用特定位的 bit 标记的，3 bits 表示的数字就是用户对这个文件的权限。
\\( 7 = 111\_2 = 4 + 2 +1 \\),
于是 `777` 就表示所有用户对这个文件具有可读、可写、可执行的权限。


### 为什么文件夹也有可执行的权限 {#为什么文件夹也有可执行的权限}

`x` 对于文件夹其实是可遍历、可进入、可搜索的意思。
