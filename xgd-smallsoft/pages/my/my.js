// pages/order/order.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    //获取全局参数，在上一个页面赋值的,给页面的isHide赋值全局变量
    isHide: app.globalData.isHide,
     //用户个人信息
     userInfo:{
      avatarUrl:"",//用户头像
      nickName:"",//用户昵称
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          //获取用户信息
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
              var avatarUrl='userInfo.avatarUrl';
              var nickName='userInfo.nickName';
              that.setData({
                [avatarUrl]:res.userInfo.avatarUrl,
                [nickName]:res.userInfo.nickName,
              })
            }
            
          })
        }
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

  },
  //跳转登陆页面
  jump: function (res) {
    wx.redirectTo({
      url: '../login/login',
    })
  }

})