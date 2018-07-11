# goldlife-house-h5

> 金品生活房产h5

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 技术栈

vue2 + vuex + vue-router + webpack + ES6/7 + axios + sass + mint-ui

location ^~/api/{
rewrite ^/(.*)$ /$1 break;
proxy_pass http://10.29.113.176:7090;
}

