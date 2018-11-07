var postSData = require("../../../data/posts-data.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPlay:false
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
    var that = this;
    wx.onBackgroundAudioPlay(function(){
      that.setData({
        isPlay:true
      })
    });
    wx.onBackgroundAudioPause(function () {
      that.setData({
        isPlay: false
      })
    })
  },
  onColl: function(event) {
    var postsCollected = wx.getStorageSync('posts_collected');
    var shouchang = postsCollected[this.data.postId];
    this.showModal(postsCollected, shouchang);
  },
  showModal: function (postsCollected, shouchang) {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '收藏与否',
      cancelText: '不收藏',
      confirmText: '收藏',
      success(res) {
        if (res.confirm) {
          shouchang = true;
          postsCollected[that.data.postId] = shouchang;
          wx.setStorageSync('posts_collected', postsCollected);
          that.setData({
            conllected: shouchang
          });
          wx.showToast({
            title: '收藏成功',
            icon: 'success',
            duration: 1000
          })
        } else if (res.cancel) {
          shouchang = false;
          postsCollected[that.data.postId] = shouchang;
          wx.setStorageSync('posts_collected', postsCollected);
          that.setData({
            conllected: shouchang
          });
          wx.showToast({
            title: '收藏取消',
            icon: 'none',
            duration: 1000
          })
        }
      }
    })
  },
  onShareTap: function (event){
    wx.showActionSheet({
      itemList: [
        "分享给好友",
        "分享到朋友圈",
        "分享到QQ",
        "分享给微博"
      ],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  OnMusicTap:function(event){
   // console.log(this.data.postKey)
    var isPlay = this.data.isPlay;
    if (isPlay){
      wx.pauseBackgroundAudio();
      this.setData({
        isPlay: false
      })
    } else{
      wx.playBackgroundAudio({
        dataUrl: this.data.postKey.music.dataUrl,
        title: this.data.postKey.music.title,
        coverImgUrl: 'http://img0.imgtn.bdimg.com/it/u=3300316170,3146479431&fm=27&gp=0.jpg'
      })
      this.setData({
        isPlay: true
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