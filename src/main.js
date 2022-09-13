import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$setJSON = function (key, json) {
    localStorage.setItem(key, JSON.stringify(json))
}
Vue.prototype.$baseUrl = process.env.NODE_ENV === 'development' ? '/webApi' : '/mobileApi'
Vue.prototype.$getJSON = function (key) {
    return JSON.parse(localStorage.getItem(key))
}
Vue.prototype.$formatTime = function (v) {
    let date = new Date(v);
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    let D = date.getDate() + ' ';
    let h = date.getHours() + ':';
    let m = date.getMinutes() + ':';
    let s = date.getSeconds();
    return Y + M + D + h + m + s
}
new Vue({
    router,
    render: function (h) {
        return h(App)
    }
}).$mount('#app')
