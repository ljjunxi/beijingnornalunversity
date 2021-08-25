安装:
    // cnpm i axios -D
    //main.js中引入
    import { createApp } from 'vue'
import Axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

const instance = Axios.create({
    baseURL: 'http://localhost:1337/users/',
    timeout: 5000
})

instance.interceptors.request.use(config => {
    //对config进行处理
    return config
});

instance.interceptors.response.use(res => { //响应拦截
    // console.log(res);
    return res.data;
});

app.config.globalProperties.$axios = instance
app.use(router).use(store).mount('#app')

//组件中应用axios：
// get:
this.$axios.get("路由", { params: { "id": 123 } }).then(rs => {
    console.log(rs);
});
// post:
import Qs from "qs";
// ...
const data = Qs.stringify({
    username: "张四",
    password: 123,
    nicheng: "zhangsan"
});
this.$axios.post('addData', data).then(rs => {
    console.log(rs);
})