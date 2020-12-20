/*
 * @Author: netren
 * @Date: 2020-12-20 07:50:41
 * @Description:自定义webpack配置
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-pxtorem")({
            // 把px单位换算成rem单位
            rootValue: 32, // 换算的基数(设计图750的根字体为32) 设计稿宽度的 1/10
            selectorBlackList: ["weui", "mu"], // 忽略转换正则匹配项
            propList: ["*"], // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
          }),
        ],
      },
    },
  },
  configureWebpack: (config) => {
    config.plugins.forEach((val) => {
      if (val instanceof HtmlWebpackPlugin) {
        val.options.title = "樱洁卫浴配件"; //标题修改
      }
    });
  },
};
