import { createStore } from 'vuex'
import Axios from 'axios'
const screenW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

export default createStore({
    state: {
        Url: 'http://localhost:1338/',
        extraData: []
    },
    mutations: {
        extraData(state) {
            Axios.get('http://localhost:1338/users/getMsgObj').then(rs => {
                const arr = rs.data;
                arr[0] = arr[0].map((el) => {
                    const d = new Date(el.updatedAt);
                    el.day = d.getDate();
                    el.my = d.getMonth() + "-" + d.getFullYear();
                    el.times = 800;
                    return el;
                });
                arr[1] = arr[1].map((el) => {
                    const d = new Date(el.updatedAt);
                    el.day = d.getDate();
                    el.my = d.getMonth() + "-" + d.getFullYear();
                    el.times = 800;
                    return el;
                });
                state.extraData = arr;
            })
        },
        // getArr(state, arr) {
        //     state.extraData = arr;
        // }
    },
    actions: { //处理异步，须用这种方式
        // extraData(context) {
        //     return new Promise((resovle, reject) => {
        //         Axios.get('http://localhost:1338/users/getMsgObj').then(rs => {
        //             const arr = rs.data;
        //             console.log(arr);
        //             context.commit('getArr', arr);
        //             resovle('数据请求已完成');
        //             // reject('请求数据失败')
        //         })
        //     })
        // }
    },
    modules: {}
})