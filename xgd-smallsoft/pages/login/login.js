var app = getApp();
var util = require('../../utils/util.js');
import http from '../../http/http';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    UrlRoute: "", //url路径
    extranetUrl: "", //url路径
    authUrl: "",
    imagesUrl: "../../public/img",
    code:'',
    agentCode:"regist页面收到这个值"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // debugger ;
    var that = this;
    wx.login({
      success: res => {
        that.setData({
          code: res.code
        })
        console.log("login页面加载完成，code值："+this.data.code);
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
  /**
   * 跳转去注册页面
   */
  navigateLogIn:function(){
    wx.navigateTo({
      url: '/pages/regist/regist?agentCode='+this.data.agentCode
    })
  },
})