---
title: how to set up termux
categories: [software]
tags: [termux]
---

Termux is an interesting app on android. 

## install termux

## basic commands

```
pkg update
pkg upgrade
pkg install

pkg search
pkg list
pkg remove
```

## config software repositories

change the software repositories to tuna tsinghua. 
```
sed -i 's@^\(deb.*stable main\)$@#\1\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/termux-packages-24 stable main@' $PREFIX/etc/apt/sources.list
sed -i 's@^\(deb.*games stable\)$@#\1\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/game-packages-24 games stable@' $PREFIX/etc/apt/sources.list.d/game.list
sed -i 's@^\(deb.*science stable\)$@#\1\ndeb https://mirrors.tuna.tsinghua.edu.cn/termux/science-packages-24 science stable@' $PREFIX/etc/apt/sources.list.d/science.list
apt update && apt upgrade
```

## install and use open ssh

1. install
```
pkg install openssh
```

2. set passwd
```
passwd
```

3. turn on the sshd service
```
sshd
```

4. check out you ip path
```
ifconfig
```

5. connect
```
ssh -p 8022 <ip path>
```
