const config = require("../../config");

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //result: [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18]
    result: [19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19],
    show: []
  },

  showDetail(event) {
    wx.navigateTo({
      url: '../entry/entry?id=' + event.currentTarget.id,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDiaries();

    //console.log(app.globalData.like);
    var copy = JSON.parse(JSON.stringify(app.globalData.like));
    var turn = JSON.parse(JSON.stringify(this.data.result));
    var max = 0;
    var flag = -1;
    var s = 0;
    var i = 0; var j = 0;
    for (i = 0; i < copy.length - 1; i++) {
      for (j = 0; j < copy.length; j++) {
        if (copy[j].love > max) {
          //console.log(copy[j]);
          flag = j;
          max = copy[j].love;
        }
      }
      //console.log(flag);
      if (flag >= 0) {
      turn[flag] = s;
        s++;
        copy[flag].love = 0;
        flag = -1;
      }
      else { break; }
      max = 0;
    }
    //console.log(turn);
    var tmp = [];
    for (var j = 0; j < copy.length; j++) {
      if (turn[j] < 19)
        tmp[turn[j]] = j;
    }
    //console.log(tmp);
    var str;
    for (var k = 0; k < tmp.length; k++) {
      str = 'show[' + k + ']';
      this.setData({ [str]: tmp[k] });
    }
    console.log("显示show:");
    console.log(this.data.show);
  },

  getDiaries() {
    var that = this;
    app.getDiaryList(list => {
      that.setData({ cal: list });
    })
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