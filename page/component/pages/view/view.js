var WxParse = require('../../../../wxParse/wxParse.js');
Page({
  data: {
    pageView: "<div>我是HTML代码</div>"
  },
  onLoad: function (options) {
    var article = '<div>我是HTML代码</div>'; 
    WxParse.wxParse('article', 'html', article, this, 5);
    
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    // Do something when page show.
  },
  onHide: function () {
    // Do something when page hide.
  },
  onUnload: function () {
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onPageScroll: function () {
    // Do something when page scroll
  }
})
