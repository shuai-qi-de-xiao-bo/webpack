## css-loader
css-loader 会对 @import 和 url() 进行处理，就像 js 解析 import/require() 一样
参考地址: https://webpack.docschina.org/loaders/css-loader/

## style-loader
把 CSS混入js中 插入到 DOM 中
参考地址: https://webpack.docschina.org/loaders/style-loader/

### 安装
```
npm install style-loader css-loader -D
```
### webpack.config.js配置
```
    module.exports = {
        ...
        module: {
            rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }]
        },
        ...
    }
```
### less-loader
webpack 将 Less 编译为 CSS 的 loader
参考地址: https://webpack.docschina.org/loaders/less-loader/

### 安装
```
npm install less less-loader -D
```


### webpack.config.js配置
```
    module.exports = {
        ...
        module: {
            rules: [{
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }]
        },
        ...
    }
```

