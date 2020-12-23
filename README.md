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

### 3.根路径配置 vue.config.js

    css: {
        loaderOptions: {
        postcss: {
            plugins: [
            require("autoprefixer")({ browsers: ["Android >= 4.0", "iOS >= 7"] }),
            require("postcss-pxtorem")({
                // 把px单位换算成rem单位
                rootValue: 37.5, // 换算的基数(设计图750的根字体为32) 设计稿宽度的 1/10
                selectorBlackList: ["weui", "mu"], // 忽略转换正则匹配项
                propList: ["*"], // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
            }),
            ],
        },
        },
    },
