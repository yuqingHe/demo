//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  gotodemo:function(){
     wx.navigateTo({
      url: '../demo/demo'
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
