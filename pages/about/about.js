// mine.js

var userInfo = {
    avatar:"../about/a2.jpg",
    nickname: "墨墨",
    sex: "♂",  // 
    meta: '宠物定制',
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    uhide: 0,
    userInfo: userInfo,
    hiddenName: true
  },

  onLoad: function (options) {
  },
  click: function (e) {
    this.setData({
      hiddenName: !this.data.hiddenName
    })
  }

  //点击切换隐藏和显示

})