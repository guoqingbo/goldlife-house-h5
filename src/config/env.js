/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = '';
let imgBaseUrl = '';
let routerMode = 'hash';
let weixinRederectUrl = "";


if (process.env.NODE_ENV == 'development') {
    baseUrl = '';
    imgBaseUrl = '';
    // routerMode = 'history';

}else if(process.env.NODE_ENV == 'production'){
  baseUrl = 'http://101.37.27.156:7090';
  weixinRederectUrl = 'http://wxtest.cd121.com';
  imgBaseUrl = '';
  routerMode = 'history'
}

export default {
	baseUrl:baseUrl,
	imgBaseUrl:imgBaseUrl,
  routerMode:routerMode,
  weixinRederectUrl:weixinRederectUrl,
}
