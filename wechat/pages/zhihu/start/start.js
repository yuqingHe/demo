Page({
  onLoad: function (options) {
    var _this = this;
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({
          screenHeight: res.windowHeight,
          screenWidth: res.windowWidth,
        });
      }
    });
  },

  onReady: function () {
    var _this = this;
    var size = this.data.screenWidth + '*' + this.data.screenHeight;
    wx.request({
      url: 'http://news-at.zhihu.com/api/4/start-image/' + size, //仅为示例，并非真实的接口地址
      success: function (data) {
        _this.setData({
          splash: data.data
        });
         _this.toIndexPage();
      }
    });
  },

  /**
   * 跳转到首页
   */
  toIndexPage:function () {
    setTimeout(function () {
      wx.redirectTo({
        url: '../index/index'
      });
    }, 2000);
  }
});