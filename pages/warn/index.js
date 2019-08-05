// pages/warn/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemsValue: [{
      value: "私锁私用",
      checked: false,
      color: "#b9dd08"
    }, {
        value: "车牌缺损",
        checked: false,
        color: "#b9dd08"
      }, {
        value: "轮胎坏了",
        checked: false,
        color: "#b9dd08"
      }, {
        value: "车锁坏了",
        checked: false,
        color: "#b9dd08"
      }, {
        value: "违规乱停",
        checked: false,
        color: "#b9dd08"
      }, {
        value: "密码不对",
        checked: false,
        color: "#b9dd08"
      }, {
        value: "刹车坏了",
        checked: false,
        color: "#b9dd08"
      }, {
        value: "其他故障",
        checked: false,
        color: "#b9dd08"
      }],
    picUrls: [],
    checkboxValues: [],
    btnColor: '#f2f2f2',
    actionText: '拍摄/相册',
    inputValue: {
      num: 0,
      desc: ''
    }
  },
  /**
   * 
   */
  submit: function(e){
    if(this.data.picUrls.length > 0 && this.data.checkboxValues.length > 0){
      wx.request({
        url: 'https://www.easy-mock.com/mock/5d3719f1c455df460ed80ba2/ofo/submitSuccess',
        success: (res)=>{
          if(res.data.status == 0){
            wx.showToast({
              title: '提交成功',
              icon: 'success',
              duration: 2000,
              complete: ()=>{
                this.timer = setTimeout(()=>{
                  wx.navigateBack({
                    delta: 1
                  })
                }, 2000)
              }
            });
            
          }
        }
      })
    }else{
      wx.showModal({
        title: '请填写完整的反馈信息',
        content: '快去填写完整',
        confirmText: "填",
        cancelText: "不填",
        success: (res)=>{
          if(res.confirm){

          }else{
            wx.navigateBack({
              delta: 1
            })
          }
        }
      })
    }
  },
  /**
   * input改变
   */
  changeNumber: function(e){
    this.setData({
      inputValue: {
        num: e.detail.value,
        desc: this.data.inputValue.desc
      }
    });
  },
  /**
  * input改变
  */
  changeDesc: function (e) {
    this.setData({
      inputValue: {
        num: this.data.inputValue.num,
        desc: e.detail.value
      }
    });
  },
  /**
   * checkbox改变
   */
  changeCheckbox: function(e){
    let _value = e.detail.value;
    if(_value.length === 0){
      this.setData({
        checkboxValues: [],
        btnColor: '#f2f2f2'
      })
    }else{
      this.setData({
        checkboxValues: _value,
        btnColor: '#b9dd08'
      })
    }
  },
  /**
   * 点击选择相册
   */
  clickPhoto: function(){
    wx.chooseImage({
      success: (res)=>{
        const _picUrls = this.data.picUrls;
        const _path = res.tempFilePaths;
        for(let v of _path){
          _picUrls.push(v);
        }
        this.setData({
          picUrls: _picUrls,
          actionText: '+'
        })
      },
    })
  },
  /**
   * 点击Photo上的叉
   */
  delPic: function(e){
    console.log(e)
    let index = e.target.dataset.index;
    let _picUrls = this.data.picUrls;
    _picUrls.splice(index, 1);
    this.setData({
      picUrls: _picUrls,
      actionText: _picUrls.length == 0 ? '拍摄/相册' : '+'
    })
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
    clearTimeout(this.timer);
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