Page({
    onReady: function () {
        var me = this;
        wx.request({
            url: 'http://news-at.zhihu.com/api/4/news/latest', //仅为示例，并非真实的接口地址
            success: function (data) {
                me.setData({
                    topTopics: data.data.top_stories,
                    topics: data.data.stories,
                });
                me.initTop();
                me.initlist();
            }
        });
    },
    initTop: function () {

    },
    initlist: function () {

    },
    toDetailPage: function () {

    },
});