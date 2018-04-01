//nav.js
//获取应用实例
const app = getApp();

Page({
  data: {
    msg: "测试一下",
    navclass: 'on'
  },
  clickMe: function () {
    this.setData({ msg: "已经测试完毕" })
  },
  onload: function () {

  }
});