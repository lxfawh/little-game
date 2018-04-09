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
        ]
      },
      {
        title: '吃西红柿炒鸡蛋的时候，你常烦恼先吃西红柿还是先吃鸡蛋？',
        option: [
          { name: '是', code: 1 },
          { name: '否', code: 2 },
        ]
      },
      {
        title: '卧室的窗帘颜色是？',
        option: [
          { name: '亮色系', code: 1 },
          { name: '暗色系', code: 2 },
          { name: '窗纱', code: 3 },
        ]
      },
      {
        title: '加入家中突然失火，你会带上什么跑？',
        option: [
          { name: '身外之物们', code: 1 },
          { name: '前任纪念品', code: 2 },
          { name: '猫', code: 3 },
          { name: '啥也不带', code: 4 }
        ]
      },
      {
        title: '你最爱吃的蔬菜',
        option: [
          { name: '香菜', code: 1 },
          { name: '茼蒿', code: 2 },
          { name: '辣椒', code: 3 },
          { name: '不要强迫我', code: 4 },
        ]
      },
      {
        title: '选一首哥单曲循环',
        option: [
          { name: '《海草舞》', code: 1 },
          { name: '《你把我灌醉》', code: 2 },
          { name: '《我们不一样》', code: 3 }
        ]
      },
      {
        title: '你的方向感',
        option: [
          { name: '左右上下', code: 1 },
          { name: '东南西北', code: 2 },
          { name: '东经北纬', code: 3 },
          { name: '宇宙相对坐标', code: 3 }
        ]
      },
      {
        title: '不太熟的朋友下周结婚，你去不去',
        option: [
          { name: '请帖来了就去', code: 1 },
          { name: '找借口推掉', code: 2 }
        ]
      },
      {
        title: '你的方向感',
        option: [
          { name: '左右上下', code: 1 },
          { name: '东南西北', code: 2 },
          { name: '东经北纬', code: 3 },
          { name: '宇宙相对坐标', code: 4 }
        ]
      },
      {
        title: '收到一份不喜欢的礼物',
        option: [
          { name: '转送给别人', code: 1 },
          { name: '扔掉', code: 2 },
          { name: '留下摆着', code: 3 }
        ]
      },
    ],
    props: [
      '性感', '理智', '蠢萌', '颜值', '人格分裂', '智商', '可爱', '神经质', '软萌', '丑萌', '幽默', '自尊心', '好人缘', '喜感', '闷骚', '健壮', '懒惰', '荷尔蒙', '淘气', '厚脸皮', '占有欲', '腹黑', '调皮', '羞涩', '强迫症', '耿直', '霸道', '虚荣', '财富', '桃花运'],

    result: ['这一杯是啥', '啊...记不起来啦...', '去打了个盹儿...', '那就加点...吧', '哎呦，刚手滑倒入了整碗...', '想加智商，加错了..放成...了', '在补一点...', '加一整桶...进去', '完了，...打翻了', '就是看不惯你这么...才假装失手的', '加一点点...', '要不再加点...', '还是不够，...都加给你吧！', '后悔了，倒掉', '骗你的，...都加给你', '哎呦，好像用完了', '那就拿...代替吧', '呃啊啊啊啊', '搞不清楚放了什么，总之放了很多', '...打翻了', '...也打翻了', '...对不住了 你自己奋斗吧', '那就加点...吧', '然后倒掉，让你空欢喜一场', '应该差不多了', '嫌麻烦，所以什么都没放 辛苦你了...', '要不加点...恶搞一下', '还要加啥来着？算了，就这样吧'],

    explain: [
      '气色红润有光泽', '一见钟情，再而衰，三而竭', '婚姻是一座围城，城外的人想进去，城里的人真会玩', '没准将来是首富', '你开心就好', '多喝热水', '我觉得你很可爱，加一点蠢萌吧', '天气不错，适合睡觉', '没准将来可以拿诺贝尔奖', '长亭外，古道边，一行白鹭上青天', '',
    ]
  }

})