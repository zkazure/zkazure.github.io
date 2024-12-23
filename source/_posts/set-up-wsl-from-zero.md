---
title: Set up your wsl from zero
subtitle: 从零开始配置你的wsl
type: blog
categories: software
tags:
  - wsl
date: 2024-12-22
location: sysu
---
## Install
```powershell
wsl --install Debian
wsl
```

## Configuration
```bash
sudo mv ~/../../etc/apt/sources.list ~/../../etc/apt/sources.list.backup

sudo nano ~/../../etc/apt/sources.list

```

```txt
deb http://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm main contrib non-free non-free-firmware
deb-src http://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm main contrib non-free non-free-firmware

deb http://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-updates main contrib non-free non-free-firmware
deb-src http://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-updates main contrib non-free non-free-firmware

deb http://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-backports main contrib non-free non-free-firmware
deb-src http://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-backports main contrib non-free non-free-firmware

deb http://mirrors.tuna.tsinghua.edu.cn/debian-security bookworm-security main contrib non-free non-free-firmware
deb-src http://mirrors.tuna.tsinghua.edu.cn/debian-security bookworm-security main contrib non-free non-free-firmware


```

```bash
sudo apt update -y
sudo apt install apt-transport-https ca-certificates


```

Change all the "http://" to "https://" in the `/etc/apt/sources.list`
```bash
sudo nano /etc/apt/sources.list
```

```bash
sudo apt update
sudo apt install wget curl git ssh
git config --global user.email "<your email>"
git config --global user.name "<your name>"
sudo apt upgrade

ssh-keygen -t rsa -b 4096 -f ~/.ssh/<key name>
cat ~/.ssh/<key name>.pub
nvim ~/.ssh/config
```
Add
```config
Host github.com
  HostName github.com
  IdentityFile ~/.ssh/<key name>
```
Do not use <key name>.pub, even you update your pub key to the website.


## Zsh
```bash
sudo apt install zsh
chsh -s /bin/zsh 

sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

nano ~/.zshrc

```

Add `zsh-syntax-highlighting zsh-autosuggestions  z` in the `plugins=(git)`

Change theme 
```zsh
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

sed -i 's/ZSH_THEME.*/ZSH_THEME="powerlevel10k\/powerlevel10k"/g' .zshrc

source .zshrc

```

## Neofetch
```zsh
sudo apt install neofetch
vim ~/.zshrc
```

Add `neofetch` in the end
Move blew sentence to the end which was at the top of `.zshrc` originally(remember to keep it to the end)
```.zshrc
# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi
```

## Lazyvim

### many

```zsh

sudo apt install -y python3 python3-pip
sudo apt install -y python3-pynvim



sudo apt install ruby-dev -y
sudo apt install ruby3.1-dev -y
sudo apt install ruby -y
sudo gem install neovim

sudo apt install nodejs npm -y
echo 'export PATH=$HOME/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc

sudo npm install -g neovim
echo $PATH
export PATH=$PATH:/usr/bin
source ~/.zshrc

sudo apt install ripgrep
sudo apt install -y xclip perl cpanminus
sudo cpanm -n Neovim::Ext
sudo cpanm -n --reinstall App::cpanminus Neovim::Ext
sudo /usr/bin/perl -MApp::cpanminus::fatscript -e 'my $app = App::cpanminus::script->new; $app->parse_options("--info", "-q", "Neovim::Ext"); exit $app->doit'


sudo apt install lua5.1 liblua5.1-0-dev luarocks -y

curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env


git clone https://github.com/tree-sitter/tree-sitter.git
cd tree-sitter/cli
cargo build --release
sudo cp target/release/tree-sitter /usr/local/bin/

sudo apt install fzf
sudo apt install ripgrep
sudo apt install fd-find
mkdir -p ~/.local/bin
ln -s $(which fdfind) ~/.local/bin/fd
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc



```
### neovim
```bash

curl -LO https://github.com/neovim/neovim/releases/download/nightly/nvim.appimage
chmod u+x nvim.appimage
./nvim.appimage --appimage-extract
cd squashfs-root
sudo mv squashfs-root /usr/local/nvim
sudo ln -s /usr/local/nvim/AppRun /usr/local/bin/nvim

mkdir -p ~/.config/nvim
touch ~/.config/nvim/init.lua

nvim ~/.config/nvim/init.lua
 ```
 add 

```lua
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
  vim.fn.system({
    "git",
    "clone",
    "--filter=blob:none",
    "https://github.com/folke/lazy.nvim.git",
    "--branch=stable", -- 最新稳定版本
    lazypath,
  })
end
vim.opt.rtp:prepend(lazypath)

require("lazy").setup({
  -- LSP 配置
  {
    "neovim/nvim-lspconfig",
    config = function()
      local lspconfig = require("lspconfig")
      -- Lua LSP 配置
      lspconfig.lua_ls.setup({
        settings = {
          Lua = {
            runtime = { version = "LuaJIT" }, -- 使用 Neovim 内置的 LuaJIT
            diagnostics = { globals = { "vim" } }, -- 识别 `vim` 为全局变量
            workspace = { library = vim.api.nvim_get_runtime_file("", true) },
            telemetry = { enable = false }, -- 禁用遥测
          },
        },
      })
    end,
  },

  -- Treesitter 配置
  {
    "nvim-treesitter/nvim-treesitter",
    build = ":TSUpdate",
    config = function()
      require("nvim-treesitter.configs").setup({
        indent = { enable = true }, -- 启用缩进
        highlight = { enable = true }, -- 启用 Treesitter 高亮
        ensure_installed = { 
          "c", "cpp", "lua", "markdown", "vim", "query", "python", "javascript", "typescript" 
        }, -- 确保安装解析器
      })
    end,
  },
})

-- 启用 Treesitter 折叠功能
vim.o.foldmethod = "expr"
vim.o.foldexpr = "nvim_treesitter#foldexpr()"
vim.o.foldlevel = 99 -- 默认不折叠

require('fzf-lua').setup({
  winopts = {
    height = 0.85,  -- 高度
    width = 0.80,   -- 宽度
    border = 'rounded', -- 边框样式
  },
  files = {
    prompt = 'Files> ',
    cmd = 'fd --type f --hidden --exclude .git', -- 使用 fd 查找文件
  },
  grep = {
    prompt = 'Rg> ',
    cmd = 'rg --vimgrep', -- 使用 ripgrep 进行搜索
  },
})

```

