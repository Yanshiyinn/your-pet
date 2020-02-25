const toolbar = [

];
const app = getApp();

Page({
  data: {
    // 当前日志详情
    cal: undefined,
    picid: null,
  },

  // 加载日记
  getDiary(params) {
    console.log("Loading diary data...", params);

    var id = params["id"], cal;
    var str = "../entry/pic/a" + id + ".jpg";
    
    app.globalData.like[id].love++;

    this.setData({ picid: str });
    app.getDiaryList(list => {
      if (typeof id === 'undefined') {
        cal = list[0];
      } else {
        cal = list[id];
      }
    });

    this.setData({
      cal: cal,
    });
  },


  // 进入预览模式
  enterPreviewMode(event) {
    let url = event.target.dataset.src;
    let previewIndex = urls.indexOf(url);
    this.setData({ previewMode: true, previewIndex });
  },

  // 退出预览模式
  leavePreviewMode() {
    this.setData({ previewMode: false, previewIndex: 0 });
  },

  onLoad: function (params) {
    this.getDiary(params);
  },

  onHide: function () {
  },
})
