#### resolve
参考地址: https://webpack.docschina.org/configuration/resolve/

#### resolve.alias
创建 import 或 require 的别名，来确保模块引入变得更简单。例如，一些位于 src/ 文件夹下的常用模块
参考地址: https://webpack.docschina.org/configuration/resolve/

#### webpack.config.js配置
const path = require('path');

module.exports = {
    ...
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    ...
}
#### 项目里alias的使用
App.vue:
        <script>
            import { defineAsyncComponent } from 'vue';
            export default {
                components: {
                    index: defineAsyncComponent(() => import('@/components/Index.vue')),
                    about: defineAsyncComponent(() => import('@/components/About.vue')),
                },
            }
        </script>



#### resolve.extensions
在导入文件没有后缀时，‘webpack’会自动带上后缀去尝试访问文件是否存在，默认是.js, extensions用于配置默认后缀列表,能够使用户在引入模块时不带扩展
参考地址: https://webpack.docschina.org/configuration/resolve/#resolveextensions

#### webpack.config.js配置
module.exports = {
  //...
  resolve: {
    extensions: ['.js', '.vue', '.json'],
  },
};

#### extensions目运用
import('@/components/Index') 会按照顺序现查找是否有Index.js, 其次是Index.vue,以此类推




#### resolve.modules
告诉 webpack 解析模块时应该搜索的目录,默认是'node_modules'
参考地址: https://webpack.docschina.org/configuration/resolve/#resolvemodules


#### webpack.config.js配置
const path = require('path');
module.exports = {
  //...
  resolve: {
    modules: [path.resolve(__dirname, 'src/components'), 'node_modules'],
  },
};

#### resolve.modules在项目中的运用
src/components目录下新建一个Jianguio.vue
其他地方引用: import jianguo from 'Jianguo';







#### portfinder
解决端口冲突
参考地址: https://www.npmjs.com/package/portfinder

#### 安装
npm install portfinder -D

#### webpack.config.js配置
const portfinder = require('portfinder');
...
module.exports = new Promise((resolve, reject) => {
    portfinder.getPort({
        port: 80,    // minimum port
        stopPort: 8080 // maximum port
    }, (err, port) => {
        config.devServer.port = port;
        resolve(config);
    });
})




#### friendly-errors-webpack-plugin
自定义编译输出
参考地址: https://www.npmjs.com/package/friendly-errors-webpack-plugin
#### chalk
自定义输出颜色
参考地址: https://www.npmjs.com/package/chalk
#### ip
获取本机ip
参考地址: https://www.npmjs.com/package/ip

#### 安装
npm install friendly-errors-webpack-plugin chalk ip -D

#### webpack.config.js配置
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const Chalk = require('chalk');
const Ip = require('ip');
module.exports = {
    ...
    plugins: [
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: [`App running at:\n- Local: ${Chalk.green('http://localhost:' + port)}\n- Network: ${Chalk.green('http://' + Ip.address() + ':' + port)}`],
                notes: [`Note that the development build is not optimized.\n to create a production build, ${Chalk.blue('npm run build')}`]
                },
                clearConsole: true,
        }),
        ...
    ],
    ...
}



