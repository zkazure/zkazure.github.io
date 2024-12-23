---
title: install texlive in the wsl
date: 2024-12-13 19:15:14
categories: [software]
tags: [latex,wsl]
---

texlive will run faster in the linux than in the windows, so I decide to install texlive in the wsl.

## Preparation

- vscode in the windows
- already install vscode-server in the wsl

## download

install the iso in the mirror website [here](https://mirrors.tuna.tsinghua.edu.cn/CTAN/systems/texlive/Images/)

remember put into the windows's file system, rather than linux file system.

## mount the iso

```zsh
sudo mkdir /mnt/texlive
sudo mount /mnt/<the path of the iso> /mnt/texlive
```

it will output some thing wrong, it doesn't matter
```zsh
mount: /mnt/texlive: WARNING: source write-protected, mounted read-only.
```

## install

```zsh
sudo /mnt/texlive/install-tl
```

## install configure

something in the tex live is less use, so we can cancel these installation. 
press 'c' to personalize. 
here is what I cancel: 
```zsh
deghijkstuvwxyznoABCEHIKLMNS
```

when you need it you are able to install them with `tlmgr`

then press 'r' and 'enter', go back to the main menu. 

finally press 'i' and 'enter', wait for the installation completed. 

## After installation

```zsh
sudo umount /mnt/texlive	# 注意不是unmount!
sudo rm -r /mnt/texlive
```

update the path. edit `~/.zshrc`, add: 
```zsh
# >>> TEX >>>
# Add TeX Live to the PATH, MANPATH, INFOPATH
export PATH=/usr/local/texlive/2024/bin/x86_64-linux:$PATH
export MANPATH=/usr/local/texlive/2024/texmf-dist/doc/man:$MANPATH
export INFOPATH=/usr/local/texlive/2024/texmf-dist/doc/info:$INFOPATH
# complete the manpath
export MANPATH=/usr/local/man:$MANPATH
export MANPATH=/usr/share/man:$MANPATH
# <<< TEX <<<

```
save and exit. 
```zsh
source ~/.zshrc
tex -v
```

Finally:
```zsh
sudo cp /usr/local/texlive/2024/texmf-var/fonts/conf/texlive-fontconfig.conf /etc/fonts/conf.d/09-texlive.conf
sudo fc-cache -fsv
```

## use vscode

install the LaTex Workshop and Remote Development
