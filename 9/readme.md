# vue-loader
参考地址: [https://vue-loader.vuejs.org/guide/#vue-cli](https://vue-loader.vuejs.org/guide/#vue-cli)

#### 安装
```
npm install vue@next -S
npm install vue-loader@next @vue/compiler-sfc -D
```

#### webpack.config.js配置
```
const {
    VueLoaderPlugin
} = require('vue-loader');

module.exports = {
    ...
    entry: './src/main.js',
    ...
    plugins: [
        new VueLoaderPlugin(),
        ...
    ],
    module: {
        rules: [{
            test: /\.vue$/,
            use: ['vue-loader']
        }, ...]
    }
}
```

#### src新建入口文件main.js
内容:
```
    import { createApp } from 'vue';
    import App from './App.vue';

    createApp(App).mount("#app");
 ```

#### src新建入口文件App.vue
内容:
```
    <template>
        <div class="name">hello {{name}}</div>
    </template>

    <script>
        export default {
            data() {
                return {
                    name: 'jianguo'
                }
            }
        }
    </script>

    <style lang="less" scoped>
        .name {
            color: pink;
            font-size: 24px;
        }
    </style>
```
