// pages/hotPro/horPro.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "Allarry": {
      "arryin1": {
        "arryTitle": "热卖",
        "arry1": [{
          "proImg": "/images/product/01-1.jpg",
          "proText": "纯色家纺套件1"
        },
        {
          "proText": "纯色家纺套件2",
          "proImg": "/images/product/01-2.jpg"
        },
        {
          "proText": "纯色家纺套件3",
          "proImg": "/images/product/01-3.jpg"
        },
        {
          "proText": "纯色家纺套件4",
          "proImg": "/images/product/01-4.jpg"
        }
        ]
      },
      "arryin2": {
        "arryTitle": "被芯",
        "arry1": [{
          "proImg": "/images/product/02-1.jpg",
          "proText": "纯色家纺套件1"
        },
        {
          "proText": "纯色家纺套件2",
          "proImg": "/images/product/02-2.jpg"
        },
        {
          "proText": "纯色家纺套件3",
          "proImg": "/images/product/02-3.jpg"
        },
        {
          "proText": "纯色家纺套件4",
          "proImg": "/images/product/02-4.jpg"
        }
        ]
      },
      "arryin3": {
        "arryTitle": "枕头",
        "arry1": [{
          "proImg": "/images/product/03-1.jpg",
          "proText": "纯色家纺套件1"
        },
        {
          "proText": "纯色家纺套件2",
          "proImg": "/images/product/03-2.jpg"
        },
        {
          "proText": "纯色家纺套件3",
          "proImg": "/images/product/03-3.jpg"
        },
        {
          "proText": "纯色家纺套件4",
          "proImg": "/images/product/03-4.jpg"
        }
        ]
      },
      "arryin4": {
        "arryTitle": "套件",
        "arry1": [{
          "proImg": "/images/product/04-1.jpg",
          "proText": "纯色家纺套件1"
        },
        {
          "proText": "纯色家纺套件2",
          "proImg": "/images/product/04-2.jpg"
        },
        {
          "proText": "纯色家纺套件3",
          "proImg": "/images/product/04-3.jpg"
        },
        {
          "proText": "纯色家纺套件4",
          "proImg": "/images/product/04-4.jpg"
        }
        ]
      }
    }
  },
  onLoad: function (options) {
    let _this = this;
    wx.request({
      url: 'http://192.168.10.3:8888/',
      method: "get",
      success(res) {
        _this.setData({
          address: res.data.address,
          postal: res.data.address,

        });
        console.log(res)
      },
      fail(err) {
        console.log(err);
      }
    })
  }

})