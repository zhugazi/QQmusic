/**
 *  Created by dell on 2018/3/23.
 *  封装的请求方法
 * */
var request = function (option, callback) {
  wx.request({
    url: option.url,
    data: option.data,
    method: option.method,
    dataType: 'json',
    success: function (res) {
      let result = res.data;
      if (typeof result === 'string' && result.includes('jsonp(')) {
        try {
          result = res.data.replace('jsonp(', '').replace('})', '}');
          result = JSON.parse(result);
        } catch (e) {
          console.log('解析失败', result);
          return;
        }
      }
      callback(null, result);
    },
    fail: function (res) {
      callback(res.errMsg);
    }
  })
};

module.exports.request = request;