# Git 常见指令

记录一些常见的 git 指令，便于后续查看，节省时间。

## 初始配置

```bash
git config --global user.name   # 你的英文名
git config --global user.email  # 你的邮箱
git config --global push.default simple
git config --global core.quotepath false
git config --global core.editor "code --wait"
git config --global core.autocrlf input

# 查看用户配置
git config --global --list
```

## 基础指令

```bash
git init        #创建一个空仓库
git add [path]  #添加文件到待提交区
git commit      #提交变更
git commit -v   #在编辑器中详细描述变更，推荐使用该方式提交变更，这样变更更易读
git log         # 查看提交记录
git reset --hard [log-id] # 代码跳跃到指定版本，reset会抛弃未提交的内容
git reflog      # 查看所有变更记录，包括跳跃版本
git branch      #创建分支
git branch -d [branch-name] # 删除指定分支
git checkout [branch-name] # 切换到指定分支
git merge [branch-name]    # 合并指定分支到当前分支
# 解决冲突，打开冲突的文件，保留需要的变更，删除不需要的内容以及标记，提交该变更，冲突解决完毕
```

## 远程操作

```bash
ssh-keygen -t rsa -b 4096 -C "你的任意邮箱地址" #创建一个ssh密钥对
# 将本地代码推送到远程仓库
git remote add origin git@xxxxxxx
git branch -M main
git push -u origin main
git push origin x:y # 将本地的x分支push到远程的y分支
git clone git@?/xxx.git # clone远程仓库到本地当前目录下
git clone git@?/xxx.git yyy # clone 到本地目录下的yyy文件夹
```

## 指令简化

将以下内容添加到`~/.bashrc`文件中

```bash
alias ga="git add"
alias gc="git commit -v"
alias gl="git pull"
alias gp="git push"
alias gst="git status"
alias gco="git checkout"
```
然后执行
```bash
source ~/.bashrc
```
使简化指令生效