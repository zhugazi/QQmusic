/**
 * Created by dell on 2018/3/23.
 * 推荐列表方法
 */
const option = {
  method: 'GET',
  url: 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg',
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
const showFun = (data) => {
  const dataArr = [];
  for (const [key, index] of data) {
    console.log('--------', key);
  }
};


module.exports = {
  option,
  showFun
};