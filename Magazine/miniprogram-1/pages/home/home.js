// pages/home/home.js
Page({

  data: {
    arry: [
      '/images/home/cln.jpg',
      '/images/home/lgl.jpg',
      '/images/home/mmq.jpg'
    ],

    imgUrls: [{
        url: '/images/home/cln.jpg',
        text: '硬糖少年   -陈立农'
      },
      {
        url: '/images/home/lgl.jpg',
        text: '成为自己   -赖冠霖'
      },
      {
        url: '/images/home/mmq.jpg',
        text: '不惧定义   -孟美岐'
      },

      
    ],

    "Allarry": {
      "arryin1": {
        "arryTitle": "全部期刊",
        "arry1": [{
          "hotImg": "/images/home/cln.jpg",
          "hotText": "硬糖少年 陈立农"
          },
          {
            "hotImg": "/images/home/mmq.jpg",
            "hotText": "孟美岐 不惧定义"
          },
          {
            "hotImg": "/images/home/lgl.jpg",
            "hotText": "赖冠霖 成为自己 "
          },
          {
            "hotImg": "/images/home/cln1.jpg",
            "hotText": "陈立农 硬糖少年"
          },
          {
            "hotImg": "/images/home/cln2.jpg",
            "hotText": "陈立农 硬糖少年"
          },
          {
            "hotImg": "/images/home/lgl2.jpg",
            "hotText": "陈立农 硬糖少年"
          },
          {
            "hotImg": "/images/home/mmq2.jpg",
            "hotText": "陈立农 硬糖少年"
          },
          {
            "hotImg": "/images/home/cln.jpg",
            "hotText": "陈立农 硬糖少年"
          },
          {
            "hotImg": "/images/home/cln1.jpg",
            "hotText": "陈立农 硬糖少年"
          },
           {
            "hotImg": "/images/home/cln2.jpg",
            "hotText": "陈立农 硬糖少年"
          },

        ]
      },



    },

    swiperIndex: 0 //这里不写第一次启动展示的时候会有问题
  },

  bindchange(e) {
    this.setData({
      swiperIndex: e.detail.current
    })
  },
})