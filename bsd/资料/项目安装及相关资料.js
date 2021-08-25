//1、node要求 10.x版本
//2、cnpm install @vue/cli -g 版本3的安装方式 
//3、vue create beijingnormaluniversity //3 
//4、 npm run serve 


//5、cnpm i file-loader -D 
//15、 git克隆项目到本地： 
//1)、 打开git bash here 
//2)、 git clone https: //github.com/ElementUI/vue-cli-plugin-element.git 

//17、vue(1.x或者2.x) 安装方法：vue install vue-cli -g 卸载方法：vue uninstall vue-cli -g 或者 yarn global remove vue-cli vue(3.x) 安装方法：vue install @vue/cli -g
//卸载方法： vue uninstall @vue / cli - g 
//16、 cnpm 使用： vue - V //查看当前vue版本号 cnpm i @vue/cli -g //全局安装最新本 npm uninstall -g 包名 //删除 cnpm view 包名 versions //查看服务器上所有版本 cnpm install 包名@3.0.0 -g //安装指定版本 例:cnpm i @vue/cli@3.12.1 -g //安装指定版本
// 18.1、在vue3.x中添加element组件库 vue add element 在element.js文件中加入 import 'element-ui/lib/theme-chalk/index.css'
//18.2、 在vue3.x中添加mint - ui组件库 cnpm i mint - ui - D 在main.js中添加 全局引入：
//import MintUi from 'mint-ui'
//import 'mint-ui/lib/style.css'
//Vue.use(MintUi) 按需引入：
//import { Button, Cell } from 'mint-ui'
//import 'mint-ui/lib/style.css'
//Vue.component(Button.name, Button) Vue.component(Cell.name, Cell)
// 19、 路由参数的另一种方式：: to = '{path:"about",query:{name:"zs",age:18}}'
//获取参数：
//<div > {
//{ $router.query.name }
//} < /div>
//js中获取： this.$router.query
// 20、 this.$route代表当前活跃的路由
// 21、 路由监听： 的路由文件中： router.beforeEach((to, from, next) => {...next() }) router.afterEach((to, from) => {... })
// 22、 mint事件添加方法 <mt-button @click.native = "handleClick" > 按钮 </mt-button>