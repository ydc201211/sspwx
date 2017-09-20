// page/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'],
    
    listData:[
    {
        imageUrl:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title:'科技改变生活科技改变生活科技改变生活科技改变生活科技改变生活科技改变生活科技改变生活科技改变生活科技改变生活科技改变生活科技改变生活',
        time:'2017-2-12',
    },
    {
      imageUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      title: '科技改变生活',
      time: '2017-2-12',
    },
    {
      imageUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      title: '科技改变生活',
      time: '2017-2-12',
    },
    {
      imageUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      title: '科技改变生活',
      time: '2017-2-12',
    },
    {
      imageUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      title: '科技改变生活',
      time: '2017-2-12',
    },
   

    ],
    isHideLoadMore: false,
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    scrollTop: 100,
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    wx.showNavigationBarLoading() //在标题栏中显示加载
    
    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
    this.setData({
      isHideLoadMore: true,
    })
    
    setTimeout(() => {
    
      for(var i =0;i<3;i++){
        this.data.listData.push({
          
          imageUrl: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
          title: '科技改变生活'+i,
          time: '2017-2-12',
          
        });
      }
      this.setData({
       
        listData:this.data.listData
      })
    }, 2000)

    this.setData({
      isHideLoadMore: false,
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})