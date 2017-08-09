// pages/moreMovie/moreMovie.js

//获取后台本地数据
// var moveData = require("../data.js");


Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    // tab切换  
    currentTab: 0,
    hotMoveList:[],
    futureMoveList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.tab);
    var that = this;

    // 获取选项卡编号
    that.setData({
      currentTab: parseInt(options.tab)
    });

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    }); 

    //  正在热映数据请求
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters',
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res);
        that.setData({
          hotMoveList: res.data.subjects
        })
      }
    });
// 可获取本地数据
  // that.setData({
  //   hotMoveList: moveData.data.subjects
  // });

  // that.setData({
  //   futureMoveList: moveData.data.subjects
  // });

    // 即将上映数据请求
    wx.request({
      url: 'https://api.douban.com/v2/movie/coming_soon',
      data: {},
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        console.log(res);
        that.setData({
          futureMoveList: res.data.subjects
        })
      } 
    });
   
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
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }  
})