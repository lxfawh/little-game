const app = getApp()

Page({
  data: {
    userInfo: {},
    result: ''
  },
  onLoad: function (e) {
    this.setData({
      userInfo: app.globalData.userInfo,
      result: e.result
    })
  }
})
