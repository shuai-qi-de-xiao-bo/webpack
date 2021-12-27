# html-webpack-plugin
HtmlWebpackPlugin 简化了 HTML 文件的创建，以便为你的 webpack 包提供服务。这对于那些文件名中包含哈希值，并且哈希值会随着每次编译而改变的 webpack 包特别有用。你可以让该插件为你生成一个 HTML 文件，使用 lodash 模板提供模板，或者使用你自己的 loader
参考地址: [https://webpack.docschina.org/plugins/html-webpack-plugin/#root](https://webpack.docschina.org/plugins/html-webpack-plugin/#root)

#### 安装
```
npm install html-webpack-plugin -D
```


#### webpack.config.js配置
```
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    ...
    plugins: [
        ...
        new HtmlWebpackPlugin({
            title: 'html-webpack-plugin',
            template: 'index.html'
        }),
        ...
    ],
    ...
}
```

更多配置参考地址: [https://github.com/jantimon/html-webpack-plugin#options](https://github.com/jantimon/html-webpack-plugin#options)



#### 清除dist文件夹
由于使用了hash值每次打包的文件名都不一样，所以dist里面的文件会越来越多，我们需要每次打包前清空dist文件夹

#### webpack.config.js配置
```
module.exports = {
    ...
    output: {
        ...
        clean: true, // 每次打包前清空旧文件
    },
    ...
}
```

#### 添加source-map方便调试
打包后的代码所有模块都合在一起不方便调试

#### webpack.config.js配置
```
module.exports = {
    ...
    devtool: "source-map",
    ...
}
```

更多配置参考地址: [https://webpack.docschina.org/configuration/devtool/#root](https://webpack.docschina.org/configuration/devtool/#root)
