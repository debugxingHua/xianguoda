// pages/order/order.js
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

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (e) {
    this.setData({
      /* 导航滚动 */
      msgList: [
        { url: "url", title: "满98元顺丰冷链包邮" },
        { url: "url", title: "不满意，秒赔付" },
        { url: "url", title: "新人专享168元优惠" }],
        /* 图片滚动 */
        imgList:[
          {url:"url",src:"../../images/pear1.jpg"},
          {url:"url",src:"../../images/pear2.jpg"},
          {url:"url",src:"../../images/pear3.jpg"},
          {url:"url",src:"../../images/pear4.jpg"},
        ]
    });
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