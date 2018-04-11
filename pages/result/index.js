const app = getApp()

Page({
  data: {
    userInfo: {},
    props: app.globalData.props,
    results: app.globalData.results,
    lib1: app.globalData.lib1,
    lib2: app.globalData.lib2,
    lib3: app.globalData.lib3,
    result: []
  },
  onLoad: function () {
    let _this = this
    // 获取答案类型
    this.setData({
      userInfo: app.globalData.userInfo
    })
    let temp = _this.data.results[~~(Math.random() * _this.data.results.length)]

    console.log('获取类型', temp)

    let result = temp.map(item => {
      switch (item) {
        case 'lib1':
          return _this.replaceProps(_this.data.lib1[~~(Math.random() * _this.data.lib1.length)])
        case 'lib2':
          return _this.replaceProps(_this.data.lib2[~~(Math.random() * _this.data.lib2.length)])
        case 'lib3':
          return _this.replaceProps(_this.data.lib3[~~(Math.random() * _this.data.lib3.length)])
        default:
          return _this.replaceProps(item)
      }
    })

    console.log('替换属性', result)
    this.setData({ result })

  },
  // 得到common
  getCom() {
    let count = ['一', '两'][~~(Math.random() * 2)]
    let unit = ['勺', '杯', '桶'][~~(Math.random() * 3)]
    return count + unit + this.data.props[~~(Math.random() * this.data.props.length)]
  },
  // 替换属性
  replaceProps(str) {
    if (/common/.test(str)) {
      return str.replace(/common/, this.getCom())
    } else if (/props/.test(str)) {
      return str.replace(/props/g, this.data.props[~~(Math.random() * this.data.props.length)])
    } else {
      return str
    }
  }
})
