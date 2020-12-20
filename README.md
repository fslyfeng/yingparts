# yingparts

yingparts 前端

## 运行 dev

    vue ui

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## vue 中 rem 的配置

### 1.下载 postcss-pxtorem、lib-flexible

    npm install lib-flexible --save-dev
    npm install postcss-pxtorem --save-dev

### 2.配置 main.js

    import 'lib-flexible/flexible' // px 自动转 rem

### 3.根路径配置 postcss.config.js

    module.exports = {
    plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
    "rootValue": 75, // 设计稿宽度的 1/10,
    "propList": ['*'],// 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
    }
    }
    }
