// pages/t/t.js
var options = {

    /**
     * 页面的初始数据
     */
    data: {
        sky: '晴',
        city: '广州',
        time: '00:00',
        wendu: '0℃',
        date: ['今天', '明天', '周三', '周四', '周五'],
        fiveSky: ['晴', '大雨', '小雨', '多云', '暴雨'],
        fiveHigh: ['0', '1', '2', '3', '4'],
        key: '5TUBZ-A4AWR-EGHWK-WDCWK-4U6EF-KBBKB'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var loc = wx.getLocation({"success":function(e) {
            console.log('生命周期-页面加载', e)
        }})
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        console.log('生命周期-页面初次渲染完成')
        this.dw()
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        console.log('生命周期-页面显示')
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {
        console.log('生命周期-页面隐藏')
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {
        console.log('生命周期-页面卸载')
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {
        console.log('用户下拉动作')
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
        console.log('页面上拉触底事件')
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {
        console.log('用户点击右上角分享')
    },

    // 定位
    dw: function() {
        var QQMapWX = require('../../qqmap/qqmap-wx-jssdk.js')
        var demo = new QQMapWX({
            key: '5TUBZ-A4AWR-EGHWK-WDCWK-4U6EF-KBBKB' // 必填
        })
        console.log('dw')
    }
}

Page(options)
