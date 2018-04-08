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
        this.setData({
            options: app.globalData.options
        })
        this.refresh()
    },
    submit(e) {
        this.refresh()
    },
    refresh() {
        let options = this.data.options
        let index = this.data.index
        if (index >= options.length) {
            return
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