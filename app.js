//app.js
const config = require('config');
const diaries = require('demo/diaries');

App({
  onLaunch: function () {
  },

  getDiaryList(cb) {
    var that = this;
    if (this.globalData.diaryList) {
      typeof cb == 'function' && cb(this.globalData.diaryList);
    } else {
      let list = [];

      this.getLocalDiaries(storage => {
        for (var k in storage) {
          list.push(storage[k]);
        }
      });

      list.push(...diaries.diaries);
      that.globalData.diaryList = list;
      typeof cb == 'function' && cb(that.globalData.diaryList)
    }
  },


  getLocalDiaries(cb) {
    var that = this;

    if (this.globalData.localDiaries) {
      typeof cb == 'function' && cb(this.globalData.localDiaries);
    } else {
      wx.getStorage({
        key: config.storage.diaryListKey,
        success: (res) => {
          that.globalData.localDiaries = res.data;
          typeof cb == 'function' && cb(that.globalData.localDiaries);
        },
        fail: (error) => {
          that.globalData.localDiaries = {};
          typeof cb == 'function' && cb(that.globalData.localDiaries);
        }
      });
    }
  },

  // 获取当前设备信息
  globalData: {
    // 设备信息，主要用于获取屏幕尺寸而做适配
    userInfo: "hello",
    like: [
      { name: "金毛寻回犬", love: 0 },
      { name: "西伯利亚雪橇犬", love: 0 },
      { name: "柯基", love: 0 },
      { name: "京巴", love: 0 },
      { name: "边境牧羊犬", love: 0 },

      { name: "布偶", love: 0 },
      { name: "挪威森林猫", love: 0 },
      { name: "加拿大无毛猫", love: 0 },
      { name: "狸花猫", love: 0 },
      { name: "英国短毛猫", love: 0 },

      { name: "文鸟", love: 0 },
      { name: "银喉长尾山雀", love: 0 },
      { name: "虎皮鹦鹉", love: 0 },
      { name: "乌鸦", love: 0 },
      { name: "百灵鸟", love: 0 },

      { name: "乌龟", love: 0 },
      { name: "仓鼠", love: 0 },
      { name: "金鱼", love: 0 },
      { name: "荷兰猪", love: 0 }
    ],
    question: [
      {
        "question": "你的家是下面哪种？",
        "option": {
          "A": "公寓",
          "B": "洋房",
          "C": "别墅",
          "D": "豪宅",
          "E": "平房"
        }
      },
      {
        "question": "你为什么想要养狗？",
        "option": {
          "A": "养狗是一种趋势",
          "B": "都不是",
          "C": "保护",
          "D": "陪伴",
          "E": "孤独"
        }
      },
      {
        "question": "你今年多大了？",
        "option": {
          "A": "10岁以下",
          "B": "16-20岁",
          "C": "21-25岁",
          "D": "25岁以上",
          "E": "10-15岁"
        }
      },
      {
        "question": "下面哪个词最适合你？",
        "option": {
          "A": "宅",
          "B": "颜值",
          "C": "可靠",
          "D": "友善",
          "E": "急躁"
        }
      },
      {
        "question": "你在学校是什么状态？",
        "option": {
          "A": "想法特别",
          "B": "内向",
          "C": "学霸",
          "D": "受欢迎",
          "E": "书呆子"
        }
      },
      {
        "question": "你每天能陪你的狗多长时间？",
        "option": {
          "A": "1-2小时",
          "B": "0-30分钟",
          "C": "2小时以上 ",
          "D": "0-1小时",
          "E": "没时间"
        }
      },
      {
        "question": "选一只小动物吧！",
        "option": {
          "A": "长颈鹿",
          "B": "马",
          "C": "狮子",
          "D": "斑马",
          "E": "海豚"
        }
      },
    ]  }

})
