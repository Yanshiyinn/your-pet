const config = require("../../config");

var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    key: [],
    items: [
      { name: "金毛寻回犬", tag: ["温顺", "长毛", "中型", "机灵"], flag: 0 },
      { name: "西伯利亚雪橇犬", tag: ["活泼", "长毛", "中型", "善变"], flag: 0 },
      { name: "柯基", tag: ["温顺", "短毛", "小型", "忠诚"], flag: 0  },
      { name: "京巴", tag: ["优雅", "长毛", "小型", "勇敢"], flag: 0  },
      { name: "边境牧羊犬", tag: ["机灵", "长毛", "中型", "忠诚"], flag: 0  },

      { name: "布偶", tag: ["优雅", "温顺", "长毛", "中型"], flag: 0 },
      { name: "挪威森林猫", tag: ["机灵", "长毛", "大型", "内向"], flag: 0 },
      { name: "加拿大无毛猫", tag: ["温顺", "无毛", "小型"], flag: 0 },
      { name: "狸花猫", tag: ["活泼", "短毛", "小型", "勇敢"], flag: 0 },
      { name: "英国短毛猫", tag: ["勇敢", "短毛", "中型"], flag: 0 },

      { name: "文鸟", tag: ["温顺", "小型"], flag: 0 },
      { name: "银喉长尾山雀", tag: ["敏捷", "小型"], flag: 0  },
      { name: "虎皮鹦鹉", tag: ["活泼", "小型"], flag: 0 },
      { name: "乌鸦", tag: ["中型", "凶悍"], flag: 0  },
      { name: "百灵鸟", tag: ["小型"], flag: 0 }, 
      { name: "乌龟", tag: ["温顺", "小型", "无毛", "需要空间小"], flag: 0 },
      { name: "仓鼠", tag: ["活泼", "小型", "短毛"], flag: 0 },
      { name: "金鱼", tag: ["无毛", "观赏型", "气味小"], flag: 0 },
      { name: "荷兰猪", tag: ["呆萌", "草食性", "温顺"], flag: 0 }
    ],
    result: [],
    diaries: null,
    showLoading: false,
    loadingMessage: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDiaries();
    
    this.setData({ key: options.id.split(",") });
    let copy = JSON.parse(JSON.stringify(this.data.items));
    var a = elect(this.data.key, copy);
    var temp_str = null;
    for (var i = 0; i < a.length; i++) {
      temp_str = 'result[' + i + ']';
      this.setData({
        [temp_str]: a[i].name
      });
    }
    console.log(this.data.result);
    var j;
    for(var i=0;i<this.data.result.length;i++)
    {
      for(j=0;j<this.data.items.length;j++)
      {
        var price = 'items[' + j + '].flag';
        if (this.data.items[j].name == this.data.result[i])
        {
          this.setData({[price]: 1});
          break;
        }
      }
    };
    console.log(this.data.items);

    this.setData({ text: options.id });
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

  },


})

function elect(key, items) {
  var copy = items;
  var j;
  for (var k = 0; k < key.length; k++) 
  {
    for (var i = 0; i < copy.length; i++) 
    {
      for (j = 0; j < (copy[i].tag.length); j++) 
      {
        //console.log(key[k] + copy[i].tag[j]);
        if (key[k] == copy[i].tag[j]) 
        {
          j = copy[i].tag.length;
        }
        else if (j == (copy[i].tag.length) - 1) 
        {
          copy.splice(i, 1);
          i--;
          break;
        }
      }
    }
  }
  //console.log(copy);
  return copy;
}

