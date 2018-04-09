const app = getApp()
Page({
    data: {
        index: 0,
        title: '',
        option: [],
        text: '',
        explain: [],
        options: [],
        result: ''
    },
    onLoad() {
        //从题库随机获取5道题
        let globalOptions = app.globalData.options;
        let globalExplain = app.globalData.explain;
        let options = this.extract(globalOptions)
        let explain = this.extract(globalExplain)
        this.setData({ options, explain })
        this.reduceOption()
    },
    submit(e) {
        this.reduceOption()
    },
    extract(arr) {
        let result = []
        let i = 0;
        while (i < 5) {
            let index = ~~(Math.random() * arr.length)
            if (!result.includes(arr[index])) {
                result.push(arr[index])
                i++
            }
        }
        return result
    },
    reduceOption() {
        let _this = this
        let options = this.data.options
        let index = this.data.index
        if (index >= options.length) {

            wx.navigateTo({
                url: `../result/index?result=${this.getResult()}`
            })

        } else {
            this.setData({
                title: options[index].title,
                option: options[index].option,
                text: _this.data.explain[index]
            })
            index++
            this.setData({ index })
        }


    },
    getResult() {
        let count = ['一', '两', '三'][~~(Math.random() * 3)]
        let unit = ['勺', '杯', '桶'][~~(Math.random() * 3)]
        let props = app.globalData.props[~~(Math.random() * app.globalData.props.length)]

        return count + unit + props
    }
})