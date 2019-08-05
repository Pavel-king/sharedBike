// pages/charge/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money: 0
  },
  /**
   * 
   */
  input: function(e){
    this.setData({
      money: e.detail.value
    })
  },
  /**
   * 
   */
  charge: function(){
    let money = this.data.money.trim();
    money = Number(money);
    if(isNaN(money) || money <= 0){
      wx.showModal({
        title: '充值失败',
        content: '请输入正确的内容',
      });
    }else{
      wx.getStorage({
        key: 'overage',
        success: res => {
          wx.setStorage({
            key: 'overage',
            data: res.data + money,
          });
          wx.redirectTo({
            url: '/pages/wallet/index',
          })
        },
        fail: res => {
          wx.setStorage({
            key: 'overage',
            data: money,
          });
          wx.redirectTo({
            url: '/pages/wallet/index',
          })
        }
      })
    } //else
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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