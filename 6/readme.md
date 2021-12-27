# asset module
资源模块(asset module)是一种模块类型，它允许使用资源文件（字体，图标等）而无需配置额外 loader
参考地址: https://webpack.docschina.org/guides/asset-modules/

### webpack.config.js配置
```
    module.exports = {
        ...
        module: {
            rules: [{
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: 'asset',
                generator: {
                    filename: 'images/[name].[hash:6].[ext]'
                }
            }]
        },
        ...
    }
```

### MiniCssExtractPlugin
本插件会将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件，并且支持 CSS 和 SourceMaps 的按需加载
参考地址: https://webpack.docschina.org/plugins/mini-css-extract-plugin/

### 安装
```
npm install mini-css-extract-plugin -D
```


### webpack.config.js配置
```
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    ...
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name][hash:6].css'
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }, {
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
        }]
    }
    ...
}
```

### postcss-loader autoprefixer
处理 CSS 的 loader，autoprefixer为编写的css自动加入前缀，兼容各大浏览器
参考地址: https://webpack.docschina.org/loaders/postcss-loader/

### 安装
```
npm install postcss-loader postcss autoprefixer -D
```

### webpack.config.js配置
```
module.exports = {
    ...
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name][hash:6].css'
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
        }, {
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
        }]
    }
    ...
}
```

### postcss.config.js
postcss-loader默认会读取postcss.config.js的配置
```
module.exports = {
    // 你可以指定下面提到的所有选项 https://postcss.org/api/#processoptions
    plugins: [
        // PostCSS 插件
        'autoprefixer',
    ],
};
```

### package.json里指定需要兼容的浏览器版本
```
{
  ...
  "browserslist": [
    "last 1 version",
    "> 1%",
    "IE 10"
  ],
  ...
}
```

browserslist具体配置参考地址: [https://github.com/browserslist/browserslist](https://github.com/browserslist/browserslist)
