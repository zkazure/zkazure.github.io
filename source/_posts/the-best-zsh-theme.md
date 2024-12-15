---
title: the best theme of zsh
categories: [software]
tags: [zsh]
---


1. install
```
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
```

2. config
```
sed -i 's/ZSH_THEME.*/ZSH_THEME="powerlevel10k\/powerlevel10k"/g' .zshrc
```

3. restart
```
source .zshrc
```
4. reconfig
```
p10k configure
```
