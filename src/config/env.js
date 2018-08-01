/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl = '';
let routerMode = 'hash';

if (process.env.NODE_ENV == 'development') {
    baseUrl = '';
    // routerMode = 'history';

}
// else if(process.env.NODE_ENV == 'production'){//正式环境
//   baseUrl = 'http://jpwx.cd121.com';
//   routerMode = 'history'
// }
else if(process.env.NODE_ENV == 'production'){//测试环境
  //baseUrl = 'http://101.37.27.156:7090';
  baseUrl = 'http://wxtest.cd121.com';
  // baseUrl = 'http://10.157.59.28:7090';
  routerMode = 'history'
}

export default {
	baseUrl:baseUrl,
  routerMode:routerMode,
}
