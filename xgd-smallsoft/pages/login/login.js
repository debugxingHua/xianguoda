var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //获取用户信息在当前版本可用
    canIUse: wx.canIUse('button.open-typewx.getUserInfo())')
  },
  onLoad: function () {

  },
  //登陆
  bindGetUserInfo: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)

    wx.login({
      success: function (res) {
        console.log(res)
        console.log('aaaa')
        //获取登录的临时凭证
        var code = res.code;
        console.log('bbbb')
        //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
        //给全局参数赋值
        app.globalData.isHide=false;
        wx.switchTab({
          url: '../my/my',
        })
        console.log('ccc')
      }
    })
  }

  /*  onLoad: function () {
     if (app.globalData.userInfo) {
       this.setData({
         userInfo: app.globalData.userInfo,
         hasUserInfo: true
       })
     } else if (this.data.canIUse) {
       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
       // 所以此处加入 callback 以防止这种情况
       app.userInfoReadyCallback = res => {
         this.setData({
           userInfo: res.userInfo,
           hasUserInfo: true
         })
       }
     } else {
       // 在没有 open-type=getUserInfo 版本的兼容处理
       wx.getUserInfo({
         success: res => {
           app.globalData.userInfo = res.userInfo
           this.setData({
             userInfo: res.userInfo,
             hasUserInfo: true
           })
         }
       })
     }
   },
   getUserInfo: function (e) {
     app.globalData.userInfo = e.detail.userInfo
     this.setData({
       userInfo: e.detail.userInfo,
       hasUserInfo: true
     })
   },
   //按钮的点击事件
   bindGetUserInfo: function (res) {
     let info = res;
     console.log(info);
     if (info.detail.userInfo) {
       console.log("点击了同意授权");
       var that = this
       wx.login({
         success: function (res) {
           wx.switchTab({
 
             url: '../my/my',
           })
           if (res.code) {
             wx.request({
               data: {
                 code: res.code,
                 user_info: info.detail.userInfo
               },
               header: {
                 'content-type': 'application/json' // 默认值
               },
               success: function (res) {
                 var userinfo = {};
                 userinfo['id'] = res.data.id;
                 userinfo['nickName'] = info.detail.userInfo.nickName;
                 userinfo['avatarUrl'] = info.detail.userInfo.avatarUrl;
                 userinfo['user_data'] = res.data;
                 wx.setStorageSync('userinfo', userinfo)
                 that.setData({
                   userInfo: info.detail.userInfo
                 })
               }
             })
           } else {
             console.log("授权失败");
           }
         },
       })
 
     } else {
       //用户按了拒绝按钮
       wx.showModal({
         title: '警告',
         content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
         showCancel: false,
         confirmText: '返回授权',
         success: function (res) {
           if (res.confirm) {
             console.log('用户点击了“返回授权”')
           }
         }
       })
     }
   } */
})