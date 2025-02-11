

Page({
  gotoMine(event) {
    wx.navigateTo({
      url: '../mine/mine'
    });
  },
  gotoMineSwitchTab(event) {
    wx.switchTab({
      url: '../mine/mine'
    })
  },
  gotoMineRedirectTo(event) {
    wx.redirectTo({
      url: '../content/test'
    })
  },
});
