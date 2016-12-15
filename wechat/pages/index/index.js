//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World90',
    tapme: "你点我啊",
    count: 1,
    userInfo: {},
    staffA: {
      firstName: 'Hulk',
      lastName: 'Hu'
    },
    staffB: {
      firstName: 'Shang',
      lastName: 'You'
    },
    staffC: {
      firstName: 'Gideon',
      lastName: 'Lin'
    },
    array: ["123", "345"]
  },
  add: function (e) {
    this.setData({
      count: this.data.count + 1
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  showtap: function () {
    console.log("我被点钟了");
    this.bindViewTap();
  },

  toswiper: function () {
    wx.navigateTo({
      url: '../demo/demo'
    })
  },
  tozhihu: function () {
    wx.navigateTo({
      url: '../zhihu/start/start'
    })
  },
  toIcon: function () {
    wx.navigateTo({
      url: '../icon/icon'
    })
  },
  toScroll: function () {
    wx.navigateTo({
      url: '../scroll/scroll'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
      //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})