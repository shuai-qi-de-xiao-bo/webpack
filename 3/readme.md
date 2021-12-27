### 认识webpack.config.js
webpack 开箱即用，可以无需使用任何配置文件。然而，webpack 会假定项目的入口起点为 src/index.js，然后会在 dist/main.js 输出结果，并且在生产环境开启压缩和优化。

通常你的项目还需要继续扩展此能力，为此你可以在项目根目录下创建一个 webpack.config.js 文件，然后 webpack 会自动使用它。
参考地址: https://webpack.docschina.org/configuration/#use-different-configuration-file

### 执行编译
执行命令: `webpack`
