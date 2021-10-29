// components/btn/btn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  toTopFn() {
    this.triggerEvent('totop', 0);
  },
  callFn() {
    wx.makePhoneCall({
      phoneNumber: '020-85628002',
    })
  },

  ToMap() {
    wx.navigateTo({
      url: '/pages/map/map'
    })
  }



})