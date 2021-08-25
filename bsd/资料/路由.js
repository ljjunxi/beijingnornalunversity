//1、cnpm i vue-router -D
//-----------------------------------------------------------------------
//2、创建路由文件 router/index.js
import { createRouter, createWebHistory } from 'vue-router'

import Home from "../components/Home.vue"
import LogReg from "../components/Logreg.vue"

/**
 * 创建路由对象
 */
const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/logreg', component: LogReg }
];

//创建路由
export default createRouter({
    history: createWebHistory(),
    routes
});
//-----------------------------------------------------------------------
//3、引入到main.js文件中
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
    //--------------------------------------------------------------------
    //4、建立导航组件nav.vue
`<template>
  <div class="logreg">
    <router-link to="/home">主页</router-link>
    <router-link to="/logreg">登录/注册</router-link>
  </div>
</template>`
//---------------------------------------------------------------
//在根组件App.vue中引入nav.vue
`<template>
  <div :style="pageW" class="app">
    <Head1 :pageW="pageW"/>
    <hr />
    <Nav/>
    <router-view></router-view>
    <hr />
    <Foot @send="FootData"/>
    <h2 v-html="fData"></h2>
  </div>
</template>`

<
script >
    import Head1 from "./components/Head1.vue";
import Foot from "./components/Foot.vue";
import Nav from "./components/Nav.vue";
import { screenW } from "./model/pubData";

export default {
    name: "App",
    data() {
        return {
            pageW: "",
            fData: ''
        };
    },
    mounted() {
        if (screenW >= 1000) {
            this.pageW = `width:${1000}px`;
        } else
            this.pageW = `width:${screenW}px`;
    },
    methods: {
        FootData(rs) {
            this.fData = rs
        }
    },
    components: {
        Head1,
        Foot,
        Nav
    }
}; <
/script>

//----------------------------------------------------------------
//6、js代码方式导航
// 字符串
this.$router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: '123' } })

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' } })

// 在浏览器记录中前进一步，等同于 history.forward()
router.go(1)

// 后退一步记录，等同于 history.back()
router.go(-1)

// 前进 3 步记录
router.go(3)

// 如果 history 记录不够用，那就默默地失败呗
router.go(-100)
router.go(100)