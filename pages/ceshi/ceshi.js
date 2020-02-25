var num = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var ite = ['筛选', '罗列']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //testnum: null,//设置测试参数

    items: [
      { name: '长毛' }, { name: '短毛' }, { name: '无毛' },
      { name: '大型' }, { name: '中型' }, { name: '小型' },
      { name: '温顺' }, { name: '机灵' }, { name: '内向' },
      { name: '活泼' }, { name: '勇敢' }, { name: '忠诚' },
      { name: '善变' }, { name: '优雅' }, { name: '凶悍' }, { name: '需要空间小' }, { name: '气味小' }, { name: '观赏型' }, { name: '呆萌' }, { name: '草食性' }
    ],

    text0: '\n',
    text1: ' ',

    textcolor1: 'black',
    textcolor2: 'black',
    textcolor3: 'black',
    textcolor4: 'black',
    textcolor5: 'black',
    textcolor6: 'black',
    textcolor7: 'black',
    textcolor8: 'black',
    textcolor9: 'black',
    textcolor10: 'black',
    textcolor11: 'black',
    textcolor12: 'black',
    textcolor13: 'black',
    textcolor14: 'black',
    textcolor15: 'black',
    textcolor16: 'black',
    textcolor17: 'black', textcolor18: 'black', textcolor19: 'black', textcolor20: 'black', textcolor21: 'black',
    bgcolor1: '#ffffff',
    bgcolor2: '#ffffff',
    bgcolor3: '#ffffff',
    bgcolor4: '#ffffff',
    bgcolor5: '#ffffff',
    bgcolor6: '#ffffff',
    bgcolor7: '#ffffff',
    bgcolor8: '#ffffff',
    bgcolor9: '#ffffff',
    bgcolor10: '#ffffff',
    bgcolor11: '#ffffff',
    bgcolor12: '#ffffff',
    bgcolor13: '#ffffff',
    bgcolor14: '#ffffff',
    bgcolor15: '#ffffff',
    bgcolor16: '#ffffff', bgcolor17: '#ffffff', bgcolor18: '#ffffff', bgcolor19: '#ffffff', bgcolor20: '#ffffff', bgcolor21: '#ffffff',
    show: false,
    actionSheetHidden: true,
    actionSheetItems: ite,

    bring: []
  },


  actionSheetTap: function (e) {
    console.log(this);
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  actionSheetChange: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    });
    console.log("点击ation-sheet-cancel，会触发action-sheet绑定的事件。在这里可以通过改变hidden控制菜单的隐藏");
  },

  bind筛选: function () {
    var tmp = [];
    this.setData({ bring: [] });
    for (var i = 0; i < num.length; i++) {
      if (num[i] % 2 == 1) {
        tmp.push(this.data.items[i].name);
      }
    }
    console.log(tmp);
    for (var j = 0; j < tmp.length; j++) {
      var str = 'bring[' + j + ']';
      this.setData({ [str]: tmp[j] });
    }
    console.log(this.data.bring);
    wx.navigateTo({
      url: '../ceshi/outcome?id=' + this.data.bring
    })
  },

  bind罗列: function () {
    var poi = [];
    this.setData({ bring: [] });
    for (var i = 0; i < num.length; i++) {
      if (num[i] % 2 == 1) {
        poi.push(this.data.items[i].name);
      }
    }
    for (var j = 0; j < poi.length; j++) {
      var str = 'bring[' + j + ']';
      this.setData({ [str]: poi[j] });
    }
    console.log(this.data.bring);
    wx.navigateTo({
      url: '../ceshi/browse?id=' + this.data.bring
    })
  },

  changeColor1() {
    num[0]++;
    var result = num[0] / 2;
    if (num[0] % 2 == 0) {
      this.setData({
        bgcolor1: '#ffffff',
        textcolor1: 'black'
      })
    } else {
      this.setData({
        bgcolor1: '#ff9800',
        textcolor1: 'white'
      })
    }
  },
  changeColor2() {
    num[1]++;
    var result = num[1] / 2;
    if (num[1] % 2 == 0) {
      this.setData({
        bgcolor2: '#ffffff',
        textcolor2: 'black'
      })
    } else {
      this.setData({
        bgcolor2: '#ff9800',
        textcolor2: 'white'
      })
    }
  },
  changeColor3() {
    num[2]++;
    var result = num[2] / 2;
    if (num[2] % 2 == 0) {
      this.setData({
        bgcolor3: '#ffffff',
        textcolor3: 'black'
      })
    } else {
      this.setData({
        bgcolor3: '#ff9800',
        textcolor3: 'white'
      })
    }
    console.log(result)
  },
  changeColor4() {
    num[3]++;
    var result = num[3] / 2;
    if (num[3] % 2 == 0) {
      this.setData({
        bgcolor4: '#ffffff',
        textcolor4: 'black'
      })
    } else {
      this.setData({
        bgcolor4: '#ff9800',
        textcolor4: 'white'
      })
    }
    console.log(num[3]);
  },
  changeColor5() {
    num[4]++;
    var result = num[4] / 2;
    if (num[4] % 2 == 0) {
      this.setData({
        bgcolor5: '#ffffff',
        textcolor5: 'black'
      })
    } else {
      this.setData({
        bgcolor5: '#ff9800',
        textcolor5: 'white'
      })
    }
  },
  changeColor6() {
    num[5]++;
    var result = num[5] / 2;
    if (num[5] % 2 == 0) {
      this.setData({
        bgcolor6: '#ffffff',
        textcolor6: 'black'
      })
    } else {
      this.setData({
        bgcolor6: '#ff9800',
        textcolor6: 'white'
      })
    }
  },
  changeColor7() {
    num[6]++;
    var result = num[6] / 2;
    if (num[6] % 2 == 0) {
      this.setData({
        bgcolor7: '#ffffff',
        textcolor7: 'black'
      })
    } else {
      this.setData({
        bgcolor7: '#ff9800',
        textcolor7: 'white'
      })
    }
  },
  changeColor8() {
    num[7]++;
    var result = num[7] / 2;
    if (num[7] % 2 == 0) {
      this.setData({
        bgcolor8: '#ffffff',
        textcolor8: 'black'
      })
    } else {
      this.setData({
        bgcolor8: '#ff9800',
        textcolor8: 'white'
      })
    }
  },
  changeColor9() {
    num[8]++;
    var result = num[8] / 2;
    if (num[8] % 2 == 0) {
      this.setData({
        bgcolor9: '#ffffff',
        textcolor9: 'black'
      })
    } else {
      this.setData({
        bgcolor9: '#ff9800',
        textcolor9: 'white'
      })
    }
  },
  changeColor10() {
    num[9]++;
    var result = num[9] / 2;
    if (num[9] % 2 == 0) {
      this.setData({
        bgcolor10: '#ffffff',
        textcolor10: 'black'
      })
    } else {
      this.setData({
        bgcolor10: '#ff9800',
        textcolor10: 'white'
      })
    }
  },
  changeColor11() {
    num[10]++;
    var result = num[10] / 2;
    if (num[10] % 2 == 0) {
      this.setData({
        bgcolor11: '#ffffff',
        textcolor11: 'black'
      })
    } else {
      this.setData({
        bgcolor11: '#ff9800',
        textcolor11: 'white'
      })
    }
  },
  changeColor12() {
    num[11]++;
    var result = num[11] / 2;
    if (num[11] % 2 == 0) {
      this.setData({
        bgcolor12: '#ffffff',
        textcolor12: 'black'
      })
    } else {
      this.setData({
        bgcolor12: '#ff9800',
        textcolor12: 'white'
      })
    }
  },
  changeColor13() {
    num[12]++;
    var result = num[12] / 2;
    if (num[12] % 2 == 0) {
      this.setData({
        bgcolor13: '#ffffff',
        textcolor13: 'black'
      })
    } else {
      this.setData({
        bgcolor13: '#ff9800',
        textcolor13: 'white'
      })
    }
  },
  changeColor14() {
    num[13]++;
    var result = num[13] / 2;
    if (num[13] % 2 == 0) {
      this.setData({
        bgcolor14: '#ffffff',
        textcolor14: 'black'
      })
    } else {
      this.setData({
        bgcolor14: '#ff9800',
        textcolor14: 'white'
      })
    }
  },
  changeColor15() {
    num[14]++;
    var result = num[14] / 2;
    if (num[14] % 2 == 0) {
      this.setData({
        bgcolor15: '#ffffff',
        textcolor15: 'black'
      })
    } else {
      this.setData({
        bgcolor15: '#ff9800',
        textcolor15: 'white'
      })
    }
  },
  changeColor16() {
    num[15]++;
    var result = num[15] / 2;
    if (num[15] % 2 == 0) {
      this.setData({
        bgcolor16: '#ffffff',
        textcolor16: 'black'
      })
    } else {
      this.setData({
        bgcolor16: '#ff9800',
        textcolor16: 'white'
      })
    }
  },

  changeColor17() {
    num[16]++;
    var result = num[16] / 2;
    if (num[16] % 2 == 0) {
      this.setData({
        bgcolor17: '#ffffff',
        textcolor17: 'black'
      })
    } else {
      this.setData({
        bgcolor17: '#ff9800',
        textcolor17: 'white'
      })
    }
  },

  changeColor18() {
    num[17]++;
    var result = num[17] / 2;
    if (num[17] % 2 == 0) {
      this.setData({
        bgcolor18: '#ffffff',
        textcolor18: 'black'
      })
    } else {
      this.setData({
        bgcolor18: '#ff9800',
        textcolor18: 'white'
      })
    }
  },
  changeColor19() {
    num[18]++;
    var result = num[18] / 2;
    if (num[18] % 2 == 0) {
      this.setData({
        bgcolor19: '#ffffff',
        textcolor19: 'black'
      })
    } else {
      this.setData({
        bgcolor19: '#ff9800',
        textcolor19: 'white'
      })
    }
  },
  changeColor20() {
    num[19]++;
    var result = num[19] / 2;
    if (num[19] % 2 == 0) {
      this.setData({
        bgcolor20: '#ffffff',
        textcolor20: 'black'
      })
    } else {
      this.setData({
        bgcolor20: '#ff9800',
        textcolor20: 'white'
      })
    }
  },
  changeColor21() {
    num[20]++;
    var result = num[20] / 2;
    if (num[20] % 2 == 0) {
      this.setData({
        bgcolor21: '#ffffff',
        textcolor21: 'black'
      })
    } else {
      this.setData({
        bgcolor21: '#ff9800',
        textcolor21: 'white'
      })
    }
  },


  onChange(event) {
    this.setData({
      result: event.detail
    });
  },
  changeclick(event) {

  },

  toggle(event) {
    const { index } = event.currentTarget.dataset;
    const checkbox = this.selectComponent(`.checkboxes-${index}`);
    checkbox.toggle();
  },











  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail);
    if (e.detail.target.dataset.id == "1") {
      wx.navigateTo({
        url: '../ceshi/outcome?id=' + e.detail.value.checkbox
      })
    }
    else if (e.detail.target.dataset.id == "2") {
      wx.navigateTo({
        url: '../ceshi/browse?id=' + e.detail.value.checkbox
      })
    }
  },



  formReset: function () {
    console.log('form发生了reset事件')
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
    for(var yu=0;yu<num.length;yu++)
      num[yu]=0;
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