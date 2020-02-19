//按需加载antd样式配置
const { override, fixBabelImports,addLessLoader } = require('customize-cra')
module.exports = override(
    //'import'是下载的babel-plugin-import的包来实现按需打包的
    fixBabelImports('import', {
        libraryName: 'antd',//针对antd实现按需打包
        libraryDirectory: 'es',
        style: true //自动打包源码
    }),
    //对源码样式进行覆盖，重新制定
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },//自定义主体颜色
    }),
)