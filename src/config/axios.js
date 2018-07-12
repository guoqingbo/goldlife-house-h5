/**
 * 配置编译环境和线上环境之间的axios
 *
 * baseUrl: 域名地址
 *
 */
let baseUrl = '';
if (process.env.NODE_ENV == 'development') {
  // baseUrl = 'http://101.37.27.156:7090';

}else if(process.env.NODE_ENV == 'production'){
  baseUrl = 'http://101.37.27.156:7090';
}

export default {
  baseUrl : baseUrl,
}
