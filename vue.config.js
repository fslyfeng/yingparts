/*
 * @Author: netren
 * @Date: 2020-12-20 07:50:41
 * @Description:自定义webpack配置
 */

const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  configureWebpack: (config) => {
    config.plugins.forEach((val) => {
      if (val instanceof HtmlWebpackPlugin) {
        val.options.title = "樱洁卫浴配件"; //标题修改
      }
    });
  },
};
