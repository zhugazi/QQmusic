/**
 * Created by dell on 2018/3/28.
 * 排行榜列表方法
 */
const option = {
  method: 'GET',
  url: `https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=${new Date().getTime()}`,
};

module.exports = {
  option
};