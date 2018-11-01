var postSData = require("../../../data/posts-data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var postId = options.id;
    this.data.postId = postId;
    var postKey = postSData.postList[postId];
    //console.log(postKey)
    this.setData({ //这个异步用，不是异步用this.data.postKey = postKey也可以
      postKey: postKey
    })
    //wx.setStorageSync('key', "风暴！！");
    // wx.setStorageSync('key', {
    //   game: "stom",
    //   developer:"baoxue"
    // });
    var postsCollected = wx.getStorageSync('posts_collected');
    if (postsCollected) {
      var conllected = postsCollected[postId];
      this.setData({
        conllected: conllected
      })
    } else {
      var postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync('posts_collected', postsCollected)
    }
  },
  onColl: function(event) {
    var postsCollected = wx.getStorageSync('posts_collected');
    var shouchang = postsCollected[this.data.postId];
    shouchang = !shouchang;
    postsCollected[this.data.postId] = shouchang;
    wx.setStorageSync('posts_collected', postsCollected);
    this.setData({
      conllected: shouchang
    });
    if (shouchang == true){
      wx.showToast({
        title: '收藏成功',
        icon: 'success',
        duration: 1000
      })
    } else {
      wx.showToast({
        title: '收藏取消',
        icon: 'none',
        duration: 1000
      })
    }
   
  },
  // onColl2: function(event){
  //   wx.removeStorageSync('key');
  //   //wx.clearStorageSync();清除所有
  // },

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