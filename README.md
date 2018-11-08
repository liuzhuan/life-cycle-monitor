# Life Cycle Monitor

用来监视各类小程序生命周期的后端程序。为了搞清楚各种小程序的生命周期函数 `App.onLaunch()`、`App.onShow()` 等执行时机，特意做了这个服务器。

后端使用 Node.js。

## 用法

首先，启动 `server/app.js` 服务器

```sh
$ cd server
$ ./app.js
```

然后，扫描客户端应用开始测试生命周期的执行时机。