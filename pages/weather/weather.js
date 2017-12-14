/*
1,下拉刷新,提出提示更新
2,获取数据错误时候弹窗提示
*/

// pages/weather/weather.js
var bmap = require('bmap-wx.js')

var options = {

    /**
     * 页面的初始数据
     */
    data: {
        sky: '晴',
        city: '广州',
        pm25: '00',
        wendu: '0℃',
        date: ['今天', '明天', '周三', '周四'],
        fourSky: ['晴', '大雨', '小雨', '多云'],
        fourHigh: ['0', '1', '2', '3']
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function() {
        var that = this;
        var BMap = new bmap.BMapWX({
            ak: 'UtA8i1Qcb45Wc1EQB4fShgB4F9AdLLNQ'
        })
        var fail = function(data) {
            console.log( 'fail', data)
            wx.showToast({
                title: '数据获取失败',
                icon: 'loading',
                duration: 3000
            })
        }
        var success = function(data) {
            var fourData = data.originalData.results[0].weather_data
            console.log('data.currentWeather', data.currentWeather[0].pm25)
            that.setData({
                pm25: data.currentWeather[0].pm25,
                city: data.currentWeather['0'].currentCity,
                wendu: data.currentWeather['0'].date.split('：')[1].slice(0,-1),
                sky: data.currentWeather['0'].weatherDesc,
                date: ['今天', '明天', fourData[2].date, fourData[3].date],
                fourSky: [fourData[0].weather, fourData[1].weather, fourData[2].weather, fourData[3].weather],
                fourHigh: [fourData[0].temperature, fourData[1].temperature, fourData[2].temperature, fourData[3].temperature]
            })
        }

        BMap.weather({
            fail: fail,
            success: success
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        console.log('生命周期-页面初次渲染完成')
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
        var that = this;
        var BMap = new bmap.BMapWX({
            ak: 'UtA8i1Qcb45Wc1EQB4fShgB4F9AdLLNQ'
        })
        var fail = function(data) {
            console.log( 'fail', data)
            wx.showToast({
                title: '数据获取失败',
                icon: 'loading',
                duration: 3000
            })
        }
        var success = function(data) {
            var fourData = data.originalData.results[0].weather_data
            // console.log('data.currentWeather', data.currentWeather[0].pm25)
            that.setData({
                pm25: data.currentWeather[0].pm25,
                city: data.currentWeather['0'].currentCity,
                wendu: data.currentWeather['0'].date.split('：')[1].slice(0,-1),
                sky: data.currentWeather['0'].weatherDesc,
                date: ['今天', '明天', fourData[2].date, fourData[3].date],
                fourSky: [fourData[0].weather, fourData[1].weather, fourData[2].weather, fourData[3].weather],
                fourHigh: [fourData[0].temperature, fourData[1].temperature, fourData[2].temperature, fourData[3].temperature]
            })
            // 弹窗提示数据更新
            wx.showToast({
                title: '更新成功',
                icon:'success',
                duration: 1000
            })
            // 更新成功后关闭下拉动作
            wx.stopPullDownRefresh()
        }

        BMap.weather({
            fail: fail,
            success: success
        })
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



}

Page(options)
