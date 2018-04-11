//app.js
App({
  onLaunch: function () {

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    wx.getUserInfo({
      success: res => {
        this.globalData.userInfo = res.userInfo
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
        title: '三个女人一台戏，你觉得这个说法是真的吗？',
        option: [
          { name: '是的', code: 1 },
          { name: '不是', code: 2 },
          { name: '不一定', code: 3 },
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
          { name: '猫', code: 1 },
          { name: '钱包', code: 2 },
          { name: '前任纪念品', code: 3 },
          { name: '啥也不带', code: 4 }
        ]
      },
      {
        title: '你最爱吃的蔬菜',
        option: [
          { name: '香菜', code: 1 },
          { name: '芹菜', code: 2 },
          { name: '韭菜', code: 3 },
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
        title: '以下两份工作，你会选择哪一份？',
        option: [
          { name: '单调无聊，但报酬很高', code: 1 },
          { name: '非常酷，但仅够维持生活', code: 2 }
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
        title: '选一个异性做伴侣？',
        option: [
          { name: '温和善良但条件普通', code: 1 },
          { name: '才华出众但性格孤僻', code: 2 },
          { name: '颜值极高但城府极深', code: 3 },
          { name: '社会地位高但不专一', code: 4 },
        ]
      },
      {
        title: '你歌单里边那种类型的歌曲最多',
        option: [
          { name: '中文的', code: 1 },
          { name: '英文的', code: 2 },
          { name: '没有歌词的', code: 3 }
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
          { name: '留着', code: 1 },
          { name: '扔掉', code: 2 },
          { name: '转送给别人', code: 3 }
        ]
      },
      {
        title: '如果你必须变成一种动物，你希望是？',
        option: [
          { name: '猫咪', code: 1 },
          { name: '猴子', code: 2 },
          { name: '孔雀', code: 3 },
          { name: '狮子', code: 3 }
        ]
      },
      {
        title: '如果你有一座别墅，你认为它应当建立在哪里？',
        option: [
          { name: '海边', code: 1 },
          { name: '山上', code: 2 },
          { name: '城市中', code: 4 },
          { name: '森林里', code: 3 }
        ]
      },
    ],
    props: ['性感', '理智', '蠢萌', '颜值', '人格分裂', '智商', '可爱', '神经质', '软萌', '丑萌', '幽默', '自尊心', '好人缘', '喜感', '闷骚', '健壮', '懒惰', '荷尔蒙', '淘气', '厚脸皮', '占有欲', '腹黑', '调皮', '羞涩', '强迫症', '耿直', '霸道', '虚荣', '财富', '桃花运', '洒脱', '随性'],


    results: [
      ['common', 'common', 'common'],
      ['common', 'common', 'lib3'],
      ['首先加入common', '然后加入common', 'lib3']
      ['加一点点props', '再补一点props', '还是不够，props都加给你吧！'],
      ['props打翻了', 'props也打翻了', '...对不住了 你自己奋斗吧'],
      ['props少许', '后悔了，倒掉', 'lib3'],
      ['props少许', 'lib2', 'lib3'],
      ['props少许', '这是啥 啊...记不起来啦...', '那就加点props吧'],
      ['加一点点props', '再加一点点props', '应该差不多了'],
      ['嫌麻烦，所以什么都没放 辛苦你了...'],
      ['lib1', 'lib2', 'lib3']
    ],


    lib1: ['这是啥 啊...记不起来啦...', 'props少许', '搞不清楚放了什么 总之放了很多...', '呃啊啊啊啊', '加一点点props', '去打了个盹儿...', '完了，props打翻了...'],

    lib2: ['这是啥 啊...记不起来啦...', '去打了个盹儿...', '搞不清楚放了什么 总之放了很多...', '哎呦，超能力好像用完了,那就拿props代替吧', '呃啊啊啊啊', '加一点点props', '要不加点props恶搞一下', '再补一点props', '要不再加点props', '完了，props打翻了'],

    lib3: ['这是啥 啊...记不起来啦...', '就是看不惯你这么props才假装失手的', '然后倒掉，让你空欢喜一场', '应该差不多了...', '搞不清楚放了什么 总之放了很多...', '哎呦，超能力好像用完了,那就拿props代替吧', '呃啊啊啊啊', '加一点点props', '还要加啥来着？算了 就这样吧...', '要不加点props恶搞一下', '想加异性缘，加错了..放成props了', '还是不够，props都加给你吧！', '后悔了，倒掉', '加全部的props进去', '去打了个盹儿...', '完了，props打翻了', '哎呦，刚手滑倒入了全部props'],

    explain: [
      '气色红润有光泽', '一见钟情，再而衰，三而竭', '婚姻是一座围城，城外的人想进去，城里的人真会玩', '没准将来是首富', '你开心就好', '多喝热水', '我觉得你很可爱，加一点蠢萌吧', '天气不错，适合睡觉', '没准将来可以拿诺贝尔奖', '长亭外，古道边，一行白鹭上青天']
  }

})