// pages/billing/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: 12345,
    hours: '00',
    minutes: '00',
    seconds: '00',
    actionText: '正在计费',
    clickBtn: false
  },
  /**
   * 结束骑行函数
   */
  endride: function(){
    clearInterval(this.timer);
    this.timer = "";
    this.setData({
      actionText: '本次骑行时间',
      clickBtn: true
    })
  },
  /**
   * 点击回到地图按钮
   */
  moveToIndex: function(){
    if(this.timer == ""){
      wx.redirectTo({
        url: '/pages/index/index',
      })
    }else{
      wx.navigateTo({
        url: '/pages/index/index?timer=' + this.timer,
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      number: options.number
    });
    let h = 0, m = 0, s = 0;
    this.timer = setInterval(()=>{
      s++;
      if(s >= 60){
        m++;
        s = 0;
      }
      if(m >= 60){
        h++;
        m = 0;
      }
      this.setData({
        hours: h < 10 ? '0' + h : '' + h,
        minutes: m < 10 ? '0' + m : '' + m,
        seconds: s < 10 ? '0' + s : '' + s
      });
    }, 1000);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})