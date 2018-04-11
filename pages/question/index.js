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
        let globalProps = app.globalData.props;
        let globalResult = app.globalData.result;
        let lib1 = app.globalData.lib1
        let lib2 = app.globalData.lib2
        let lib3 = app.globalData.lib3

        // 得到common
        function getCom() {
            let count = ['一', '两'][~~(Math.random() * 2)]
            let unit = ['勺', '杯', '桶'][~~(Math.random() * 3)]
            return count + unit + globalProps[~~(Math.random() * globalProps.length)]
        }
        // 替换属性
        function replaceProps(str) {
            console.log('replaceProps', str)
            if (/props/.test(str)) {
                return str.replace(/props/g, globalProps[~~(Math.random() * globalProps.length)])
            } else {
                return str
            }
        }
        // 获取答案类型
        let temp = globalResult[~~(Math.random() * globalResult.length)]

        console.log('获取类型', temp)

        let result = temp.map(item => {
            switch (item) {
                case 'common':
                    return getCom()
                case 'lib1':
                    return replaceProps(lib1[~~(Math.random() * lib1.length)])
                case 'lib2':
                    return replaceProps(lib2[~~(Math.random() * lib2.length)])
                case 'lib3':
                    return replaceProps(lib3[~~(Math.random() * lib3.length)])
                default:
                    return replaceProps(item)
            }
        })

        console.log('替换属性', result)
        return result
    }
})