```zsh
mkdir -p ~/.config/nvim/after/plugin
touch ~/.config/nvim/after/plugin/lsp.lua
nvim ~/.config/nvim/after/plugin/lsp.lua
nvim rm -rf /home/zka_wsl/.local/share/nvim/lazy/lazy.nvim
git clone --filter=blob:none https://github.com/folke/lazy.nvim.git --branch=stable ~/.local/share/nvim/lazy/lazy.nvim

```
add 
```lua
local lspconfig = require('lspconfig')

lspconfig.lua_ls.setup {
  settings = {
    Lua = {
      runtime = {
        version = 'LuaJIT',
      },
      diagnostics = {
        globals = { 'vim', 'require' },
      },
      workspace = {
        library = vim.api.nvim_get_runtime_file("", true),
      },
      telemetry = {
        enable = false,
      },
    },
  },
}

```


```zsh
npm config set registry https://registry.npmmirror.com

sudo npm install -g pyright

mkdir lua-language-server
cd lua-language-server
wget https://github.com/LuaLS/lua-language-server/releases/download/3.13.5/lua-language-server-3.13.5-linux-x64.tar.gz
tar -xvzf lua-language-server-3.13.5-linux-x64.tar.gz
cd ..
sudo mv lua-language-server /usr/local/share
sudo ln -s /usr/local/share/lua-language-server/bin/lua-language-server /usr/local/bin/lua-language-server
lua-language-server --version
```


### Font
[here]([DevelopersCommunity/wix-JetBrainsMonoNF: Windows installer for JetBrainsMono Nerd Font.](https://github.com/DevelopersCommunity/wix-JetBrainsMonoNF))
then change the font in the windows terminal


### lazygit
```zsh
mkdir lazy
cd lazy
wget https://github.com/jesseduffield/lazygit/releases/download/v0.44.1/lazygit_0.44.1_Linux_x86_64.tar.gz
tar -xvzf lazygit_0.44.1_Linux_x86_64.tar.gz
sudo mv lazygit /usr/local/bin/
rm -rf lazy
```

### lazyvim

```zsh
# required
mv ~/.config/nvim{,.bak}

# optional but recommended
mv ~/.local/share/nvim{,.bak}
mv ~/.local/state/nvim{,.bak}
mv ~/.cache/nvim{,.bak}
git clone https://github.com/LazyVim/starter ~/.config/nvim
rm -rf ~/.config/nvim/.git
```

### Miniconda

1. install
```zsh
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
```
2. config
```zsh
cd miniconda3
vim .condarc
```
3. Add blow:
```config
channels:
  - defaults
ssl_verify: true
auto_activate_base: false
```
4. run
```zsh
cp ~/miniconda3/.condarc ~/.condarc
source ~/miniconda3/bin/activate
conda init --all
conda deactivate
source ~/.zshrc
```

###  VScode

```zsh
code
```
### Hexo
```zsh
npm install -g hexo-cli
```

### latex

#### Requirement
- vscode-server

#### Install

Download the iso in the mirror website [here](https://mirrors.tuna.tsinghua.edu.cn/CTAN/systems/texlive/Images/)
```zsh
sudo mkdir /mnt/textlive
sudo mount /mnt/<the path of iso> /mnt/texlive
```
It will output 'mount: /mnt/texlive: WARNING: source write-protected, mounted read-only.', don't be worry.

```zsh
sudo /mnt/textlive/install-tl
```
then 'c' and 'enter' to personalize

This is what I cancel: 
```
deghijkstuvwxyznoABCEHIKLMNS
```
then 'r' and 'enter', 'i' and 'enter'

After installation
```zsh
sudo umount /mnt/textlive # attention is not umount
sudo rm -r /mnt/texlive
nvim ~/.zshrc
```
Add:
```config
# Add TeX Live to the PATH, MANPATH, INFOPATH
export PATH=/usr/local/texlive/2024/bin/x86_64-linux:$PATH
export MANPATH=/usr/local/texlive/2024/texmf-dist/doc/man:$MANPATH
export INFOPATH=/usr/local/texlive/2024/texmf-dist/doc/info:$INFOPATH
# complete the manpath
export MANPATH=/usr/local/man:$MANPATH
export MANPATH=/usr/share/man:$MANPATH

```

## Backup and recover wsl

1. Backup
```zsh
wsl --shutdown
wsl --export Debian D:\WSL\debian.tar
wsl --unregister Debian

```
2. recover
```zsh
wsl --import Debian D:\WSL\Debian D:\WSL\debain.tar
```
3. in the wsl
```zsh
su <user>
sudo su
cp /etc/wsl.conf /etc/wsl.config.bk 
nvim /etc/wsl.conf 
```
4. add
```zsh
[user]
default=<user>
```
5. reboot
