const app = getApp()
Page({
    data: {
        index: 0,
        title: '',
        option: [],
        footer: '',
        options: []
    },
    onLoad() {
        //从题库随机获取5道题
        let globalOptions = app.globalData.options;
        let options = []
        let i = 0;
        while (i < 5) {
            let index = Math.floor(Math.random() * globalOptions.length)
            if (!options.includes(globalOptions[index])) {
                options.push(globalOptions[index])
                i++
            }
        }
        this.setData({ options })
        this.reduceOption()
    },
    submit(e) {
        this.reduceOption()
    },
    reduceOption() {
        let options = this.data.options
        let index = this.data.index
        if (index >= options.length) {
            wx.showModal({
                title: '显示结果'
            })
        } else {
            this.setData({
                title: options[index].title,
                option: options[index].option,
                footer: options[index].footer
            })
            index++
            this.setData({ index })
        }
    }
})