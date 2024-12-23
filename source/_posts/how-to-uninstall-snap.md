---
aliases: 
title: How to uninstall snap
categories: software
tags:
  - ubuntu
---
1. uninstall snap 缓存
```
for p in $(snap list | awk '{print $1}'); do
  sudo snap remove $p
done
```
if output like this, repeat the operation
```
snap "Name" is not installed
core20 removed
snapd removed
```
if output like this, go forward:
```
No snaps are installed yet. Try 'snap install hello-world'.
```
2. uninstall core
```
sudo systemctl stop snapd
sudo systemctl disable --now snapd.socket

for m in /snap/core/*; do
   sudo umount $m
done
```
then
```
sudo apt autoremove --purge snapd
```
then
```
rm -rf ~/snap
sudo rm -rf /snap
sudo rm -rf /var/snap
sudo rm -rf /var/lib/snapd
sudo rm -rf /var/cache/snapd
```
3. finally
```
sudo nano /etc/apt/preferences.d/nosnap.pref
```
add the following content:
```
Package: snapd
Pin: release a=*
Pin-Priority: -10
```

## something wrong in ubuntu22.04
1. something wrong like this:
```
$ sudo snap remove --purge firefox
error: cannot perform the following tasks:
- Remove data for snap "firefox" (1943) (unlinkat /var/snap/firefox/common/host-hunspell/en_ZA.dic: read-only file system)
```
2. 　首先验证使用以下命令验证/var/snap/firefox/common/host hunspell是否确实挂载在ext4文件系统
```
lsblk-fe7-o+ro
```
3. if so
```
sudo systemctl stop var-snap-firefox-common-host\\x2dhunspell.mount
sudo systemctl disable var-snap-firefox-common-host\\x2dhunspell.mount 
Removed /etc/systemd/system/default.target.wants/var-snap-firefox-common-host\x2dhunspell.mount.
Removed /etc/systemd/system/multi-user.target.wants/var-snap-firefox-common-host\x2dhunspell.mount.
```