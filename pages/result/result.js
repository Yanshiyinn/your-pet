// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    R: 0,
    Kind:'unknow',
    Discribe:'unknow',
    text0: '\n',
    text1: ' '
  },

  whichKind: function(){
    if (this.data.R >= 70 && this.data.R <= 120){
      return "柯基"
    } else if (this.data.R >= 130 && this.data.R <= 180){
        return "贵宾犬"
    } else if (this.data.R >= 190 && this.data.R <= 230) {
        return "金毛巡回犬"
    } else if (this.data.R >= 240 && this.data.R <= 290) {
        return "德国牧羊犬"
    } else if (this.data.R >= 300 && this.data.R <= 300) {
        return "拉布拉多"
    }
    
  },

  whichDiscribe: function(){
    if(this.data.Kind == "柯基"){
      return"大屁股可以说是非常可爱了，胆子大，能很好的保护主人。也不会太像其他小型犬科类，太过冲动或幼稚。并且它们非常好沟通交流，精力也比较旺盛，很适合有小孩的家庭。"
    }
    if (this.data.Kind == "贵宾犬") {
      return "贵宾非常活泼，且气质独特。很多主人会给它们做造型，让它们看上去更加高贵、优雅。贵宾是非常忠诚的狗狗，性格温顺，很适合女生或喜欢温和的小型犬的主人养。"
    }
    if (this.data.Kind == "金毛巡回犬") {
      return "金毛宝宝一直都是宠物界的“暖男”，金毛讨人喜欢的性格，热情、自信且不怕生。如果宠物主人喜欢体型较大，有安全感，也不会太疯的宠物，金毛是不二的选择。特别是希望在家养一只大型犬的家庭，金毛宝宝都能够很好地适应。"
    }
    if (this.data.Kind == "德国牧羊犬") {
      return "德国牧羊犬体型较大，外形威武。它们具有较高的训练能力，听从指挥。性格勇敢，外向。对于性格同样外向的主人而言，带着它们外出游玩，都是非常不错的选择。"
    }
    if (this.data.Kind == "拉布拉多") {
      return "拉布拉多宝宝不同于金毛或德牧，它们更加聪明、友好，也更加粘人。在全美，拉布拉多是饲养率最高的犬科，也是因为它们较好的性格、对主人的忠诚，让它们赢得了大量主人的欢心。"
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    this.setData({
      R: options.R - 0,
     
    })
   
    this.setData({
      Kind: this.whichKind()
    }) 
  //  console.log(this.whichKind())

    this.setData({
      Discribe: this.whichDiscribe()
    }) 
    /**
   * Amax:听觉
   * Kmax:动觉
   * Vmax:视觉
   * A=K>V:听觉动觉均衡型……
   */
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