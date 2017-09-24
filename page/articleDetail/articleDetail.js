// page/articleDetail/articleDetail.js
var WxParse = require('../../wxParse/wxParse.js');
var WxEmoji = require('../../WxEmojiView/WxEmojiView.js');

Page({

  /**
   * 页面的初始数据
   */  
  data: {
    title:"",
    time:"",
    articleId:"",
    pageHtml:"asdasdsad",
    authorName:"剥不开皮的核桃",
    isShowWxEmojiChooseView:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title: options.title,
      time: options.time,
      articleId: options.articleId
    });
    WxEmoji.init(":_/", {
      "00": "00.gif",
      "01": "01.gif",
      "02": "02.gif",
      "03": "03.gif",
      "04": "04.gif",
      "06": "06.gif",
      "07": "07.gif",
      "08": "08.gif",
      "09": "09.gif",
    });
    var that = this;
    WxEmoji.bindThis(this);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  bindTextAreaBlur: function (e) {
    console.log(e.detail.value)
  },
  WxEmojiTextareaFocus: function (e) {
    var that = this;
    WxEmoji.WxEmojiTextareaFocus(that, e);

  },
  WxEmojiTextareaBlur: function (e) {
    var that = this;
    WxEmoji.WxEmojiTextareaBlur(that, e);
  },
  wxPreEmojiTap: function (e) {
    var that = this;
    WxEmoji.wxPreEmojiTap(that, e);
  },
  testBlur: function (e) {
    
  },
  showEmojiBox:function(e){
    console.log("emoji被点击了");
    if (this.data.isShowWxEmojiChooseView === false){
      var temObjs = {};
      var that = this;
      temObjs.showWxEmojiChooseView = 1;
      console.log(e.detail.value);
      that.setData({
        WxEmojiObjs: temObjs,
        isShowWxEmojiChooseView:true
      });
    }else{
      var temObjs = {};
      var that = this;
      temObjs.showWxEmojiChooseView = 0;

      that.setData({
        WxEmojiObjs: temObjs,
        isShowWxEmojiChooseView:false
      });
    }
    
  }
})