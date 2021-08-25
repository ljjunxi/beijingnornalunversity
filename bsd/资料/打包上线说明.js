//1.静态资源图片放在后端，背景在前端

//2.在根目录下新建vue.config.js,即可把绝对路径改成相对路径
module.exports = {
    publicPath: ""
}

//3.路由用哈希模式
export default createRouter({
    history: createWebHashHistory(),
    routes
});

//4.npm run build

//--------------------------------------------------------------------
//vue-cli4.x 移动端打包成apk方法：

//4. 将dist文件夹拖动到Hbuilder中， 右键转换成移动App, 同样方法将dist拖动到HbuildX中,
//直接云端打包即可, 需选用公用测试证书方式

//早期版本用如下：
//1、 修改index.html / build / build.js - > . / build / build.js
//2、 修改webpack.config.js publicPath: '/dist/' - > publicPath: './dist/'
//3、 npm run build
//4、 把生成的index.html和dist文件夹拷贝到服务器环境下: 比如： http: //localhost/elementUi/
//    5、 把static文件夹拷贝到http: //localhost/elementUi/,形成跟dist同级
//    6、 动态形成的路径引用方法， 如： './static/images/aaa.jpg'
//7、 如果转回调试过程： 需将index.html和webpack.config.js改回原路径即可
//8、 直接引用的资源要放在assets文件夹下面： 如 < img src = "./assets/images/1.jpg"
//alt = "" >
//    打包时会包含在dist目录下。