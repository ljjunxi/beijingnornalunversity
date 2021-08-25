import app from './elemant'
import router from './router'
import store from './store'
import Axios from 'axios'
import 'element-plus/lib/theme-chalk/base.css'

const instance = Axios.create({
    baseURL: 'http://localhost:1338/users/',
    timeout: 5000
})
instance.interceptors.response.use(res => { //响应拦截
    return res.data;
});

app.config.globalProperties.$axios = instance




app.use(store).use(router).mount('#app')