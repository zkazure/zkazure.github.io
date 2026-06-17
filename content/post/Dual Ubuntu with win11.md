+++
title = "Dual Ubuntu with win11"
author = ["Kazure Zheng"]
date = 2025-12-20T00:00:00+08:00
tags = ["linux", "blog"]
draft = false
+++

## Preface {#preface}

为了摆脱微软的控制，我开始尝试安装 Linux 系统，就从最简单的 Ubuntu 开始。

主要参考 [安装Ubuntu和win双系统](https://www.bilibili.com/opus/899380230688342018?from=search&spm_id_from=333.337.0.0) 这篇文章。


## Main {#main}


### Basic info {#basic-info}

**info:**

-   windows 11 24H2
-   Ubuntu 22.04 LTS
-   a 8 GB USB at least
-   a new SSD

**Disk Split:**
my disk is 1 TB

-   `swap`: 32 GB
-   `/`: 100 GB
-   `efi`: 1GB


### Auto Mount disks of Windows in the Ubuntu {#auto-mount-disks-of-windows-in-the-ubuntu}

```zsh
sudo fdisk -l
sudo blkid
```

find your disk name, then find the UUID

```zsh
sudo vim /etc/fstab
```

finally,

```nil
UUID=<UUID> <mount point> <type> <options> <dump> <pass>

# the windows C was on /dev/nvme0n1p3
UUID=<UUID>  /winc           ntfs    defaults        0       2
```


### campus internet {#campus-internet}

没想到连接中大的校园网还挺麻烦的。

-   Security: WPA &amp; WPA2 Enterprise
-   Authentication: PEAP
-   Check the `No CA certificate is required` option.
-   Inner authentication: GTC
-   other configurations keep default.
