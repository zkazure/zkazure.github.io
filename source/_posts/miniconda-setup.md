---
title: Set up miniconda in Linux
categories: [software] 
tags: [miniconda]
---


1. install
```
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
```

2. config software source

```
cd miniconda
vim .condarc
```

3. change the content
```
channels:
  - defaults
show_channel_urls: true
channel_alias: https://mirrors.tsinghua.edu.cn/anaconda
default_channels:
  - https://mirrors.tsinghua.edu.cn/anaconda/pkgs/main
  - https://mirrors.tsinghua.edu.cn/anaconda/pkgs/r
  - https://mirrors.tsinghua.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.tsinghua.edu.cn/anaconda/cloud
  msys2: https://mirrors.tsinghua.edu.cn/anaconda/cloud
  bioconda: https://mirrors.tsinghua.edu.cn/anaconda/cloud
  meniscus: https://mirrors.tsinghua.edu.cn/anaconda/cloud
  pytorch: https://mirrors.tsinghua.edu.cn/anaconda/cloud
  simpleitk: https://mirrors.tsinghua.edu.cn/anaconda/cloud
```
