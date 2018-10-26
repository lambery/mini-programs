var postSData = require("../../data/posts-data.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    indicatorActiveColor: '#ddd',
    postTitle: "霞飞卸妆啦啦啦"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    //this.data.postList = postSData.postList
    this.setData({
      postKey: postSData.postList
    })
  },
  onPostTap: function (event) {
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: "./detail/detail?id=" + postId,
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})