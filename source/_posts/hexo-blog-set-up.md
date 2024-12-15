---
title: How to set up the hexo blog in Linux
categories: [software]
tags: [blog,hexo]
---


1. install node.js npm
```
sudo apt update
sudo apt install node.js npm
node -v
npm -v
```

2. change the npm software source
```
npm install -g nrm --registry=http://registry.npmmirror.com
nrm ls
nrm use taobao
```

3. install hexo
```
sudo npm install -g hexo-cli nrm --registry=http://registry.npmmirror.com
hexo -v
```

4. set up
```
mkdir blog
cd blog
hexo init
```

5. git deploy
```
sudo npm install --save hexo-deployer-git --registry=http://registry.npmmirror.com
```

6. set remote blog
```
vim _config.yml
```

7. set your repo
```
# Deployment
## Docs: https://hexo.io/docs/one-command-deployment
deploy:
  type: git
  repo: 
  branch: master

```

8. set up your personal token

```
https://<personal token>@github.com/<your github net path>
```
