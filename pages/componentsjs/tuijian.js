/**
 * Created by dell on 2018/3/23.
 * 推荐列表方法
 */
const option = {
  method: 'GET',
  url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
  data: {
    g_tk: '5381',
    uin: '0',
    format: 'json',
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: '0',
    platform: 'h5',
    needNewCode: '1',
    _: new Date().getTime()
  }
};

const options = {
  method: 'GET',
  url: 'https://c.y.qq.com/mv/fcgi-bin/getmv_by_tag',
  data: {
    format: 'jsonp',
    g_tk: '5381',
    platform: 'yqq',
    jsonpCallback: 'jsonp',
    loginUin: '0',
    hostUin: '0',
    // format: 'jsonp',
    inCharset: 'utf8',
    outCharset: 'GB2312',
    notice: '0',
    needNewCode: '0',
    cmd: 'shoubo',
    lan: 'all'
  }
};

module.exports = {
  option,
  options
};