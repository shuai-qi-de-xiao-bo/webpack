#### 认识webpack
本质上，webpack 是一个用于现代 JavaScript 应用程序的 静态模块打包工具。当 webpack 处理应用程序时，它会在内部构建一个 依赖图(dependency graph)，此依赖图对应映射到项目所需的每个模块，并生成一个或多个 bundle。
参考地址: https://webpack.docschina.org/concepts/

#### webpack安装
npm安装:
```
npm install webpack webpack-cli -g
npm install webpack webpack-cli -D
```

#### webpack使用
运行命令: `webpack ./main.js -o ./dist --mode="production"`
更多命令参考地址: https://webpack.docschina.org/api/cli/
