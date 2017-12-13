// pages/weather/weather.js
var cityList = require('cityID.js')
// 请求天气数据
var weatherQuery = function() {
    wx.getStorage({
        key: 'city',
        success: function(res) {
            var city = res.data
            var list = Object.keys(cityList.cityList)
            var cityId = cityList.cityList[city]
            // console.log('cityId',cityId)
            var options = {
                url: "http://wthrcdn.etouch.cn/weather_mini?citykey=" + cityId,
                success: function(e) {
                    console.log(e)
                }
            }
            // 发送 AJAX
            wx.request(options)
        }
    })
}
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
        BDkey: '0K9j6geaeCRGCEPKytwnpXtA9nPY3G9G',
        TXkey:'5TUBZ-A4AWR-EGHWK-WDCWK-4U6EF-KBBKB',
        lat: 0,
        lon: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        // 获取经纬度
        wx.getLocation({"success":function(e) {
            this.lat = e.latitude
            this.lon = e.longitude
            var QQMapWX = require('../../qqmap/qqmap-wx-jssdk.js')//
            // console.log('dw')
            var demo = new QQMapWX({
                key: '5TUBZ-A4AWR-EGHWK-WDCWK-4U6EF-KBBKB'
            })
            // 调用接口
            demo.reverseGeocoder({
                location: {
                    latitude: this.lat,
                    longitude: this.lon
                },
                success: function(res) {
                    var city = res.result.address_component.city
                    // console.log('success',res)
                    if (city.includes('市')) {
                        city = city.slice(0,-1)
                    }
                    wx.setStorage({
                        key: 'city',
                        data: city
                    })
                    // 请求天气数据
                    weatherQuery()
                },
                fail: function(res) {
                    console.log('fail ',res);
                },
            })//
        }})
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
