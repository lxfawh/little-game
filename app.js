//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    options: [
      {
        title: '冰激凌和...更配？',
        option: [
          { name: '12公分细高跟', code: 1 },
          { name: '拖鞋', code: 2 },
          { name: '滑板鞋', code: 3 },
        ],
        footer: '气色红润有光泽'
      },
      {
        title: '吃西红柿炒鸡蛋的时候，你常烦恼先吃西红柿还是先吃鸡蛋？',
        option: [
          { name: '是', code: 1 },
          { name: '否', code: 2 },
        ],
        footer: '没准将来可以拿诺贝尔奖'
      },
      {
        title: '卧室的窗帘颜色是？',
        option: [
          { name: '亮色系', code: 1 },
          { name: '暗色系', code: 2 },
          { name: '窗纱', code: 3 },
        ],
        footer: '天气不错，适合睡觉'
      },
      {
        title: '加入家中突然失火，你会带上什么跑？',
        option: [
          { name: '身外之物们', code: 1 },
          { name: '前任纪念品', code: 2 },
          { name: '猫', code: 3 },
          { name: '啥也不带', code: 4 }
        ],
        footer: '我觉得你很可爱，加一点蠢萌吧'
      },
      {
        title: '你最爱吃的蔬菜',
        option: [
          { name: '香菜', code: 1 },
          { name: '茼蒿', code: 2 },
          { name: '辣椒', code: 3 },
          { name: '不要强迫我', code: 4 },
        ],
        footer: '你开心就好'
      }
    ]
  }

})