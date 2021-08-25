`安装vuex
    cnpm install vuex@next -D

vuex简单使用

根下创建store.js文件`

import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            count: 1
        }
    }
});
export default store;
//----------------------------------------------------

//修改main.js文件

import { createApp } from 'vue'
import App from './App.vue'

import store from './store'

createApp(App).use(store).mount('#app');
//-----------------------------------------------------
//应用与修改store中的数据
`components / Component1.vue

<template >
    <div >
        <h3> 我是组件1 </h3>
        <span > store.state.count < /span> 
        <button @click = "add" > 组件1 - 自增 < /button>
        {{$store.state.count }}
    </div>
</template >`

`<script >
    export default {
    name: "Component1",
    data() {
        return {
            title: '组件1-title'
        }
    },
    methods: {
        add() {
            this.$store.state.count=800;
        }
    }
}
</script>`