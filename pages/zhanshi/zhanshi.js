const config = require("../../config");

var app = getApp();

Page({

  data: {
    diaries: null,
    showLoading: false,
    loadingMessage: '',
    sh : ["汪汪","喵呜","啾啾","吱~"]
  },


  onLoad() {
    this.getDiaries();
  },


  getDiaries() {
    var that = this;
    app.getDiaryList(list => {
      that.setData({ cal: list });
    })
  },

  showDetail(event) {
    wx.navigateTo({
      url: '../entry/entry?id=' + event.currentTarget.id,
    });
  },
  onChange(event) {
    wx.showToast({
      title: `${this.data.sh[event.detail.index]}`,
      icon: 'none'
    });
  }
})


