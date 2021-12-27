#### babel编辑器
babel是一个工具链，主要用于将采用es5+的语法转换为向后兼容的语法以便能够运行与当前和旧版本的浏览器环境中。
参考地址: https://www.babeljs.cn/docs/

### babel引用
最新版本不支持ie
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

6及以前版本可以兼容ie，可以@x指定引用相应版本
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

### babel使用
需指定script的type="text/babel"
<script type="text/babel">
    ...
</script>
