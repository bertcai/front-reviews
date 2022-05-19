# HTTP 笔记

## IP

IP，确定网络上一个设备，用来作为网络设备互相通信的地址。

### ping

* -d 使用Socket的SO_DEBUG功能。
* -c <完成次数> 设置完成要求回应的次数。
* -f 极限检测。
* -i<间隔秒数> 指定收发信息的间隔时间。
* -I<网络界面> 使用指定的网络接口送出数据包。
* -l<前置载入> 设置在送出要求信息之前，先行发出的数据包。
* -n 只输出数值。
* -p<范本样式> 设置填满数据包的范本样式。
* -q 不显示指令执行过程，开头和结尾的相关信息除外。
* -r 忽略普通的Routing Table，直接将数据包送到远端主机上。
* -R 记录路由过程。
* -s<数据包大小> 设置数据包的大小。
* -t<存活数值> 设置存活数值TTL的大小。
* -v 详细显示指令的执行过程。
* -w <deadline> 在 deadline 秒后退出。
* -W <timeout> 在等待 timeout 秒后开始执行。

```bash
ping [-dfnqrRv][-c<完成次数>][-i<间隔秒数>][-I<网络界面>][-l<前置载入>][-p<范本样式>][-s<数据包大小>][-t<存活数值>][主机名称或IP地址]

ping -c 4 baidu.com

#result
PING baidu.com (220.181.38.251): 56 data bytes
64 bytes from 220.181.38.251: icmp_seq=0 ttl=49 time=27.512 ms
64 bytes from 220.181.38.251: icmp_seq=1 ttl=49 time=27.762 ms

--- baidu.com ping statistics ---
2 packets transmitted, 2 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 27.512/27.637/27.762/0.125 ms

```

## 端口的规则

+ 0-1023 端口默认是给系统使用的，只有有管理权限才能使用这1024个端口
+ 其他端口可以给普通用户使用
+ 一个端口被占用，只能换其他端口

## URL

https://github.com/bertcai/front-reviews
协议+域名+路径+查询参数+锚点

+ 协议 表明请求使用的协议
+ 域名 输入的域名通过DNS解析服务解析出对应的IP地址，确定访问的地址
+ 路径 确定访问对应地址的具体文件或者服务或者页面
+ 查询参数 查询同一个页面的不同内容
+ 锚点 确定到同一个内容中的具体某个位置

## 域名

域名就是对IP的别称

+ .com/.org/.me 等被称为顶级域名
+ baidu.com 二级域名
+ www.baidu.com 三级域名

## DNS

DNS，域名系统，它的作用是将域名转化为对应的IP地址，使用户更方便地使用互联网服务。

+ 多个域名可以对应同一个IP，用来节省服务器资源
+ 一个域名也可以对应多个IP，用来缓解服务器压力

### nslookup

nslookup命令用于查询DNS的记录，查看域名解析是否正常，在网络故障的时候用来诊断网络问题。

```bash
# 用指定的DNS服务器查询一个域名的A记录
nslookup domain [dns-server]

# result
Server:		192.168.1.1
Address:	192.168.1.1#53

Non-authoritative answer:
Name:	baidu.com
Address: 220.181.38.148
Name:	baidu.com
Address: 220.181.38.251

# 指定参数，查询其他记录，例如AAAA、MX等
nslookup -qt=type domain [dns-server]
```

