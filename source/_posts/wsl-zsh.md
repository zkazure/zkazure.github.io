---
title: install zsh and oh-my-zsh in Debian
categories: [software]
tags: [wsl]
---


## update

```
sudo apt update
sudo apt install zsh
```

## change shell to zsh

```
chsh -s /bin/zsh 
```

## install oh-my-zsh

```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

if you meet some ceritifice problem
```
git config --global http.sslVerify false
```
then do the commond again

input "y" to set shell to zsh

## change theme

```
vim ~/.zshrc
```

you may change the theme in the ZSH_THEME="theme_you_like"

## install plugins

- zsh-syyntax-highlighting
- zsh-autosuggestions

1. install
```
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```
2. config
```
vim ~/.zshrc
```
3. add zsh-syntax-highlighting zsh-autosuggestions in the plugins=()
4. reload
```
source ~/.zshrc
```
