const app = getApp();

Page({
  data: {
    name: '张三',
    clickCount: 0,
    items: ['事项 A', '事项 B', '事项 C'],
    inputValue: '',
    now: app.globalData.now
  },
  mainBtnTap(event) {
    console.log(event)
    this.setData({
      name: '李四',
      clickCount: this.data.clickCount + 1
    },function () {
      wx.showToast({
        title: '操作完成: ' + this.data.clickCount,
        duration: 700
      });
    });
  },
  // 对话框 Modal
  showModal(event) {
    const that = this;
    wx.showModal({
      title: '操作确认',
      content: '你确认要修改吗？',
      success (res) {
        console.log('showModal====');
        if (res.confirm) {
          that.setData({
            name: '李四'
          }, function () {
            wx.showToast({
              title: '操作完成',
              duration: 700
            });
          });
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      }
    });
  },
  inputHandler(event) {
    this.setData({
      inputValue: event.detail.value || ''
    });
  },
  buttonHandler(event) {
    const newItem = this.data.inputValue.trim();
    if (!newItem) return;
    const itemArr = [...this.data.items, newItem];
    wx.setStorageSync('items', itemArr);
    this.setData({ items: itemArr });

    this.setData({
      inputValue: ''
    });
  },
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
  onLoad() {
    const itemArr = wx.getStorageSync('items') || [];
    this.setData({ items: itemArr });
  }
});



