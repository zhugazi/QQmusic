//index.js
//获取应用实例
const { request } = require('../componentsjs/request');
const tuijianFun = require('../componentsjs/tuijian');
const paihangFun = require('../componentsjs/paihang');
const sousuoFun = require('../componentsjs/sousuo');
const app = getApp();

Page({
  data: {
    msg: "测试一下",
    navclass: {
      tuijian: '',
      paihang: '',
      sousuo: '',
    },
    clickTabName: {
      0: 'on'
    },
    cacheObj: {},
    ctrollObj: {
      autoplay: true,
      duration: 500,
      interval: 3000,
      circular: true,
      indexColor: 'rgba(144,144,144,.8)',
      backColor: '#fff',
      indicatorDots: true
    }
  },
  clickMe: function () {
    this.setData({ msg: "已经测试完毕" })
  },
  onLoad: function () {
    this.switchtab({ target: { id: 'tuijian' }})
  },
  switchtab: function (event) {
    this.setData({ clickTabName: { 0: 'on' } });
    // 切换导航方法
    var idname = event.target.id,
      classObj = {},
      optionArr = [];
    if (idname === 'tuijian') {
      const { option, options } = tuijianFun;
      optionArr = [option, options];
      classObj = { tuijian: 'on' };
    }
    if (idname === 'paihang') {
      const { option } = paihangFun;
      optionArr = [option];
      classObj = { paihang: 'on' };
    }
    if (idname === 'sousuo') {
      const { option } = sousuoFun;
      optionArr = [option];
      classObj = { sousuo: 'on' }
    }
    this.setData({ navclass: classObj });
    this.showTabFun(idname, optionArr.length ? optionArr : option);
  },
  showTabFun: function (id, option) {
    var that = this;
    switch (id) {
      case 'tuijian':
        if (!this.data.cacheObj.tuijian || !this.data.cacheObj.tuijian[0].data) this.asyncReq(id, option);
        break;
      case 'paihang':
        if (!this.data.cacheObj.paihang || !this.data.cacheObj.paihang[0].data) this.asyncReq(id, option);
        break;
      case 'sousuo':
        if (!this.data.cacheObj.sousuo || !this.data.cacheObj.sousuo[0].data) this.asyncReq(id, option);
        break;
      default:
        console.log('不用请求，直接用缓存起来的数据');
    }
  },
  asyncReq: function (id, option) {
    var that = this,
      i = 0,
      length = option.length ? option.length : 0;
    that.data.cacheObj[id] = [];
    var async = function () {
      that.setInfoData(id, option[i]);
      i += 1;
      if (i >= length) {
        return;
      }
      return async();
    };
    if (length) {
      async();
    } else {
      this.setInfoData(id, option);
    }
  },
  setInfoData: function (id, option) {
    var that = this;
    request(option, function (err, result) {
      if (err) {
        console.error('请求出错', err);
        return;
      }
      that.data.cacheObj[id].push(result);
      that.setData({ cacheObj: that.data.cacheObj });
      // console.log(that.data.cacheObj.sousuo[0])
    })
  },
  clickTab: function (event) {
    // console.log(event);
    var key = event.target.dataset.key;
    var className = {};
    className[key] = 'on';
    this.setData({ clickTabName: className })
  }
});
