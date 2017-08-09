// pages/details/details.js
// 后台本地数据请求的方法
//var moveData = require("../data.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log(options.id);
    
    var that = this;
    wx.setNavigationBarTitle({
      title: options.title
    })
    // 获取在线数据
    wx.request({
      url: 'https://api.douban.com/v2/movie/subject/' + options.id,
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        var data = res.data
        that.setData({
          film: data,
          showLoading: false
        });
        // 动态改变导航条的标题
        wx.setNavigationBarTitle({
          title: res.data.title,
          success: function(res) {
          }
        });
      }
    })
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
  
  }
})