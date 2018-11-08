# Life Cycle Monitor

用来监视各类小程序生命周期的后端程序。为了搞清楚各种小程序的生命周期函数 `App.onLaunch()`、`App.onShow()` 等执行时机，特意做了这个服务器。

后端使用 Node.js。

## 用法

首先，启动 `server/app.js` 服务器

```sh
$ ./server/app.js
```

然后，扫描客户端应用开始测试生命周期的执行时机。

## 结论

微信小程序会在第一次开启时，调用 `App.onLaunch()`。如果关闭小程序，则触发 `App.onHide()`，此时小程序依然在内存中活跃。如果再次进入，则触发 `App.onShow()`，不再触发 `App.onLaunch()`。

支付宝小程序每次开启都会执行 `App.onLaunch()`。只要关闭小程序，就会被立即杀死，不再内存中存活。