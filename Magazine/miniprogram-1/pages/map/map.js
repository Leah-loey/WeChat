// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers:[{
      id:0,
      latitude: 23.209324,
      longitude:113.382473,
      width:50,
      height:50
    }]
  },
  regionchange(e){
    console.log(e.type)
  },
  markertap(e){
    console.log(e.markerId)
  },
  controltap(e){
    console.log(e.controlId)
  }
})