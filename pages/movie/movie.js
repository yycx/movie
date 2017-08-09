// pages/movie/movie.js
// 可通过data.js文件获取本地数据
//var movieData = require("../data.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    Width:'',
    Height:'',
    // 用于测试的写死的数据
    // moves:[
    //   { url:'https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2459198108.jpg',
    //   title:'新木乃伊',
    //   rating:'4.8',
    //   collect_count: 33141},
    //   {
    //     url: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2462480261.jpg',
    //     title: '爱情开始的地方之遇见',
    //     rating: '7.4',
    //     collect_count: 122415
    //   },
    //   {
    //     url: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2460006593.jpg',
    //     title: '神奇女侠',
    //     rating: '4.8',
    //     collect_count: 123791
    //   },
    //   {
    //     url: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2459723975.jpg',
    //     title: '加勒比海盗5：死无对证',
    //     rating: '9.2',
    //     collect_count: 33141
    //   },
    //   {
    //     url: 'https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2457983084.jpg',
    //     title: '摔跤吧！爸爸',
    //     rating: '7.7',
    //     collect_count: 303240
    //   }
    // ],
    houtaiList:[],
    futureList:[]
  },

  /**
   * 
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    // 获取屏幕的宽高
    wx.getSystemInfo({
      success: function(res) {
       that.setData({
         Width:res.windowWidth,
         Height:res.windowHeight
       });
      },
    })
      //  正在热映数据请求
      wx.request({
        url: 'https://api.douban.com/v2/movie/in_theaters',
        data:{},
        header: {
          'content-type': 'json'
        },
        success: function (res) {
          console.log(res);
          for (var i = 0; i < res.data.subjects.length;i++){
            res.data.subjects[i].rating.starf = (10-Math.ceil(res.data.subjects[i].rating.average))*11;
          }
          that.setData({
            houtaiList:res.data.subjects
          })
        }
      });

   
      // 即将上映数据请求
      wx.request({
        url: 'https://api.douban.com/v2/movie/coming_soon',
        data: {},
        header: {
          'content-type': 'json'
        },
        success: function (res) {
          console.log(res);
          for (var i = 0; i < res.data.subjects.length; i++) {
            res.data.subjects[i].rating.starf = (10 - Math.ceil(res.data.subjects[i].rating.average)) * 11;
          }
          that.setData({
            futureList: res.data.subjects
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
  
  }
})