---
categories: [software]
tags: [wsl]
---

# set up wsl of debian

## check the version of wsl

```
wsl --set-default-verison 2
wsl --version
```

## choose the linux

```
wsl --list --online
wsl --install Debian
```

## check the version of linux

```
wsl -l -v
wsl --set-version Debian 2
wsl -l -v
```

## config software repositories

1. backup the old file
```
sudo mv ~/../../etc/apt/sources.list ~/../../etc/apt/sources.list.backup
```
2. create new file
```
sudo nano ~/../../etc/apt/sources.list
```
3. change the content
```
deb http://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm main contrib non-free non-free-firmware
deb-src http://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm main contrib non-free non-free-firmware

deb http://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-updates main contrib non-free non-free-firmware
deb-src http://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-updates main contrib non-free non-free-firmware

deb http://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-backports main contrib non-free non-free-firmware
deb-src http://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-backports main contrib non-free non-free-firmware

deb http://mirrors.tuna.tsinghua.edu.cn/debian-security bookworm-security main contrib non-free non-free-firmware
deb-src http://mirrors.tuna.tsinghua.edu.cn/debian-security bookworm-security main contrib non-free non-free-firmware
```
4. install the autherirty of the mirror website
```
sudo apt update -y
sudo apt install apt-transport-https ca-certificates
```
5. change all the "http://" to "https://" in the ~/ect/apt/sources.list
6. update
```
sudo apt update
sudo apt upgrade
```
