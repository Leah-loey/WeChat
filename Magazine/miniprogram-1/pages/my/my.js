// pages/contact/contact.js
Page({
  data: {
    "address": "广东食品药品职业学院",
    "postal": 525000,
    "hotline": "88373997582",
    "workday": "9:00-22:30",
    "email": "jdhjsbdfjba@jhfd.cn"
  },
  onLoad() {
    let _this = this;
    wx.request({
      url: 'http://localhost:3000/contact',
      method: "get",
      success(res) {
        _this.setData({
          address: res.data.address,
          postal: res.data.postal,
          hotline: res.data.hotline,
          workday: res.data.workday,
          email: res.data.email
        });
      },
      fail(err) {
        console.log(err);
      }
    })
  }

})