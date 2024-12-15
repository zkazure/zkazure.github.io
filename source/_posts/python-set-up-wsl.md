---
title: How to set up the python in wsl(debian)
categories: 
    - softeware
    - programming
tags: [wsl,debian,python]
---

1. install necessary rely
```
sudo apt update
sudo apt upgrade
sudo apt install build-essential pkg-config libdb-dev liblzma-dev tk-dev uuid-dev
sudo apt install libssl-dev libsqlite3-dev libbz2-dev libgdbm-dev libncurses5-dev libncursesw5-dev libreadline-dev zlib1g-dev libffi-dev
```


2. install python
```
sudo apt install python3.11
sudo ln -s /usr/bin/python3.11 /usr/bin/python
sudo ln -s /usr/bin/python3.11 /usr/bin/python3
```
